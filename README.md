### Backend Store

_Backend de una tienda sencilla, podras crearte una cuenta, loguearte, comprar productos._  <br>
_Listar productos, ver cuales son las ofertas_ <br>
_En la Api utilizamos JWT, para cuando un usuario se loguea se le manda un token y cuando quiera comprar algo comprobamos_ <br>
_que venga ese token de lo contrario se negara la accion_ <br>


### Como esta creado el Programa 🔧
Para la creacion de esta Api, se utilizo como lenguaje principal JavaScript, el codigo <br>
es ejecutado en Node. <br>
Creamos un microServicio que es la Base De Datos, nos comunicamos con ella y a la vez ella con el Motor de Base de Datos MySQL. <br>

 * <strong> Dependecias</strong> <br>
   * "axios": para hacer peticiones al microservicio DB <br>
   *  "bcrypt": para encriptar y desencriptar las contraseñas <br>
   * "express":  Framework principal  <br>
   * "jsonwebtoken": Para la utilizacion de tokens <br>
    * "mysql": para hacer una coneccion con la Base de Datos Remota <br>

### Pre-requisitos 📋

* Tener instalado Node <br>
* Haberse creado una cuenta  y una base de datos en https://remotemysql.com/ (esto es modo de prueba) <br>
    _si ya cuentas con el motor de bases de Datos puedes conectarte directament con el y crear una DB_ 
    

## Guia 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

* Clonar el proyecto ``` git clone https://github.com/soyglorialopez/Backend-Store.git ```
* Instalar las dependecias ``` npm init ```
* Completar los datos del objeto mysql que esta ubicado en el archivo config.js



## Despliegue 📦

Utilizaremos pm2 para correr el proyecto porque son varios procesos a la vez <br>

```
pm2 start api/index.js --name api
```
```
pm2 start DB/index.js --name DB
```
