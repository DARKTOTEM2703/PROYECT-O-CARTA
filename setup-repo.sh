#!/bin/bash

# Navegar al directorio del proyecto
cd "/f:/PAGINA WEB/PROYECTOS WEB/PROYECT O CARTA"

# Inicializar un nuevo repositorio de Git
git init

# Agregar todos los archivos al repositorio
git add .

# Hacer el primer commit
git commit -m "Initial commit"

# Configurar la rama principal como 'main'
git branch -M main

# Agregar el origen remoto (reemplaza 'URL_DEL_REPOSITORIO' con la URL de tu repositorio remoto)
git remote add origin URL_DEL_REPOSITORIO

# Empujar los cambios al repositorio remoto
git push -u origin main
