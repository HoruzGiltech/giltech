# Giltech - Landing Page & Sistema de Automatización

Landing page profesional desarrollada para **Giltech**, orientada a la optimización de procesos, consultoría de productividad e implementación de inteligencia artificial para negocios y equipos remotos.

## 🛠️ Stack Tecnológico

* **React** (Vite como empaquetador de desarrollo)
* **Tailwind CSS** (Estilos y diseño responsivo)
* **Lucide React** (Iconografía moderna y ligera)

## ✨ Características Principales

* **Estructura Modular:** Componentes limpios y reutilizables organizados por secciones (`Navbar`, `Hero`, `Problems`, `Services`, `Results`, `Process`, `Testimonials`, `About`, `Footer`).
* **Integración Directa con WhatsApp:** Enlaces configurados con parámetros URL-encoded para mensajes predefinidos tanto en el componente flotante (`FloatingWhatsApp`) como en los botones de contratación de servicios específicos (`Services`).
* **Diseño Profesional (UI/UX):** Paleta de colores optimizada, tarjetas interactivas con estados destacados y sección de impacto comercial medible.
* **Identidad Personalizada:** Inclusión de íconos oficiales (SVG) de redes como LinkedIn e integración de perfiles de liderazgo.

## 📁 Estructura del Proyecto

```text
src/
├── data/components/
│   ├── layout/         # Componentes estructurales (Navbar, Footer, FloatingWhatsApp)
│   └── sections/       # Secciones de la landing (Hero, Services, Results, About, etc.)
├── App.jsx             # Componente principal que ensambla la landing
├── main.jsx            # Punto de montaje de React
└── index.css           # Estilos globales y Tailwind CSS

```

## 🚀 Instalación y Ejecución Local

1. Clona el repositorio o abre la carpeta del proyecto en tu terminal.
2. Instala las dependencias necesarias:
```bash
npm install

```


3. Inicia el servidor de desarrollo con Vite:
```bash
npm run dev

```


4. Abre el enlace local proporcionado en tu navegador (por defecto `http://localhost:5173`).

---

Desarrollado para **Giltech** © 2026. Todos los derechos reservados.