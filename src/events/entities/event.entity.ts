
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Event {

    @PrimaryGeneratedColumn()
       eventId:number


       @Column()
       eventName:string


       @Column()
       description:string


       @Column()
       date:Date

       @Column()
       UserId:number


       @ManyToOne(() => User, (user) => user.events,  {eager:true}) // Many events to one user
       user: User;
}
