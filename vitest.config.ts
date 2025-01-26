/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';
import path from 'path'; // Necesario para configurar el alias

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Configura @ como alias para la carpeta src
        },
    },
    test: {
        environment: 'jsdom', // Usa jsdom como entorno de prueba para React
        globals: true, // Permite usar expect globalmente sin importar su importación
        setupFiles: './vitest.setup.ts', // Archivo para configuraciones adicionales
    },
});
