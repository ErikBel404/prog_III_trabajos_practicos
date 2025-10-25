from django.shortcuts import get_object_or_404, render, redirect
from .forms import EstudianteForm
from .models import Curso, Estudiante


def crear_estudiante(request):
    mensaje = ""
    if request.method == 'POST':
        form = EstudianteForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            mensaje = "Estudiante registrado correctamente."
            form = EstudianteForm()  
    else:
        form = EstudianteForm()

    return render(request, 'estudiante/crear_estudiante.html', {
        'form': form,
        'mensaje': mensaje
    })

def lista_estudiantes(request):
    
    #obtengo todos los estudiantes
    estudiantes = Estudiante.objects.all().prefetch_related('cursos')
    
    # Preparo el contexto para el template
    context = {
        'estudiantes': estudiantes
    }
    
    return render(request, 'estudiante/lista_estudiantes.html', context)

def detalle_curso(request, pk):
    
    curso = get_object_or_404(
        Curso.objects.prefetch_related('estudiantes'), 
        pk=pk
    )
    context = {
        'curso': curso
    }
    
    return render(request, 'estudiante/detalle_curso.html', context)


