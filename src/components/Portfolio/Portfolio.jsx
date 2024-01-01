import { useRef } from 'react';
import './Portfolio.scss'
import { motion, useScroll, useSpring } from 'framer-motion'

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
    {
        id: 2,
        title: "Next.js Blog",
        img: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
    {
        id: 3,
        title: "Vanilla Js App",
        img: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
    {
        id: 4,
        title: "Music App",
        img: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem corrupti, hic veniam consequatur quidem dignissimos delectus in odio sequi, obcaecati, rerum et quibusdam vitae autem?"
    },
]



const Portfolio = () => {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })


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
            {items.map(item => (
                <section className='portfolio' key={item}>
                    <h2>{item.title}</h2>
                </section>
            ))}
        </div>
    );
};

export default Portfolio;