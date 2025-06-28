from django.contrib import admin
from .models import TipoUsuario, Usuario

# Register your models here.

admin.site.register(TipoUsuario) ### <- Registro de modelo TipoUsuario
admin.site.register(Usuario) ### <- Registro de modelo Usuario