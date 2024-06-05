
export let field = [] // array where the seeds will be planted

// function to add plants to the field
export const addPlant = (seeds) => {
    if (Array.isArray(seeds)) {
        for (const s of seeds) { // adds each item individually if the seed is part of an array (like corn)
            field.push(s)
        }
    } else {
        field.push(seeds)
    }
}

// function to use the seeds (return a copy of the field array)
export const usePlants = () => field.slice()
