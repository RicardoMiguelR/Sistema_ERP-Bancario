from django.urls import path
from .views import formulario_inicial

urlpatterns = [
    path('formulario-inicial/', formulario_inicial, name='formulario-inicial')
]