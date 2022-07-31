class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.cont = 0;
        this.attachShadow({ mode: 'open' });
        this.initiateBtn();
    }
    initiateBtn() {
        const btn = document.createElement("button");
        btn.innerText = `Times Clicked: 0`;
        
        btn.addEventListener('click', ()=>{
            this.cont += 1;
            btn.innerText = `Time Clicked: ${this.cont}`;
        })
        this.shadowRoot.append(btn);
    }
}
customElements.define('button-count', ButtonCount);