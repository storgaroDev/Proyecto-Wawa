# Prueba Técnica la Wawa

Este proyecto es una prueba técnica que consta de un backend desarrollado con NestJS, Prisma y GraphQL, y un frontend desarrollado con Next.js.

## Instrucciones para ejecutar el proyecto

### Instalación de dependencias

1. Clona el repositorio en tu máquina local:
   ```bash
   git clone https://github.com/storgaroDev/Proyecto-Wawa.git
   ```

2. Navega al directorio del backend o frontend y ejecuta el siguiente comando para instalar las dependencias necesarias:

   ```bash
   npm install
   ```

### Ejecución del Backend

El backend está desarrollado con NestJS, y corre en el puerto **8080**. Para ejecutarlo en modo desarrollo, usa el siguiente comando:

```bash
npm run start:dev
```

### Ejecución del Frontend

El frontend está desarrollado con Next.js, y corre en el puerto **3000**. Para ejecutarlo en modo desarrollo, usa el siguiente comando:

```bash
npm run dev
```

## Endpoints de GraphQL en el Backend

El backend ofrece una API GraphQL para la gestión de rutas de autobuses. A continuación se muestran algunos ejemplos de consultas y mutaciones que se pueden realizar.

### Crear una ruta de autobús

```graphql
mutation {
  createBusRoute(input: {
    routeNumber: "102"
    departure: "Caracas"
    destination: "La Guaira"
    departureTime: "2024-09-03T09:00:00Z"
    arrivalTime: "2024-09-03T11:00:00Z"
    price: 100
    busCapacity
  }) {
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
```

### Buscar todas las rutas

```graphql
query {
  busRoutes {
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
```

### Buscar una ruta por ID

```graphql
query {
  busRoute(id: 1) {
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
```

### Actualizar una ruta de autobús

```graphql
mutation {
  updateBusRoute(id: 1, input: {
    routeNumber: "103"
    departure: "City E"
    destination: "City F"
    departureTime: "2024-09-04T10:00:00Z"
    arrivalTime: "2024-09-04T12:00:00Z"
   price: 100
   busCapacity: 1
  }) {
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
```

### Eliminar una ruta de autobús

```graphql
mutation {
  removeBusRoute(id: 1) {
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
```
