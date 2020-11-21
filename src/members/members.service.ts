import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {CreateNoteDto} from "../notes/dto/create-note.dto";
import {NoteEntity} from "../notes/entities/note.entity";
import {MemberEntity} from "./entities/member.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm/index";
import {CreateDeadlinesDto} from "../deadlines/DTO/create.deadlines.dto";
import {DeadlinesEntity} from "../deadlines/deadlines.entity";

@Injectable()
export class MembersService {

  constructor(
      @InjectRepository(MemberEntity)
      private memberRepository: Repository<MemberEntity>,
  ) {}

  getMembers(): Promise<MemberEntity[]> {
    return this.memberRepository.find();
  }

  getMember(id): Promise<MemberEntity[]> {
    return this.memberRepository.find({where: {id}});
  }

  create(createMemberDto: CreateMemberDto) {
    return 'This action adds a new member';
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

  createMember(member: CreateMemberDto): Promise<MemberEntity> {
    return this.memberRepository.save(member);
  }

  updateMember(id: string, member: UpdateMemberDto): Promise<MemberEntity> {
    return this.memberRepository.save({...member, id: Number(id)});
  }
}
