import React from 'react';
import { motion } from 'framer-motion';
import photo from '../../assets/photo.png';
const Photo: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.4, ease: "easeIn" } }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" } }}
          className="w-[208px] h-[208px] xl:w-[498px] xl:h-[408px]"
        >
          <img
            src={photo}
            alt="Photo"
            className="object-contain xl:items-center w-full h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
