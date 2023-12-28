

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
        },
        scroll: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
                // ease: "easeIn",
            }
        }
    }

    const sliderText = {
        initial: {
            x: 0,
        },
        animate: {
            x:'-100vw',
            transition: {
                duration: 20,
                repeatType: "mirror",
                repeat: Infinity
            }
        }
    }


    return (
<>

        <motion.div className="hero_container" >
            <motion.div className="hero" variants={textVariant} initial='initial' animate='animate'>
                <motion.div className="hero_info" variants={textVariant}>
                    <motion.p variants={textVariant}>HARVEY TYLER</motion.p>
                    <motion.h5 variants={textVariant}>Web developer and UI designer</motion.h5>

                    <motion.div className="buttons" variants={textVariant}>
                        <motion.button className='btn-1'>See the Latest Works</motion.button>
                        <motion.button className='btn-2'>Contact Me</motion.button>
                    </motion.div>

                    <motion.div className="mouse" variants={textVariant} animate='scroll'>
                        <motion.img src="/scroll.png" alt="" />
                    </motion.div>
                </motion.div>


                <motion.div variants={sliderText} animate='animate' initial='initial' className="sliderText">
                    Writer Content Creator Influencer
                </motion.div>

                <motion.div className="hero_img" >
                    <motion.img variants={textVariant} src="/hero.png" alt="" />
                </motion.div>
            </motion.div>
        </motion.div>
        </>
    );
};

export default Hero;