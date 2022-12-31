import { state } from "../../state";

customElements.define(
  "costom-form",
  class extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();

      this.render();
    }

    connectedCallback() {
      const form: any = this.shadow.querySelector(".form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const f = e.target as any;

        state.addItem(f.text.value);
        // console.log(f.text.value, "form");
      });
    }
    render() {
      this.shadow.innerHTML = `
      <form class="form">
   
        <input  name="text" class="form__input"  placeholder="Nuevo pendiente" />
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
     
      }   
      .form__label {
        font-size: 18px;
        font-family: "Roboto";
        font-weight: 500;
      }
      .form__input {
        font-size: 24px;
        font-family: "Roboto";
       
        border: 2px solid #000000;
        border-radius: 4px;
      }
      .form__button {
        background-color: #9CBBE9;
        font-size: 24px;
        font-weight: 400;
      
        border: 2px solid #000000;
        border-radius: 4px;
      }
      `;

      this.shadow.appendChild(style);
    }
  }
);
