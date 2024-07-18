 const listCategories = document.querySelector('#categories');
 const items = listCategories.querySelector('.item');
 console.log(`Кількість категорій: ${items.length}`)

    items.forEach(listItems => {
    const title = item.querySelector('.h2').textContent;
    const elCount = item.querySelector('.li').length;
    console.log(`Category ${title}`);
    console.log(`Elements ${elCount}`);
});
