import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsDateString, IsNumber } from 'class-validator';

@InputType()
export class CreateBusRouteInput {
  @Field()
  @IsNotEmpty({ message: 'Route number cannot be empty' })
  @IsString({ message: 'Route number must be a string' })
  routeNumber: string;

  @Field()
  @IsNotEmpty({ message: 'Departure location cannot be empty' })
  @IsString({ message: 'Departure location must be a string' })
  departure: string;

  @Field()
  @IsNotEmpty({ message: 'Destination cannot be empty' })
  @IsString({ message: 'Destination must be a string' })
  destination: string;

  @Field()
  @IsNotEmpty({ message: 'Departure time cannot be empty' })
  @IsDateString()
  departureTime: string;

  @Field()
  @IsNotEmpty({ message: 'Arrival time cannot be empty' })
  @IsDateString()
  arrivalTime: string;

  @Field()
  @IsNotEmpty({ message: 'Price cannot be empty' })
  @IsNumber()
  price: number;

  @Field()
  @IsNumber()
  busCapacity: number;
}
