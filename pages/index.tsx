import Image from "next/image";
import React from "react";
import { SocialLinks } from "../components/social-links";
import { ContactMe } from "../components/contact-me";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex justify-center">
        <nav className="md:p-6 pt-4 pl-4 pr-4 md:flex flex-row justify-between items-center w-full max-w-4xl">
          <Link
            href="/"
            className="md:mr-24 mr-4 border-white border-2 pl-2 pr-10  text-white font-semibold text-2xl h-12 flex items-center
            
            w-fit
            "
          >
            Isaac
          </Link>

          <ul className="md:space-x-8 h-14 flex justify-around items-center gap-2">
            <li className="text-white text-sm md:text-base hover:text-gray-300">
              <Link href="/#about">Sobre mi</Link>
            </li>

            <li className="text-white text-sm md:text-base   hover:text-gray-300">
              <Link href="/#contact  ">Contacto</Link>
            </li>
            <li className="text-white text-sm md:text-base  hover:text-gray-300">
              <a href="/blog">Blog</a>
            </li>

            <li className="text-white text-sm md:text-base hover:text-gray-300">
              <a href="/graveyard">
                Graveyard projects <span className="text-red-500">👻</span>
              </a>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <section
        className="min-h-[calc(100vh-114px)] max-w-5xl mx-auto flex flex-col"
        id="about"
      >
        <div className="flex flex-col md:flex-row items-center  justify-between flex-1 p-4">
          <div className="flex flex-col md:pt-[calc(15vh)] max-w-md">
            <span className="text-4xl mb-3">👋</span>
            <h1 className="text-7xl text-white font-bold">Isaac</h1>
            <h2 className="text-2xl text-white font-bold pt-5">
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
      <ContactMe />
    </>
  );
}
