"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import SwiperCore, { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import chuImage from '../assets/chu1.png';
import conge from '../assets/conge.png';
import sig from '../assets/sig.png';

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Link } from 'react-router-dom';
import WorkSliderBtns from "../components/ui/WorkSliderBtns";
import assert from "node:assert";

const projects = [
    {
        num: '01',
        category: 'Site web en Centre Hospitalier Universitaire de Fianarantsoa',
        date: 'juillet 2022(2 mois)',
        description: 'lorem',
        stack: [{ name: "html5 " }, { name: "Css 3" }, { name: "javascript" }],
        image: chuImage,
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'Conception et réalisation d’une application de Gestion de congé, d’absence et d’ordre de mission',
        date: 'mai 2021(3 mois) ',
        description: 'lorem',
        stack: [{ name: "Java " }, { name: "." }, { name: "javascript" }],
        image: conge,
        live: "",
        github: "",
    },
    {
        num: '03',
        category: "Traitement d'image satellite pour les ressources en eau à Fianarantsoa",
        date: 'octobre 2023(5 mois)',
        description: 'lorem',
        stack: [{ name: "React " }, { name: "taillwindCss" }, { name: "Python" }],
        image: sig,
        live: "",
        github: "",
    },
];

const Experience= () => {
    const [project, setProject] = useState(projects[0]);

   const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
};

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="win-h-[80vh] flex flex-col justify-center py-12 md:px-0"
        >
            <div className="p-5">
                <div className="flex flex-col md:flex-row md:gap-[30px] ">
                    <div className="w-full xl:w-[50%] md:h-[460px] flex flex-col md:justify-between order-2 md:order-none  ">
                        <div className="flex flex-col gap-1 h-[50%]">
                            <div className="text-7xl leading-none font-extrabold dark:text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[20px]  leading-none group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <p className=""><b>Date:</b>{project.date}</p>
                            <p className="">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex flex-row items-center gap-3 ">
                                <Link to={project.live}>
                                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <div>
                                            <BsArrowUpRight className="text-3xl group-hover:text-accent" />
                                        </div>
                                    </div>
                                </Link>
                                <Link to={project.github}>
                                    <div className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                        <div>
                                            <BsGithub className="text-3xl group-hover:text-accent" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[50%] "><Swiper spaceBetween={30} slidesPerView={1} className="md:h-[550px]" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full ">
                                        <div className="h-auto relative group flex justify-center items-center ">

                                            <div className="relative w-full h-full ">
                                                <img
                                                    src={project.image}
                                                    className="object-cover -5 "
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}

                           <WorkSliderBtns
    containerStyles="flex gap-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-full justify-between "
    btnStyles="bg-accent text-white hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
    iconsStyles="" // Add this property with appropriate styles
/>
                    </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Experience;
