"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/Tabs";
import { ScrollArea} from "../components/ui/Scroll-area";

const skills = [
  {
    id: "python",
    title: "Python",
    description: "Avec 5 ans d'expérience en Python, j'ai développé une expertise approfondie dans le développement backend, notamment en utilisant des bases de données comme PostgreSQL.",
    items: [
      { theme: "Système de Diagnostic Médical", langage: "Back-end : Python", base: "PostgreSQL" },
      { theme: "Programmation jeux serpent 3d ", langage: "Back-end : python", base: "N/A" },
      { theme: "La conception et la réalisation d'une application de surveillance de gestion de tâches à distance", langage: "Back-end : python", base: "PostgreSQL" },
      { theme: "Entrepot de données", langage: "Back-end : Python ,Front-end : React", base: "Base de données : PostgreSQL" },
      { theme: "Gestion des achats et fournisseurs", langage: "Back-end : Python (Django), Front-end : React", base: "Base de données : PostgreSQL" },
    ]
  },
  {
    id: "php",
    title: "PHP",
    description: "Avec 4 ans d'expérience en PHP, j'ai réalisé des projets variés, notamment des applications web complexes et des systèmes de gestion. J'ai utilisé principalement les frameworks Laravel et Symfony.",
    items: [
      { theme: "Web Mapping : identification zone à risque et des tendances criminelles à Fianarantsoa", langage: "Back-end : PHP (Laravel), Front-end : React", base: "PostgreSQL" },
      { theme: "Quiz en ligne", langage: "Back-end : PHP (Laravel), Front-end : html, css", base: "MySQL" },
      { theme: "E-Commerce", langage: "Back-end : PHP (Symfony), Front-end : React", base: "MySQL" },
      { theme: "Réseau-sociaux Messenger", langage: "Back-end : PHP (Laravel), Front-end : React", base: "PostgreSQL" },
      { theme: "Gestion des étudiants et inscriptions", langage: "Back-end : PHP , Front-end : Html", base: "MySQL" },
    ]
  },

  {
    id: "cplusplus",
    title: "C++",
    description: "Avec 1 an d'expérience en C++, j'ai développé des systèmes embarqués, en particulier un système Arduino pour la détection de mouvement, de sons et de distance.",
    items: [
      { theme: "Système Arduino de détection de mouvement, de sons et de distance", langage: "Back-end : C++, Outil : Tinkercad, Arduino IDE", base: "N/A" },
    ]
  },
     {
    id: "java",
    title: "Java",
    description: "Avec 4 ans d'expérience en Java, j'ai travaillé sur des projets intégrant des technologies modernes comme Spring Boot et Angular, principalement pour des applications de gestion.",
    items: [
      { theme: "Gestion des hôpitaux et rendez-vous", langage: "Back-end : Java, Front-end : Angular", base: "MySQL" },
      { theme: "Gestion des ventes et points de vente", langage: "Back-end : Java, Front-end : Angular", base: "MySQL" },
      { theme: "Site de gestion de commerce électronique", langage: "Back-end : Java (Spring Boot), Front-end : Angular", base: "MySQL" },
    ]
  },
];

const ProjetPersonnel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="p-5">
        <Tabs defaultValue="python" className="flex flex-col md:flex-row gap-[10px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-2 ">
            {skills.map(skill => (
              <TabsTrigger key={skill.id} value={skill.id}>{skill.title}</TabsTrigger>
            ))}
          </TabsList>
          <div className="min-h-[70vh] container mx-auto">
            {skills.map(skill => (
              <TabsContent key={skill.id} value={skill.id} className="w-full">
                <div className="flex flex-col gap-[5px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="">{skill.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {skill.items.map((item, index) => (
                        <li key={index} className="dark:bg-[#232329]  bg-white h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent font-bold">{item.theme}</span>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.langage}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.base}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ProjetPersonnel;
