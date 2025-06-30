from django.contrib import admin
from .models import TipoUsuario, Usuario, Pais, Estado, Municipio

# Register your models here.

admin.site.register(TipoUsuario) ### <- Registro de modelo TipoUsuario
admin.site.register(Usuario) ### <- Registro de modelo Usuario
admin.site.register(Pais) ### <- Registro de modelo Pais
admin.site.register(Estado) ### <- Registro de modelo Estado
admin.site.register(Municipio) ### <- Registro de modelo Municipio