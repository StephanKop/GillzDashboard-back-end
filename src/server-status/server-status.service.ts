import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import {ServerStatusEntity} from "../server-status/server-status.entity";

@Injectable()
export class ServerStatusService {
    // servers = [
    //         {
    //             id: 1,
    //             name: "Server 01",
    //             disk: "Ok",
    //             memory: "Ok",
    //             status: "Available"
    //         },
    //         {
    //             id: 2,
    //             name: "Server 02",
    //             disk: "Error",
    //             memory: "Error",
    //             status: "Unavailable"
    //         },
    //         {
    //             id: 3,
    //             name: "Server 03",
    //             disk: "Ok",
    //             memory: "Ok",
    //             status: "Available"
    //         },
    //         {
    //             id: 4,
    //             name: "Server 04",
    //             disk: "Ok",
    //             memory: "Ok",
    //             status: "Available"
    //         },
    //         {
    //             id: 5,
    //             name: "Server 05",
    //             disk: "Ok",
    //             memory: "Ok",
    //             status: "Available"
    //         },
    //         {
    //             id: 6,
    //             name: "Server 06",
    //             disk: "Ok",
    //             memory: "Ok",
    //             status: "Available"
    //         },
    //     ];

    constructor(
        @InjectRepository(ServerStatusEntity)
        private ServerStatusRepository: Repository<ServerStatusEntity>,
    ) {}

    getServerStatus(): Promise<ServerStatusEntity[]> {
        return this.ServerStatusRepository.find();
    }

    // getServerStatus() {
    //     return this.servers;
    //     }
    // createServer(server) {
    //     this.servers = [...this.servers, {...server}];
    // }
    // updateServer(server) {
    //     this.servers = this.servers.map(s => {
    //         if (s.id == server.id) {
    //             return { ...server};
    //         }
    //         return s;
    //     });
    // }
    // deleteServer(id) {
    //     this.servers = this.servers.filter(p => p.id != id);
    // }

}
