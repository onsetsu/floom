import Menu from './menu.js';
import DebugPanel from './panel.js';

var round = function(number, precision) {
    precision = Math.pow(10, precision || 0);
    return Math.round(number * precision) / precision;
};

/**
 *  ---------------------------- ParticlePanel ----------------------------
 */
export default class ParticlePanel extends DebugPanel {

    constructor( name, label, system) {
        super(name, label);

        this.positionSpan = document.createElement("SPAN");
        this.system = system;

        this.container.append(this.positionSpan);
        this.updateParticleData()
        // Object.assign(this, {
        //     clocks: {},
        //     marks: [],
        //     textY: 0,
        //     height: 128,
        //     ms: 64,
        //     timeBeforeRun: 0,
        // });
        //
        // this.mark16ms = round((this.height - (this.height/this.ms) * 16));
        // this.mark33ms = round((this.height - (this.height/this.ms) * 33));
        // this.msHeight = this.height/this.ms;
        //
        // this.graph = $('<canvas />');
        // this.graph.attr("width", window.innerWidth);
        // this.graph.attr("height", this.height);
        // this.container.append( this.graph );
        // this.ctx = this.graph[0].getContext('2d');
        //
        // this.ctx.fillStyle = '#444';
        // this.ctx.fillRect( 0, this.mark16ms, this.graph.attr("width"), 1 );
        // this.ctx.fillRect( 0, this.mark33ms, this.graph.attr("width"), 1 );
        //
        // this.addClock( 'draw', 'Draw', '#13baff');//caca25' );
        // this.addClock( 'update', 'Update', '#bb0fff');//25ca72' );
        // this.addClock( 'lag', 'System Lag', '#f26900');//ca258f' );
        //
        // window.graph = this;
    }


    beforeRun() {
        this.updateParticleData()
    }

    updateParticleData() {
        let particle = this.system.particles[window.inspectedParticleIndex];
        this.positionSpan.innerHTML = `
        position.x: ${round(particle.position.x, 2)}, 
        position.y: ${round(particle.position.y, 2)} <br>
        initialVolume: ${round(particle.initialVolume, 2)}<br>
        velocity.u: ${round(particle.velocity.x, 2)},
        velocity.v: ${round(particle.velocity.y, 2)}
        `;
    }


    afterRun() {

    }
}
/*
$().ready(function() {
});
*/
