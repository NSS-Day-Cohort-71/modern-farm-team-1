// const farmStore = []

const processor = () => {
    const conveyorBelt = []
    
    return {
        enqueue: (crop) => {
                conveyorBelt.push(crop)
        },

        dequeue: () => {
            const crop = conveyorBelt.shift()
            switch (crop) {
                case crop.type === "Soybean":
                    farmStore.push("Bean Paste")
                case crop.type === "Corn":
                    farmStore.push("Corn Meal")
                case crop.type === "Wheat":
                    farmStore.push("Flour")
                case crop.type === "Sunflower":
                    farmStore.push("Sunflower Oil")
                case crop.type === "Asparagus":
                    farmStore.push("Pickled Asparagus")
                case crop.type === "Potato":
                    farmStore.push("Potato Chips")
            }
        },

        next: () => {
            return conveyorBelt.length > 0 ? conveyorBelt[0]: null
        },

        last: () => {
            return conveyorBelt > 0 ? conveyorBelt[conveyorBelt.length - 1]: null
        },

        isEmpty: () => {
            return conveyorBelt.length === 0
        },

        size: () => {
            return conveyorBelt.length
        },

    }
}