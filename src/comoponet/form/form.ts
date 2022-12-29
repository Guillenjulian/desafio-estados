import { state } from "../../state";

customElements.define(
  "costom-form",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
      this.addTrasksForm();
    }
    addTrasksForm() {
      const fromEl = this.shadow.querySelector(".form") as HTMLElement;
      fromEl.addEventListener("submit", (e: any) => {
        e.preventDefault();
        //console.log(e.target.name.value);
        if (e.target.name.value == "") {
          null;
        } else {
          state.addItem(e.target.name.value);
        }
      });
    }
    render() {
      this.shadow.innerHTML = `
      <form class="form">
   
        <input type="text" name="name" class="form__input"  placeholder="Nuevo pendiente" /input>
        <button class="form__button">+</button>
      </form>
    `;

      const style = document.createElement("style");
      style.innerHTML = `
      
      .form {
        display: flex;
        gap: 3px;
        border: 2px solid #000000;
        background-color:  #B2EBF2;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 100% ;
        width: 100%;
      }   
      .form__label {
        font-size: 18px;
        font-family: "Roboto";
        font-weight: 500;
      }
      .form__input {
        font-size: 24px;
        font-family: "Roboto";
        width: 30vh;
        height: 5vh;
        border: 2px solid #000000;
        border-radius: 4px;
      }
      .form__button {
        background-color: #9CBBE9;
        font-size: 24px;
        font-weight: 400;
        width:30hh;
        height: 5vh;
        border: 2px solid #000000;
        border-radius: 4px;
      }
      `;

      this.shadow.appendChild(style);
    }
  }
);
//console.log(state.addItem() + "form");
