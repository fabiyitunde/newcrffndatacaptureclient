import { Component, OnInit, ViewChild } from "@angular/core";
import { UpdateCertificateRegisterService } from "./updatecertificateregister.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ItemsList } from "@ng-select/ng-select/ng-select/items-list";
@Component({
  selector: "app-updatecertificateregister",
  templateUrl: "./updatecertificateregister.component.html",
  styleUrls: ["./updatecertificateregister.component.scss"],
  providers: [UpdateCertificateRegisterService]
})
export class UpdatecertificateregisterComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};

  constructor(
    private service: UpdateCertificateRegisterService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];

      this.service
        .getcertificateregisterdetail(this.recordid)
        .subscribe(result => {
          this.item = result;
          console.log(this.item);
        });
    });
  }

  category() {
    if (this.item.category === "1") {
      return (this.item.description = "staff");
    } else if (this.item.category === "2") {
      return (this.item.description = "Executive");
    } else if (this.item.category === "3") {
      return (this.item.description = "Company");
    } else {
      return (this.item.description = "Service Provider");
    }
  }
  submit() {
    this.category();

    this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
    this.data.categorycode = this.item.category;
    this.data.categorydescription = this.item.description;
    this.data.mongo_id = this.recordid;
    this.data.name = this.item.name;
    this.data.membershipnumber = this.item.membershipnumber;

    console.log(this.data);
    this.service.saverecord(this.data).subscribe(result => {
      alert("Record Updated SuccessFully");
      this.back();
    });
  }
  back() {
    this.router.navigate(["pages/certificateregisterlist"]);
  }
}
