import type { AppProps } from 'next/app';

import '@/styles/globals.css';

const CustomApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default CustomApp;
