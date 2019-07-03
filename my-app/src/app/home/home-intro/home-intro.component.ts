import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.css']
})
export class HomeIntroComponent implements OnInit {
  descriptions = [
      'Matthew Yu',
      // 'B.S. Electrical and Computer Engineering | May 2021',
      // 'The University of Texas at Austin',
      // `Solar Vehicle Array Lead`,
      // `Historian and Webmaster of IEEE RAS`,
      // `CX Intern at Cisco`
  ];

  constructor() { }

  ngOnInit() {
  }

}
