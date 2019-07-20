import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    sections: string [];

    constructor(private httpService: HttpClient) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // TODO: Load section data (just the section titles)
        console.log("Loading sections.json to pass to navbar.");
        // grab data on each section
        this.httpService.get('../assets/data/sections.json').subscribe(
            data => {
                this.sections = data as string [];	 // FILL THE ARRAY WITH DATA.
                console.log(this.sections);
            },
            (err: HttpErrorResponse) => {
                console.log(err.message);
            }
        );
        // TODO: Add intro and contact section to the front and end of the array `sections`.
    }
}
