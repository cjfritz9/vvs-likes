import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import backgroundImg from '@/assets/images/mask-group.png';
import Providers from './providers';
import HeaderBar, {
  HeaderBarFallback
} from '@/components/layout/header/Header';
import Footer from '@/components/layout/footer/Footer';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { Suspense } from 'react';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Buy Instagram Likes Trial: FREE 10-50 Real IG Likes⋆Instant',
    template: '%s - VVSLikes'
  },
  description:
    'Buy Instagram likes from VVSLikes. Skeptical? Get a 10-50 trial of free REAL Instagram likes & experience engagement instantly. No surveys/verification or CC.',
  alternates: {
    canonical: 'https://vvslikes.com/'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link rel='canonical' href='https://vvslikes.com/' />
      </Head>
      <body className={outfit.className}>
        <Providers>
          <div className='App'>
            <div
              style={{
                backgroundImage: `url(${backgroundImg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}
            >
              <Suspense fallback={<HeaderBarFallback />}>
                <HeaderBar />
              </Suspense>
            </div>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
