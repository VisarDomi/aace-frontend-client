import { setMeta } from "./common";

// poll
const PollDetail = () => import("@/views/polls/PollDetail");
const Polls = () => import("@/views/polls/Polls");

export const poll = [
  {
    path: "/poll_detail/:id",
    name: "PollDetail",
    component: PollDetail,
    meta: setMeta("Poll Detail")
  },
  {
    path: "/polls",
    name: "Polls",
    component: Polls,
    meta: setMeta("Polls")
  },
];
