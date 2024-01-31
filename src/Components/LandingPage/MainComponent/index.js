import React from 'react'
import './style.css'
import Button from '../../Common/Button'
import iphone from '../../../Assets/iPhone.png'
import gradient from '../../../Assets/gradient 1.svg'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'

const MainComponent = () => {
    const shareUrl='https://crypto-tracker-syedmasood.netlify.app/'
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <motion.h1
                initial={{opacity:0,x:-50}}
                animate={{opacity:1,x:0}}
                transition={{duration:1}}
            className='track-crypto-heading'>Track Crypto</motion.h1>
            <motion.h1
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            transition={{duration:1,delay:.5}} className='real-time-heading'>Real Time.</motion.h1>
        <motion.p
            initial={{opacity:0,x:-150}}
            animate={{opacity:1,x:0}} transition={{duration:1,delay:1}} className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
        <motion.div
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:1,delay:1.5}} className='btn-flex'>
            <Link to='/dashboard'><Button text={'Dashboard'} /></Link>
            
            <WhatsappShareButton url={shareUrl}><Button text={'Share'} outlined={true} /></WhatsappShareButton>
        </motion.div>
        </div>
        <div className='phone-container'>
            <motion.img
            initial={{y:10}}
            animate={{y:-10}}
            transition={{
                type:"smooth",
                repeatType:'mirror',
                duration:2,
                repeat:Infinity,
            }}
            src={iphone} className='iphone' alt=''/>
            <img src={gradient} className='gradient' alt=''/>
        </div>
      
    </div>
  )
}

export default MainComponent
