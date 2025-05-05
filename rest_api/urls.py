from django.urls import path


from .views import obtener_categoria
from .views import wiki


urlpatterns = [
    #DATOS API
    path('categoria/', obtener_categoria, name='obtener_categoria'),
    #Llamar pagina
]