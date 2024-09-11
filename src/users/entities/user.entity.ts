import { registryDate } from "src/common/inbeded/registryDate";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User {
   @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

   @Column()
    phone:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column(() => registryDate, {prefix:false})
   registeryDAte:registryDate;
}
