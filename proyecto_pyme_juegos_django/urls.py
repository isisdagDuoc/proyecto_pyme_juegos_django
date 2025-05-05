
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('juegos.urls')),
    path('core/', include('core.urls')), 
    path('api/', include('rest_api.urls')), 
]
