import {Component} from 'angular2/core'\
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
        `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title = "List of authours";
    authors;

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}