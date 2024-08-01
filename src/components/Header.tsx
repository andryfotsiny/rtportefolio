import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importation des icônes de soleil et de lune
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import '../styles/global.css';

const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <header className="p-5">
            <div className="p-2 flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-4xl font-semibold">Logo</h1>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Nav />
                </div>
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 px-3 py-2 border-2 border-gray-700 dark:border-gray-200 rounded-lg font-bold text-gray-700 dark:text-gray-200 transition-colors duration-300"
                >
                    {darkMode ? <FaSun className="text-2xl" /> : <FaMoon className="text-2xl" />}
                </button>

                <div className="md:hidden items-end">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;
