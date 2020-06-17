import Menu from './menu.js';
import DebugPanel from './panel.js';
import Particle from "./../floom/particle.js";

var round = function(number, precision) {
    precision = Math.pow(10, precision || 0);
    return Math.round(number * precision) / precision;
};

/**
 *  ---------------------------- ParticlePanel ----------------------------
 */
export default class ParticlePanel extends DebugPanel {

    constructor( name, label, timeMachine) {
        super(name, label);

        this.positionSpan = document.createElement("SPAN");
        this.timeMachine = timeMachine;

        this.blackListedParams = ['node'];

        this.container.append(this.positionSpan);
        this.updateParticleData();
    }

    beforeRun() {
        this.updateParticleData()
    }

    updateParticleData() {
        let particle = Particle.fromJSON(this.timeMachine.fluidSystems[this.timeMachine.renderIndex].particles[window.inspectedParticleIndex]);
        let paramString = "";
        paramString += 'particleIndex' + ': ' + window.inspectedParticleIndex + '<br>';
        for(let parameter in particle){
            if( particle.hasOwnProperty( parameter ) && !this.isBlacklistedParam(parameter) ) {
                paramString += parameter + ': ' + particle[parameter] + '<br>';
            }
        }
        this.positionSpan.innerHTML = paramString;
    }

    isBlacklistedParam(param) {
        return !!this.blackListedParams.find((blackListedParam) => blackListedParam === param);
    }

    afterRun() {

    }
}
/*
$().ready(function() {
});
*/
