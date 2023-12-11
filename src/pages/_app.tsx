import Layout from "@/component/Layout/Layout";
import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
