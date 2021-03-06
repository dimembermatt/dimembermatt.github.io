import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    scrollToTop(el) {
        window.scroll(0, 0);
    }
    scrollTo(el) {
        scrollTo(0, window.innerHeight*1.05*el)
    }
}
