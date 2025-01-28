'use client'
import Hamburger from 'hamburger-react'
import {motion} from 'framer-motion'

const MobileMenu = ({isOpen, setOpen}) => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1.1, delay: 2.2}}
            className="block md:hidden sm:hidden z-100">
            <div className="px-10 py-5">
                <Hamburger color={isOpen ? '#FFFFFF' : '#141414'} toggled={isOpen} toggle={setOpen} />
            </div>
        </motion.div>

    )
}
export default MobileMenu


