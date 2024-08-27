import { registryDate } from "src/common/inbeded/registryDate";
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User {
   
    id:string;

    @Column()
    name:string;

   @Column()
    phone:string;

    @Column()
    email:string;

    @Column()
    password:string;
     

    @Column(() => registryDate, {prefix:false})
   registeryDAte:registryDate
}
