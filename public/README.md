# Collage de Imágenes Dinámico

Esta aplicación permite a los usuarios subir imágenes a un collage dinámico y eliminar imágenes con un doble clic. El collage se presenta en una cuadrícula de 3x3, y las imágenes se pueden posicionar en ubicaciones específicas definidas por el usuario.

## Características

- Subida de imágenes con un límite de tamaño de 5MB.
- Posicionamiento dinámico de las imágenes en una cuadrícula de 3x3.
- Eliminación de imágenes mediante doble clic.
- Almacenamiento de imágenes en una carpeta pública del servidor.
- Mensajes informativos para facilitar la interacción del usuario.

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/collage-dinamico.git


2. Navega al directorio del proyecto:

   cd collage-dinamico

3. Instala las dependencias necesarias:

    npm install

Uso
1. Inicia el servidor:

    node app.js

2. Abre tu navegador web y navega a http://localhost:3000.

Estructura del Proyecto

collage-dinamico/
├── public/
│   ├── uploads/
│   └── index.html
├── app.js
└── README.md

public/: Contiene archivos estáticos accesibles públicamente, incluyendo el archivo HTML y las imágenes subidas.
public/uploads/: Carpeta donde se almacenan las imágenes subidas.
public/index.html: Archivo HTML principal que contiene la interfaz de usuario.
app.js: Archivo principal del servidor que maneja las rutas y la lógica de la aplicación.

Rutas de la API
POST /imagen
Sube una nueva imagen al servidor.

Parámetros
target_file: Archivo de imagen a subir.
posicion: Posición en la cuadrícula donde se debe mostrar la imagen.
Respuesta
200 OK: Imagen subida correctamente.
400 Bad Request: No se subieron archivos.
500 Internal Server Error: Error al guardar el archivo.
GET /uploads
Devuelve la lista de imágenes almacenadas en la carpeta uploads.

Respuesta
200 OK: Lista de nombres de archivos de imágenes.
DELETE /deleteImg/
Elimina una imagen específica de la carpeta uploads.

Parámetros
filename: Nombre del archivo de imagen a eliminar.
Respuesta
200 OK: Imagen eliminada correctamente.
500 Internal Server Error: Error al eliminar la imagen.
Ejemplo de Interfaz de Usuario
Subida de Imagen

Collage de Imágenes


Este `README.md` proporciona una guía completa sobre cómo usar y contribuir a tu proyecto, asegurando que los usuarios y colaboradores potenciales tengan toda la información necesaria.




