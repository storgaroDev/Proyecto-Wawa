"use client";

import React from "react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client";
import Link from "next/link";
import { BusRoute, BusRoutesData } from "@/types/busRoutes";

const query = gql`
  query {
    busRoutes {
      id
      routeNumber
      departure
      destination
      price
    }
  }
`;

export default function Routes() {
  const { data } = useSuspenseQuery<BusRoutesData>(query);

  if (!data) return <div>Loading...</div>;

  return (
    <section className="bg-[url('/imgs/imagen8.png')] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-start p-4">
      {/* Texto superior */}
      <div className="w-full text-center py-6 pt-32">
        <h2 className="text-3xl font-extrabold text-white">
          Nuestras rutas disponibles
        </h2>
      </div>

      <div className="bg-gray-800 relative shadow-md w-full max-w-screen-xl mt-6 rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Origen ➡️ Destino
                </th>
                <th scope="col" className="px-4 py-3">
                  Valoración
                </th>
                <th scope="col" className="px-4 py-3">
                  Precio
                </th>
                <th scope="col" className="px-8 py-3">
                  Más info
                </th>
              </tr>
            </thead>
            <tbody>
              {data.busRoutes.map((route: BusRoute) => (
                <tr key={route.id} className="border-b dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {route.departure} ➡️ {route.destination}
                  </td>
                  <td className="px-4 py-3 flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="h-4 w-4 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
                      5.0
                    </p>
                  </td>
                  <td className="px-4 py-3 text-2xl font-extrabold text-gray-900 dark:text-white">
                    ${route.price}
                  </td>
                  <td className="px-4 py-3 flex justify-center">
                    <Link
                      href={`/routes/${route.id}`}
                      className="relative px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      <span className="hidden sm:inline">Saber más</span>
                      <svg
                        className="sm:hidden h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Volver
        </Link>
      </div>
    </section>
  );
}
