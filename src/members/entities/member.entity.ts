import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {DeadlinesEntity} from '../../deadlines/deadlines.entity';
import {JoinTable, ManyToMany} from 'typeorm/index';

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
    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    jobTitle: string;

    // @ManyToMany(type => DeadlinesEntity)
    // @JoinTable()
    // deadlines: DeadlinesEntity[];
}
