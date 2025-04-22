from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
from .models import Usuario
import json

@csrf_exempt
def registrar_usuario(request):
    if request.method == "POST":
        data = json.loads(request.body)

        # Validación de campos obligatorios
        campos_obligatorios = ['nombre', 'usuario', 'correo', 'contraseña', 'repcontraseña', 'fecha_nac', 'direccion', 'rol']
        for campo in campos_obligatorios:
            if campo not in data or not data[campo].strip():
                return JsonResponse({'success': False, 'error': f'Campo {campo} es obligatorio.'}, status=400)
            
              # Validación: correo ya registrado
        if Usuario.objects.filter(correo=data['correo']).exists():
            return JsonResponse({'success': False, 'error': 'El correo ya está registrado.'}, status=409)
        
        # Validación: User ya existe
        if Usuario.objects.filter(usuario=data['usuario']).exists():
            return JsonResponse({'success': False, 'error': 'El nombre de usuario ya se encuentra en uso'}, status=409)
        
        #Usuario
        try:
            usuario = Usuario.objects.create(
                nombre=data['nombre'],
                usuario=data['usuario'],
                correo=data['correo'],
                contraseña=make_password(data['contraseña']),
                fecha_nac=data['fecha_nac'],
                direccion=data['direccion'],
                rol=int(data['rol'])
            )

            nueva_clave = data.get('contraseña', '').strip()
            if nueva_clave:
                usuario.contraseña = make_password(nueva_clave)

            return JsonResponse({'success': True, 'mensaje': 'Usuario registrado correctamente en Oracle.'})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)}, status=500)

    return JsonResponse({'success': False, 'error': 'Método no permitido.'}, status=405)

@csrf_exempt
def iniciar_sesion(request):
    if request.method == "POST":
        data = json.loads(request.body)

        correo = data.get('correo', '').strip()
        contraseña = data.get('contraseña', '').strip()

        if not correo or not contraseña:
            return JsonResponse({'success': False, 'error': 'Correo y contraseña son obligatorios.'}, status=400)

        try:
            usuario = Usuario.objects.get(correo=correo)
            if check_password(contraseña, usuario.contraseña):
                # Guardar el usuario en la sesión
                request.session['usuario_id'] = usuario.id
                request.session['usuario_usuario'] = usuario.usuario

                # Guardar más campos relevantes en la sesión
                request.session['usuario_nombre'] = usuario.nombre
                request.session['usuario_correo'] = usuario.correo
                request.session['usuario_fnacimiento'] = usuario.fecha_nac
                request.session['usuario_direccion'] = usuario.direccion
                request.session['usuario_rol'] = usuario.rol

                return JsonResponse({'success': True, 'mensaje': 'Inicio de sesión exitoso.'})
            else:
                return JsonResponse({'success': False, 'error': 'Contraseña incorrecta.'}, status=401)
        except Usuario.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'El correo no está registrado.'}, status=404)

    return JsonResponse({'success': False, 'error': 'Método no permitido.'}, status=405)

@csrf_exempt
def modificar_perfil(request):
    if request.method == "POST":
        data = json.loads(request.body)
        usuario_id = request.session.get('usuario_id')

        if not usuario_id:
            return JsonResponse({'success': False, 'error': 'Usuario no autenticado'}, status=401)

        try:
            usuario = Usuario.objects.get(id=usuario_id)
            usuario.nombre = data.get('nombre', usuario.nombre)
            usuario.usuario = data.get('usuario', usuario.usuario)
            usuario.correo = data.get('correo', usuario.correo)
            usuario.fecha_nac = data.get('fecha_nac', usuario.fecha_nac)
            usuario.direccion = data.get('direccion', usuario.direccion)
            usuario.rol = data.get('rol', usuario.direccion)

            usuario.save()

            return JsonResponse({'success': True, 'mensaje': 'Perfil actualizado correctamente'})
        except Usuario.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Usuario no encontrado'}, status=404)

    return JsonResponse({'success': False, 'error': 'Método no permitido'}, status=405)



@csrf_exempt
def eliminar_usuario(request):
    if request.method == "POST":
        data = json.loads(request.body)
        user_id = data.get("id")
        try:
            usuario = Usuario.objects.get(id=user_id)
            usuario.delete()
            return JsonResponse({"mensaje": "Usuario eliminado correctamente"})
        except Usuario.DoesNotExist:
            return JsonResponse({"error": "Usuario no encontrado"}, status=404)