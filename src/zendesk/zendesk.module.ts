import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ZendeskEntity} from "./entities/zendesk.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ZendeskEntity])],
  exports: [TypeOrmModule]
})
export class ZendeskModule {}
