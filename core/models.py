from django.db import models

# Create your models here.
class Usuario(models.Model):
    nombre = models.CharField(max_length=100)
    usuario = models.CharField(max_length=50)
    correo = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=100)
    fecha_nac = models.CharField(max_length=15)
    direccion = models.CharField(max_length=100)

    
    ROL_CHOICES = [
        (1, 'Administrador'),
        (2, 'Editor'),
        (3, 'Invitado'),
    ]

    rol = models.IntegerField(choices=ROL_CHOICES, default=3)


     # Agregar campo last_login
    last_login = models.DateTimeField(null=True, blank=True)

     # Agregar campo is_active
    is_active = models.BooleanField(default=True)

