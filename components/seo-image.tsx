import Image from 'next/image';
import { useState } from 'react';

interface SEOImageProps {
   src: string;
   alt: string;
   width: number;
   height: number;
   priority?: boolean;
   className?: string;
   sizes?: string;
   quality?: number;
   placeholder?: 'blur' | 'empty';
   blurDataURL?: string;
}

export function SEOImage({
   src,
   alt,
   width,
   height,
   priority = false,
   className = '',
   sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
   quality = 85,
   placeholder = 'empty',
   blurDataURL,
}: SEOImageProps) {
   const [isLoading, setIsLoading] = useState(true);
   const [hasError, setHasError] = useState(false);

   if (hasError) {
      return (
         <div
            className={`bg-muted flex items-center justify-center ${className}`}
            style={{ width, height }}
         >
            <span className="text-muted-foreground text-sm">
               Imagen no disponible
            </span>
         </div>
      );
   }

   return (
      <Image
         src={src}
         alt={alt}
         width={width}
         height={height}
         priority={priority}
         className={`${className} ${
            isLoading ? 'opacity-0' : 'opacity-100'
         } transition-opacity duration-300`}
         sizes={sizes}
         quality={quality}
         placeholder={placeholder}
         blurDataURL={blurDataURL}
         onLoad={() => setIsLoading(false)}
         onError={() => {
            setIsLoading(false);
            setHasError(true);
         }}
      />
   );
}
