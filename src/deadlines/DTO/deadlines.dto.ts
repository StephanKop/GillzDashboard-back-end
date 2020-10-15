import {CreateMemberDto} from "../../members/dto/create-member.dto";

export class DeadlinesDto {
    id: number;
    name: string;
    members: CreateMemberDto[];
    deadline: Date;
    link: string;
    isActive: boolean;
}