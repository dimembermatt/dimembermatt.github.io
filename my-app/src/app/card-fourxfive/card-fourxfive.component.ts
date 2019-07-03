import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-fourxfive',
    templateUrl: './card-fourxfive.component.html',
    styleUrls: ['./card-fourxfive.component.css']
})
export class CardFourxfiveComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
    // add input for image, url later

    constructor() {
    }

    ngOnInit() {
    }

}
