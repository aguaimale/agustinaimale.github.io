import type React from 'react';
import type { Metadata } from 'next';
import { Montserrat, Patrick_Hand_SC } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { baseSEO, organizationSchema, websiteSchema } from '@/lib/seo';
import './globals.css';

const montserrat = Montserrat({
   subsets: ['latin'],
   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
   style: ['normal', 'italic'],
   variable: '--font-montserrat',
});

const patrickHand = Patrick_Hand_SC({
   subsets: ['latin'],
   weight: ['400'],
   variable: '--font-patrick-hand',
});

export const metadata: Metadata = {
   ...baseSEO,
   generator: 'Next.js',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="es" suppressHydrationWarning>
         <head>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(organizationSchema),
               }}
            />
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(websiteSchema),
               }}
            />
         </head>
         <body
            className={`font-sans ${montserrat.variable} ${patrickHand.variable} antialiased`}
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               <Suspense fallback={null}>{children}</Suspense>
            </ThemeProvider>
            <Analytics />
         </body>
      </html>
   );
}
