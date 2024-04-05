const vP1 = document.getElementById("valor1").textContent()
const vP2 = document.getElementById("valor2").textContent()

const valorTotal = vP1 + vP2
document.getElementById("valorTotal").innerHTML =  vP1 + vP2


var a = 1;

function diminuirValor(quant,num,v){
    if(a > 0){
    a--;
    quant *= a;
    
    document.getElementById(v).innerHTML = "R$ "+ quant+".00";
    document.getElementById(num).innerHTML = a ;
    }
    
}

function aumentarValor(quant,num,v){
    if(a >= 0){
        a++;
        quant *= a;
    
        document.getElementById(v).innerHTML = "R$ "+ quant+".00";
        document.getElementById(num).innerHTML = a ;
    }
    
}

function addToCart(event) {
    const product = event.target.parentNode;
    const productName = product.querySelector('h4').innerText;
    const productImage = product.querySelector('img').src;
    const productPrice = product.querySelector('p:nth-child(3)').innerText;
  
    // Cria um objeto para representar o produto
    const productData = {
      name: productName,
      image: productImage,
      price: productPrice
    };
  
    // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Adiciona o produto ao carrinho
    cart.push(productData);
  
    // Salva o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  const buyButtons = document.querySelectorAll('.Botao');
  
  buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
