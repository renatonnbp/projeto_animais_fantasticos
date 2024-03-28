export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com a index da mesma
  activeTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    this.tabContent[index].classList.add(this.activeClass);
  }

  // Adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Ativar primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
