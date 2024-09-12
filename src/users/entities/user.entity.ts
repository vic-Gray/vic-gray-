

import { registryDate } from "src/common/inbeded/registryDate";
import { Event } from "src/events/entities/event.entity";
import { Column, CreateDateColumn, Entity, ObjectIdColumn, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

    @OneToMany(() => Event, (event) => event.user)
    events: Event[];
    @Column(() => registryDate, {prefix:false})
   registeryDAte:registryDate;
}
