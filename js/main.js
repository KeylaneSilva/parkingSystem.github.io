document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);

function cadastrarVeiculo(e){
    //console.log("Veiculo cadastrado com sucesso");
    var modeloCarro = document.getElementById('modeloCarro').value;
    var placaCarro = document.getElementById('placaVeiculo').value;
    var time = new Date();

    //verificação nos campos
    if(!modeloCarro || !placaCarro){
        alert("Preencha os campos!!");
        return false;
    }

    //limpando campos no formulario
    document.getElementById('formulario').reset();

    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes(),

    }
    console.log(`${carro.hora}:${carro.minutos}`)

    if(localStorage.getItem('patio2') === null){
        var carros = []
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }else{
        var carros = JSON.parse(localStorage.getItem('patio2'));
        carros.push(carro);
        localStorage.setItem('patio2', JSON.stringify(carros));
    }
    //localStorage.setItem("teste", "Dando tudo certo!"); //key => value
    //console.log(localStorage.getItem("teste")); //"Dando tudo certo"
    //localStorage.removeItem("teste");
    //console.log(localStorage.getItem("teste"));
    //console.log(carro);
    e.preventDefault(); //para a execução de um processo
    mostrarPatio();
}



function apagarVeiculo(placa){
    //console.log(placa);
    var carros = JSON.parse(localStorage.getItem('patio2'));

    for(var i = 0; i < carros.length; i++){
        if(carros[i].placa == placa){
            carros.splice(i, 1); //começando da posição i, remova um elemento
        }
        localStorage.setItem('patio2', JSON.stringify(carros));
        mostrarPatio();
    }
}

function mostrarPatio(){
    var carros = JSON.parse(localStorage.getItem('patio2'));
    var carrosResultados = document.getElementById('resultados');

    carrosResultados.innerHTML = '';

    for(var i = 0; i < carros.length; i++){
        var modelo = carros[i].modelo;
        var placa = carros[i].placa;
        var hora = carros[i].hora;
        var minutos = carros[i].minutos;

        carrosResultados.innerHTML += '<tr><td>' + modelo +
                                        '</td><td>' + placa +
                                        '</td><td>' + hora + ' : ' + minutos +
                                        '</td><td id="horarioSaida">' +
                                        '</td><td>' +
                                        '</td><td> <button class= "btn btn-warning" onclick="finalizarVeiculo(\'' + placa + '\')">Finalizar' +
                                        '</td><td> <button class= "btn btn-danger" onclick="apagarVeiculo(\'' + placa + '\')">Apagar'
                                        '</td></tr>';
    }
}

// ------------ FUNÇÃO TESTE --------------
function finalizarVeiculo(placa){
    var carros = JSON.parse(localStorage.getItem('patio2'));

    for(let i=0;i< carros.length;i++){
        if(carros[i].placa == placa){
            let date = new Date()
            console.log(`hora de entrada - ${carros[i].hora}: ${carros[i].minutos}`)
            console.log(`hora de saida - ${date.getHours()}: ${date.getMinutes()}`)


            var shora =  date.getHours() - carros[i].hora.getHours()
            var sminuto = carros[i].minutos - date.getMinutes()
            console.log(`${shora}:${sminuto}`)

            //FAZER CALCULO DA HORA (4 HORAS )

        }
    }
}
