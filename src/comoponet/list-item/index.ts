import { state } from "../../state";

export class ListItem extends HTMLElement {
  // shadow = this.attachShadow({ mode: "open" });

  constructor() {
    super();
    this.render();
  }
  connecteCallback() {
    state.subscribe(() => {
      this.render();
    });
  }
  render() {
    const list = state.getState().list;
    console.log(list.list);

    const div = document.createElement("div");
    div.className = "lista";

    div.innerHTML = `

   
      <div style=" border : solid 5px red">
     <h1>Lista de pendientes</h1>
    
     ${list.map((item) => {
       return `<div class="item">
         <input class="checkbox" type="checkbox">
         <p class="itemText">${item}</p>
         </div>`;
     })}
      
     
      </div>       
      `;

    this.appendChild(div);
  }
}
customElements.define("custon-item", ListItem);
