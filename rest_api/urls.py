from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import obtener_categoria, obtener_noticias, JuegoViewSet

router = DefaultRouter()
router.register(r"juegos", JuegoViewSet, basename="juego")

urlpatterns = [
    path("categoria/", obtener_categoria),
    path("noticias/", obtener_noticias),
    path("", include(router.urls)),
]
