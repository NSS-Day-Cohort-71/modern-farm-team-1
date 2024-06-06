    // define and export a catalog function
        //accept harvested food array as input
        //iterate array of food objects
        //append <main> with innerHTML representation of food items
        // add <img src="${food.imgURL}" alt="${food.type}"> into the section thats added to mainELHtml 
        //to add an image instead of a name to the display
    export const catalog = (foodArr) => {
        let mainElHtml = ``
        foodArr.forEach(food => {
            mainElHtml += `
                <section class="plant">${food.type}:${food.output}</section>
            ` 
            });
            return mainElHtml
    }
