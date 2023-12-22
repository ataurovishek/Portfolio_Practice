

import { motion } from 'framer-motion'

import './Hero.scss'
const Hero = () => {


    const textVariant = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }


    return (

        <motion.div className="hero_container" >
            <motion.div className="hero" variants={textVariant} initial='initial' animate='animate'>
                <motion.div className="hero_info" variants={textVariant}>
                    <motion.p variants={textVariant}>HARVEY TYLER</motion.p>
                    <motion.h5 variants={textVariant}>Web developer and UI designer</motion.h5>

                    <motion.div className="buttons" variants={textVariant}>
                        <motion.button className='btn-1'>See the Latest Works</motion.button>
                        <motion.button className='btn-2'>Contact Me</motion.button>
                    </motion.div>

                    <motion.div className="mouse">
                        <motion.img variants={textVariant} src="/scroll.png" alt="" />
                    </motion.div>
                </motion.div>


                <motion.div variants={textVariant} className="sliderText">
                    Writer Content Creator Influencer
                </motion.div>

                <motion.div className="hero_img">
                    <motion.img variants={textVariant} src="/hero.png" alt="" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Hero;