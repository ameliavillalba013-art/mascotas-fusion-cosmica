# 🌌 Fusión Cósmica: Mascotas & Cristales

> Un juego móvil de estrategia, colección y fusión en un universo mágico lleno de criaturas estelares y cristales energéticos, diseñado para Android (Google Play Store) e iOS (App Store).

---

## 📖 Descripción del Proyecto

**Fusión Cósmica: Mascotas & Cristales** es un videojuego móvil casual/estratégico donde los jugadores exploran un cosmos vibrante, recolectan cristales de energía elemental y fusionan adorables mascotas cósmicas para descubrir especies legendarias, desbloquear habilidades únicas y restaurar el equilibrio del universo.

---

## ✨ Características Principales

* 🐾 **Sistema de Fusión de Mascotas:** Combina criaturas básicas y cristales elementales para evolucionar y descubrir nuevas especies con diseños y poderes únicos.
* 💎 **Recolección de Cristales Cósmicos:** Obtén fragmentos estelares, gemas lunares y cristales solares con distintas rarezas y propiedades de combinación.
* 🪐 **Exploración y Progresión:** Avanza a través de distintos mundos o constelaciones desbloqueando nuevos desafíos y recetas de fusión.
* 📖 **Enciclopedia / Bestiario Cósmico:** Registra cada mascota y cristal descubierto para completar la colección al 100%.
* 📱 **Optimizado para Móviles:** Controles táctiles intuitivos, interfaz adaptable a pantallas de Android e iOS y soporte offline.

---

## 🎮 Mecánicas de Juego (Gameplay)

1. **Recolectar:** Consigue cristales básicos y huevos/mascotas iniciales mediante misiones, exploración o recompensas diarias.
2. **Combinar (Fusión):** Arrastra y une dos mascotas compatibles (o una mascota con un cristal específico) en el Altar de Fusión.
3. **Evolucionar:** Observa la transformación y obtén criaturas de mayor rango con mejores estadísticas o habilidades pasivas.
4. **Expandir:** Utiliza la energía generada por tus mascotas para desbloquear nuevas zonas del mapa cósmico.

---

## 🛠️ Tecnologías y Empaquetado Móvil

* **Núcleo del Juego:** HTML5, CSS3, JavaScript (PWA)
* **Empaquetado Nativo (Android & iOS):** Capacitor / Cordova *(ajustar si usas Unity o Flutter)*
* **Arte y Diseño:** Imágenes generadas con IA (Gemini)
* **Control de Versiones:** Git & GitHub

---

## 🚀 Instalación y Ejecución en Local

### Requisitos previos
* Navegador web moderno para pruebas rápidas.
* **Node.js** instalado (necesario para empaquetar las versiones móviles).
* **Android Studio** (para compilar el `.aab` / `.apk` para Google Play Store).
* **Xcode en macOS** (para compilar y subir a Apple App Store).

### Pasos para ejecutar

```bash
# 1. Clonar este repositorio
git clone [https://github.com/ameliavillalba013-art/mascotas-fusion-cosmica.git](https://github.com/ameliavillalba013-art/mascotas-fusion-cosmica.git)

# 2. Entrar al directorio del proyecto
cd mascotas-fusion-cosmica

# 3. Instalar dependencias (si usas Capacitor / Node)
npm install

# 4. Sincronizar proyectos móviles (Android / iOS)
npx cap sync
