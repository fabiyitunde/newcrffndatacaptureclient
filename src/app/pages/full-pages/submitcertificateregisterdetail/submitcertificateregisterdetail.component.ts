import { Component, OnInit } from "@angular/core";
import { SubmitcertificateregisterdetailService } from "./submitcertificateregisterdetail.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-submitcertificateregisterdetail",
  templateUrl: "./submitcertificateregisterdetail.component.html",
  styleUrls: ["./submitcertificateregisterdetail.component.scss"],
  providers: [SubmitcertificateregisterdetailService]
})
export class SubmitcertificateregisterdetailComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};

  constructor(
    private service: SubmitcertificateregisterdetailService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.recordid = params["id"];

      this.service
        .getfreightforwardersdetail(this.recordid)
        .subscribe(result => {
          this.item = result;
          this.category = this.item.category;
          console.log(this.item);
        });
    });
  }

  submit() {
    if (window.confirm("Are you sure you want to Submit?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.submitrecord(this.data).subscribe(result => {
        alert("Practitioner detail Submitted SuccessFully");
        this.router.navigate(["pages/unsubmittedcertificateregisterlist"]);
      });
    }
  }
  edit(id: any) {
    this.router.navigate(["pages/updatecertificateregister", id]);
  }
  back() {
    this.router.navigate(["pages/unsubmittedcertificateregisterlist"]);
  }
}
