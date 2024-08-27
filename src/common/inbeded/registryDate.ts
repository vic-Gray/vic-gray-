import { CreateDateColumn, UpdateDateColumn } from "typeorm";


export class  registryDate{

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;
}