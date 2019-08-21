import { Component, OnInit } from "@angular/core";
import { HomeService } from "./home.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {}

  individual() {
    this.router.navigate(["pages/individualforwarderslist"]);
  }
  corporate() {
    this.router.navigate(["pages/corporateforwarderslist"]);
  }

  createIndividual() {
    this.router.navigate(["pages/createindividual"]);
  }
  createCorporate() {
    this.router.navigate(["pages/createcorporate"]);
  }
}
