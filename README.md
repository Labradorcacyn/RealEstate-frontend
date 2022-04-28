![image](https://cdn.discordapp.com/attachments/787363155494830091/907941779733618708/unknown.png)

# Readme de REALESTATE
### (FrontEnd) 


> Esta api Rest con Spring tiene la intención de modelar el funcionamiento de una inmobiliaria con diferentes entidades y
> asociaciones entre ellas. Partiendo de 'Vivienda' como base e interrelacionandolo con 'Inmobiliarias',
> que tienen la posibilidad de estar asociadas a una vivienda, 'propietarios' que son los que tienen estas 'Viviendas'
> e 'Interesados' que son aquellas personas que pueden interesarse por una 'Vivienda'. La aplicación está creada en Angular.


![image](https://cdn.discordapp.com/attachments/787363155494830091/907941667447930890/unknown.png)

## Instalacion

Tendremos que descargar el repositorio del usuario de gitHub miguelcamposedu.Una vez que tenemos el repositorio
en nuestro ordenador, tendremos que ejecutar la consola y entrar en la carpeta de su interior llamade de la misma
manera.
```sh
cd desktop/g6-realstate-frontend/g6-realstate-frontend
```
Allí hay que instalar primero los paquetes necesarios y tendremos que poner:
```sh
npm i
```
Una vez que termine de instalar los paquetes habrá que ejecutar el comando de:
```sh
ng serve -o
```
Esto arrancará en nuestro navegador por defecto el servidor, que está alojado en la ruta 4200 por defecto.

IMPORTANTE: -- El servidor del backend tiene que estár corriendo --

## Imports

Las dependencias que usaremos para este proyecto serán

- [AppRoutingModule] - Se encarga de las urls de las aplicación y de su tratamiento
- [BrowserAnimationsModule] - Se encarga de las transiciones y de la animación
- [HttpClientModule] - Se encarga de las peticiones
- [ReactiveFormsModule] - Se encarga de crear formularios reactivos
- [FormsModule] - Es el módulo de formularios
- [AngularMaterial] - Tiene todos los componentes creados con sus estilos propios

## Servicios

| Servicio | Descripcción |
| ------ | ------ |
| Inmobiliaria | En este controllador meteremos todos los endPoints que tengan que ver con inmobiliarias |
| Interesa | En este controllador meteremos todos los endPoints que tengan que ver con Interesa |
| Propietario | En este controllador meteremos todos los endPoints que tengan que ver con inmobiliarias |
| Vivienda |En este controllador meteremos todos los endPoints que tengan que ver con inmobiliarias |


#### Componentes
```sh
detalle-inmobiliaria  //  Implementa los detalles de una inmobiliaria
detalle-propietario //  Implementa los detalles de un propietario
detalle-vivienda //  Implementa los detalles de una vivienda
editar-vivienda  //  Implementa el formulario de editar vivienda
item-inmobiliaria  //  Elemento de las listas de inmobiliaria
item-propietario  //  Elemento de las listas de propietario
item-vivienda-lista  //  Elemento de las listas de vivienda
list-inmobiliarias  //  Lista las inmobiliarias
list-proppietario  //  Lista los propietarios
list-vivienda  //  Lista las viviendas
nueva-inmobiliaria  //  Crea una nueva inmobiliaria
vivienda-filtro-lista  //  Lista y filtra las viviendas
viviendas-top  //  Coge las 10 viviendas más interesadas
dialog  //  Permite hacer las asociaciones con los interesados
```

#### InmobiliariaService
```sh
getInmobiliarias (n:number)
getInmobiliariasDetalladas(id:number)
getInmobiliariaShort ()
postInmobiliaria(i:inmobiliaria)
```

#### ViviendaController
```sh
getViviendasPaginadas(pagina:number)
getViviendaDetallada(id:number)
postVIviendaPropietario(viviendaPropietarioDto:ViviendaPropietarioDto)
getViviendasTop(numero: number)
postInteresado(dto: PostInteresaDto, id: number)
postInteresadoExistente(id1: number, id2:number)
deleteVivienda(id:number)
deleteAsocViviInmo(id:number)
postViviendaInmobiliaria(id1:number,id2:number)
putVivienda(vivienda: ViviendaDetalleResponse, id: number)
```

#### PropietarioController
```sh
getListaPropietariosBasica()
getPropietariosPaginados(n:number)
```

#### InteresadoController

```sh
getInteresados ()s

```

 Creado por: Alejandro Bajo, Manuel Fernandez, Cynthia Labrador y Pablo Repiso