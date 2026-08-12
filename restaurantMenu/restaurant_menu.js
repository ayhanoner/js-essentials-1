const breakfastMenu = ['Pancakes - $5.99', 'Eggs Benedict - $8.99', 'Oatmeal - $3.99', 'Frittata - $7.99'];
const mainCourseMenu = ['Steak - $15.99', 'Pasta - $12.99', 'Burger - $10.99', 'Salmon - $14.99'];
const dessertMenu = ['Cake - $4.99', 'Ice Cream - $3.99', 'Pudding - $3.99', 'Fruit Salad - $5.99'];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index) => `<p>Item ${index + 1}: ${item} </p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem ='';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item} </p>`;
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;


let dessertMenuItem ='';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertMenuItem += `<p>Item ${i + 1}: ${dessertMenu[i]} </p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItem;