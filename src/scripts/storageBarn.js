export const barn = () => {
    let storage = []
    
        return{
            push: (crop) => {
               return storage.push(crop)
            },
            pop: () =>{
                return storage.pop()
            },
            peek: () => {
                return storage[storage.length - 1]
            },
            isEmpty: () => {
               return storage.length === 0
            },
        }
    }