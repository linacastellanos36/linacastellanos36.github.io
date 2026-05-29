# Portafolio — Lina Castellanos (v2.1.2)

## ⚠️ Estructura de carpetas — CRÍTICA para que las imágenes carguen

```
tu-repo/
├── index.html
├── styles.css
├── script.js
└── assets/                    ← carpeta con TODAS las imágenes dentro
    ├── idc-antes-01-finanzas-paso2.png
    ├── idc-antes-02-sheets-resumen.png
    ├── idc-despues-01-podcast.png
    ├── idc-despues-02-arbol-decision.png
    ├── idc-despues-03-sort-cards.png
    ├── idc-despues-04-agility-quiz.png
    ├── idc-despues-05-linea-tiempo.png
    └── idc-despues-06-foro.png
```

Las imágenes NO funcionan si están al lado de index.html. Tienen que estar
dentro de la subcarpeta `assets/`.

## 🆕 Cambios v2.1.2

- **Imágenes:** ahora se ven completas, sin recorte. Cada captura está dentro de un
  marco blanco con padding, mostrando la imagen entera con `object-fit: contain`.
- **Stack:** vuelve al formato de 7 cajas (Producto & gestión / IA en el día a día /
  Desarrollo / Despliegue & hosting / Authoring & diseño / LMS / Programación K-12).

## 🚀 Subir a GitHub

1. Descomprime el ZIP.
2. Copia los 3 archivos (`index.html`, `styles.css`, `script.js`) + la carpeta `assets/` completa a tu repo.
3. `git add . && git commit -m "Portfolio v2.1.2" && git push`
