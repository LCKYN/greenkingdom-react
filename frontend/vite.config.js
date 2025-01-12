import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // test: {
    //   globals: true,
    //   environment: "jsdom",
    //   coverage: {
    //     provider: "c8",
    //     enabled: true,
    //     reporter: ["text"],
    //   },
    // },
    server: {
        host: true,
        port: 8000,
        watch: {
            usePolling: true,
        },
    },
});
