import { motion } from 'framer-motion'
import { useState,useEffect } from 'react';

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        
        window.addEventListener('mousemove',mouseMove)

        return ()=> {
            window.removeEventListener('mousemove', mouseMove)
        }
    })



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