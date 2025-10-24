from django.urls import path
from apps.estudiante.views import crear_estudiante, lista_estudiantes, detalle_curso


urlpatterns = [
    path('Agregar', crear_estudiante, name='crear_estudiante'),
    path('Lista', lista_estudiantes, name='lista_estudiante'),
    path('curso/<int:pk>/', detalle_curso, name='detalle_curso'),
]
