import { setMeta } from "./common";

// communication
const CommunicationDetail = () => import("@/views/communication/CommunicationDetail");
const Communications = () => import("@/views/communication/Communications");

export const communication = [
  {
    path: "/communication_detail/:id",
    name: "CommunicationDetail",
    component: CommunicationDetail,
    meta: setMeta("Communication Detail")
  },
  {
    path: "/communications",
    name: "Communications",
    component: Communications,
    meta: setMeta("Communications")
  },
];
