import "@/styles/globals.css";
import Navbar from "./components/Navbar";
// import PortfolioProvider from "./Context/PortfolioContext";
import Footer from "./components/Footer";
import { PortfolioProvider } from "./Context/PortfolioContext";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <PortfolioProvider>
        <Component {...pageProps} />
      </PortfolioProvider>
      <Footer />
    </div>
  );
}
