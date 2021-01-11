import {Entity, Column, PrimaryGeneratedColumn,} from 'typeorm';

@Entity()
export class ZendeskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column({default: true})
    isActive: boolean;
}
