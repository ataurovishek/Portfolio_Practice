import { useRef } from 'react';
import './Portfolio.scss'
import { motion, useScroll, useSpring} from 'framer-motion'

import Singleitems from './singleitems';


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: 'https://images.pexels.com/photos/7620577/pexels-photo-7620577.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: "Morning control cloud fairly captain stronger variety feet excitment matter sent lost hurried closely learn wonder planning poetry ten life national there orbit regular.Morning control cloud fairly captain stronger variety feet excitment matter sent"
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: 'https://images.pexels.com/photos/4549410/pexels-photo-4549410.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: "Lorem ipsum dolor sit amet  corrupti, hic veniam consectetur adipisicing elit. Dolorem corrupti, hic veniam  consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
    {
        id: 3,
        title: "Vanilla Js App",
        img: 'https://images.pexels.com/photos/5483075/pexels-photo-5483075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: "Lorem ipsum dolor sit amet  corrupti, hic veniam consectetur adipisicing elit. Dolorem corrupti, hic veniam  consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
    {
        id: 4,
        title: "Music App",
        img: 'https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: "Lorem ipsum dolor sit amet  corrupti, hic veniam consectetur adipisicing elit. Dolorem corrupti, hic veniam  consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
]

// 




 

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

            <Singleitems items={items} scrollYProgress={scrollYProgress}/>
        </div>
    );
};

export default Portfolio;