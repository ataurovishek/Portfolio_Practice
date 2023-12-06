import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

const Test = () => {



    const [position, setPosition] = useState({ x: 0, y: 0})



    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            window.addEventListener('mousemove', mouseMove)
        }

    },[])


    return (
        <motion.div className="cursor" animate={{
            y: position.y - 20,
            x: position.x - 20,
        }}
            transition={{ type: "tween", stiffness: 40 }}>
        </motion.div>
    );
};

export default Test;