import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import "@code-hike/mdx/styles";
import "../styles/ch-styles.css";

import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/query-core";

const queryClient = new QueryClient();
const manrope = Manrope();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
