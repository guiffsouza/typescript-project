export class View {
    constructor(select) {
        this.element = document.querySelector(select);
    }
    update(negociacoes) {
        const template = this.template(negociacoes);
        this.element.innerHTML = template;
    }
}
