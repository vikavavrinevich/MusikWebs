// Знаходимо елемент з класом 'img-categoty' і зберігаємо його в змінну 'imgCategory'
const imgCategory = document.querySelector('.img-categoty');

// Знаходимо елемент з класом 'shop__sidebar' і зберігаємо його в змінну 'shopSidebar'
const shopSidebar= document.querySelector('.shop__sidebar');

// Знаходимо елемент з класом 'closeSidebar-img' і зберігаємо його в змінну 'closeSidebar'
const closeSidebar= document.querySelector('.closeSidebar-img');

// Додаємо обробник події "click" до елемента 'imgCategory'
imgCategory.addEventListener("click", ()=>{
    // Додаємо клас 'mobile' до елемента 'shopSidebar' при кліку на 'imgCategory'
    shopSidebar.classList.add("mobile")
})

// Додаємо обробник події "click" до елемента 'closeSidebar'
closeSidebar.addEventListener("click", ()=>{
    // Видаляємо клас 'mobile' з елемента 'shopSidebar' при кліку на 'closeSidebar'
    shopSidebar.classList.remove("mobile")
})

// Знаходимо всі елементи з класом 'product-btn' і зберігаємо їх в NodeList 'productBtn'
const productBtn = document.querySelectorAll('.product-btn');

// Додаємо обробник події "load" до об'єкта window (при завантаженні сторінки)
window.addEventListener("load", ()=>{

    // Перевіряємо, чи ширина екрану менша за 800 пікселів
    if(screen.availWidth < 800){
        // Якщо так, змінюємо текст всіх елементів 'productBtn' на "+"
        productBtn.forEach((e)=> e.innerHTML = "+")
    }else{
        // Якщо ні, змінюємо текст всіх елементів 'productBtn' на "Add to cart"
        productBtn.forEach((e)=> e.innerHTML = "Add to cart")
    }
})
