import { globalStyles } from "@/styles/global";
import { cssReset } from "@/styles/reset";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  cssReset();
  globalStyles();

  return <Component {...pageProps} />;
}
