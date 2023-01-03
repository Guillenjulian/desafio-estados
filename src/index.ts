import { state } from "./state";

import {} from "./comoponet/form/form";
import {} from "./comoponet/list-item/index";

state.subscribe(function () {
  localStorage.setItem("state-cache", JSON.stringify(state.getState()));
});
