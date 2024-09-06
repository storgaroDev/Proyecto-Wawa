export interface BusRoute {
  id: number;
  routeNumber: string;
  departure: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  busCapacity: number;
}

export interface BusRoutesData {
  busRoutes: BusRoute[];
}
