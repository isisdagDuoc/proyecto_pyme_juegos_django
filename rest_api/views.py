# rest_api/views.py

import requests
from django.http import JsonResponse
from django.shortcuts import render

def obtener_categoria(request):
    try:

        response = requests.get('https://www.freetogame.com/api/games', timeout=5)
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
