import { useRef } from 'react';
import './Services.scss'
import { motion, useInView } from 'framer-motion'
const Services = () => {
  
 const ref = useRef()
    
 const inview = useInView(ref,{margin:'-100px'})

    const itemvariant = {
        initial: {
            x: '-20%',
            y:'10%',
            opacity: 0,
        },
     
        animate: {
            x: 0,
            y:0,
            opacity: 1,
            transition: {
                duration: 1.5,
                stiffness:500,
                staggerChildren: {
                    delay: 1
                }
            },

        }
    }

    const branding = [
        {
            title: "Branding",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolores dicta praesentium ullam tempora repudiandae aperiam placeat enim recusandae impedit. Dolorum minus doloribus voluptatem nesciunt autem facere! Delectus ducimus recusandae .',
            btn: 'go'
        },
        {
            title: "Branding",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolores dicta praesentium ullam tempora repudiandae aperiam placeat enim recusandae impedit. Dolorum minus doloribus voluptatem nesciunt autem facere! Delectus ducimus recusandae .',
            btn: 'go'
        },
        {
            title: "Branding",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolores dicta praesentium ullam tempora repudiandae aperiam placeat enim recusandae impedit. Dolorum minus doloribus voluptatem nesciunt autem facere! Delectus ducimus recusandae .',
            btn: 'go'
        },
        {
            title: "Branding",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolores dicta praesentium ullam tempora repudiandae aperiam placeat enim recusandae impedit. Dolorum minus doloribus voluptatem nesciunt autem facere! Delectus ducimus recusandae .',
            btn: 'go'
        },
        {
            title: "Branding",
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolores dicta praesentium ullam tempora repudiandae aperiam placeat enim recusandae impedit. Dolorum minus doloribus voluptatem nesciunt autem facere! Delectus ducimus recusandae .',
            btn: 'go'
        },

    ]



    return (
        <motion.div ref={ref} className='Services' variants={itemvariant} initial='initial' animate={inview && 'animate'}>
            <motion.div className="services-wrapper" >
                <motion.div className="service-container" variants={itemvariant}>

                    <motion.div className="service-title" variants={itemvariant}>
                        <span>i focus on helping your brand grow and move faster</span>
                        <span className='line'></span>
                    </motion.div>



                    <motion.div className='headers' variants={itemvariant}>

                        <div className="header-1">
                            <div className="header-img1"><img src="/people.webp" alt="" /></div>
                            <h6><motion.b whileHover={{ color: '#ffa500' }}> Unique</motion.b>ideas</h6>
                        </div>

                        <div className="header-2">
                            <h2><motion.b whileHover={{ color: '#ffa500' }}>For Your</motion.b>Business</h2>
                            <button>WHAT WE DO ?</button>
                        </div>

                    </motion.div>
                    <motion.div className='brand-temp'>
                        {
                            branding.map(item =>
                                <motion.div key={item} variants={itemvariant} className='temps' whileHover={{ background: 'lightgray', color: 'black' }}>
                                    <span>{item.title}</span>
                                    <p>{item.info}</p>
                                    <button>{item.btn}</button>
                                </motion.div>
                            )
                        }
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Services;