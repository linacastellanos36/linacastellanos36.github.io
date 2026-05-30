# Portafolio — Lina Castellanos (v3.2)

## 🆕 Cambios v3.2

### Vídeo de certificación · ahora abre en YouTube (pestaña nueva)
Antes el facade cargaba el vídeo inline al hacer click. Eso te daba "Video
unavailable" porque el vídeo tiene **embedding deshabilitado** en YouTube.

Ahora el facade es un enlace que abre el vídeo en una **pestaña nueva de
YouTube**. Siempre funciona, sin importar la configuración del vídeo.

El badge cambió de "YouTube" a "YouTube ↗" para indicar visualmente que
abrirá en otra pestaña.

### Sección Craft · ahora con vistas previas reales
Los dos vídeos del archivo de Diseño Instruccional (Ciclos y Habilidades
digitales) antes mostraban un degradado verde con icono de play. Ahora
muestran **las miniaturas reales de YouTube** (cargadas desde `i.ytimg.com`)
con el botón ▶ y el tag superpuestos.

## 🔄 Si después activas embedding en YouTube y quieres reproducción inline

Si en algún momento quieres que el vídeo de certificación se reproduzca
**dentro del portafolio** (en lugar de abrir YouTube), tienes que hacer dos cosas:

### 1. Activar embedding en YouTube
- YouTube Studio → tu vídeo → **Detalles** o **Configuración avanzada**
- Busca **"Permitir inserción"** (Allow embedding)
- Actívalo · Guardar

### 2. Revertir el HTML al modo iframe
En `index.html`, busca el bloque `<a class="video-embed video-facade" href="https://youtu.be/1ar0D7uhDmI"...>`
(en la sección "El programa en producción") y reemplázalo por:

```html
<figure class="ai-production__video">
  <div class="video-embed">
    <iframe
      src="https://www.youtube-nocookie.com/embed/1ar0D7uhDmI"
      title="Recorrido del catálogo y la interfaz de certificación"
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      referrerpolicy="strict-origin-when-cross-origin"></iframe>
  </div>
  <figcaption class="shot__cap">
    <span class="shot__cap-label">Vídeo · recorrido</span>
    Tour por el catálogo y la interfaz de certificación
    docente. ~3 minutos.
  </figcaption>
</figure>
```

## ⚠️ Recordatorios de la versión anterior

### WebM placeholders en assets/
Los archivos `assets/demo-vibecoding-1.webm` y `demo-vibecoding-2.webm` son
**placeholders** (capturas convertidas a vídeo de 2 segundos). Reemplázalos
con tus WebM reales manteniendo exactamente esos nombres.

### Demos jugables ocultos
Los demos viven en `demos/d1/` y `demos/d2/`. Tienen `noindex` + `robots.txt`
los bloquea de buscadores. El CTA del portafolio es un `mailto:` (sin enlace
directo). Comparte el link en privado cuando te lo pidan.

## 🚀 Deploy
1. Descomprimir el ZIP
2. Copiar todo el contenido de `portafolio/` al repo `linacastellanos36.github.io`
3. `git add . && git commit -m "Portfolio v3.2" && git push`
