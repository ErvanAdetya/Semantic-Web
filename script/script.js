function category(str) {
    localStorage.setItem('category', str)
    window.location.href = "category.html";
}

function home() {
    localStorage.removeItem('category');
    window.location.href = "index.html";
}

function categoryGenerator() {
    let categoryStr = localStorage.getItem('category');
    $('.title').append(categoryStr);
}