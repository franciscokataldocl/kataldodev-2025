'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NavItems from "@/app/components/navigation/NavItems";
import MobileMenu from "@/app/components/navigation/mobileMenu/mobileMenu";
import FullScreenMenu from "@/app/components/navigation/mobileMenu/fullScreenMenu";

interface Route {
    link: string;
    name: string;
}

const routes: Route[] = [
    { link: "/home", name: "HOME" },
    { link: "/cv", name: "CURRICULUM" },
    { link: "/projects", name: "PROYECTOS" },
    { link: "/contact", name: "CONTACTO" },
];

const NavBar = () => {
    const [isClient, setIsClient] = useState(false);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        // Asegurarse de que el código solo se ejecute en el cliente
        setIsClient(true);
    }, []);

    if (!isClient) {
        // Evita la renderización en el servidor
        return null;
    }

    return (
        <>

            <nav
                className="flex justify-between items-center min-h-[1vh] w-screen  z-40 bg-white fixed top-0 left-0 right-0">
                {/* Logo a la izquierda */}
                <motion.div
                    className="logo px-10 py-5"
                    initial={{opacity: 0, y: 60}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 1.5,
                        delay: 2.2,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={60}
                        height={60}
                    />
                </motion.div>

                {/* Menú a la derecha */}
                <MobileMenu isOpen={isOpen} setOpen={setOpen}/>
                <FullScreenMenu isOpen={isOpen} routes={routes}/>
                <motion.ul
                    className="hidden sm:flex space-x-6 px-10 py-5"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.1, delay: 2.2}}
                >
                    {routes.map((item) => (
                        <motion.div
                            className="nav-item"
                            key={item.name}
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{
                                duration: 1.1,
                                delay: 2.2,
                                ease: "easeInOut"
                            }}
                        >
                            <NavItems
                                link={item.link}
                                name={item.name}
                            />
                        </motion.div>
                    ))}
                </motion.ul>

            </nav>
        </>

    );
};

export default NavBar;
