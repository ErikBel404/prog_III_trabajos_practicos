from django.urls import path
from apps.estudiante.views import crear_estudiante


urlpatterns = [
    path('Agregar', crear_estudiante, name='crear_estudiante'),
]
