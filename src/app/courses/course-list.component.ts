import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseSerive } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponet implements OnInit {
    courses: Course[] = [];

    constructor(private courseService: CourseSerive) {

    }

    ngOnInit(): void {
        this.courses = this.courseService.retrieveAll();
    }
}