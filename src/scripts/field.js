let field = []//array where the seeds will be planted
//function to add plants to the field
export function addPlant(seed) {
    if(Array.isArray(seed)){
        for (const s of seed) { //adds each item individually if the seed is part of an array(like corn)
            field.push(s)
        }
    } else{
        field.push(seed)
    }
      
} 
//function to use the seeds(return a copy of the field array)
export function usePlants(){
    return field.slice()
}