/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbutton_js"] = self["webpackChunkbutton_js"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class MyButtonVanillaJs extends HTMLElement {\n  constructor() {\n    super();\n    let shadow = this.attachShadow({\n      mode: \"open\"\n    });\n    this.buttonJs = document.createElement(\"button\");\n    shadow.appendChild(this.buttonJs);\n  }\n\n  addJs() {\n    const jsEvent = new CustomEvent(\"clickJs\", {\n      bubbles: true,\n      cancelable: true,\n      composed: true\n    });\n    window.dispatchEvent(jsEvent);\n  }\n\n  connectedCallback() {\n    this.buttonJs.innerHTML = `\n            <section>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 630 630\">\n                    <rect width=\"630\" height=\"630\" fill=\"#f7df1e\"/>\n                    <path d=\"m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z\"/>\n                </svg>\n            </section>\n            <section>\n                Vanilla Js: <span id=\"jsCount\">0</span>\n            </section>\n        `;\n    this.buttonJs.onclick = this.addJs;\n    this.buttonJs.style.backgroundColor = \"#F7E116\";\n    this.buttonJs.style.width = \"200px\";\n    this.buttonJs.style.height = \"50px\";\n    this.buttonJs.style.borderRadius = \"40px\";\n    this.buttonJs.style.fontFamily = \"'Roboto', sans-serif\";\n    this.buttonJs.style.fontSize = \"2.8vh\";\n    this.buttonJs.style.border = \"none\";\n    this.buttonJs.style.display = \"flex\";\n    this.buttonJs.style.flexDirection = \"row\";\n    this.buttonJs.style.justifyContent = \"flex-start\";\n    this.buttonJs.style.alignItems = \"center\";\n    this.buttonJs.firstElementChild.style.backgroundColor = \"white\";\n    this.buttonJs.firstElementChild.style.width = \"23%\";\n    this.buttonJs.firstElementChild.style.height = \"90%\";\n    this.buttonJs.firstElementChild.style.borderRadius = \"50%\";\n    this.buttonJs.firstElementChild.style.display = \"flex\";\n    this.buttonJs.firstElementChild.style.flexDirection = \"row\";\n    this.buttonJs.firstElementChild.style.justifyContent = \"center\";\n    this.buttonJs.firstElementChild.style.alignItems = \"center\";\n    this.buttonJs.firstElementChild.firstElementChild.style.height = \"60%\";\n    this.buttonJs.firstElementChild.firstElementChild.style.alignSelf = \"center\";\n  }\n\n}\n\nwindow.customElements.define(\"button-js\", MyButtonVanillaJs);\nconst btn = document.createElement(\"button-js\");\nlet count = 0;\nbtn.setAttribute(\"count\", 0);\n\nbtn.onclick = () => {\n  btn.setAttribute(\"count\", count++);\n  btn.shadowRoot.querySelector(\"#jsCount\").innerText = count;\n};\n\ndocument.getElementById(\"vanilla\").append(btn);\n\n//# sourceURL=webpack://button-js/./src/index.js?");

/***/ })

}]);