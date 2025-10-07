// Configuración de Google Analytics y tracking
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Función para trackear eventos
export const trackEvent = (
   action: string,
   category: string,
   label?: string,
   value?: number
) => {
   if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
         event_category: category,
         event_label: label,
         value: value,
      });
   }
};

// Eventos específicos del sitio
export const trackPageView = (url: string) => {
   if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
         page_path: url,
      });
   }
};

export const trackContactForm = (method: string) => {
   trackEvent('contact_form_submit', 'engagement', method);
};

export const trackServiceClick = (serviceName: string) => {
   trackEvent('service_click', 'engagement', serviceName);
};

export const trackPromoClick = (promoType: string) => {
   trackEvent('promo_click', 'conversion', promoType);
};

export const trackPricingView = (serviceName: string) => {
   trackEvent('pricing_view', 'engagement', serviceName);
};

// Declaración global para TypeScript
declare global {
   interface Window {
      gtag: (
         command: 'config' | 'event',
         targetId: string,
         config?: Record<string, any>
      ) => void;
   }
}
