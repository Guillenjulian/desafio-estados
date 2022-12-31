customElements.define(
  "custon-header",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      this.shadow.innerHTML = `
            <header class="header">
                <h1 class="header__title">Lista de tareas</h1>
            </header>
            `;
      const style = document.createElement("style");
      style.innerHTML = `
            .header {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100% ;
                width: 100%;
            }
            .header__title {
                font-size: 18px;
                font-family: "Roboto";
                font-weight: 500;
            }
            `;
      this.shadow.appendChild(style);
    }
  }
);
