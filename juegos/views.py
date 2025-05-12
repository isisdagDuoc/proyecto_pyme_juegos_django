from django.http import HttpResponse
from django.shortcuts import redirect, render

# Create your views here.
from django.shortcuts import render

from core.models import Usuario


# Create your views here.
def index(request):
     usuario = request.session.get('usuario_usuario', None)
     return render(request, 'index.html', {'usuario_usuario': usuario})

def accion(request):
     return render(request, 'accion.html')

def aventura(request):
     return render(request, 'aventura.html')
 
def compra(request):
     return render(request, 'compra.html')

def acepta(request):
     return render(request, 'acepta.html')

def deportes(request):
     return render(request, 'deportes.html')

def estrategia(request):
     return render(request, 'estrategia.html')

def formulario(request):
     return render(request, 'formulario.html')

def inicio_sesion(request):
     return render(request, 'inicio_sesion.html')

def modificacion_perfil(request):
    if 'usuario_id' not in request.session:
        return redirect('inicio_sesion')

    context = {
        'nombre': request.session.get('usuario_nombre', ''),
        'usuario': request.session.get('usuario_usuario', ''),
        'correo': request.session.get('usuario_correo', ''),
        'direccion': request.session.get('usuario_direccion', ''),
        'fecha_nac': request.session.get('usuario_fnacimiento', ''),
        'rol': request.session.get('usuario_rol', ''),
    }
    
    return render(request, 'modificacion_perfil.html', context)

def recuperar_contraseña(request):
     return render(request, 'recuperar_contraseña.html')

def rol(request):
     return render(request, 'rol.html')

def simulacion(request):
     return render(request, 'simulacion.html')

def cerrar_sesion(request):
     request.session.flush()
     return redirect('/#')

def admin_usuarios(request):
       usuario = request.session.get('usuario_usuario', None)
       usuarios = Usuario.objects.all()
       return render(request, 'admin_usuarios.html',{'usuarios': usuarios, 'usuario_usuario': usuario})

def wiki(request):
     return render(request, 'wiki.html')