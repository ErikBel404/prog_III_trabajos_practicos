from django.shortcuts import render, redirect
from .forms import EstudianteForm
import tkinter as tk
from tkinter import messagebox

def crear_estudiante(request):
    mensaje = ""
    if request.method == 'POST':
        form = EstudianteForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            mensaje = "Estudiante registrado correctamente."
            form = EstudianteForm()  # Limpiar el formulario después de guardar
    else:
        form = EstudianteForm()

    return render(request, 'estudiante/crear_estudiante.html', {
        'form': form,
        'mensaje': mensaje
    })

