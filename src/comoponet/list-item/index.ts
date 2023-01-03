import { state } from "../../state";

export class ListItem extends HTMLElement {
  // shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();

    this.connecteCallback();
  }

  connecteCallback() {
    state.subscribe(() => {
      this.render();
    });
  }

  render() {
    const list = state.getState().list;
    console.log(list.length, "soy la lista");

    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "lista";

    div.innerHTML = `
 
    <div  >;
     ${list.map((item) => {
       return `<div class="item" ">      
       
        <input class="checkbox" type="checkbox">
        <label class="label" id=${list.length} for="checkbox">${item}</label>
      
        </div>`;
     })}
    </div>
     `;
    style.innerHTML = `
   
    .lista {display: flex;
      flex-direction: column; 
      gap: 10px;}
      .item {
        display: flex;  
        gap: 10px;  
        align-items: center;
        justify-content: center;
        border: 2px solid #000000;
        background-color:  #B2EBF2;
        border-radius: 4px;
        flex-direction: row;
        font-size: 24px;
      }
      `;
    div.appendChild(style);
    this.firstChild?.remove();
    this.appendChild(div);
  }
}
customElements.define("custon-item", ListItem);
