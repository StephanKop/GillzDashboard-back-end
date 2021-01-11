import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {NotesService} from './notes.service';
import {CreateNoteDto} from './dto/create-note.dto';
import {UpdateNoteDto} from './dto/update-note.dto';
import {CreateDeadlinesDto} from '../deadlines/DTO/create.deadlines.dto';
import {DeadlinesDto} from '../deadlines/DTO/deadlines.dto';

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) {
    }

    @Get()
    getNotes(@Param() params) {
        return this.notesService.getNotes();
    }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    //   return this.notesService.update(+id, updateNoteDto);
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.notesService.remove(+id);
    }

    // @Post()
    // create(@Body() createNoteDto: CreateNoteDto) {
    //   return this.notesService.create(createNoteDto);
    // }
    @Post()
    async createDeadline(@Body() note: CreateNoteDto): Promise<CreateNoteDto> {
        return await this.notesService.createNotes(note);
    }
}
