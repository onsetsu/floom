import System from "./system.js";

export default class TimeMachine {
	constructor() {
		this.simulateIndex = 0;
		this.renderIndex = 0;
		this.paused = true;
		this.fluidSystems = [];
		this.maxNumberOfFluidSystems = 100;
	};



	// Property setters
	getRenderedFluidSystem() {
		return this.fluidSystems[
			this.simulateIndex < this.maxNumberOfFluidSystems ?
				this.renderIndex :
				this.maxNumberOfFluidSystems - (this.simulateIndex - this.renderIndex) - 1
			];
	}

	getSimulatedFluidSystem() {
		return this.fluidSystems[
			this.simulateIndex < this.maxNumberOfFluidSystems ?
				this.simulateIndex :
				this.maxNumberOfFluidSystems
			];
	}

	forEachFluidSystem(callback) {
		const upperBound = this.simulateIndex < this.maxNumberOfFluidSystems ? this.simulateIndex : this.maxNumberOfFluidSystems - 1;
		for(let index = 0; index < upperBound; index++) {
			callback(this.fluidSystems[index], this.simulateIndex - (upperBound - index));
		}
	}

	pause() {
		this.paused = true;
	}

	addFluidSystem(fluidSystem){
		this.fluidSystems.push(fluidSystem);
		if (this.fluidSystems.length > this.maxNumberOfFluidSystems) {
			this.fluidSystems.shift();
		}
	}

	resume() {
		this.paused = false;
	}
}
