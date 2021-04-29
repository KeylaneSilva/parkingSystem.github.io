document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);


function cadastrarVeiculo(e){
    //console.log("Veiculo cadastrado com sucesso");
    var modeloCarro = document.getElementById('modeloCarro').value;
    var placaCarro = document.getElementById('placaVeiculo').value;
    var time = new Date();

    carro = {
        carro: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        min: time.getMinutes()
    }

    if(localStorage.getItem('patio2') === null){
        var carros = []
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }else{
        var carros = JSON.parse(localStorage.getItem('patio'));
        carro.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }
    
    //localStorage.setItem("teste", "Dando tudo certo!"); //key => value
    //console.log(localStorage.getItem("teste")); //"Dando tudo certo"
    //localStorage.removeItem("teste");
    //console.log(localStorage.getItem("teste"));



    //console.log(carro);

    e.preventDefault(); //para a execução de um processo

}