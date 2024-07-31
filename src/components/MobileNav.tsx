"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../components/ui/Sheet";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import '../styles/global.css';

// Déclaration des types pour les liens
interface LinkItem {
    name: string;
    path: string;
}

const links: LinkItem[] = [
     { name: "home", path: "/" },
  { name: "formation", path: "/formation" },
  { name: "expérience", path: "/experience" },
  { name: "projetPersonnel", path: "/projetPersonnel" },
  { name: "compétences", path: "/competences" },
  { name: "contact", path: "/contact" }
];

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = () => {
        setIsOpen(false); // Close the sheet when a link is clicked
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
                className="flex justify-center items-center"
                onClick={() => setIsOpen(true)}
            >
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent
                className={`flex flex-col text-gray-200 transition-all ${
                    isOpen ? 'sheet-enter-active' : 'sheet-exit-active'
                }`}
            >
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link to="/">
                        <h1 className="text-4xl font-semibold">
                            Logo<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            to={link.path}
                            key={index}
                            onClick={handleLinkClick} // Close the sheet when a link is clicked
                            className={`${
                                link.path === location.pathname &&
                                "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
                <SheetClose className="absolute right-8 top-8 transition-opacity outline-none">
                    <IoMdClose className="text-3xl text-accent" />
                    <span className="sr-only">Close</span>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
