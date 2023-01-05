import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import "@code-hike/mdx/styles";
import "../styles/ch-styles.css";

import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import enMessages from "../translations/compiled-messages/en.json";
import esMessages from "../translations/compiled-messages/es.json";

const queryClient = new QueryClient();
const manrope = Manrope();

function loadLocaleData(locale: string) {
  switch (locale) {
    case "en":
      return enMessages;
    default:
      return esMessages;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <IntlProvider
        locale={router.locale || "es"}
        defaultLocale="es"
        messages={loadLocaleData(router.locale || "es")}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </IntlProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
