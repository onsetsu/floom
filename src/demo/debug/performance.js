import $ from 'jquery';

import DebugPanel from '@/demo/debug/panel';

const round = function (number, precision) {
  precision = Math.pow(10, precision || 0);
  return Math.round(number * precision) / precision;
};

var ig = ig || {};
ig.system = ig.system || {};
ig.system.fps = ig.system.fps || 60;
/**
 *  ---------------------------- GRAPH PANEL ----------------------------
 */
export default class DebugGraphPanel extends DebugPanel {
  constructor(name, label) {
    super(name, label);

    Object.assign(this, {
      clocks: {},
      marks: [],
      textY: 0,
      height: 128,
      ms: 64,
      timeBeforeRun: 0,
    });

    this.mark16ms = round((this.height - (this.height / this.ms) * 16));
    this.mark33ms = round((this.height - (this.height / this.ms) * 33));
    this.msHeight = this.height / this.ms;

    this.graph = $('<canvas />');
    this.graph.attr('width', window.innerWidth);
    this.graph.attr('height', this.height);
    this.container.append(this.graph);
    this.ctx = this.graph[0].getContext('2d');

    this.ctx.fillStyle = '#444';
    this.ctx.fillRect(0, this.mark16ms, this.graph.attr('width'), 1);
    this.ctx.fillRect(0, this.mark33ms, this.graph.attr('width'), 1);

    this.addClock('draw', 'Draw', '#13baff');// caca25' );
    this.addClock('update', 'Update', '#bb0fff');// 25ca72' );
    this.addClock('lag', 'System Lag', '#f26900');// ca258f' );

    window.graph = this;
  }


  addClock(name, description, color) {
    const mark = $('<span />');
    mark.addClass('ig_debug_legend_color');
    mark.css('backgroundColor', color);

    const number = $('<span />');
    number.addClass('ig_debug_legend_number');
    number.append(document.createTextNode('0'));

    const legend = $('<span />');
    legend.addClass('ig_debug_legend');
    legend.append(mark);
    legend.append(document.createTextNode(`${description} (`));
    legend.append(number);
    legend.append(document.createTextNode('ms)'));

    this.container.append(legend);

    this.clocks[name] = {
      description,
      color,
      current: 0,
      start: window.performance.now(),
      avg: 0,
      html: number,
    };
  }


  beginClock(name, offset) {
    this.clocks[name].start = window.performance.now() + (offset || 0);
  }


  endClock(name) {
    const c = this.clocks[name];
    c.current = Math.round(window.performance.now() - c.start);
    c.avg = c.avg * 0.8 + c.current * 0.2;
  }


  mark(msg, color) {
    if (this.active) {
      this.marks.push({ msg, color: (color || '#fff') });
    }
  }


  beforeRun() {
    this.endClock('lag');
    this.timeBeforeRun = window.performance.now();
  }


  afterRun() {
    const frameTime = window.performance.now() - this.timeBeforeRun;
    const nextFrameDue = (1000 / ig.system.fps) - frameTime;
    this.beginClock('lag', Math.max(nextFrameDue, 0));

    const x = this.graph.attr('width') - 1;
    let y = this.height;

    this.ctx.drawImage(this.graph.get(0), -1, 0);

    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(x, 0, 1, this.height);

    this.ctx.fillStyle = '#444';
    this.ctx.fillRect(x, this.mark16ms, 1, 1);

    this.ctx.fillStyle = '#444';
    this.ctx.fillRect(x, this.mark33ms, 1, 1);

    for (const ci in this.clocks) {
      if (!this.clocks.hasOwnProperty(ci)) continue;

      const c = this.clocks[ci];
      c.html.text(c.avg.toFixed(2));

      if (c.color && c.current > 0) {
        this.ctx.fillStyle = c.color;
        const h = c.current * this.msHeight;
        y -= h;
        this.ctx.fillRect(x, y, 1, h);
        c.current = 0;
      }
    }

    this.ctx.textAlign = 'right';
    this.ctx.textBaseline = 'top';
    this.ctx.globalAlpha = 0.5;

    for (let i = 0; i < this.marks.length; i++) {
      const m = this.marks[i];
      this.ctx.fillStyle = m.color;
      this.ctx.fillRect(x, 0, 1, this.height);
      if (m.msg) {
        this.ctx.fillText(m.msg, x - 1, this.textY);
        this.textY = (this.textY + 8) % 32;
      }
    }
    this.ctx.globalAlpha = 1;
    this.marks = [];
  }
}
/*
$().ready(function() {
});
*/
