//accepts the combinedCrops array

export const reducedCatalog = (foodArr) => {
    let mainElHtml = ``
    foodArr.forEach(food => {
        mainElHtml += `
            <section class="plant">${food.type}:${food.output}</section>
        ` 
    });
    return mainElHtml
}
