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
    
def obtener_noticias(request):
    try:

        response = requests.get('https://newsapi.org/v2/everything?q=videojuegos&language=es&apiKey=bf7610163c13409f960047b0d624d77d', timeout=5)
        response.raise_for_status()
        data = response.json()

        return JsonResponse(data, safe=False, status=200)
    except requests.exceptions.Timeout:
        return JsonResponse(
            {'error': 'Tiempo de espera agotado al llamar al servicio externo.'},
            status=504
        )
    except requests.exceptions.HTTPError as e:
        return JsonResponse(
            {'error': f'Error HTTP {e.response.status_code} al llamar al servicio externo.'},
            status=e.response.status_code
        )
    except requests.exceptions.RequestException as e:
        return JsonResponse(
            {'error': f'No se pudo obtener la información: {str(e)}'},
            status=502
        )

def wiki(request):
    return render(request, 'wiki.html')
