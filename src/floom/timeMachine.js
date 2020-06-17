import System from "./system.js";

export default class TimeMachine {
	constructor() {
		this.simulateIndex = 0;
		this.renderIndex = 0;
		this.paused = false;
		this.fluidSystems = [];
	};

	// Property setters
	getRenderedFluidSystem() {
		return System.fromJSON(this.fluidSystems[this.renderIndex]);
	}

	getSimulatedFluidSystem() {
		return this.fluidSystems[this.simulateIndex];
	}

	pause() {
		this.paused = true;
	}

	resume() {
		this.paused = false;
	}
}
