import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponet implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angula Forms',
                imageUrl: '/assets/images/forms.png',
                price: 25.50,
                code: 'FRONT-END:25548',
                duration: 120,
                rating: 4.5,
                releaseDate: 'May, 31, 2020'
            },
            {
                id: 1,
                name: 'Angula HTTP',
                imageUrl: '/assets/images/http.png',
                price: 25.50,
                code: 'FRONT-END:8000',
                duration: 120,
                rating: 4,
                releaseDate: 'May, 29, 2020'
            }
        ]
    }
}