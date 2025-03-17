
# Sistema de Elección de Especialidad - CECyT 12

Sistema para la selección de especialidad de los alumnos de segundo semestre del CECyT 12 "José María Morelos y Pavón" del Instituto Politécnico Nacional.

## Descripción

Este proyecto proporciona una interfaz para que los estudiantes del CECyT 12 puedan:

- Ver información sobre las especialidades disponibles
- Registrarse para la selección de especialidad
- Consultar su estatus de registro

También incluye un panel de administración para que el personal docente pueda gestionar los registros.

## Cómo descargar y compartir este proyecto

### Requisitos previos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)
- [Git](https://git-scm.com/) (opcional, para clonar el repositorio)

### Descarga e instalación

**Opción 1: Descargar como ZIP**

1. Haz clic en el botón "Code" en la parte superior del repositorio
2. Selecciona "Download ZIP"
3. Extrae el archivo ZIP en tu computadora

**Opción 2: Clonar con Git**

```bash
git clone <URL-del-repositorio>
cd <nombre-del-proyecto>
```

### Instalación de dependencias

Una vez descargado o clonado el proyecto, abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
```

### Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en http://localhost:8080

### Compilar para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist` y pueden ser subidos a cualquier servicio de hosting estático.

### Compartir con tus compañeros

**Como archivos:**
1. Ejecuta `npm run build`
2. Comprime la carpeta `dist` y envíala

**Como repositorio:**
1. Crea tu propio repositorio en GitHub, GitLab, etc.
2. Sube tu código al repositorio
3. Comparte el enlace con tus compañeros

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- React Query

## Colores del IPN

- Guinda IPN: #730019
- Negro: #000000
