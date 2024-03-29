import { Auth_Guard } from "../../services/auth.guard";
import { AdministratorComponent } from "./administrator.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UnapprovedcertificateregisterlistComponent } from "./unapprovedcertificateregisterlist/unapprovedcertificateregisterlist.component";
import { UnissuedcertificatelistComponent } from "./unissuedcertificatelist/unissuedcertificatelist.component";
import { ApprovecertificateregisterdetailComponent } from "./approvecertificateregisterdetail/approvecertificateregisterdetail.component";
import { ApproveindividualdataComponent } from "./approveindividualdata/approveindividualdata.component";
import { ApprovecorporatedataComponent } from "./approvecorporatedata/approvecorporatedata.component";
import { UnapprovedcorporatelistComponent } from "./unapprovedcorporatelist/unapprovedcorporatelist.component";
import { UnapprovedindividuallistComponent } from "./unapprovedindividuallist/unapprovedindividuallist.component";
import { CreateuserComponent } from "./createuser/createuser.component";
import { IndividualissuedcertificatelistviewComponent } from "./individualissuedcertificatelistview/individualissuedcertificatelist.component";
import { CorporateissuedcertificatelistviewComponent } from "./corporateissuedcertificatelistview/corporateissuedcertificatelist.component";

const routes: Routes = [
  {
    path: "",
    component: AdministratorComponent,

    children: [
      {
        path: "createuser",
        component: CreateuserComponent
      },
      {
        path: "unapprovedcertificateregisterlist",
        component: UnapprovedcertificateregisterlistComponent
      },
      {
        path: "unissuedcertificatelist",
        component: UnissuedcertificatelistComponent,
        data: {
          title: "Unissued certificate list Page"
        }
      },

      {
        path: "unapprovedindividuallist",
        component: UnapprovedindividuallistComponent,
        data: {
          title: " Unapproved Individual List Page"
        }
      },

      {
        path: "unapprovedcorporatelist",
        component: UnapprovedcorporatelistComponent,
        data: {
          title: "Unapproved Corporate List Page"
        }
      },
      {
        path: "individualissuedcertificatelist",
        component: IndividualissuedcertificatelistviewComponent,
        data: {
          title: "Individual Issued Certificate List Page"
        }
      },
      {
        path: "corporateissuedcertificatelist",
        component: CorporateissuedcertificatelistviewComponent,
        data: {
          title: "Corporate Issued Certificate List Page"
        }
      },
      {
        path: "approvecorporatedata/:id",
        component: ApprovecorporatedataComponent,
        data: {
          title: " Approve Corporate Data Page"
        }
      },

      {
        path: "approveindividualdata/:id",
        component: ApproveindividualdataComponent,
        data: {
          title: "Approve Individual Data Page"
        }
      },
      {
        path: "approvecertificateregisterdetail/:id",
        component: ApprovecertificateregisterdetailComponent,
        data: {
          title: "Approve certificate register detail Page"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule {}
