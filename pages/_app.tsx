import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Magic Todo</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
