import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponet {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angula Forms',
                imageUrl: '',
                price: 25.50,
                code: 'FRONT-END:25548',
                duration: 120,
                rating: 8,
                releaseDate: 'May, 31, 2020'
            },
            {
                id: 1,
                name: 'Angula HTTP',
                imageUrl: '',
                price: 25.50,
                code: 'FRONT-END:8000',
                duration: 120,
                rating: 6,
                releaseDate: 'May, 29, 2020'
            }
        ]
    }
}