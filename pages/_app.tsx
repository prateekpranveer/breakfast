import React from "react";
import Header from "@/components/Header";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import Spinner from "@/components/Spinner";
import MainApp from "@/components/MainApp";

interface Prime {
  prime: string;
  setprime: React.Dispatch<React.SetStateAction<string>>;
}

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    NProgress.configure({
      template: `
        <div class="bar" role="bar">
          <div class="peg fixed-border" style="box-shadow: 0 0 10px var(--nprogress-color), 0 0 5px var(--nprogress-color)"></div>
        </div>
      `,
    });

    Router.events.on("routeChangeStart", NProgress.start);
    Router.events.on("routeChangeComplete", NProgress.done);
    Router.events.on("routeChangeError", NProgress.done);

    return () => {
      Router.events.off("routeChangeStart", NProgress.start);
      Router.events.off("routeChangeComplete", NProgress.done);
      Router.events.off("routeChangeError", NProgress.done);
    };
  }, []);

  const [prime, setprime] = React.useState<string | null>("Loading"); // Provide default value for prime

  useEffect(() => {
    const primeLocal = localStorage.getItem("Disclaimer");
    if (!prime) {
      setprime("Loading");
    }
    setTimeout(() => {
      setprime(primeLocal);
    }, 4000);
  }, []);


  return (
    <>
      <Head>
        <title>Streak</title>
        <meta property="og:image" content="/next.svg" />
      </Head>

      {prime === "Loading" ? (
        <>
          <Spinner />
        </>
      ) : (
        <>
          <Provider store={store}>
            {!prime ? (
              <>
                <MainApp setprime={setprime} />
              </>
            ) : (
              <>
                <Header />
                <Component {...pageProps} />
              </>
            )}
          </Provider>
        </>
      )}
    </>
  );
}

export default MyApp;
