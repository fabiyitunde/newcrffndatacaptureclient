import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";

import { ProcessfreightforwarderComponent } from "./processfreightforwarder/processfreightforwarder.component";
import { FreightforwarderslistComponent } from "./freightforwarderslist/freightforwarderslist.component";
import { HomeComponent } from "./home/home.component";

import { CorporateforwarderslistComponent } from "./corporateforwarderslist/corporateforwarderslist.component";
import { IndividualforwarderslistComponent } from "./individualforwarderslist/individualforwarderslist.component";
import { CorporatedetailComponent } from "./corporatedetail/corporatedetail.component";
import { IndividualdetailComponent } from "./individualdetail/individualdetail.component";
import { CertificateregisterlistComponent } from "./certificateregisterlist/certificateregisterlist.component";
import { UnsubmittedcertificateregisterlistComponent } from "./unsubmittedcertificateregisterlist/unsubmittedcertificateregisterlist.component";
import { UpdatecertificateregisterComponent } from "./updatecertificateregister/updatecertificateregister.component";
import { UpdateindividualdataComponent } from "./datacapture/updateindividualdata/updateindividualdata.component";
import { UpdatecorporatedataComponent } from "./datacapture/updatecorporatedata/updatecorporatedata.component";
import { SubmitindividualdataComponent } from "./datacapture/submitindividualdata/submitindividualdata.component";
import { SubmitcorporatedataComponent } from "./datacapture/submitcorporatedata/submitcorporatedata.component";

import { SubmitcertificateregisterdetailComponent } from "./submitcertificateregisterdetail/submitcertificateregisterdetail.component";
import { CreatecorporatedataComponent } from "./datacapture/createcorporatedata/createcorporatedata.component";
import { CreateindividualdataComponent } from "./datacapture/createindividualdata/createindividualdata.component";
import { UnsubmittedcorporatedatalistComponent } from "./datacapture/unsubmittedcorporatedatalist/unsubmittedcorporatedatalist.component";
import { UnsubmittedindividualdatalistComponent } from "./datacapture/unsubmittedindividualdatalist/unsubmittedindividualdatalist.component";
import { EditcorporatedataComponent } from "./datacapture/editcorporatedata/editcorporatedata.component";
import { EditindividualdataComponent } from "./datacapture/editindividualdata/editindividualdata.component";
import { CorporateissuedcertificatelistComponent } from "./corporateissuedcertificatelist/corporateissuedcertificatelist.component";
import { IndividualissuedcertificatelistComponent } from "./individualissuedcertificatelist/individualissuedcertificatelist.component";

import { Auth_Guard } from "../services/auth.guard";
const routes: Routes = [
  {
    path: "",
    canActivate: [Auth_Guard],

    children: [
      {
        path: "gallery",
        component: GalleryPageComponent,
        data: {
          title: "Gallery Page"
        }
      },
      {
        path: "processfreightforwarder/:id",
        component: ProcessfreightforwarderComponent,
        data: {
          title: "Process Fright Forwarder Page"
        }
      },
      {
        path: "corporateissuedcertificatelist",
        component: CorporateissuedcertificatelistComponent,
        data: {
          title: "Corporate Issued certificate list Page"
        }
      },
      {
        path: "individualissuedcertificatelist",
        component: IndividualissuedcertificatelistComponent,
        data: {
          title: "Individual Issued certificate list Page"
        }
      },
      {
        path: "individualdetail/:id",
        component: IndividualdetailComponent,
        data: {
          title: "Individual detail Page"
        }
      },
      {
        path: "updatecertificateregister/:id",
        component: UpdatecertificateregisterComponent,
        data: {
          title: "Update certificate register page"
        }
      },
      {
        path: "corporatedetail/:id",
        component: CorporatedetailComponent,
        data: {
          title: "Corporate detail Page"
        }
      },

      {
        path: "home",
        component: HomeComponent,
        data: {
          title: "Home Page"
        }
      },

      {
        path: "editindividualdata/:id",
        component: EditindividualdataComponent,
        data: {
          title: "Edit Individual Data Page"
        }
      },
      {
        path: "editcorporatedata/:id",
        component: EditcorporatedataComponent,
        data: {
          title: "Edit corporate data Page"
        }
      },

      {
        path: "unsubmittedcorporatedatalist",
        component: UnsubmittedcorporatedatalistComponent,
        data: {
          title: "Unsubmitted corporate data list Page"
        }
      },
      {
        path: "unsubmittedindividualdatalist",
        component: UnsubmittedindividualdatalistComponent,
        data: {
          title: "Unsubmitted individual data list List Page"
        }
      },

      {
        path: "submitcorporatedata/:id",
        component: SubmitcorporatedataComponent,
        data: {
          title: "Submit Corporate Data Page"
        }
      },

      {
        path: "submitindividualdata/:id",
        component: SubmitindividualdataComponent,
        data: {
          title: "Submit Individual Data Page"
        }
      },
      {
        path: "submitcertificateregisterdetail/:id",
        component: SubmitcertificateregisterdetailComponent,
        data: {
          title: "Submit certificate register detail Page"
        }
      },
      {
        path: "createcorporatedata/:id",
        component: CreatecorporatedataComponent,
        data: {
          title: "Create Corporate Data Page"
        }
      },

      {
        path: "createindividualdata/:id",
        component: CreateindividualdataComponent,
        data: {
          title: "Create Individual Data Page"
        }
      },

      {
        path: "updatecorporatedata/:id",
        component: UpdatecorporatedataComponent,
        data: {
          title: "Update Corporate Data Page"
        }
      },

      {
        path: "updateindividualdata/:id",
        component: UpdateindividualdataComponent,
        data: {
          title: "Update Individual Data Page"
        }
      },

      {
        path: "certificateregisterlist",
        component: CertificateregisterlistComponent,
        data: {
          title: "Certificateregisterlist Page"
        }
      },

      {
        path: "unsubmittedcertificateregisterlist",
        component: UnsubmittedcertificateregisterlistComponent,
        data: {
          title: "Unsubmitted certificate register list Page"
        }
      },

      {
        path: "corporateforwarderslist",
        component: CorporateforwarderslistComponent,
        data: {
          title: "Corporate Forwarders"
        }
      },
      {
        path: "individualforwarderslist",
        component: IndividualforwarderslistComponent,
        data: {
          title: "Individual Forwarders"
        }
      },
      {
        path: "freightforwarderslist",
        component: FreightforwarderslistComponent,
        data: {
          title: "Fright Forwarder Page"
        }
      },
      {
        path: "invoice",
        component: InvoicePageComponent,
        data: {
          title: "Invoice Page"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPagesRoutingModule {}
