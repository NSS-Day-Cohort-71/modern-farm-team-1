export const barn = () => {
    const storage = []
    
    return {
        push: (crop) => {
            storage.push(crop)
        },
        pop: () => {
            return storage.pop()
        },
        peek: () => {
            return storage[storage.length - 1]
        },
        isEmpty: () => {
            return storage.length === 0
        }
    }
}