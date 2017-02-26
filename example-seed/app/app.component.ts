import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component'
import {StarComponent} from './star.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App
            <!--<courses></courses>
            <authors></authors>-->
            <star [is-star]="post.isStar" (change)="onStarClick($event)"></star>
        </h1>
    `,
    directives: [CoursesComponent,AuthorsComponent,StarComponent]
})
export class AppComponent {
    post = {
        title : "title",
        isStar: true
    }
    onStarClick($event) {
        console.log($event)
    }
 }