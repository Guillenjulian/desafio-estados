import { state } from "./state";

import {} from "./comoponet/header/index";
import {} from "./comoponet/form/form";
import {} from "./comoponet/list-item/index";
import {} from "./comoponet/footer/index";
state.subscribe(function () {
  localStorage.setItem("state-cache", JSON.stringify(state.getState()));
});
