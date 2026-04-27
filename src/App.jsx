import React, { useState } from 'react'
import { motion } from 'motion/react'
function App() {

  return (
    <>

      <motion.div
        initial={{
          y: -10,
          scale: 0
        }}
        animate={{
          y: [-750, 400, 0],
          scale: 1,
          // backgroundImage:"URL('https://res.cloudinary.com/dfqsa6hoc/image/upload/v1777212689/IMG_3496_yhn26j.jpg')",

        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "anticipate"
        }}
        className="text-3xl font-bold  w-[100%]  h-[100vh] bg-cover text-white  bg-purple-600 flex justify-center items-center">
      <motion.div>
          <motion.h1 className=' flex'  animate={{scale:10 }} transition={{ delay:2}}>
          <motion.h1 initial={{x:-1000}} animate={{x:0 }} transition={{ delay:2 , duration:1}}>
            R
          </motion.h1>
          <motion.h1 initial={{y:-1000}} animate={{y:0 }} transition={{ delay:2}}>
            a
          </motion.h1>
          <motion.h1 initial={{y:1000}} animate={{y:0 }} transition={{ delay:2 , duration:5}}>
            j
          </motion.h1>
          <motion.h1 initial={{y:-1000}} animate={{y:0 }} transition={{ delay:2, duration:2}}>
            a
          </motion.h1>
          <motion.h1 initial={{y:-1000}} animate={{y:0 , rotate:-360 }} transition={{ delay:2, duration:3}}>
            t
          </motion.h1>
        </motion.h1>
      </motion.div>
      </motion.div>
    </>
  )
}

export default App
