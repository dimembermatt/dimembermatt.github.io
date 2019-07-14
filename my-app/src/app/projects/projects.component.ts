import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['../../assets/stylesheets/majorSections.css']
})
export class ProjectsComponent implements OnInit {
    projects: string [];
    extLink = "";
    extLinkOpt = "none";

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      console.log("Loading projects.json to pass to sections.");
      // grab data on each section
      this.httpService.get('../assets/data/projects.json').subscribe(
          data => {
              this.projects = data as string [];
              console.log(this.projects);
          },
          (err: HttpErrorResponse) => {
              console.log(err.message);
          }
      )
  }

  open(event) {
      console.log("Click");
      console.log(event);
      var panel = event.srcElement.nextElementSibling;
      if (panel.style.display === "block") {
          panel.style.display = "none";
      } else {
          panel.style.display = "block";
          panel.children["0"].style.height = "95vh";
      }
      window.scroll(0, event.srcElement.offsetTop);
  }
}
