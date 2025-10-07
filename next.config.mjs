/** @type {import('next').NextConfig} */
const nextConfig = {
   // Configuración para GitHub Pages
   output: 'export',
   trailingSlash: true,
   distDir: 'dist',
   images: {
      unoptimized: true, // Necesario para exportación estática
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
   },

   // Compresión
   compress: true,

   // Headers de seguridad y SEO
   async headers() {
      return [
         {
            source: '/(.*)',
            headers: [
               {
                  key: 'X-Frame-Options',
                  value: 'DENY',
               },
               {
                  key: 'X-Content-Type-Options',
                  value: 'nosniff',
               },
               {
                  key: 'Referrer-Policy',
                  value: 'origin-when-cross-origin',
               },
               {
                  key: 'X-DNS-Prefetch-Control',
                  value: 'on',
               },
            ],
         },
         {
            source: '/sitemap.xml',
            headers: [
               {
                  key: 'Cache-Control',
                  value: 'public, max-age=86400, s-maxage=86400',
               },
            ],
         },
         {
            source: '/robots.txt',
            headers: [
               {
                  key: 'Cache-Control',
                  value: 'public, max-age=86400, s-maxage=86400',
               },
            ],
         },
      ];
   },

   // Redirecciones para SEO
   async redirects() {
      return [
         {
            source: '/home',
            destination: '/',
            permanent: true,
         },
         {
            source: '/servicios',
            destination: '/#servicios',
            permanent: true,
         },
         {
            source: '/sobre-mi',
            destination: '/#sobre-mi',
            permanent: true,
         },
         {
            source: '/contacto',
            destination: '/#hablemos',
            permanent: true,
         },
      ];
   },

   // Configuración experimental para mejor rendimiento
   experimental: {
      optimizeCss: true,
      optimizePackageImports: ['lucide-react', 'framer-motion'],
   },

   // Configuración de webpack para optimización
   webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
         config.optimization.splitChunks = {
            chunks: 'all',
            cacheGroups: {
               vendor: {
                  test: /[\\/]node_modules[\\/]/,
                  name: 'vendors',
                  chunks: 'all',
               },
            },
         };
      }
      return config;
   },
};

export default nextConfig;
