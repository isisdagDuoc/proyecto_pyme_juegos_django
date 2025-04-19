from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

# Create your views here.
def index(request):
     return render(request, 'index.html')

def accion(request):
     return render(request, 'accion.html')

def aventura(request):
     return render(request, 'aventura.html')

def compra(request):
     return render(request, 'compra.html')

def deportes(request):
     return render(request, 'deportes.html')

def estrategia(request):
     return render(request, 'estrategia.html')

def formulario(request):
     return render(request, 'formulario.html')

def inicio_sesion(request):
     return render(request, 'inicio_sesion.html')

def modificacion_perfil(request):
     return render(request, 'modificacion_perfil.html')

def recuperar_contraseña(request):
     return render(request, 'recuperar_contraseña.html')

def rol(request):
     return render(request, 'rol.html')

def simulacion(request):
     return render(request, 'simulacion.html')