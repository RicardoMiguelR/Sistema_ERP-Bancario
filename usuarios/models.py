from django.db import models

# Create your models here.

### Modelo para tipo de usuario -----> ***
class TipoUsuario(models.Model):
    nombre = models.CharField(max_length=100)
    
    def  __str__(self):
        return self.nombre
    
### Modelo para guardar datos del tipo de usuario -----> ***
class Usuario(models.Model):
    tipo_usuario = models.ForeignKey(TipoUsuario, on_delete=models.PROTECT) # Llave foranea relacionada a TipoUsuario, protegida con PROTECT
    nombre = models.CharField(max_length=200, blank=True, null=True)
    fecha_nacimiento = models.DateField(blank=True, null=True)
    razon_social = models.CharField(max_length=200, blank=True, null=True)
    rfc = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return f"TIPO: {self.tipo_usuario} > {self.nombre or self.razon_social}"
    
### Modelo para País -----> ***
class Pais(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre
    
### Modelo para Estado -----> ***
class Estado(models.Model):
    nombre = models.CharField(max_length=100)
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.nombre} > País: ({self.pais.nombre})"

### Modelo para Municipio -----> ***
class Municipio(models.Model):
    nombre = models.CharField(max_length=100)
    estado = models.ForeignKey(Estado, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} > Estado: {self.estado.nombre}"