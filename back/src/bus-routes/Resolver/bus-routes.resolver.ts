import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BusRoutesService } from '../Service/bus-routes.service';
import { BusRoute } from '../Models/bus-route.model';
import { CreateBusRouteInput } from '../DTO/create-bus-route';

@Resolver()
export class BusRoutesResolver {
  constructor(private readonly busRouteService: BusRoutesService) {}

  //Crear Rutas
  @Mutation(() => BusRoute)
  async createBusRoute(@Args('input') input: CreateBusRouteInput) {
    return this.busRouteService.create(input);
  }

  //Buscar todas las disponibles
  @Query(() => [BusRoute], { name: 'busRoutes' })
  async findAll() {
    return this.busRouteService.findAll();
  }

  //Buscar una sola
  @Query(() => BusRoute, { name: 'busRoute', nullable: true })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.busRouteService.findOne(id);
  }

  //Hacer el update de las rutas
  @Mutation(() => BusRoute)
  async updateBusRoute(
    @Args('id', { type: () => Int }) id: number,
    @Args('input') input: CreateBusRouteInput,
  ) {
    return this.busRouteService.update(id, input);
  }

  //Eliminar Rutas
  @Mutation(() => BusRoute)
  async removeBusRoute(@Args('id', { type: () => Int }) id: number) {
    return this.busRouteService.remove(id);
  }
}
