import Circle from "./circle.js";
import Capsule from "./capsule.js";

const classList = {
	Circle,
	Capsule
}

function factory(setting) {
	const constructor = classList[setting.constructor];
	return constructor.fromJSON(setting);
}

export {
	Circle,
	Capsule,
	factory
};