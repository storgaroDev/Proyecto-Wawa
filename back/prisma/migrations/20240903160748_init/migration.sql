-- CreateTable
CREATE TABLE "BusRoute" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "routeNumber" TEXT NOT NULL,
    "departure" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departureTime" DATETIME NOT NULL,
    "arrivalTime" DATETIME NOT NULL
);
