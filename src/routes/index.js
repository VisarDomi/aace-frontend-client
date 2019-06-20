import { information } from "./information";
import { dynamic } from "./other";
import { application } from "./application";
import { communication } from "./communication";
import { auth } from "./auth";

const routes = [
  ...auth,
  ...information,
  ...dynamic,
  ...application,
  ...communication
];

export default routes;
