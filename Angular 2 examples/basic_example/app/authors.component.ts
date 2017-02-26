import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{title}}
        <ul>
            <li *ngFor="#author of authors">
                <b><span>{{author}}</span></b>
            </li>
        </ul>
        <div (click)="onDivClick()">
            <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'gray'" (click)="onClick($event)">Submit</button>
        </div>
        <input type="text" [value]="title" (input)="title = $event.target.value" />
        `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "List of authours";
    authors;
    isActive = false;
    onDivClick() {
        console.log("handled by div");
    }
    onClick($event) {
        if(this.isActive) {
            this.isActive = false;
        } else {
            this.isActive = true;
        }
        console.log("Button Clicked", $event);
        $event.stopPropagation();
    }

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}