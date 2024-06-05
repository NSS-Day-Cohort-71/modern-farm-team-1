// import { usePlants } from "./field.js";
import { createPlan } from "./plan.js";
// import { createAsparagus } from "./seeds/asparagus.js";
// import { createCorn } from "./seeds/corn.js";
// import { createPotato } from "./seeds/potato.js";
// import { createSoybean } from "./seeds/soybean.js";
// import { createSunflower } from "./seeds/sunflower.js";
// import { createWheat } from "./seeds/wheat.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan);


plantSeeds(yearlyPlan);


const harvestPlan = usePlants();
console.log(harvestPlan);

const harvestedCrops = harvestPlants(harvestPlan);
console.log(harvestedCrops);

const catalogContainer = document.querySelector(".container");
const catalogHtml = catalog(harvestedCrops);
catalogContainer.innerHTML = catalogHtml;

