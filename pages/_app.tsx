import '../styles/global.css';
import Header from '../components/Header';
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
