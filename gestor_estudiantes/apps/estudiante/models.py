from django.db import models


class Curso (models.Model):
    nombreCurso= models.TextField (max_length=250, unique= True)
    cantidadHorasCurso= models.IntegerField ( unique= True)

    def __str__(self):
        return f'nombre:{self.nombreCurso}, cantidad de horas:{self.cantidadHorasCurso}';


class Estudiante (models.Model):
    nombreEstudiante= models.TextField (max_length=250, unique= True)
    apellidoEstudiante= models.TextField (max_length=250, unique= True)
    edadEstudiante= models.IntegerField (unique= True)
    notaCursoEstudiante= models.IntegerField (null=True )
    cursoEstudiante= models.TextField (max_length=250, blank= True)
    cursos= models.ManyToManyField(Curso, related_name='estudiantes')

    def __str__(self):
        return f'nombre:{self.nombreEstudiante}, apellido:{self.apellidoEstudiante}, edad: {self.edadEstudiante}, nota: {self.notaCursoEstudiante}, curso: {self.cursoEstudiante}';










