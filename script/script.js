function category(str) {
    localStorage.setItem('category', str)
    window.location.href = "category.html";
}

function home() {
    localStorage.removeItem('category');
    window.location.href = "index.html";
}

function detail(obj) {
    
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
                    <a href='#' class="itemBox" onclick="category('3D Cake')">
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

const item = {
    name: 'Cake',
    photo: "https://lh6.googleusercontent.com/q10NwbmyHOTwsEopUHHAIj792yQl5ceCOGDPI_6JF0vJguCH80Ux2pn4c_x1ZH-ACY6kyOUHjtoiEss=w1366-h678-rw",
}

const cake3D = {
    title: '3D Cake',
    description: '3D Cakes are afun way to indulge your guests;it’s not just a beautiful centerpiece to your event but also a fun experience.',
    item: [item,item,item,item,item,item,item]
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