export abstract class View<T> {
  protected element: HTMLElement;

  constructor(select: string) {
    this.element = document.querySelector(select)
  }

  protected abstract template(model: T): string;

  public update(negociacoes: T): void{
    const template = this.template(negociacoes)
    this.element.innerHTML = template
  }
}

