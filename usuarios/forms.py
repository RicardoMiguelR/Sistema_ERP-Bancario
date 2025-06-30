from django import forms
from .models import TipoUsuario, Usuario

# Creamos un formulario con forms

class UsuarioForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = ['tipo_usuario', 'nombre', 'fecha_nacimiento', 'razon_social', 'rfc']