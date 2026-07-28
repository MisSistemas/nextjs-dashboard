import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ 
  weight: ['400', '700'], // Lusitana requires a specific weight array or string
  subsets: ['latin'],
});
