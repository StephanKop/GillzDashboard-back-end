import {CreateMemberDto} from "../../members/dto/create-member.dto";
import {DeadlinesEntity} from "../deadlines.entity";
import {ApiProperty} from "@nestjs/swagger";

export class CreateDeadlinesDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    members: CreateMemberDto[];
    @ApiProperty()
    deadline: Date;
    @ApiProperty()
    link: string;
    @ApiProperty()
    isActive: boolean;

    toDeadline() {
        return new DeadlinesEntity(
            {
                id: this.id,
                name: this.name,
                members: this.members,
                deadline: this.deadline,
                link: this.link,
                isActive: this.isActive
            }
        );
    }
}