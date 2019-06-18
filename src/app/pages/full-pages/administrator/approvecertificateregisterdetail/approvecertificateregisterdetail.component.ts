import { Component, OnInit, ViewChild } from "@angular/core";
import { ApproveCertificateDetailService } from "./approvecertificateregisterdetail.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

@Component({
  selector: "app-approvecertificateregisterdetail",
  templateUrl: "./approvecertificateregisterdetail.component.html",
  styleUrls: ["./approvecertificateregisterdetail.component.scss"],
  providers: [ApproveCertificateDetailService]
})
export class ApprovecertificateregisterdetailComponent implements OnInit {
  recordid: any;
  data: any = {};
  item: any = {};
  category: any = {};

  constructor(
    private service: ApproveCertificateDetailService,
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
          this.category = this.item.category;
          console.log(this.item);
        });
    });
  }

  approve() {
    if (window.confirm("Are you sure you want to Approve?")) {
      this.data.userid = JSON.parse(localStorage.getItem("userinfo")).user.id;
      this.data.mongo_id = this.recordid;

      this.data.membershipnumber = this.item.membershipnumber;

      console.log(this.data);
      this.service.approverecord(this.data).subscribe(result => {
        alert("Record Approved SuccessFully");
        this.router.navigate([
          "administrator/unapprovedcertificateregisterlist"
        ]);
      });
    }
  }
  return() {
    this.data.membershipnumber = this.item.membershipnumber;

    console.log(this.data);
    this.service.returnrecord(this.data).subscribe(result => {
      alert("Record Approved SuccessFully");
      this.router.navigate(["administrator/unapprovedcertificateregisterlist"]);
    });
  }
  edit(id: any) {
    this.router.navigate(["pages/updatecertificateregister", id]);
  }
  back() {
    this.router.navigate(["pages/unsubmittedcertificateregisterlist"]);
  }
}
