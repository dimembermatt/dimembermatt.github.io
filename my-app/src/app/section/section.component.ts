import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css', '../app.component.css']
})
export class SectionComponent implements OnInit {
    @Input() title: string;
    @Input() content: string;
    @Input() image: string;
    @Input() link: string;
    @Input() linkOpt: string;

    constructor() {
    }

    ngOnInit() {
    }


}
