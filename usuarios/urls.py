from django.urls import path
from .views import formulario_inicial, formulario_complejo, cargar_estados, cargar_municipios

# urls de vistas

### url para mostrar vistas ->
urlpatterns = [
    path('formulario-inicial/', formulario_inicial, name='formulario-inicial'), # <- Formulario inicial
    path('formulario-complejo/', formulario_complejo, name='formulario-complejo'), # <- Formulario complejo
    path('ajax/cargar-estados/', cargar_estados, name='cargar-estados'), # <- Cargar datos de estados
    path('ajax/cargar-municipios/', cargar_municipios, name='cargar-municipios'), # <- Cargar datos de municipios
]