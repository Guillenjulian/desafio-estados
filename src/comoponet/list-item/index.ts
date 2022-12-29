import { state } from "../../state";

customElements.define(
  "custon-item",
  class extends HTMLElement {
    shadow: ShadowRoot;
    title: string;

    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      this.shadow.innerHTML = `

<div class="checkebox">
<label class =" label" ><input type="checkbox"  class="myChecbox" value="${state}"> ${state} </label >  <br>
<label class =" label" ><input type="checkbox"  class="myChecbox" value="${state}">  ${state}</label >   <br>
<label class =" label" ><input type="checkbox"  class="myChecbox" value="${state}">  ${state}</label >   <br>
<label class =" label" ><input type="checkbox"  class="myChecbox" value="${state}">  ${state}</label >   <br>
</div>
        `;
      const style = document.createElement("style");
      style.innerHTML = `
  
      .checkebox{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 2px solid #000000;
        padding:3px;
        margin: 5px;
        background-color: #F5CBA7;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 100% ;
        width: 100%;
      }
      .label {
        margin-top: 5px;
        font-size:30px;
        border-bottom: 3px solid #000;
      }
      .myChecbox{
      
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
        width: 28px;
        height: 28px;

        border: 2px solid #888;
}

        `;
      this.shadow.appendChild(style);
    }
  }
);

const title = state.getState();
