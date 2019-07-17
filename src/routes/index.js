import { information } from "./information";
import { dynamic } from "./other";
import { application } from "./application";
import { communication } from "./communication";
import { event } from "./event";
import { poll } from "./poll";
import { auth } from "./auth";

const routes = [
  ...auth,
  ...information,
  ...dynamic,
  ...application,
  ...communication,
  ...event,
  ...poll
];

export default routes;
