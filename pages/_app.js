import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-5 py-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
