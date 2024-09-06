"use client";

import React from "react";

const HomePage: React.FC = () => {
  return (
    <section className="bg-[url('/imgs/imagen5.jpg')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center p-6 md:p-16 lg:p-24">
      <div className="text-center max-w-screen-lg px-4">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight text-purple-900 drop-shadow-md mb-4 ">
          ¿Ganas de salir y no sabes a dónde ir?
        </h1>
        <p className="text-base md:text-lg lg:text-xl font-semibold text-purple-900 drop-shadow-md mb-6">
          Haz clic en los botones de abajo para conocer nuestras rutas y los
          mejores precios.
        </p>
        <a
          href="/routes"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-white bg-green-700 border border-green-700 rounded-lg hover:bg-green-500 focus:ring-4 focus:ring-green-300 transition-colors duration-300"
        >
          Ver Rutas
        </a>
      </div>
    </section>
  );
};

export default HomePage;
