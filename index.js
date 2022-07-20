const productsCart1 = 
    {
        id: 1,
        name: "Uva Crimson",
        price: [44.99],
    }


const productsCart2 = 
    {
        id: 2,
        name: "Vinho Canção",
        price: [17.98],
    }


    const productsCart3 = 
    {
        id: 3,
        name: "Água de coco",
        price: [8.99],
    }

    const productsCart4 = 
    {
        id: 4,
        name: "Mamão",
        price: [9.98],
    }

    const productsCart5 = 
    {
        id: 5,
        name: "Água Tônica",
        price: [17.98],
    }

//tag main
let selectTag = document.querySelector("body")
let main = document.createElement("main")
main.innerText = "Virtual Market"
document.body.appendChild(main)


//tag ul

let produtos = ["Uva Crimson","Vinho Canção","Água de coco","Mamão", "Água Tônica"]

function countArr(produtos){
    for(let i = 0; i < produtos.length; i++){
        
    }   

    let ul = document.createElement("ul");
    let select = document.querySelector("main")
    document.body.appendChild(ul);
    select.appendChild(ul)
    ul.classList.add("productsList")

                for (let i = 1; i < 5; i++){
                let li = document.createElement("li");  
                li.className = "productsDetail";

                let a = document.createElement("a");
                a.innerHTML = produtos[i]

                li.appendChild(a);
                ul.appendChild(li);
}

    
}
countArr(produtos)



//section

let selectBody = document.querySelector("body")
let sec = document.createElement("section")
document.body.appendChild(sec)
sec.classList.add("button-section")

//button

let selectSection = document.querySelector(".button-section")
let button = document.createElement("button")
button.innerText = "Finalizar Compra"
document.body.appendChild(button)
selectSection.appendChild(button)


function sumProducts(productsCart1,productsCart2,productsCart3,productsCart4,productsCart5){
    let result = []
    let sum = 0
    sum = parseInt(productsCart1.price) + parseInt(productsCart2.price) + parseInt(productsCart3.price) + parseInt(productsCart4.price) + parseInt(productsCart5.price)
    result.push(sum)


        let selectUL = document.querySelector("ul")
        let sectionForTotal = document.createElement("section")
        document.body.appendChild(sectionForTotal)
        sectionForTotal.innerHTML = "Total: " + result 
        selectUL.appendChild(sectionForTotal)

}

sumProducts(productsCart1,productsCart2,productsCart3,productsCart4,productsCart5)




