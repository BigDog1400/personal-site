import Image from "next/image";
import React from "react";
import { CommonLayoutPage } from "../components/common-layout";
import { HeadMetadata } from "../components/head-metadata";


export default function Home() {
  return (
    <>
      <HeadMetadata />
      <CommonLayoutPage>
      <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900">Mis cursos recomendados</h1>
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex flex-col p-4 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-lg font-medium text-gray-900">Curso de HTML</h2>
            <a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" target="_blank" className="text-blue-600 hover:text-blue-800">
              Ir al curso &rarr;
            </a>
          </div>
          <div className="flex flex-col p-4 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-lg font-medium text-gray-900">Curso de Javascript</h2>
            <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" className="text-blue-600 hover:text-blue-800">
              Ir al curso &rarr;
            </a>
          </div>
          <div className="flex flex-col p-4 bg-white rounded-lg shadow">
            <h2 className="mb-4 text-lg font-medium text-gray-900">Curso de React</h2>
            <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" className="text-blue-600 hover:text-blue-800">
              Ir al curso &rarr;
            </a>
          </div>
        </div>
        <p className="mt-6 text-gray-500">Ahora puedes empezar a buscar trabajo :)</p>
      </div>
      </CommonLayoutPage>
    </>
  );
}
