import {Injectable} from '@nestjs/common';
import {CreateNoteDto} from './dto/create-note.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm/';
import {NoteEntity} from './entities/note.entity';

@Injectable()
export class NotesService {

    constructor(
        @InjectRepository(NoteEntity)
        private notesRepository: Repository<NoteEntity>
    ) {
    }

    getNotes(): Promise<NoteEntity[]> {
        return this.notesRepository.find();
    }

    createNotes(note: CreateNoteDto): Promise<NoteEntity> {
        return this.notesRepository.save(note);
    }

    remove(id: number) {
        return this.notesRepository.delete(id);
    }
}
