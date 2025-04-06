"use client";

import { useState } from "react";
import { AboutSection } from "@/app/components/AboutSection";
import { EducationSection } from "@/app/components/EducationSection";
import { SkillsSection } from "@/app/components/SkillsSection";
import { FaCircle } from "react-icons/fa";
import { Typewriter } from "@/app/components/Typewriter";
import { Cards } from "../components/Card";

export function About() {
    const [activeSection, setActiveSection] = useState("about");
    const button_group_about = `text-platinum bg-transparent ${activeSection === 'about' ? 'bg-tropical-indigo' : ''} rounded-full h-10 px-4 py-2 flex items-center justify-center hover:scale-110 transition-all ease-in-out`;
    const button_group_skills = `text-platinum bg-transparent ${activeSection === 'skills' ? 'bg-tropical-indigo' : ''} rounded-full h-10 px-4 py-2 flex items-center justify-center hover:scale-110 transition-all ease-in-out`;
    const button_group_education = `text-platinum bg-transparent ${activeSection === 'education' ? 'bg-tropical-indigo' : ''} rounded-full h-10 px-4 py-2 flex items-center justify-center hover:scale-110 transition-all ease-in-out`;
    const [text, setText] = useState("about --me temp");
    const descriptions  = {
                            "about": "about --me",
                            "skills": "skills --me",
                            "education": "education --me"
                          };



    return (
        <section className="flex w-full px-10 border-b border-platinum h-dvh">

            <div className="max-w-7xl mx-auto flex flex-col justify-stretch py-30 border-l-(10) border-indigo-500 gap-10">
                
                {/*buttons for about and skills*/}
                <div className="flex flex-row gap-12 items-center justify-start">

                    <div className="text-platinum text-4xl md:text-6xl font-bold text-center">
                        about me
                    </div>

                    <div className="text-platinum text-2xl md:text-4xl font-bold text-center">
                        |
                    </div>

                    <div className="flex gap-10 items-center">
                        <div className="flex  bg-tekehelet gap-10 rounded-full p-1 items-center">
                            <button onClick={() => setActiveSection("about")} className={button_group_about}>
                                about
                            </button>
                            <button onClick={() => setActiveSection("education")} className={button_group_education}>
                                education
                            </button>
                            <button onClick={() => setActiveSection("skills")} className={button_group_skills}>
                                skills
                            </button>
                        </div>
                    </div>
                </div>
                
                {/*sections*/}
                <div className="flex flex-col bg-slate-800 rounded-lg px-4 pb-3 border-tekehelet border-2 max-w-3xl max-h-3xl">
                            {/* top temrinal aethetic */}
                
                            <div className="flex items-center gap-4 border-b border-tekehelet max-w">
                                <div className="flex gap-2">
                                    <FaCircle className="text-red-500" />
                                    <FaCircle className="text-yellow-500" />
                                    <FaCircle className="text-green-500" />
                                </div>
                                <div className="text-slate-500 text-sm py-3">
                                    terminal
                                </div>
                            </div>
                        
                            <div className="flex gap-4 py-2">
                                <a className="font-bold text-pretty text-green-500">$</a> 
                                <a className="font-bold text-pretty text-green-500">
                                    <Typewriter key={activeSection} text={descriptions[activeSection]} speed={50} />
                                </a> 
                            </div>

                            <div className="flex max-w">
                                {activeSection === "about" && <AboutSection />}
                                {activeSection === "skills" && <SkillsSection />}
                                {activeSection === "education" && <EducationSection />}
                            </div>
                                
                            
                </div>
            </div>
            
        </section>
    );
};