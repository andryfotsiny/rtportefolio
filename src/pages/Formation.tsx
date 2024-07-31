"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import {BsArrowUpRight} from  "react-icons/bs"
import {motion} from "framer-motion";

const services=[
    {
       num:'2024',
       title:'certificat en Langage Python par HackerRank',
       description:"Le certificat présenté est une attestation officielle délivrée par la plateforme en ligne HackerRank. " +
           "j'ai réussi avec succès une évaluation portant sur les bases du langage de programmation Python." +
           "Cette évaluation a été validée le 14 juillet 2024.Le certificat est signé par Harishankaran K, le Directeur Technique (CTO) de HackerRank." ,
        href:"https://www.hackerrank.com/certificates/34fb478b1ae7"
    },
    {
       num:'2024',
       title:'certificat en SQL par HackerRank',
       description:"Le certificat présenté est une attestation officielle délivrée par la plateforme en ligne HackerRank. " +
           "j'ai réussi avec succès une évaluation portant sur SQL (Structured Query Language) à un niveau intermédiaire." +
           "Cette évaluation a été validée le 5 avril 2024.Le certificat est signé par Harishankaran K, le Directeur Technique (CTO) de HackerRank." ,
        href:"https://www.hackerrank.com/certificates/6d79b60c0b2e"
    },
    {
       num:'2022-2023',
       title:'obtention du diplôme Licence en informatique à l’EMIT Fianarantsoa',
       description:"Diplômé d'une licence en informatique avec mention assez bien en 2023 de l'EMIT(École de Management et d'Innovation Technologique) Fianarantsoa, je suis passionné par le développement web et les systèmes d'information. Mes expériences académiques et mes projets personnels m'ont permis de développer de solides compétences en programmation, en bases de données et en résolution de problèmes" ,
        href:""
    },
    {
       num:'2017-2018',
       title:'Obtention du Baccalauréat, série D au LRR Fianarantsoa',
       description:"Diplômé du baccalauréat série D avec mention assez bien en 2018 du prestigieux Lycée Raherivelo Ramamonjy, j'ai toujours été passionné par les sciences et les mathématiques. C'est cette solide base scientifique qui m'a guidé vers des études supérieures en ingénierie." ,
        href:""
    },
]
const Formation = () => {
    return (
        <section className="flex flex-col justify-center py-12 xl:py-0">
            <div className="p-5">
                <div

                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-xl transition-all duration-500 text-gray-800 dark:text-gray-200">
                                        {service.num}
                                    </div>
                                    {service.href ? (
                                        <Link
                                            to={service.href}
                                            className="w-[50px] h-[50px] rounded border-accent border-2 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-all duration-500 flex justify-center items-center"
                                        >
                                            <BsArrowUpRight className="text-accent text-2xl" />
                                        </Link>
                                    ) : (
                                        <div></div>
                                    )}
                                </div>
                                <h2 className="text-[20px] font-bold clear-none text-accent group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-all duration-500">
                                    <Link to={service.href || "#"} className={service.href ? "" : "pointer-events-none"}>
                                        {service.title}
                                    </Link>
                                </h2>
                                <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
                                <div className="border-b border-gray-300 dark:border-gray-600 w-full"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Formation;
