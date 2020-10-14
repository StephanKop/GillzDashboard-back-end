import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {MemberEntity} from "../members/entities/member.entity";

@Entity()
export class DeadlinesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => MemberEntity, {eager: true})
    @JoinTable()
    members: MemberEntity[];

    @Column()
    deadline: Date;

    @Column()
    link: string;

    @Column({ default: true })
    isActive: boolean;
}