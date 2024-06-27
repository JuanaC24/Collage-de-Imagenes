const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware para manejar la subida de archivos
app.use(fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // Límite de 5MB por archivo
    abortOnLimit: true,
    responseOnLimit: 'El tamaño del archivo excede el límite permitido.'
}));

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para manejar la subida de archivos
app.post('/imagen', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No se subieron archivos.');
    }

    let targetFile = req.files.target_file;
    let position = req.body.posicion; // Obtenemos la posición del cuerpo del request

    // Asegurar nombres únicos para los archivos incluyendo posición y timestamp
    const filename = `pos${position}-${Date.now()}-${targetFile.name}`;

    // Mover el archivo a la carpeta pública 'uploads'
    targetFile.mv(path.join(__dirname, 'public', 'uploads', filename), function(err) {
        if (err) {
            console.error('Error saving file:', err);
            return res.status(500).send(`Error al guardar el archivo: ${err.message}`);
        }
        console.log(`Archivo ${filename} subido correctamente.`);
        res.json({ success: true, message: 'Imagen subida correctamente', path: `/uploads/${filename}` });
    });
});

// Ruta para manejar la obtención de imágenes
app.get('/uploads', (req, res) => {
    const uploadDir = path.join(__dirname, 'public', 'uploads');
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error('Error al leer el directorio:', err);
            return res.status(500).send('Error al leer el directorio de uploads.');
        }
        res.json(files);  // Devolver la lista de archivos
    });
});

// Ruta para manejar la eliminación de archivos
app.delete('/deleteImg/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'public', 'uploads', filename);
  
    fs.unlink(filePath, err => {
      if (err) {
        console.error('Error deleting file:', err);
        return res.status(500).json({ success: false, message: 'Error al eliminar la imagen' });
      }
      res.json({ success: true, message: 'Imagen eliminada correctamente' });
    });
});
  
// Inicializar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
