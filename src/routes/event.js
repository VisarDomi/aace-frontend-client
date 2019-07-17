import { setMeta } from "./common";

// event
const EventDetail = () => import("@/views/events/EventDetail");
const Events = () => import("@/views/events/Events");

export const event = [
  {
    path: "/event_detail/:id",
    name: "EventDetail",
    component: EventDetail,
    meta: setMeta("Event Detail")
  },
  {
    path: "/events",
    name: "Events",
    component: Events,
    meta: setMeta("Events")
  },
];
