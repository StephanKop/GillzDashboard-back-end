import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MemberEntity} from './entities/member.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MemberEntity])],
    exports: [TypeOrmModule]
})
export class MembersModule {
}
