# Crear proyecto con Express y TypeScript

## Paso 1: Instalar Node y NPM.

Descargar e instalar Node (incluye NPM).

[Link a Node](https://nodejs.org/en/download)

## Paso 2: Crear un proyecto nuevo de Node

Abre tu terminal y crea un nuevo directorio para tu proyecto. Navega hasta el directorio del proyecto.

```sh
mkdir my-ts-express-app

cd my-ts-express-app
```

## Paso 3: Inicializar el proyecto nuevo de Node

Ejecuta el siguiente comando para inicializar un nuevo proyecto de Node.js. Esto creará un archivo `package.json`.

```sh
npm init -y
```

Al inicializar un archivo `package.json`, el archivo resultante podría parecerse al fragmento de código a continuación:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "MIT"
}
```

## Paso 4: Instalar TypeScript y dependencias

Instala TypeScript y otras dependencias.

```sh
npm install express
```

```sh
npm install -D @types/express typescript ts-node
```

- `typescript`: El compilador de TypeScript.
- `ts-node`: Permite ejecutar archivos TypeScript directamente con Node.js.
- `@types/express`: Proporciona definiciones de TypeScript para Express.

## Paso 5: Crear un archivo tsconfig.json

Crea un archivo `tsconfig.json` en la raíz del proyecto para configurar TypeScript.

Coloca este contenido:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Paso 6: Crear carpeta src

Crea una carpeta llamada "src" en el directorio del proyecto para almacenar tus archivos TypeScript.

## Paso 7:

Dentro de la carpeta `src`, crea un archivo index.ts con una configuración básica de Express:

```ts
// src/index.ts
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

## Paso 8: Actualizar el archivo package.json

Actualiza la sección de scripts en tu archivo `package.json` para incluir un script de inicio que utilice ts-node para ejecutar tu código TypeScript.

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "index.js",
  "scripts": {
    "start": "ts-node src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "Your Name",
  "license": "MIT"
},
```

## Paso 9: Instalar CORS

Una vez configurado nuestro servidor, debemos instalar el paquete cors, para poder permitir solicitudes de cualquier lado o puerto en nuestro canal http, para hacer esto debemos usar, estos comandos:

```sh
npm install cors
npm install --save-dev @types/cors
```

## Paso 10: Comando para ejecutar el proyecto

```sh
npm start
```
