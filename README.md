# MiniSistema de Gestión de Inventario - Frontend Web

Este repositorio contiene la interfaz de usuario para el sistema de gestión de inventario de la empresa CCL. Permite a los usuarios autenticados visualizar el inventario actual y registrar el movimiento de los productos de manera intuitiva.

## Tecnologías Utilizadas

*   Framework: Angular v19 (Componentes Standalone)[cite: 1]
*   Lenguaje: TypeScript
*   Estilos: CSS puro (Diseño simple y responsive)
*   Seguridad: Interceptores HTTP para manejo de JWT

## Requisitos Previos

*   [Node.js](https://nodejs.org/) (Versión v20.18.1+ o v22.11.0+)
*   [Angular CLI v19](https://angular.dev/tools/cli) (Instalable globalmente con `npm install -g @angular/cli@19`)
*   La API del Backend de CCL ejecutándose localmente.

## Configuración y Ejecución

1. Clona este repositorio y abre una terminal en la carpeta raíz.

2. Instala las dependencias del proyecto:Asegúrate de que la URL de la API en los servicios de Angular (src/app/services/auth.service.ts y src/app/services/inventory.service.ts) apunte al puerto correcto donde se está ejecutando tu backend local en .NET.
Levanta el servidor de desarrollo:
npm install

3. Asegúrate de que la URL de la API en los servicios de Angular (src/app/services/auth.service.ts y src/app/services/inventory.service.ts) apunte al puerto correcto donde se está ejecutando tu backend local en .NET.

4. Levanta el servidor de desarrollo:
ng serve

Abre el navegador y accede a http://localhost:4200/.

Acceso al Sistema
La aplicación está protegida por un Login básico. Para ingresar y probar el flujo funcional, utiliza las siguientes credenciales:

Usuario: admin
Contraseña: admin123

Funcionalidades Principales
Login protegido: El sistema restringe el acceso mediante Guards que verifican el Bearer Token.

Consulta de Inventario: Lista en tiempo real de los productos y sus cantidades disponibles.

Registro de Movimientos: Formulario con validaciones para registrar entradas y salidas de forma segura.
