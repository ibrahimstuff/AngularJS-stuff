import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses Component</h2>
        {{ title }}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#test of courses">
                <span>{{test}}</span>
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title = "the title of courses page";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}