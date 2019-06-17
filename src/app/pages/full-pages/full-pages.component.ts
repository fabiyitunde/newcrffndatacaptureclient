import { Component, OnInit } from "@angular/core";

@Component({
  selector: "full-pages",
  template: `
    <router-outlet></router-outlet>
  `
})
export class FullPagesComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
