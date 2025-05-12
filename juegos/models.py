from django.db import models

# Create your models here.
class Juego(models.Model):
    titulo = models.CharField(max_length=150)
    genero = models.CharField(max_length=60)
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    publicado = models.DateField()
    # …

    def __str__(self):
        return self.titulo