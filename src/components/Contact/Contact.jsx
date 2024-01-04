/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'

import './Contact.scss'

const variant = {

    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}




const Contact = () => {
    return (
        <motion.section className='contact' variants={variant} whileInView='animate' initial='initial'>
            <motion.div className="contact-data" variants={variant} >
                <motion.h1 variants={variant}>Let's work together</motion.h1>
                <motion.div variants={variant} className='contact-info'>
                    <h3>Mail</h3>
                    <p >hello@gmail.com</p>
                </motion.div >
                <motion.div variants={variant} className='contact-info'>
                    <h3 >Address</h3>
                    <p >123 Avenue Street New York</p>
                </motion.div>
                <motion.div variants={variant} className='contact-info'>
                    <h3 >Phone</h3>
                    <p >+12345678</p>
                </motion.div>
            </motion.div>
            <div className='form'>
                <form >
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message' />
                </form>
                <button>Submit</button>
            </div>
        </motion.section>
    );
};

export default Contact;