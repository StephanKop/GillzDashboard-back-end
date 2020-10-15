import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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
}
