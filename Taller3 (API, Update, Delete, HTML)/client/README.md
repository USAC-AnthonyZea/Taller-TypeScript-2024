# Crear cliente con TypeScript y HTML

## Paso 1: Crear archivo basico .html

Creamos un archivo llamado index.html y colocamos el siguiente codigo:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PAGINA WEB</title>
  </head>
  <body>
    <!-- Importamos el archivo TypeScript -->
    <script src="src/script.js"></script>
  </body>
</html>
```

## Paso 2: Inicializar un proyecto nuevo de node

```sh
npm init -y
```

Este comando nos genera el archivo package.json

## Paso 3: Instalar TypeScript, de manera local:

```sh
npm install typescript --save-dev
```

Con este comando nos aseguramos de tener el compilador de typescript dentro de nuestro entorno de trabajo, en este caso la carpeta client

## Paso 4: Crear script de ejecucion para html

Generamos una carpeta llamada src, y dentro de este creamos un archivo basico script.ts

## Paso 5: Generar archivo.js

Cada vez que hagamos cambios en nuestro archivo script.ts, debemos ejecutar el siguiente comando:

```sh
npx tsc script.ts
```

Esto me genera un archivo con el mismo contenido que mi script.ts, pero en un archivo JavaScript, ya que html esta asociado unicamente con typescript.

`Nota: ` Tengan en cuenta que existen varias maneras de ejecutar un script de typescript en html, pero esta es una de las mas sencillas
