const rootStyles = getComputedStyle(document.documentElement);
const scale3 = rootStyles.getPropertyValue("--s3");
console.log(scale3);

const header = document.createElement("header");
const shadowRoot = header.attachShadow({ mode: "open" });
const heading = document.createElement("h1");
heading.innerHTML = `Shadow DOM`;
shadowRoot.appendChild(heading);

console.log(shadowRoot.host);
console.log(shadowRoot.host === header);


//Custom Element named fancy-tabs
//Styling the ShadowDOM element is scoped
customElements.define(
  "fancy-tabs",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = `
      <style>
        .container {
          display: grid;
        }

        .container > * {
          padding: 4rem;
          background-color: black;
          color: white;
        }
      </style>
      <div class="container">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
    `;
    }
  }
);
