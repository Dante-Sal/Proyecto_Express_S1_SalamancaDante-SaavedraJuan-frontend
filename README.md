# Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend

<h3 align="center";>

**MOVIE WEBSITE KARENFLIX**

</h3>

<br>
<br>
<br>

<h3 align="center";>

**Juan David Saavedra Jaimez**

</h3>

<h3 align="center";>

**Simón Dante Salamanca Galvis**

</h3>

<br>x
<br>
<br>
<br>

<h3 align="center";>

**S1**

</h3>

<h3 align="center";>

**Pedro Felipe Gómez Bonilla**

</h3>

<br>
<br>
<br>
<br>

<h3 align="center";>

**CAMPUSLANDS**

</h3>

<h3 align="center";>

**RUTA NODE**

</h3>

<h3 align="center";>

**BUCARAMANGA, SANTANDER**

</h3>

<h3 align="center";>

**2025**

</h3>

---


## Descripción del Proyecto y Temática Elegida

**KarenFlix** es una aplicación web de streaming de contenido audiovisual  que permite a los usuarios navegar por un catálogo de películas y series, ver trailers, gestionar perfiles de usuario y reproducir contenido multimedia.

### Temática Elegida: Plataforma de Streaming
- **Interfaz moderna y atractiva** similar a Netflix con carruseles de contenido
- **Gestión de usuarios y perfiles** personalizados
- **Catálogo organizado** por géneros y categorías
- **Sistema de búsqueda** avanzado
- **Reproductor de video** integrado
- **Diseño responsive** para diferentes dispositivos

El proyecto simula una experiencia completa de streaming, desde la autenticación del usuario hasta la reproducción de contenido, implementando las mejores prácticas de desarrollo frontend moderno.

---

## Tecnologías Usadas

### Frontend Framework
- **JavaScript (ES6+)** - Lenguaje de programación principal
- **HTML** - Estructura y semántica
- **CSS** - Estilos y diseño responsive

### Herramientas de Desarrollo
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes

### APIs y Servicios Externos
- **The Movie Database (TMDB) API** - Para obtener información de películas y series
- **Backend propio** - API REST para gestión de usuarios y datos personalizados

---

## Pasos para Instalar y Ejecutar


### Instalación Paso a Paso

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Dante-Sal/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend.git

   cd Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend
   ```

2. **Acceder a la aplicación**
   
   Abrir el navegador y ir a donde se encuentra el **Index**


### Estructura de Archivos Principal

``` 
Proyecto_Express_S1_SalamancaDante-SaavedraJuan-frontend/
│
├──src/
│   ├──components/
│   │   ├──ui/
│   │   │   ├── header.jsx
│   │   │   ├── movie-actions.js
│   │   │   ├── movie.js
│   │   │   ├── movie.jsx
│   │   │   ├── search.js
│   │   │   ├── search.jsx
│   │   │   ├── user.jsx
│   │   │   └── video.jsx
│   │   │
│   │   └──img/
│   │       ├── cinema.png
│   │       ├── cine.png
│   │       ├── documentary.png
│   │       ├── drama.png
│   │       ├── family.png
│   │       ├── fantasy.png
│   │       ├── history.png
│   │       ├── home.png
│   │       ├── horror.png
│   │       ├── humoriste_icon.png
│   │       ├── karenflix_background.png
│   │       ├── love.png
│   │       ├── music.png
│   │       ├── romance.png
│   │       ├── terror.png
│   │       ├── the.png
│   │       ├── user.png
│   │       ├── user-avatar.png
│   │       └── war.png
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── Project_Cultural_Strategy.pdf
├── README.md
└── vite.config.js
```

---

## Funcionamiento del Programa

1. **Iniciar Sistema (index.html)**
Es el componente raíz del sistema, donde se configura toda la estructura de enrutamiento y el contexto global de la aplicación. Controla el estado de autenticación, maneja las rutas protegidas y establece el tema visual de la plataforma. Utiliza React Router para la navegación y Context API para compartir el estado entre componentes. El diseño es moderno y responsive, centrado en la experiencia de streaming con estilos personalizados para resaltar la marca KarenFlix.


2. **Sistema de Componentes UI (src/components/ui/)**
Tras la inicialización de la aplicación, estos componentes forman la interfaz principal donde los usuarios interactúan con el contenido multimedia. Incluye componentes especializados como el header de navegación, sistema de búsqueda, tarjetas de películas, reproductor de video y gestión de usuarios. Es la capa más completa del sistema que permite la visualización y manipulación del catálogo de contenido.

3. Gestión de Recursos Multimedia (src/components/img/)
Esta es la sección más visual del sistema. Permite mostrar un conjunto completo de iconografía y recursos gráficos asociados a diferentes géneros cinematográficos y elementos de la interfaz. Se estructura con imágenes categorizadas como:

Iconos de géneros (cinema, drama, fantasy, horror, romance, terror)
Elementos de interfaz (home, user, user-avatar)
Recursos temáticos (karenflix_background, music, war)
Categorías especiales (documentary, family, history)

## BackEnd

Aqui se encuentra todo el Codigo detras del funcionamiento para el Frontend junto a su respectiva Documentacion
[BackEnd](https://github.com/Dante-Sal/Proyecto_Express_S1_SalamancaDante-SaavedraJuan-backend)

## Video_Exposicion

[https://drive.google.com/drive/folders/1z8iBOCJA8YhqfB24m8hFtC1IQ2rJhpwY?usp=sharing](https://drive.google.com/drive/folders/1z8iBOCJA8YhqfB24m8hFtC1IQ2rJhpwY?usp=sharing)

# Desarrollado Por

Juan David Saavedra Jaimez - [Linkedin](https://www.linkedin.com/in/juan-david-saavedra-jaimez-636239374/) - [Github](https://github.com/wilskirby)

Simón Dante Salamanca Galvis - [Linkedin](https://www.linkedin.com/in/dante-salamanca-galvis-5370b2356/) - [Github](https://github.com/Dante-Sal)
