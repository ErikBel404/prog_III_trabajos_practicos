from django.contrib import admin
from .models import Estudiante, Curso

# Register your models here.
@admin.register (Estudiante)
class EstudianteAdmin (admin.ModelAdmin):
    list_display = ['nombreEstudiante','apellidoEstudiante','edadEstudiante', 'notaCursoEstudiante', 'cursoEstudiante']
    
    search_fields = ('nombreEstudiante', )
    
    
@admin.register(Curso)
class CursoAdmin(admin.ModelAdmin):
    list_display = ['nombreCurso', 'cantidadHorasCurso']
    search_fields = ('nombreCurso',)