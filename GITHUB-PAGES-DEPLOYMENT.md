# 🚀 Guía de Despliegue en GitHub Pages

## 📋 **Pasos para Subir tu Sitio a GitHub Pages**

### **1. Preparar el Repositorio en GitHub**

#### **Crear Repositorio:**

1. Ve a [GitHub.com](https://github.com) y haz login
2. Haz clic en **"New repository"** (botón verde)
3. Configura el repositorio:
   -  **Repository name**: `agustinaimale.github.io` (importante: debe coincidir con tu username)
   -  **Description**: "Portfolio personal - Diseñador UX/UI & Desarrollador Frontend"
   -  **Visibility**: Public (necesario para GitHub Pages)
   -  **Initialize**: NO marcar ninguna opción

#### **Subir el Código:**

```bash
# En tu terminal, en la carpeta del proyecto:
git init
git add .
git commit -m "Initial commit - Portfolio setup"
git branch -M main
git remote add origin https://github.com/agustinaimale/agustinaimale.github.io.git
git push -u origin main
```

### **2. Configurar GitHub Pages**

#### **Habilitar GitHub Pages:**

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (pestaña superior)
3. En el menú lateral izquierdo, busca **"Pages"**
4. En **"Source"**, selecciona **"GitHub Actions"**
5. Guarda los cambios

#### **Configurar Permisos:**

1. En **Settings** → **Actions** → **General**
2. En **"Workflow permissions"**, selecciona **"Read and write permissions"**
3. Marca **"Allow GitHub Actions to create and approve pull requests"**
4. Haz clic en **"Save"**

### **3. Configuración Automática**

#### **El workflow ya está configurado:**

-  ✅ **`.github/workflows/deploy.yml`** - Deploy automático
-  ✅ **`next.config.mjs`** - Configurado para exportación estática
-  ✅ **SEO actualizado** - URLs de GitHub Pages configuradas

#### **Lo que sucede automáticamente:**

1. **Push a main** → Build automático
2. **Deploy automático** → Sitio en GitHub Pages
3. **URL final**: `https://agustinaimale.github.io`

### **4. Comandos Útiles**

#### **Desarrollo Local:**

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build local
npm run build

# Preview local
npm run preview
```

#### **Git Workflow:**

```bash
# Hacer cambios y subirlos
git add .
git commit -m "Descripción del cambio"
git push origin main

# El deploy es automático ✨
```

### **5. Verificar el Deploy**

#### **URLs Importantes:**

-  🌐 **Sitio Web**: `https://agustinaimale.github.io`
-  📊 **Actions**: `https://github.com/agustinaimale/agustinaimale.github.io/actions`
-  ⚙️ **Settings**: `https://github.com/agustinaimale/agustinaimale.github.io/settings/pages`

#### **Verificar que Funciona:**

1. **Espera 2-3 minutos** después del push
2. Ve a la **pestaña Actions** en tu repo
3. Verifica que el workflow se ejecutó correctamente
4. Visita tu sitio en `https://agustinaimale.github.io`

### **6. Configuración de Dominio Personalizado (Opcional)**

#### **Si quieres usar tu dominio:**

1. En **Settings** → **Pages**
2. En **"Custom domain"**, agrega tu dominio (ej: `agustinaimale.com`)
3. Marca **"Enforce HTTPS"**
4. Agrega un archivo `CNAME` en la carpeta `public`:
   ```
   agustinaimale.com
   ```

#### **Configurar DNS:**

```
Tipo: CNAME
Nombre: www
Valor: agustinaimale.github.io

Tipo: A
Nombre: @
Valor: 185.199.108.153
Valor: 185.199.109.153
Valor: 185.199.110.153
Valor: 185.199.111.153
```

### **7. SEO y Analytics**

#### **Google Search Console:**

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad: `https://agustinaimale.github.io`
3. Verifica la propiedad con el método HTML
4. Envía el sitemap: `https://agustinaimale.github.io/sitemap.xml`

#### **Google Analytics:**

1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Crea una propiedad web
3. Copia el ID de seguimiento (G-XXXXXXXXXX)
4. Agrega la variable de entorno:
   ```bash
   # En tu .env.local
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### **8. Monitoreo y Mantenimiento**

#### **Herramientas de Monitoreo:**

-  📊 **GitHub Actions** - Estado de deploys
-  🌐 **Google PageSpeed Insights** - Rendimiento
-  🔍 **Google Search Console** - SEO y indexación
-  📈 **Google Analytics** - Tráfico y conversiones

#### **Mantenimiento Regular:**

-  🔄 **Actualizaciones de dependencias** mensuales
-  📝 **Contenido fresco** - Blog posts, case studies
-  🔍 **SEO audits** - Optimización continua
-  🚀 **Performance monitoring** - Core Web Vitals

### **9. Troubleshooting**

#### **Problemas Comunes:**

##### **Deploy no funciona:**

```bash
# Verificar que el workflow está habilitado
# Settings → Actions → General → "Allow all actions"

# Verificar permisos
# Settings → Actions → General → "Read and write permissions"
```

##### **Sitio no se ve:**

```bash
# Verificar que el nombre del repo es correcto
# Debe ser: agustinaimale.github.io

# Esperar hasta 10 minutos para propagación DNS
```

##### **Errores de build:**

```bash
# Verificar en Actions tab
# Revisar logs de error
# Corregir errores y hacer push
```

### **10. Beneficios de GitHub Pages**

#### **Gratuito y Confiable:**

-  💰 **Completamente gratis**
-  ⚡ **CDN global** de GitHub
-  🔒 **HTTPS automático**
-  🚀 **Deploy automático**

#### **Integración Perfecta:**

-  🔄 **CI/CD integrado** con GitHub Actions
-  📝 **Versionado automático** con Git
-  👥 **Colaboración** fácil con otros desarrolladores
-  📊 **Estadísticas** de tráfico y commits

---

## 🎯 **Resumen de Pasos**

1. ✅ **Crear repo**: `agustinaimale.github.io`
2. ✅ **Subir código**: `git push origin main`
3. ✅ **Habilitar Pages**: Settings → Pages → GitHub Actions
4. ✅ **Configurar permisos**: Read and write permissions
5. ✅ **Esperar deploy**: 2-3 minutos
6. ✅ **Verificar**: `https://agustinaimale.github.io`

**¡Tu sitio estará online en menos de 10 minutos!** 🚀✨
