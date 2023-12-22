import { motion } from 'framer-motion'
import { useState } from 'react';

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })




    const mouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)




    return (
        <motion.div className="cursor" animate={{
            y: position.y,
            x: position.x,
        }}
            transition={{ type: "tween", stiffness: 20 }}>
        </motion.div>
    );
};

export default Cursor;