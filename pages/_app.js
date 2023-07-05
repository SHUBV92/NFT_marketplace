import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <h1>NAVBAR</h1>
      <Component {...pageProps} />
      <h1>FOOTER</h1>
    </div>
  </ThemeProvider>
);

export default MyApp;
