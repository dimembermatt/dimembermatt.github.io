import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';
import { SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.css', '../app.component.css'],
    providers: [sanitizeHtmlPipe],
})
export class SectionComponent implements OnInit {
    @Input() title: string;
    @Input() contentLink: string;
    @Input() image: string;
    @Input() link: string;
    @Input() linkOpt: string;

    content: SafeHtml;

    constructor(
        private httpService: HttpClient, private sanitize: sanitizeHtmlPipe) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log("Loading into section: " + this.contentLink);
        this.httpService.get('assets/data/SectionHTML/' + this.contentLink, {responseType: 'text'})
        .subscribe(data => {
            this.content = this.sanitize.transform(data);
        });
        console.log("link:" + this.link);
    }

}
