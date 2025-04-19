from django.urls import path

from .views import index
from .views import accion
from .views import aventura
from .views import compra
from .views import deportes
from .views import estrategia
from .views import formulario
from .views import inicio_sesion
from .views import modificacion_perfil
from .views import recuperar_contraseña
from .views import rol
from .views import simulacion


urlpatterns = [
    path('', index, name='index'),
    path('accion/', accion, name='accion'),
    path('aventura/', aventura, name='aventura'),
    path('compra/', compra, name='compra'),
    path('deportes/', deportes, name='deportes'),
    path('estrategia/', estrategia, name='estrategia'),
    path('formulario/', formulario, name='formulario'),
    path('inicio-sesion/', inicio_sesion, name='inicio_sesion'),
    path('modificacion-perfil/', modificacion_perfil, name='modificacion_perfil'),
    path('formulario/', formulario, name='formulario'),
    path('recuperar-contraseña/', recuperar_contraseña, name='recuperar_contraseña'),
    path('rol/', rol, name='rol'),
    path('simulacion/', simulacion, name='simulacion'),
]