import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component';


@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweet of tweets" class="media">
            <tweet [data]="tweet" ></tweet>
        </div>
    `,
    directives:[TweetComponent]
})
export class AppComponent {
    tweets = [
        {
            user : 'Ibrahim',
            userName : 'iam_ibrahim',
            tweet : 'Testing a tweet',
            tweetPic : "http://lorempixel.com/100/100/people?1",
            isLike : true,
            likeCount : 10
        },
        {
            user : 'Ibrahim',
            userName : 'iam_ibrahim',
            tweet : 'Testing a tweet',
            tweetPic : "http://lorempixel.com/100/100/people?2",
            isLike : false,
            likeCount : 11
        },
        {
            user : 'Ibrahim',
            userName : 'iam_ibrahim',
            tweet : 'Testing a tweet',
            tweetPic : "http://lorempixel.com/100/100/people?3",
            isLike : false,
            likeCount : 12
        }
    ]
 }