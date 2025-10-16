from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Usuario (AbstractUser):
    dni= models.CharField (max_length= 15,unique=True)
    domicilio= models.CharField (max_length=15)

    def __str__ (self):
        return f'{self.username}'
     