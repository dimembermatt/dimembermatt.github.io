import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    sections: string [];

    constructor(private httpService: HttpClient) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log("Loading sections.json to pass to sections.");
        // grab data on each sections
        this.httpService.get('../assets/data/sections.json').subscribe(
            data => {
                this.sections = data as string [];	 // FILL THE ARRAY WITH DATA.
                console.log(this.sections);
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );
    }

    scrollToTop(el) {
        window.scroll(0, 0);
    }
}
