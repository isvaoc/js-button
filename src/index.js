class MyButtonVanillaJs extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });

    this.buttonJs = document.createElement("button");
    shadow.appendChild(this.buttonJs);
  }

  addJs() {
    const jsEvent = new CustomEvent("clickJs", {
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    window.dispatchEvent(jsEvent);
  }

  connectedCallback() {
    this.buttonJs.innerHTML = `
            <section>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
                    <rect width="630" height="630" fill="#f7df1e"/>
                    <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
                </svg>
            </section>
            <section>
                Vanilla Js: <span id="jsCount">0</span>
            </section>
        `;
    this.buttonJs.onclick = this.addJs;

    this.buttonJs.style.backgroundColor = "#F7E116";
    this.buttonJs.style.width = "200px";
    this.buttonJs.style.height = "50px";
    this.buttonJs.style.borderRadius = "40px";
    this.buttonJs.style.fontFamily = "'Roboto', sans-serif";
    this.buttonJs.style.fontSize = "2.8vh";
    this.buttonJs.style.border = "none";
    this.buttonJs.style.display = "flex";
    this.buttonJs.style.flexDirection = "row";
    this.buttonJs.style.justifyContent = "flex-start";
    this.buttonJs.style.alignItems = "center";

    this.buttonJs.firstElementChild.style.backgroundColor = "white";
    this.buttonJs.firstElementChild.style.width = "23%";
    this.buttonJs.firstElementChild.style.height = "90%";
    this.buttonJs.firstElementChild.style.borderRadius = "50%";
    this.buttonJs.firstElementChild.style.display = "flex";
    this.buttonJs.firstElementChild.style.flexDirection = "row";
    this.buttonJs.firstElementChild.style.justifyContent = "center";
    this.buttonJs.firstElementChild.style.alignItems = "center";
    this.buttonJs.firstElementChild.style.marginRight = "5px";

    this.buttonJs.firstElementChild.firstElementChild.style.height = "60%";
    this.buttonJs.firstElementChild.firstElementChild.style.alignSelf =
      "center";
  }
}
window.customElements.define("button-js", MyButtonVanillaJs);
const btn = document.createElement("button-js");

let count = 0;
btn.setAttribute("count", 0);
btn.onclick = () => {
  btn.setAttribute("count", count++);
  btn.shadowRoot.querySelector("#jsCount").innerText = count;
};

document.getElementById("vanilla").append(btn);
