import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { catalog } from "./catalog.js";
import { combineOutputs } from "./totalCrops.js";
import { reducedCatalog } from "./reducedCatalog.js";
import { imgCatalog } from "./imgCatalog.js";

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const harvestPlan = usePlants();

const harvestedCrops = harvestPlants(harvestPlan);

const catalogContainer = document.querySelector(".container");

// Core Requirements: Selling the Harvest
const catalogHtml = catalog(harvestedCrops);
catalogContainer.innerHTML = catalogHtml;

// Optional Challenges: Ordering the Harvest
// const sortedCrops = harvestedCrops.sort((a, b) => a.type.localeCompare(b.type))
// const catalogHtml = catalog(sortedCrops);
// catalogContainer.innerHTML = catalogHtml;

// Optional Challenges: Display Once With Quantity
// const combinedCrops = combineOutputs(harvestedCrops)
// const reducedCatalogHtml = reducedCatalog(combinedCrops);
// catalogContainer.innerHTML = reducedCatalogHtml

// Optional Challenges: Emoji Food
// const imgCatalogHtml = imgCatalog(harvestedCrops);
// catalogContainer.innerHTML = imgCatalogHtml;