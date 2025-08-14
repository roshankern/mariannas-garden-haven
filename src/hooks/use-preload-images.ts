import { useEffect, useState } from 'react';

// Import all images that need to be preloaded
import aboutImage from '@/assets/about/IMG_9421_Original.webp';
import teaAndTreatsImage from '@/assets/favorites/tea_and_treats.webp';
import paulineImage from '@/assets/favorites/IMG_2280.webp';
import familyImage from '@/assets/favorites/32C267AA-736F-452F-A9B1-F6DC0D58E48C.webp';
import design1 from '@/assets/designs/1CCCBE65-FEBD-4FC5-B362-D6A23A8709C2.webp';
import design2 from '@/assets/designs/IMG_5211.webp';
import design3 from '@/assets/designs/IMG_5217.webp';
import design4 from '@/assets/designs/IMG_5219.webp';
import design5 from '@/assets/designs/IMG_5222.webp';
import design6 from '@/assets/designs/IMG_5223.webp';
import design7 from '@/assets/designs/IMG_5231.webp';
import design8 from '@/assets/designs/IMG_5239.webp';
import design9 from '@/assets/designs/IMG_5241.webp';
import design10 from '@/assets/designs/IMG_5245.webp';
import design11 from '@/assets/designs/IMG_5252.webp';
import design12 from '@/assets/designs/IMG_5255.webp';
import design13 from '@/assets/designs/IMG_5259.webp';
import design14 from '@/assets/designs/IMG_5262.webp';
import design15 from '@/assets/designs/IMG_5266.webp';
import design16 from '@/assets/designs/IMG_5267.webp';
import design17 from '@/assets/designs/IMG_5272.webp';
import design18 from '@/assets/designs/IMG_6041.webp';
import design19 from '@/assets/designs/IMG_6042.webp';

const imagesToPreload = [
  // About page
  aboutImage,
  
  // Favorites page
  teaAndTreatsImage,
  paulineImage,
  familyImage,
  
  // Designs page
  design1,
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
  design10,
  design11,
  design12,
  design13,
  design14,
  design15,
  design16,
  design17,
  design18,
  design19,
];

export const usePreloadImages = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imagesToPreload.length;

    // Preload images with a slight delay to not block the main page rendering
    const preloadTimer = setTimeout(() => {
      imagesToPreload.forEach((src) => {
        const img = new Image();
        
        img.onload = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          
          if (loadedImages === totalImages) {
            setIsPreloading(false);
          }
        };
        
        img.onerror = () => {
          loadedImages++;
          setLoadedCount(loadedImages);
          
          if (loadedImages === totalImages) {
            setIsPreloading(false);
          }
        };
        
        img.src = src;
      });
    }, 500); // Small delay to let the main page render first

    return () => {
      clearTimeout(preloadTimer);
    };
  }, []);

  return {
    isPreloading,
    loadedCount,
    totalImages: imagesToPreload.length,
    progress: Math.round((loadedCount / imagesToPreload.length) * 100),
  };
};
