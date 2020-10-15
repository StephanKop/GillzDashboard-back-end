import {CreateMemberDto} from "../../members/dto/create-member.dto";
import {DeadlinesEntity} from "../deadlines.entity";

export class CreateDeadlinesDto {
    id: number;
    name: string;
    members: CreateMemberDto[];
    deadline: Date;
    link: string;
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