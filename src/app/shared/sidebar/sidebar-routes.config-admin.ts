import { RouteInfo } from "./sidebar.metadata";

//Sidebar menu Routes and data

const userInfo = JSON.parse(localStorage.getItem("userinfo"));

var user: any = {};
var routes: any[] = [];

routes = [
  {
    path: "/pages/home",
    title: "Home",
    icon: "ft-home",
    class: "",
    badge: "",
    badgeClass: "",
    isExternalLink: false,
    submenu: []
  },

  {
    path: "/pages/certificateregisterlist",
    title: "Certificate Register",
    icon: "ft-align-justify",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/pages/certificateregisterlist",
        title: "Certificate Reg.",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },

      {
        path: "/pages/unsubmittedcertificateregisterlist",
        title: "Unsubmited List",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/administrator/unapprovedcertificateregisterlist",
        title: "Unapproved Certificates",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },

      {
        path: "/administrator/unissuedcertificatelist",
        title: "Unissued Certificates",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      }
    ]
  },

  {
    path: "",
    title: "Data Capture",
    icon: "ft-camera",
    class: "has-sub",
    badge: "",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/pages/individualissuedcertificatelist",
        title: "Issued Cert. Individidual ",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/pages/corporateissuedcertificatelist",
        title: "Issued Cert. Corporate ",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/pages/unsubmittedindividualdatalist",
        title: "Unsubmitted Individual ",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/pages/unsubmittedcorporatedatalist",
        title: "Unsubmitted Corporate ",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/administrator/unapprovedindividuallist",
        title: "Unapproved Individual ",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/administrator/unapprovedcorporatelist",
        title: "Unapproved Corporate ",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      }
    ]
  }
];

export const ADMINROUTES: RouteInfo[] = routes;
