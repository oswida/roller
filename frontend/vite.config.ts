import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { resolve } from "path";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), solid({ ssr: false })],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
});
