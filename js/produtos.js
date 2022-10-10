const imgs = document.getElementById("#img");
const img = document.querySelectorAll("#img img");



let idx = 0;

function carrossel () {
  idx++;

  if ( idx > img.length -1 ){
    idx = 0;
  }

  imgs.style.transform = 'translateX(${-idx * 500}px)';
}
setInterval(carrossel, 1000);




const analise = () => {
    class Produto {
        constructor(country, year) {
            this.country = country;
            this.year = year;
          }
         }
         
       class Carrinho {
         constructor(){}
           addProduto (country, year){
           let produto = new Produto(country, year)
           return produto
         }
       }
    
       let carrinho = []
       while (true) {
         let nomeProduto = prompt('Digíte o vinho que deseja ("Ok" para sair)')
         if (nomeProduto == 'Ok') {
           break
         } 
    
         let yearProduto = parseInt(prompt('Digite o ano do produto')),
             
    
         produto = new Carrinho();
         carrinho.push(produto.addProduto(nomeProduto,yearProduto))      }
    
         let texto = '',
           totalFianl = 0;
     
         for (let i = 0; i < carrinho.length; i++) {
       texto += `Produto: ${carrinho[i].country} Ano: ${carrinho[i].year} /`
     }
     alert(`${texto}\n`)
}

const registro = () => {
  class Registro {
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
      }
     }
     
   class Carrinho {
     constructor(){}
       addRegistro (nome, senha){
       let produto = new Registro(nome, senha)
       return produto
     }
   }

   let carrinho = []
   while (true) {
     let nomeRegistro = prompt('Digíte seu nome ("Ok" para sair)')
     if (nomeRegistro == 'Ok') {
       break
     } 

     let senhaRegistro = parseInt(prompt('Digite a senha pretendida')),
         

     produto = new Carrinho();
     carrinho.push(produto.addRegistro(nomeRegistro,senhaRegistro))      }

     let texto = '',
       totalFianl = 0;
 
     for (let i = 0; i < carrinho.length; i++) {
     texto += `Nome: ${carrinho[i].nome} Senha: ${carrinho[i].senha} /`
 }
 alert(`${texto}\n`)
}


