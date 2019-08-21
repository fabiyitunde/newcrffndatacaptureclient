import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { ChartistModule } from "ng-chartist";
import { AgmCoreModule } from "@agm/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FullPagesComponent } from "./full-pages.component";
import { GalleryPageComponent } from "./gallery/gallery-page.component";
import { InvoicePageComponent } from "./invoice/invoice-page.component";
import { HorizontalTimelinePageComponent } from "./timeline/horizontal/horizontal-timeline-page.component";
import { HorizontalTimelineComponent } from "./timeline/horizontal/component/horizontal-timeline.component";
import { VerticalTimelinePageComponent } from "./timeline/vertical/vertical-timeline-page.component";
import { UserProfilePageComponent } from "./user-profile/user-profile-page.component";
import { SearchComponent } from "./search/search.component";
import { FaqComponent } from "./faq/faq.component";
import { KnowledgeBaseComponent } from "./knowledge-base/knowledge-base.component";
import { ProcessfreightforwarderComponent } from "./processfreightforwarder/processfreightforwarder.component";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DataTablesModule } from "../../data-tables/data-tables.module";
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
import { CreateindividualComponent } from "./createindividual/createindividual.component";
import { CreatecorporateComponent } from "./createcorporate/createcorporate.component";
import { ModalComponent } from "./datacapture/createindividualdata/modals/modal/modal.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { WebcamModule } from "ngx-webcam";
const PAGES_COMPONENTS = [FullPagesComponent];

@NgModule({
  imports: [
    CommonModule,
    WebcamModule,
    FullPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartistModule,
    AgmCoreModule,
    DataTablesModule,
    NgxDatatableModule,
    NgbModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    GalleryPageComponent,
    InvoicePageComponent,
    HorizontalTimelinePageComponent,
    HorizontalTimelineComponent,
    VerticalTimelinePageComponent,
    UserProfilePageComponent,
    SearchComponent,
    FaqComponent,
    KnowledgeBaseComponent,
    ProcessfreightforwarderComponent,
    FreightforwarderslistComponent,
    HomeComponent,
    CorporateforwarderslistComponent,
    IndividualforwarderslistComponent,
    CorporatedetailComponent,
    IndividualdetailComponent,
    CertificateregisterlistComponent,
    UnsubmittedcertificateregisterlistComponent,
    UpdatecertificateregisterComponent,
    CorporateissuedcertificatelistComponent,
    IndividualissuedcertificatelistComponent,

    UpdateindividualdataComponent,
    UpdatecorporatedataComponent,
    SubmitindividualdataComponent,
    SubmitcorporatedataComponent,

    SubmitcertificateregisterdetailComponent,
    CreatecorporatedataComponent,
    CreateindividualdataComponent,
    UnsubmittedcorporatedatalistComponent,
    UnsubmittedindividualdatalistComponent,
    EditcorporatedataComponent,
    EditindividualdataComponent,
    CreateindividualComponent,
    CreatecorporateComponent,
    ModalComponent,
    SpinnerComponent
  ],
  entryComponents: [ModalComponent],
  exports: [ModalComponent]
})
export class FullPagesModule {}
