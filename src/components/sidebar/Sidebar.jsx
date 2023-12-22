import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleButton from "./ToggleButton/ToggleButton";
import './sidebar.scss'

const Sidebar = () => {


    const [Open, setOpen] = useState(false)
    const variant = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: { type: "spring", stiffness: 20, }
        },
        Closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: { delay: 0.2, }
        }
    }
    return (
        <motion.div className="sidebar" animate={Open ? 'open' : 'Closed'}>
            <motion.div className="bg" variants={variant}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>

    );
};

export default Sidebar;