import { FiDownload } from "react-icons/fi";
import Stats from "../components/ui/Stats";
import Social from "../components/ui/Social";
import Photo from "../components/ui/Photo";
import andrycv from "../assets/andrycv.pdf";

import { useState, useEffect } from "react";

// xl:pt-8 xl:pb-24
// container mx-auto h-full
const handleDownload = () => {
  // Créez un lien temporaire pour télécharger le fichier
const link = document.createElement('a');
    link.href = andrycv;
  link.download = "andrycv.pdf"; // Nom du fichier lors du téléchargement
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <section className="h-full text-xl max-w-[1700px]">
      <div className="p-4 mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <div><Photo /></div>
          <div>
            <div className="color-change">
              <div className="h1">Développeur Web Fullstack</div>
            </div>
            <h1 className="text-3xl p-4">
              je me nomme<span className="text-accent"> ANDRINANTENAINA jean michel</span>
            </h1>
            <p className="max-w-[850px] mb-9 text-justify">
              Je suis un passionné des technologies de l'information et
              de la transformation numérique. Actuellement en
              deuxième année de Master en Ingénierie Informatique,
              j'ai enrichi mon parcours académique par la réalisation de
              plus de 30 projets. Cette expérience m'a permis de
              développer une expertise solide en langages
              informatiques et en développement Fullstack. Je suis
              motivé par la résolution de problèmes complexes et par
              l'optimisation des processus grâce à l'innovation
              technologique
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-5">
              <button
                className={`btn-download ${darkMode ? 'btn-download-dark' : 'btn-download-light'}`}
                onClick={handleDownload}
              >
                <span>Télécharger CV</span>
                <FiDownload className="text-2xl" />
              </button>
              <div className="mb-8 xl:mb-0 relative">social</div>
              <Social
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
