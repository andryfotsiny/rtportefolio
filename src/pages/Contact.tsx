"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "../components/ui/Input";
import React, { useState, ChangeEvent } from 'react';

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+261342758301" },
  { icon: <FaEnvelope />, title: "Email", description: "andryfotsiny1410@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: "Address", description: "Lot 503a1/3710 Ampitakely Fianarantsoa Madagascar" },
];

const options = ["Fullstack", "Front-End", "Back-end", "React", "VueJs", "Python", "PHP", "Java", "C++", "C#", "R"];

const Contact: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions(prev =>
      prev.includes(value) ? prev.filter(option => option !== value) : [...prev, value]
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 dark:text-gray-200 dark:bg-gray-800 bg-white rounded-xl">
              <h3 className="text-4xl text-accent">Message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="Entreprise"  />
                <Input type="email" placeholder="Email" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="w-full dark:text-gray-200 dark:bg-gray-800 bg-white border-2 border-gray-400 rounded p-1">
                  {options.map((option, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedOptions.includes(option)}
                          onChange={handleCheckboxChange}
                          className="mr-2 "
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                <textarea className="w-full h-[100px] dark:text-gray-200 dark:bg-gray-800 bg-white border-2 border-gray-400 rounded" placeholder="type text" />
              </div>
              <button className="border border-blue-500 max-w-40 text-blue-500 rounded p-2 hover:bg-blue-500 hover:text-white transition">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] dark:text-gray-200 dark:bg-gray-800 bg-white rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
