import outsideclick from "./outsideclick.js";

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    if (this.events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    this.ativo = "active";
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.ativo);
    outsideclick(element, this.events, () => {
      element.classList.remove(this.ativo);
    });
  }

  addDropDownMenuEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropDownMenuEvent();
    }
    return this;
  }
}
