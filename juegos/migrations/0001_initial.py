# Generated by Django 5.2 on 2025-05-11 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Juego',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=150)),
                ('genero', models.CharField(max_length=60)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=8)),
                ('publicado', models.DateField()),
            ],
        ),
    ]
