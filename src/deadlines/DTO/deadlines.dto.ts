import {CreateMemberDto} from "../../members/dto/create-member.dto";
import {ApiProperty} from "@nestjs/swagger";

export class DeadlinesDto {
    @ApiProperty()
    id: number;
    name: string;
    members: CreateMemberDto[];
    deadline: Date;
    link: string;
    isActive: boolean;
}