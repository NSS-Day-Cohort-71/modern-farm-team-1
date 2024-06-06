//Accepts harvestedCrops or sortedCrops

export const catalog = (foodArr) => {
    let mainElHtml = ``
    foodArr.forEach(food => {
        mainElHtml += `
            <section class="plant">${food.type}</section>
        ` 
    });
    return mainElHtml
}