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
    
    console.log(carro);

    e.preventDefault(); //para a execução de um processo

}