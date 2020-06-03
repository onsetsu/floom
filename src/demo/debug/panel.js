import $ from 'jquery';

export default class DebugPanel {
  constructor(name, label) {
    Object.assign(this, {
      active: false,
      container: null,
      options: [],
      panels: [],
      label: '',
      name: '',
    });

    this.name = name;
    this.label = label;
    this.container = $('<div />');
    this.container.addClass(`ig_debug_panel ${this.name}`);
    this.container.show();
  }


  toggle(active) {
    this.active = active;
    if (active) { this.container.show(); } else { this.container.hide(); }
  }


  addPanel(panel) {
    this.panels.push(panel);
    this.container.append(panel.container);
  }


  addOption(option) {
    this.options.push(option);
    this.container.append(option.container);
  }


  ready() {}

  beforeRun() {}

  afterRun() {}
}
