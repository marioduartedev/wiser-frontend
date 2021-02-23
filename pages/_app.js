import AppProvider from '../provider/AppProvider';
import GlobalStyle from '../styles/globalsStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp
