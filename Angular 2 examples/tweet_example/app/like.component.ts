import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'like',
    template : `
        <i class="glyphicon glyphicon-heart"
            [class.highlighted]="isLike"
            (click)="onLike()">
        </i>
        <span>{{likeCount}}</span>
    `,
    styles : [`
        .glyphicon-heart {
            color : #ccc;
            cursor : pointer;
        }
        .highlighted {
            color : deeppink;
        }    
    `]
})

export class LikeComponent {
    @Input() isLike;
    @Input() likeCount;
    //@Output() count = new EventEmitter();

    onLike() {
        this.isLike = !this.isLike;
        this.likeCount += this.isLike ? 1 : -1;
      //  this.count.emit({ likeCount : this.likeCount});
    }
}