import { motion } from 'framer-motion'
import './Navbar.scss';
import Sidebar from '../sidebar/Sidebar';
const Navbar = () => {
    return (
        <section className='Navbar'>
            <Sidebar />
            <div className="wrapper">


                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                </motion.span>

                <div className="social">
                    <a href=""><img src="/public/facebook.png" /></a>
                    <a href=""><img src="/public/instagram.png" /></a>
                    <a href=""><img src="/public/youtube.png" /></a>
                    <a href=""><img src="/public/dribbble.png" /></a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;