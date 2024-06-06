//accepts harvestedCrops or sortedCrops

export const imgCatalog = (foodArr) => {
    let mainElHtml = ``
    foodArr.forEach(food => {
        mainElHtml += `
            <section class="plant">
            <img src="${food.imgURL}" alt="${food.type}">
            </section>
        ` 
    });
    return mainElHtml
}
