import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {CreateNoteDto} from "../notes/dto/create-note.dto";

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}
  
  // @Post()
  // create(@Body() createMemberDto: CreateMemberDto) {
  //   return this.membersService.create(createMemberDto);
  // }

  @Post()
  async createMember(@Body() member: CreateMemberDto):Promise<CreateMemberDto> {
    return await this.membersService.createMember(member)
  }

  @Get()
  getMembers(@Param() params) {
    return this.membersService.getMembers();
  }

  @Get(':id')
  getMember(@Param() params) {
    return this.membersService.getMember(params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMemberDto: UpdateMemberDto) {
    return this.membersService.updateMember(id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(+id);
  }
}
