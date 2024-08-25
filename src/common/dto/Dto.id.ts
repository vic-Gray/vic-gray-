import { IsInt, IsPositive, isPositive } from "class-validator";




export class DtoId{
    @IsInt()
    @IsPositive()
    id:number
}