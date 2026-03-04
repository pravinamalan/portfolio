import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "src"),
        },
    },
    root: ".",
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    "vendor-gsap": ["gsap", "gsap/ScrollTrigger"],
                    "vendor-framer": ["framer-motion"],
                    "vendor-ui": [
                        "@radix-ui/react-accordion",
                        "@radix-ui/react-dialog",
                        "@radix-ui/react-tooltip",
                        "lucide-react",
                    ],
                },
            },
        },
    },
});
