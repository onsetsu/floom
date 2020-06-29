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
				this.maxNumberOfFluidSystems - (this.simulateIndex - this.renderIndex)
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
		for(let index = 0; index < this.maxNumberOfFluidSystems && index < this.simulateIndex; index++) {
			let fluidIndex =  this.simulateIndex < this.maxNumberOfFluidSystems ?
				this.simulateIndex :
				this.maxNumberOfFluidSystems;
			callback(this.fluidSystems[index], fluidIndex);
		}
	}

	pause() {
		this.paused = true;
	}

	addFluidSystem(fluidSystem){
		if (this.fluidSystems.length > this.maxNumberOfFluidSystems) {
			this.fluidSystems.shift();
		}

		this.fluidSystems.push(fluidSystem)
	}

	resume() {
		this.paused = false;
	}
}
