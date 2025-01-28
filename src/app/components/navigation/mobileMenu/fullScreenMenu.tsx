import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItems from "@/app/components/navigation/NavItems";

const FullScreenMenu = ({ isOpen, routes }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0, y: "-100%"}} // Comienza invisible y desplazado hacia arriba
                    animate={{opacity: 1, y: 0}} // Aparece y se posiciona correctamente
                    exit={{opacity: 0, y: "-100%"}} // Desaparece desplazándose hacia arriba
                    transition={{
                        duration: 0.5, // Duración de la animación
                        ease: "easeInOut", // Entrada/salida suave
                    }}
                    className="bg-customBlack h-[100vh] w-[100vw] flex items-center justify-center text-white fixed top-0 left-0 z-[-1]"
                >
                    <div
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        {routes.map((item, index) => (
                            <motion.div
                                className="nav-item"
                                key={item.name}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{
                                    duration: .8,
                                    delay: 0.3 * index, // Escalonado basado en el índice
                                    ease: "easeInOut",
                                }}
                            >
                                <NavItems link={item.link} name={item.name}/>
                            </motion.div>
                        ))}
                    </div>


                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FullScreenMenu;
