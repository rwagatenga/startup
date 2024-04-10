import '@/styles/global.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import type { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
