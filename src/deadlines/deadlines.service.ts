import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeadlinesEntity } from './deadlines.entity';

@Injectable()
export class DeadlinesService {
    // deadlines = [
    //     {
    //         id: 1,
    //         name: "Dashboard",
    //         members: [
    //             {
    //                 name: "Stephan",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //         ],
    //         deadline: "2020-10-17",
    //         link: "/project-dashboard"
    //     },
    //     {
    //         id: 2,
    //         name: "Aquon",
    //         members: [
    //             {
    //                 name: "Jeremy",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //             {
    //                 name: "Lars",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //             {
    //                 name: "Jelmer",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //         ],
    //         deadline: "2021-12-3",
    //         link: "/project-aquon"
    //     },
    //     {
    //         id: 3,
    //         name: "Gillz website",
    //         members: [
    //             {
    //                 name: "Jeremy",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //         ],
    //         deadline: "2020-11-13",
    //         link: "/project-gillz-website"
    //     },
    //     {
    //         id: 4,
    //         name: "NDW",
    //         members: [
    //             {
    //                 name: "Bob",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //             {
    //                 name: "Lars",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //         ],
    //         deadline: "2020-11-04",
    //         link: "/project-ndw"
    //     },
    //     {
    //         id: 5,
    //         name: "DPG",
    //         members: [
    //             {
    //                 name: "Bob",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //         ],
    //         deadline: "2020-11-22",
    //         link: "/project-dpg"
    //     },
    //     {
    //         id: 6,
    //         name: "HTG",
    //         members: [
    //             {
    //                 name: "Ron",
    //                 image: "https://i.imgur.com/EQsvpMA.jpg"
    //             },
    //         ],
    //         deadline: "2020-10-14",
    //         link: "/project-htg"
    //     },
    // ]

    constructor(
        @InjectRepository(DeadlinesEntity)
        private deadlinesRepository: Repository<DeadlinesEntity>,
    ) {}

    getDeadlines(): Promise<DeadlinesEntity[]> {
        return this.deadlinesRepository.find();
    }

    getFourDeadlines(isActive: boolean): Promise<DeadlinesEntity[]> {
        return this.deadlinesRepository.find({isActive});
    }

    // createDeadline(deadline: DeadlinesDto): Promise<DeadlinesEntity> {
    //    return this.deadlinesRepository.save(deadline);
    // }
    //
    // async updateDeadline(id: string): Promise<void> {
    //     await this.deadlinesRepository.put(id);
    // }
    //
    // async deleteDeadline(id: string): Promise<void> {
    //     await this.deadlinesRepository.delete(id);
    // }
}
