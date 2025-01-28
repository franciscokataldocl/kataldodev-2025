'use client'
import { motion } from "framer-motion";
const TitleHero = () => {
    const letterVariants = {
        initial: {
            opacity: 0,
            y: "100%",
        },
        animate: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                delay: 1.5 + custom * 0.05,
            },
        }),
    };

    const splitText = (text: string) => {
        return text.split("").map((letter, index) => (
            <motion.span
                key={index}
                className="inline-block"
                initial="initial"
                animate="animate"
                variants={letterVariants}
                custom={index}
            >
                {letter}
            </motion.span>
        ));
    };

    return (
        <div className="flex h-screen w-screen px-10 py-5 fixed bg-white items-center sm:items-end overflow-hidden justify-center sm:justify-start">
            <motion.h1
                className="text-[3rem] sm:text-[6rem] md:text-[6rem] lg:text-[12rem]  2xl:text-[16rem] font-[family-name:var(--font-poppins)] font-bold  leading-[0.8] sm:leading-[0.8] md:leading-[0.8] lg:leading-[0.9]
                text-center sm:text-center md:text-left lg:text-left 2xl:text-left
                "

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <motion.div className="text-reveal-fullstack relative overflow-hidden">
                    {splitText("FULLSTACK")}
                </motion.div>
                <motion.div className="text-reveal-developer mt-4 relative overflow-hidden text-customBlue">
                    {splitText("DEVELOPER")}
                </motion.div>
            </motion.h1>
        </div>
    );
};

export default TitleHero;
