# express-mongo

Define las variables de entorno

Instala las dependencias
`npm install`

Corre la aplicación
`npm run start`

## Documentación

### Endpoints
/messages
| Método | Descripción |
|---|---|
| `GET` | Retorna todos los mensajes |
| `POST` | Añade un mensaje nuevo |

### Datos para el POST
| Parámetro | Descripción |
|---|---|
| `message` | Mensaje a guardar `string` |

### Variables de entorno
La aplicación necesita de las siguiente variables de entorno para funcionar
| nombre | Descripción |
|---|---|
| `MONGO_URI` | Dirección para conectarse a MongoDB |
| `PORT` | Puerto donde corre la aplicación |


### Respuestas

| Status code | Descripción |
|---|---|
| `200` | Operación exitosa.|
| `201` | Mensaje creado.|
| `500` | Error |
