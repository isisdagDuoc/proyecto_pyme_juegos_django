from django.urls import path


from .views import obtener_categoria
from .views import obtener_noticias
from .views import wiki


urlpatterns = [
    #DATOS API
    path('categoria/', obtener_categoria, name='obtener_categoria'),
    path('noticias/', obtener_noticias, name='obtener_noticias'),
]