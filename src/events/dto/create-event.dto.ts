import { IsDate, IsInt, IsNumber } from 'class-validator';
export class CreateEventDto {
      

    readonly eventName:string


    
    readonly  description:string


        @IsDate()
    readonly  date:Date
      

    @IsNumber()
    userId:number
}
