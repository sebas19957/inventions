import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { SnackbarProvider } from "notistack";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <SnackbarProvider maxSnack={3}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </NextUIProvider>
  );
}
