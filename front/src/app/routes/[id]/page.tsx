"use client";

import React from "react";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import Swal from "sweetalert2";
import { BusRoutesData, BusRoute } from "@/types/busRoutes";

const GET_BUS_ROUTE = gql`
  query getBusRoute($id: Int!) {
    busRoute(id: $id) {
      id
      routeNumber
      departure
      destination
      departureTime
      arrivalTime
      price
      busCapacity
    }
  }
`;

export default function RouteDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { data, error } = useSuspenseQuery<{ busRoute: BusRoute }>(
    GET_BUS_ROUTE,
    {
      variables: { id: parseInt(params.id, 10) }, // Pasamos el ID de la URL como variable
    }
  );

  if (!data || error) {
    return notFound();
  }

  const route = data.busRoute;

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <section className="bg-[url('/imgs/imagen8.png')] bg-cover bg-center min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-lg text-left">
        <h1 className="text-4xl font-bold mb-4">Detalles de la Ruta</h1>
        <p className="text-lg mb-2">
          Origen 📍: <span className="font-semibold">{route.departure}</span>
        </p>
        <p className="text-lg mb-2">
          Destino 📍: <span className="font-semibold">{route.destination}</span>
        </p>
        <p className="text-lg mb-2">
          Precio 💲: <span className="font-semibold">${route.price}</span>
        </p>
        <p className="text-lg mb-2">
          Hora de salida ⏰:{" "}
          <span className="font-semibold">{route.departureTime}</span>
        </p>
        <p className="text-lg mb-2">
          Hora de llegada ⏰:{" "}
          <span className="font-semibold">{route.arrivalTime}</span>
        </p>
        <p className="text-lg mb-2">
          Capacidad del auobus 🚌:{" "}
          <span className="font-semibold">{route.busCapacity}</span>
        </p>
        <button
          onClick={() =>
            Toast.fire({
              icon: "success",
              title: "Viaje agendado exitosamente!",
            })
          }
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          Agendar viaje
        </button>
      </div>

      <div className="pt-4 ">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Volver
        </button>
      </div>
    </section>
  );
}
