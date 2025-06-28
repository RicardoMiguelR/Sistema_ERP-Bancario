from django.shortcuts import render
from .models import TipoUsuario, Usuario

# Create your views here.

def formulario_inicial(request):
    tipos_usuario = TipoUsuario.objects.all() ### <- Obtenemos el tipo de usuario desde la BD
    return render(request, 'usuarios/formulario-inicial.html', {'tipos_usuario': tipos_usuario})