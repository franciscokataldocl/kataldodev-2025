'use client'

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StackedDivs = () => {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        // Después de 2 segundos (duración de la animación), eliminar los divs
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 500); // 2 segundos de duración

        return () => clearTimeout(timer); // Limpiar el timer cuando el componente se desmonte
    }, []);

    return (
        <AnimatePresence>
            {/* Solo mostrar los divs si isAnimated es falso */}
            {!isAnimated && (
                <div className="relative h-screen w-screen z-50">
                    <motion.div
                        className="card absolute top-0 left-0 w-full h-full bg-customBlack"
                        initial={{ y: "100vh", opacity: 0 }} // Inicializar fuera de pantalla
                        animate={{ y: 0, opacity: 1 }} // Animación hacia su posición original
                        exit={{ opacity: 0 }} // Desaparece al finalizar
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="card absolute top-0 left-0 w-full h-full bg-white"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }} // Retraso de 0.2 segundos
                    />
                    <motion.div
                        className="card absolute top-0 left-0 w-full h-full bg-customBlack"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }} // Retraso de 0.4 segundos
                    />
                    <motion.div
                        className="card absolute top-0 left-0 w-full h-full bg-white"
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }} // Retraso de 0.6 segundos
                    />
                </div>
            )}
        </AnimatePresence>
    );
};

export default StackedDivs;
