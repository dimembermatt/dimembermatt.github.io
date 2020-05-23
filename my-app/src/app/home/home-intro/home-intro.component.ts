import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { timer } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
    selector: 'app-home-intro',
    templateUrl: './home-intro.component.html',
    styleUrls: ['./home-intro.component.css', '../../app.component.css'],
    animations: [
        trigger('cycle', [
            state('on', style({
                opacity: 1,
            })),
            state('off', style({
                opacity: 0,
            })),
            transition('on <=> off', [
                animate('1.8s')   // should be half of DURATION
            ]),
        ]),
    ],
})
export class HomeIntroComponent implements OnInit {
    DURATION = 3600; // ms
    DELAY = 200; // ms, in order to wait for sections to load first
    descriptions: any[];
    description = "";
    idx = 0;
    currentState = 'on';

    constructor(private httpService: HttpClient) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        console.log("Loading tagline-descriptions array.");
        // grab data on descriptions
        this.httpService.get('../assets/data/tagline-descriptions.json').subscribe(
            data => {
                this.descriptions = data as string [];	 // FILL THE ARRAY WITH DATA.
                console.log(this.descriptions);

                // display static title of the first 3 lines in tagline-descriptions.json
                for(let i = 0; i < 3; i++) {
                    this.description += this.descriptions[i].title + "\n";
                }
            },
            (err: HttpErrorResponse) => {
                console.log (err.message);
            }
        );

        // // counter that swaps tag description
        // const switchDescription = timer(0+this.DELAY, this.DURATION);
        // switchDescription.subscribe(x => {
        //     this.idx = x%this.descriptions.length;
        //     this.description = this.descriptions[this.idx].title;
        //     console.log(this.idx);
        // });
        // // counter that calls fade in/fade out
        // const fadeSwitch = timer(this.DURATION/2 + this.DELAY, this.DURATION/2);
        // fadeSwitch.subscribe(x => {
        //     this.currentState = this.currentState === 'on' ? 'off' : 'on';
        // });
    }
}
