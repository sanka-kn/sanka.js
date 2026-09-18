import terser from "@rollup/plugin-terser";
import pkg from "./package.json" with { type: "json" };

// Shared plugin list
const plugins = [
    terser({
        compress: { drop_console: false },
        format:   { comments: false }
    })
];

export default [

    // ── 1. CommonJS build (Node.js require()) ─────────────────
    {
        input:  "source/index.js",
        output: {
            file:    pkg.main,          // dist/sanka.cjs.js
            format:  "cjs",
            exports: "named",
        },
        plugins,
    },

    // ── 2. ES Module build (import / bundlers / modern Node) ──
    {
        input:  "source/index.js",
        output: {
            file:    pkg.module,        // dist/sanka.esm.js
            format:  "esm",
        },
        plugins,
    },

    // ── 3. UMD build (browser <script src="..."> tag) ─────────
    {
        input:  "source/index.js",
        output: {
            file:    pkg.browser,       // dist/sanka.umd.js
            format:  "umd",
            name:    "sanka",        // window.sanka in browser
            exports: "named",
        },
        plugins,
    },
];
