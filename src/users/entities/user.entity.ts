import { registryDate } from "src/common/inbeded/registryDate";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User {
   @ObjectIdColumn()
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
   registeryDAte:registryDate;
}
