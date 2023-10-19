window.onload = function(){
    const allvalues = Object.values(localStorage);
    let i = 0
    allvalues.forEach((value) => {
        let newInput = document.createElement("input")
        newInput.type = "checkbox"
        newInput.id = 'Input' + i
        let newLabel = document.createElement("label")
        newLabel.id = 'Label' + i
        const favoritas = document.getElementById("favoritas")
        newLabel.setAttribute("for", `Input${+ i}`);
        newLabel.addEventListener("click", selecionar)
        newLabel.textContent = value
        favoritas.appendChild(newLabel)
        favoritas.appendChild(newInput)

        i++

    }

    )
}

function like(){
    console.log(document.querySelectorAll("label") , document.querySelectorAll("input") , localStorage);
    let url = window.location.href
    let img_atual  = document.getElementById('curtir');
    let lastIndex = url.lastIndexOf("/");
    url = url.substring(0, lastIndex);
    if (img_atual.src == `${url}/like.png`){
        img_atual.src = `like (1).png`
        let piada = document.getElementById("resultados").textContent
        let inputs = document.querySelectorAll("label")
        let indice = inputs.length
        let piada_atual = "piada" + indice
       

        let newInput = document.createElement("input")
        newInput.type = "checkbox"
        newInput.id = 'Input' + indice
        let newLabel = document.createElement("label")
        newLabel.id = 'Label' + indice 
        const favoritas = document.getElementById("favoritas")
        newLabel.setAttribute("for", `Input${+ indice}`);
        newLabel.addEventListener("click", selecionar)
        localStorage.setItem(piada_atual , piada)
        newLabel.textContent = localStorage.getItem(piada_atual)
        favoritas.appendChild(newLabel)
        favoritas.appendChild(newInput)
        
        console.log(document.querySelectorAll("label") , document.querySelectorAll("input") , localStorage)
    }else{
        let inputs = document.querySelectorAll("label")
        let indice = inputs.length - 1
        let piada_atual = "piada" + indice
        img_atual.src = `like.png`
        localStorage.removeItem(piada_atual);
        let inp = document.getElementById(`Input${+ indice}`);
        inp.remove();
        let lab = document.getElementById(`Label${+indice}`);
        
        lab.remove();
        console.log(document.querySelectorAll("label") , document.querySelectorAll("input") , localStorage)
        

    }
}

function remover(){

    console.log(document.querySelectorAll("label") , document.querySelectorAll("input") , localStorage);
    let labels = document.querySelectorAll("label")
    let inputs = document.querySelectorAll("input")
    let lis_labels = []
    let lis_inputs = []
    for(key in inputs) {
        if(inputs.hasOwnProperty(key)) {
            lis_inputs.push(inputs[key]);
        }
    }
    for(key in labels) {
        if(labels.hasOwnProperty(key)) {
            lis_labels.push(labels[key]);
        }
    }
    lis_inputs.forEach((input) => {
        if(input.checked){
            
            let index = (lis_inputs.indexOf(input));
            
            localStorage.removeItem(`piada${+ index}`);
            let lab = document.getElementById(`Label${+ index}`);
            console.log(`Label${+ index}`)
            lab.remove();
            let inp = document.getElementById(`Input${+ index}`);
            inp.remove();
            
        }
        // else{
        //     labels = document.querySelectorAll("label")
        //     inputs = document.querySelectorAll("input")
        //     lis_labels = []
        //     lis_inputs = []
        //     for(key in inputs) {
        //         if(inputs.hasOwnProperty(key)) {
        //             lis_inputs.push(inputs[key]);
        //         }
        //     }
        //     for(key in labels) {
        //         if(labels.hasOwnProperty(key)) {
        //             lis_labels.push(labels[key]);
        //         }
        //     }
        //     let index = lis_inputs.indexOf(input) + 1;
        //     localStorage.removeItem(`piada${+ index}`);
        //     input.id = 'Input' + (index)
        //     lis_labels[index].id = 'Label' + (index)


        // }

    })

    localStorage.removeItem(`piada3`);


    labels = document.querySelectorAll("label")
    inputs = document.querySelectorAll("input")
    lis_labels = []
    lis_inputs = []
    for(key in inputs) {
        if(inputs.hasOwnProperty(key)) {
            lis_inputs.push(inputs[key]);
        }
    }
    for(key in labels) {
        if(labels.hasOwnProperty(key)) {
            lis_labels.push(labels[key]);
        }
    }

    i = 0

    lis_labels.forEach((label) => {
        let piada_atual = "piada" + i
        label.id = 'Label' + i
        lis_inputs[i].id = 'Input' + i
        localStorage.setItem(piada_atual , label.textContent)
        console.log(lis_labels , lis_inputs , localStorage);
        i++
    })

    const allvalues = Object.keys(localStorage);

    allvalues.forEach((element) =>{
        console.log(i , `piada${+ i}`)
        localStorage.removeItem(`piada${+ i}`);


    })



}



async function selecionar(){
    let labels = document.querySelectorAll("label")
    let inputs = document.querySelectorAll("input")
    let lis_labels = []
    let lis_inputs = []
    for(key in inputs) {
        if(inputs.hasOwnProperty(key)) {
            lis_inputs.push(inputs[key]);
        }
    }
    for(key in labels) {
        if(labels.hasOwnProperty(key)) {
            lis_labels.push(labels[key]);
        }
    }
    console.log(lis_inputs)
    setTimeout(() => {
    lis_inputs.forEach((input) => {
        if (input.checked ){
            let index = lis_inputs.indexOf(input);
            console.log(inputs , input , labels , `Label${+ index}`)
            document.getElementById(`Label${+ index}`).style.backgroundColor = "rgb(145, 185, 186)"
        }else{
            console.log(inputs.values)
            let index =lis_inputs.indexOf(input);
            console.log(inputs , input , labels , `Label${+ index}`)
            document.getElementById(`Label${+ index}`).style.backgroundColor = "rgba(0, 0, 0, 0)"

    }
    })} , 100)
    
}


async function getStaticProps(){
        let resultados = document.getElementById("resultados")
        resultados.textContent = "Carregando..."
        let img_atual  = document.getElementById('curtir');
        img_atual.src = `like.png`
        const API = "https://v2.jokeapi.dev/joke/Any"
        let res = await fetch(`${API}` ,  {method: "GET"})
        const data = await res.json()
        const setup = data.setup
        const delivery =  data.delivery
        
        resultados.innerHTML  = `${setup} <br><br> ${delivery}`



  
  
} 