import { Entity, Column, PrimaryGeneratedColumn, ManyToMany} from 'typeorm';
import {DeadlinesEntity} from "../../deadlines/deadlines.entity";

@Entity()
export class MemberEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    present: boolean;

    // @ManyToMany(() => DeadlinesEntity, deadline => deadline.members)
    // deadlines: DeadlinesEntity[];
}
