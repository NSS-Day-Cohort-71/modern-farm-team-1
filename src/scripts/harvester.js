export const harvestPlants = (plantsArr) => {
    let harvestedArray = [];
    plantsArr.forEach(plant => {
        let howMany = plant.output
        if (plant.type === "Corn") {
            for(let i=0; i<howMany/2; i++) {
                harvestedArray.push(plant)
            }
        } else {
        for(let i=0; i<howMany; i++) {
            harvestedArray.push(plant)
        }
    }});
    return harvestedArray
};


// const plantsArray = usePlants();
// harvestPlants(plantsArray);
// import { harvestPlants } from "./harvester.js";