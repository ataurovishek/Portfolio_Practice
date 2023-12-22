import { motion } from 'framer-motion'
const Links = () => {

    const variant = {
        open: { transition: { staggerChildren: 0.1 } },
        Closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
    }

    const itemVariants = { open: { y: 0, opacity: 1 }, Closed: { y: 50, opacity: 0 } }

    const items = ['Homepage', 'Services', 'Portfolio', 'Contact', 'About']

    return (
        <motion.div className="links" variants={variant}>
            {items.map(item => <motion.a variants={itemVariants} href={`#${item}`} key={item} whileFocus={{ scale: 0.95 }} whileHover={{ scale: 1.1 }}>
                {item}
            </motion.a>)}
        </motion.div>
    );
};

export default Links;