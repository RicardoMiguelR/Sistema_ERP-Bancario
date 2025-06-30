from django.shortcuts import render, redirect
from .models import TipoUsuario, Pais, Estado, Municipio
from .forms import UsuarioForm
from django.http import JsonResponse

# Create views all project ->

### Formulario sencillo inicial, usuarios ->
def formulario_inicial(request):
    tipos_usuario = TipoUsuario.objects.all() ### <- Obtenemos el tipo de usuario desde la BD

    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('formulario-inicial') ### <- Redirigir despues de guardar
    else:
        form = UsuarioForm()

    return render(request, 'usuarios/formulario-inicial.html', {'tipos_usuario': tipos_usuario})

### Formulario complejo, paises, estados y municipios/ciudades ->
def formulario_complejo(request):
    paises = Pais.objects.all()

    return render(request, 'usuarios/formulario-complejo.html', {'paises': paises})

### Carga de datos a campos de estados ->
def cargar_estados(request):
    pais_id = request.GET.get('pais_id')
    estados = Estado.objects.filter(pais_id=pais_id).values('id', 'nombre')
    return JsonResponse(list(estados), safe=False)

### Carga de datos a campos de municipios ->
def cargar_municipios(request):
    estado_id = request.GET.get('estado_id')
    municipios = Municipio.objects.filter(estado_id=estado_id).values('id', 'nombre')
    return JsonResponse(list(municipios), safe=False)