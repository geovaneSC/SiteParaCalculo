
function salvar(){
    let seção = document.getElementById('sec')
    let nome = document.getElementById('nome');
    var img = document.createElement('img')// com esse atributo consiguo inserir uma imagem sem ter declarado no html antes
    img.setAttribute('id','foto')
    img.setAttribute('src','albert.jpeg') 
    let res = document.getElementById('res');
    let n1 = String(nome.value);
    img.style.width = ""
   seção.style.backgroundColor = "#ffffff";
   seção.style.color = "rgb(0, 0, 0)";
   seção.style.borderRadius ="1em";
   seção.style.padding = "100px";
   seção.style.position = "absolute";
   seção.style.top = "50%";
   seção.style.left = "50%";
   seção.style.marginright =  "-50%";
   seção.style.transform = "translate(-50%, -50%)";
   seção.innerHTML = ` <p>Olá! ${n1}, meu nome é Albert Einstein mas você já deve me conhecer, se não irá.</br> Pois bem clique no botão e começe o seus estudos em cálculo. </p>`;
   seção.appendChild(img);
   seção.appendChild(res);
    
}