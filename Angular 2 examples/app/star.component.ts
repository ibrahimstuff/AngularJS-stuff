import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: "star",
    templateUrl: "app/view/star.template.html",
    styles: [`
        .glyphicon-star {
            color : orange;
        }
    `]
})

export class StarComponent {
    @Input('is-star') isStar = false;

    @Output() change = new EventEmitter();
    onStar() {
        this.isStar = !this.isStar;
        this.change.emit({ newValue: this.isStar });
    }
}