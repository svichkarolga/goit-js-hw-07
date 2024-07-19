 const listCategories = document.querySelector('#categories');
 const items = listCategories.querySelectorAll('.item');
 console.log(`Кількість категорій: ${items.length}`)

    items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const elCount = item.querySelectorAll('li').length;
    console.log(`Category ${title}`);
    console.log(`Elements ${elCount}`);
});
