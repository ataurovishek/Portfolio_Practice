import { useRef } from 'react';
import './Portfolio.scss'
import { motion, useScroll, useSpring} from 'framer-motion'
import items from '../../Extra.js';
import Singleitems from './singleitems';



const Portfolio = () => {


    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'], })

    const progressBarProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 50,
    })

    return (
        <div className='portfolios' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div className="progressBar" style={{ scaleX: progressBarProgress }}></motion.div>
            </div>

            <Singleitems items={items} key={items.id} scrollYProgress={scrollYProgress}/>
        </div>
    );
};

export default Portfolio;