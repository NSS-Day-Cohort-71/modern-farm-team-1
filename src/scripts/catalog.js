// define and export a catalog function
    //accept harvested food array as input
    //iterate array of food objects
    //append <main> with innerHTML representation of food items

export const catalog = (foodArr) => {
    let mainElHtml = ``
    foodArr.forEach(food => {
        mainElHtml += `
            <section class="plant">${food.type}</section>
        ` 
    });
    return mainElHtml
}
