import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {MemberEntity} from "../members/entities/member.entity";

@Entity()
export class DeadlinesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => MemberEntity)
    @JoinTable()
    members: MemberEntity[];

    @Column()
    deadline: Date;

    @Column()
    link: string;

    @Column({ default: false })
    isActive: boolean;

    constructor(
        partial: Partial<DeadlinesEntity>
    ) {
        Object.assign(this, partial);
    }
}