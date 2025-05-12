# rest_api/views.py

import requests
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets
from juegos.models import Juego
from juegos.serializers import JuegoSerializer

class JuegoViewSet(viewsets.ModelViewSet):
    queryset = Juego.objects.all()
    serializer_class = JuegoSerializer


@api_view(["GET"])
def obtener_categoria(request):
    try:
        data = requests.get(
            "https://www.freetogame.com/api/games",
            timeout=5
        ).json()
        return Response(data, status=200)
    except requests.Timeout:
        return Response({"detail": "Timeout"}, status=504)
    
@api_view(["GET"])
def obtener_noticias(request):
    try:
        data = requests.get(
            "https://newsapi.org/v2/everything?q=videojuegos&language=es&apiKey=bf7610163c13409f960047b0d624d77d",
            timeout=5
        ).json()
        return Response(data, status=200)
    except requests.Timeout:
        return Response({"detail": "Timeout"}, status=504)

def wiki(request):
    return render(request, 'wiki.html')
