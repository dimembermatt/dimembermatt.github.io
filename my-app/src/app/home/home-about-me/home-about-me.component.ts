import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-home-about-me',
    templateUrl: './home-about-me.component.html',
    styleUrls: ['./home-about-me.component.css']
})
export class HomeAboutMeComponent implements OnInit {
    constructor (private httpService: HttpClient) { }
    aboutMeData: string [];

    // grab data from about-me.json in assets and use in html to display for each 4x5 card.
    ngOnInit() {
        this.httpService.get('../../assets/about-me.json').subscribe(
            data => {
                this.aboutMeData = data as string [];	 // FILL THE ARRAY WITH DATA.
                console.log(this.aboutMeData);
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );
    }

}
