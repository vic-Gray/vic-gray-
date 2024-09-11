import { IsInt, IsOptional, IsPositive } from "class-validator";


export class pagination{
 
    @IsOptional()
    @IsInt()
    @IsPositive()
    readonly limit:number






    @IsOptional()
    @IsInt()
    @IsPositive()
    readonly offset:number
}