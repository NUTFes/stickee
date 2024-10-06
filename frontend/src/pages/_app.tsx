import "@/styles/globals.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { cacheExchange, createClient, fetchExchange, Provider } from "urql";

import { Layout } from "@/components/layout";

import type { AppProps } from "next/app";

const isServer = typeof window === "undefined";

const client = createClient({
  url: isServer
    ? process.env.HASURA_GRAPHQL_URL || ""
    : process.env.NEXT_PUBLIC_HASURA_GRAPHQL_URL || "",
  fetchOptions: {
    headers: {
      "x-hasura-admin-secret":
        process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ADMIN_SECRET || "",
    },
  },
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 660,
        md: 900,
        lg: 1024,
        xl: 1536,
      },
    },
  });

  return (
    <SessionProvider session={session as Session | null | undefined}>
      <Provider value={client}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
