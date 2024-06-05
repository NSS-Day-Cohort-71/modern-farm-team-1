 // Initialize id counter
let cropId = 1

export const harvestPlants = (plantsArr) => {
    const harvestedArray = [];
    plantsArr.forEach(plant => {
        let howMany = plant.output
        if (plant.type === "Corn") {
            for(let i=0; i<howMany/2; i++) {
                const harvestedPlant = { ...plant, id: cropId++ } // Add id and increment cropId
                harvestedArray.push(harvestedPlant)
            }
        } else {
        for(let i=0; i<howMany; i++) {
            const harvestedPlant = { ...plant, id: cropId++ } // Add id and increment cropId
            harvestedArray.push(harvestedPlant)
        }
    }});
    return harvestedArray
};