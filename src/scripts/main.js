import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";
import { combineOutputs } from "./totalCrops.js";

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const harvestPlan = usePlants();

const harvestedCrops = harvestPlants(harvestPlan);

// Alphabetize the food list
const sortedCrops = harvestedCrops.sort((a, b) => a.type.localeCompare(b.type))

const combinedCrops = combineOutputs(sortedCrops)

const catalogContainer = document.querySelector(".container");
const catalogHtml = catalog(combinedCrops);
catalogContainer.innerHTML = catalogHtml;


