function category(str) {
    localStorage.setItem('category', str)
    window.location.href = "category.html";
}

function home() {
    window.location.href = "index.html";
}

function detail(name, photo) {
    localStorage.setItem('itemName', name);
    localStorage.setItem('itemPhoto', photo);
    window.location.href="detail.html"
}

function categoryGenerator() {
    let obj;
    if(localStorage.getItem('category') == '3D Cake') obj = cake3D;
    else if(localStorage.getItem('category') == 'Butter Cream Cake') obj = butterCream;
    else if(localStorage.getItem('category') == 'Korean Flower Cake') obj = korean;
    let description = `
        <p class="title">${obj.title}</p>
        <p>${obj.description}</p>
    `
    $('.description').append(description);

    let rowTemplate = `<div class="row"></div>`
    $('.typeSection').append(rowTemplate);
    obj.item.forEach((cake) => {
        let template =`
                    <a href='#' class="itemBox" onclick="detail('${cake.name}', '${cake.photo}')">
                        <div class="col s2">
                            <div class="red lighten-1">
                                <img class="itemImg"
                                src="${cake.photo}"
                                alt="https://lh6.googleusercontent.com/XNbKPWjdNzNgeg_bCpSoakFc20s9WW3R9s_NFiUiAnQFASj6a0yTKlwVcEKt5UIy3NbILke9JCfp2aY=w1366-h629-rw">
                                ${cake.name}
                            </div>
                        </div>
                    </a>
                      `
        $('.row').append(template);
    })
}

function detailGenerator() {
    let template = `
        <img class="itemImg"
            src="${localStorage.getItem('itemPhoto')}"
            alt="https://lh3.googleusercontent.com/Jt5psU2IeohSDPw1MMZRuzAydz1vhPV8WljasuSdIca9AoxUMlmlq3JgD38YYvigRc1XW_lpC0k6XUg=w1366-h678-rw">
        <p>${localStorage.getItem('itemName')}</p>
        `
    $('.image').append(template);

    let description= `
        <p>Name: ${localStorage.getItem('itemName')}</p>
        <p>Category: ${localStorage.getItem('category')}</p>
        <p>Description: ${lorem}</p>
    `
    $('.desc').append(description);
}

console.log(data)

const item = {
    name: 'Cake',
    photo: "https://lh6.googleusercontent.com/q10NwbmyHOTwsEopUHHAIj792yQl5ceCOGDPI_6JF0vJguCH80Ux2pn4c_x1ZH-ACY6kyOUHjtoiEss=w1366-h678-rw",
}

const cake3D = {
    title: '3D Cake',
    description: '3D Cakes are afun way to indulge your guests;it’s not just a beautiful centerpiece to your event but also a fun experience.',
    item: data[0]
}

const butterCream = {
    title: 'Butter Cream Cake',
    description: 'The highest quality ingredients crafted immaculately for memorable moments.',
    item: [item,item,item,item,item,item,item,item,item,item]
}

const korean = {
    title: 'Korean Flower Cake',
    description: 'Inspired by korean flower.',
    item: [item,item,item,item,item,item,item,item,item,item,item,item]
}

$(document).ready(function(){
    $('.parallax').parallax();
});

$(".dropdown-content>li>a").css("color", '#e57373');

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget lobortis ligula. Aliquam luctus sem et neque vulputate, sed elementum nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Suspendisse tempus semper felis, sed porta erat tristique ut. Phasellus lectus sem, consectetur euismod lacus id, malesuada vestibulum massa. Nunc sagittis viverra mauris, nec sagittis nibh aliquet quis. Ut leo erat, posuere nec ligula non, commodo convallis lorem. Proin ornare at turpis eget semper.

Morbi id nulla dapibus, ultricies metus id, vulputate purus. Morbi sagittis ornare commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium et quam eu ullamcorper. Mauris suscipit lectus nulla, sit amet pulvinar libero venenatis nec. Nullam ultricies non nunc finibus sodales. Nullam auctor bibendum tortor ac vehicula. Praesent ultrices fermentum justo, et malesuada sapien volutpat non. Maecenas suscipit, est ac tincidunt scelerisque, nibh arcu rhoncus elit, vehicula egestas diam dui sit amet massa. Proin sapien turpis, lacinia sed nisl et, congue ultrices tellus. Phasellus volutpat, massa vitae pulvinar porta, odio ante viverra odio, id porta felis erat in diam. Fusce quis urna ultrices tellus posuere elementum non eget mi. Praesent vulputate, metus sit amet sagittis venenatis, leo nisl fermentum dui, quis rutrum mauris lacus vitae nisl. Aenean viverra vel sem pellentesque feugiat. Proin auctor dignissim nisi, at elementum lorem porta sit amet. Morbi in tincidunt neque, eget condimentum felis.`