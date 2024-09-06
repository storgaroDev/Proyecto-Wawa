import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBusRouteInput } from '../DTO/create-bus-route';
import { BusRoute } from '@prisma/client';

@Injectable()
export class BusRoutesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBusRouteInput): Promise<BusRoute> {
    try {
      // Intentamos crear la ruta en la base de datos
      return await this.prisma.busRoute.create({ data });
    } catch (error) {
      // Si ocurre un error, lanzamos una excepción
      throw new BadRequestException('Failed to create bus route');
    }
  }

  async findAll(): Promise<BusRoute[]> {
    return this.prisma.busRoute.findMany();
  }

  async findOne(id: number): Promise<BusRoute | null> {
    try {
      const findRoute = await this.prisma.busRoute.findUnique({
        where: { id },
      });

      if (!findRoute) {
        throw new BadRequestException('Bus Route Not Found!');
      }

      return findRoute;
    } catch (error) {
      throw new BadRequestException('Error Fetching Bus Route');
    }
  }

  async update(id: number, data: CreateBusRouteInput): Promise<BusRoute> {
    try {
      return await this.prisma.busRoute.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new BadRequestException('Failed to update bus route');
    }
  }

  async remove(id: number): Promise<BusRoute> {
    try {
      return await this.prisma.busRoute.delete({ where: { id } });
    } catch (error) {
      throw new BadRequestException('Failed to delete bus route');
    }
  }
}
