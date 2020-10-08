import { Injectable } from '@nestjs/common';

@Injectable()
export class DeadlinesService {
    deadlines = [
        {
            id: 1,
            name: "Dashboard",
            members: [
                {
                    name: "Stephan",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
            ],
            deadline: "13-10-2020",
            days: "100",
            link: "/project-dashboard"
        },
        {
            id: 2,
            name: "Aquon",
            members: [
                {
                    name: "Jeremy",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
                {
                    name: "Lars",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
                {
                    name: "Jelmer",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
            ],
            deadline: "9-10-2020",
            days: "80",
            link: "/project-aquon"
        },
        {
            id: 3,
            name: "Gillz website",
            members: [
                {
                    name: "Jeremy",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
            ],
            deadline: "15-11-2020",
            days: "90",
            link: "/project-gillz-website"
        },
        {
            id: 4,
            name: "NDW",
            members: [
                {
                    name: "Bob",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
                {
                    name: "Lars",
                    image: "https://i.imgur.com/EQsvpMA.jpg"
                },
            ],
            deadline: "15-12-2020",
            days: "70",
            link: "/project-ndw"
        }
    ]

    getDeadlines() {
        return this.deadlines;
    }
    createDeadline(deadline) {
        this.deadlines = [...this.deadlines, {...deadline}];
    }
    updateDeadline(deadline) {
        this.deadlines = this.deadlines.map(s => {
            if (s.id == deadline.id) {
                return { ...deadline};
            }
            return s;
        });
    }
    deleteDeadline(id) {
        this.deadlines = this.deadlines.filter(p => p.id != id);
    }
}
