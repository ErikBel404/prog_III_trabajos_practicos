from django import forms
from apps.estudiante.models import Estudiante

class EstudianteForm(forms.ModelForm):
    class Meta:
        model = Estudiante
        fields = [
            'nombreEstudiante',
            'apellidoEstudiante',
            'edadEstudiante',
            'notaCursoEstudiante',
            'cursoEstudiante',
            'cursos',
        ]
        widgets = {
            'cursos': forms.CheckboxSelectMultiple(),  # para seleccionar varios cursos
        }
