customElements.define(
  "custom-footer",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
      this.render();
    }
    render() {
      this.shadow.innerHTML = `
    <footer class="footer">
      <p class="footer__text">Footer</p>
    </footer>
    `;
      const style = document.createElement("style");
      style.innerHTML = `
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100% ;
      width: 100%;
    }
    .footer__text {
      font-size: 18px;
      font-family: "Roboto";
      font-weight: 500;
    }
    `;
      this.shadow.appendChild(style);
    }
  }
);
