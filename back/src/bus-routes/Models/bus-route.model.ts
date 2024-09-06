import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BusRoute {
  @Field(() => Int)
  id: number;

  @Field()
  routeNumber: string;

  @Field()
  departure: string;

  @Field()
  destination: string;

  @Field()
  departureTime: Date;

  @Field()
  arrivalTime: Date;

  @Field()
  price: number;

  @Field()
  busCapacity: number;
}
