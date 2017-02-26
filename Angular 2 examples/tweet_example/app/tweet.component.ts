import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    templateUrl: 'app/view/tweet.template.html',
    styles: [`
        .username {
            color : gray;
        }
    `],
    directives: [LikeComponent]
})

export class TweetComponent {
    constructor() {
        console.log(this.data);
    }

    @Input() data;
    
    
}