import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class ServerStatusEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    disk: string;

    @Column()
    memory: string;

    @Column()
    status: string;
    @Column({nullable: true})
    memoryTotal: number;
    @Column({nullable: true})
    memoryUsage: number;
    @Column({nullable: true})
    diskTotal: number;
    @Column({nullable: true})
    diskUsage: number;
}