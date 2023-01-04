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

  // addEventListener del checkbox

  render() {
    const list = state.getState().list;
    const listLength = list.length - 1;
    const div = document.createElement("div");
    const style = document.createElement("style");
    div.className = "lista";

    div.innerHTML = `
    
    <div>    ${list.map((item) => {
      return `<div class="item" >       
      <input class="checkbox" type="checkbox" >
      <label class="label" id=${listLength} for="checkbox">
      ${item}
      </label>      
      </div>`;
    })}
    </div>
    `;
    style.innerHTML = `
    
    .lista {display: flex;
     
    }
    
      .item {
        display: flex;  
        gap: 10px;  
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        flex-direction: row;
        font-size: 24px;
      }
    
      input[type="checkbox"] + label {
        text-decoration: none;
        color: #000;
      }
      
      input[type="checkbox"]:checked + label {
        text-decoration: line-through;
        color: #999;
      }
      `;

    div.appendChild(style);
    this.firstChild?.remove();
    this.appendChild(div);
  }
}
customElements.define("custon-item", ListItem);
