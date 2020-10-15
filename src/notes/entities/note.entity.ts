import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class NoteEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @Column({ default: true })
    isActive: boolean;
}
