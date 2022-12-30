import Image from "next/image";
import React from "react";
import { SocialLinks } from "../components/social-links";
import { ContactMe } from "../components/contact-me";
import Link from "next/link";
import { GraveyardProjects } from "../components/graveyard-projects";
import { CommonLayoutPage } from "../components/common-layout";

export default function Home() {
  return (
    <CommonLayoutPage>
      <section
        className="min-h-[calc(100vh-114px)] max-w-5xl mx-auto flex flex-col"
        id="about"
      >
        <div className="flex flex-col md:flex-row items-center  justify-between flex-1 p-4">
          <div className="flex flex-col md:pt-[calc(15vh)] max-w-md">
            <span className="text-4xl mb-3">👋</span>
            <h1 className="text-7xl text-white font-bold">Isaac</h1>
            <h2 className="text-2xl font-bold pt-5 text-[#1597BB]">
              Web developer
            </h2>
            <p className="text-gray-300 pt-5 text-lg">
              Soy un desarrollador web con +2 años de experiencia. Me gusta
              realizar proyectos personales para experimentar con nuevas
              tecnologías y aprender nuevas cosas.
            </p>
            <p className="text-gray-300 pt-5 text-lg">
              Bienvenido a mi sitio web, aquí podrás encontrar información sobre
              mi, mis proyectos, y mi blog.
            </p>
          </div>
          <div
            className="flex items-center mt-10 md:mt-[calc(15vh)] 
         md:h-[300px] md:w-[300px]
           lg:h-[400px] lg:w-[400px]
           h-[200px] w-[200px]
          relative"
          >
            <Image
              src={"/images/isaac.jpg"}
              alt="Picture of the author"
              className="rounded-full"
              fill
            />
          </div>
        </div>
        <div className="flex flex-row justify-between flex-1">
          <div className="flex flex-col pt-[calc(15vh)] mx-auto">
            <SocialLinks />
          </div>
        </div>
      </section>
      <GraveyardProjects className="flex flex-col justify-between items-center min-h-screen p-4 md:p-0 md:pt-10" />
      <ContactMe />
    </CommonLayoutPage>
  );
}
