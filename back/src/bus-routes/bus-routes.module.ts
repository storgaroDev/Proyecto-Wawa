import { Module } from '@nestjs/common';
import { BusRoutesService } from './Service/bus-routes.service';
import { BusRoutesResolver } from './Resolver/bus-routes.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BusRoutesService, BusRoutesResolver],
})
export class BusRoutesModule {}
