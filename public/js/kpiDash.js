// sessão
function validarSessao() {
    let email = sessionStorage.EMAIL_USUARIO;
    let nome = sessionStorage.NOME_USUARIO;
  
    let b_usuario = document.getElementById("b_usuario");
  
    if (email != null && nome != null) {
      b_usuario.innerHTML = nome;
    } else {
      window.location = "../login.html";
    }
  }
  
  function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
  }
  
  function alertar(resposta, idQuarto) {
    let temp = resposta[0].temperatura;
    let umid = resposta[0].umidade;
    let prox = resposta[0].janela;
    let tempFora = resposta[0].temperaturaFora;
    let umidFora = resposta[0].umidadeFora;
  
    console.log(tempFora, umidFora);
  
    let grauDeAviso = "";
  
    let limitesTemperatura = {
      quente: 26,
      ideal: 24,
      frio: 19,
    };
  
    let limitesUmidade = {
      acima: 61,
      ideal: 30,
      frio: 29,
    };
  
    let classe_temperatura = "cor-alerta";
    let classe_umidade = "cor-alerta";
    let classe_proximidade = "cor-alerta";
    let classe_alerta = "cor-alerta";
  
    /* Verificação temperatura */
  
    if (temp < limitesTemperatura.ideal) {
      classe_temperatura = "temperatura-baixa container card";
      document.getElementById(`descricao_quarto_${idQuarto}`).innerHTML =
        "Temperatura baixa🌡️";
    } else if (
      temp >= limitesTemperatura.ideal &&
      temp <= limitesTemperatura.quente
    ) {
      classe_temperatura = "temperatura-ideal container card";
      document.getElementById(`descricao_quarto_${idQuarto}`).innerHTML =
        "Temperatura ideal🌡️";
        
    } else if (temp > limitesTemperatura.quente) {
      classe_temperatura = "temperatura-quente container card";
      document.getElementById(`descricao_quarto_${idQuarto}`).innerHTML =
        "Temperatura acima🌡️";
    }
  
    /* Verificação Umidade */
  
    if (umid < limitesUmidade.ideal) {
      classe_umidade = "umidade-abaixo container card";
      document.getElementById(`descricao_umidade_quarto_${idQuarto}`).innerHTML =
        "Umidade baixa💧";
    } else if (umid >= limitesUmidade.ideal && umid < limitesUmidade.acima) {
      classe_umidade = "umidade-ideal container card";
      document.getElementById(`descricao_umidade_quarto_${idQuarto}`).innerHTML =
        "Umidade ideal💧";
    } else if (umid >= limitesUmidade.acima) {
      classe_umidade = "umidade-alta container card";
      document.getElementById(`descricao_umidade_quarto_${idQuarto}`).innerHTML =
        "Umidade acima💧";
    }
  
    /* verificação proximidade */
  
    if (prox >= 1) {
      classe_proximidade = "janela-fechada container card";
      document.getElementById(`prox_quarto_${idQuarto}`).innerHTML = "Fechada";
      document.getElementById(
        `descricao_proximidade_quarto_${idQuarto}`,
      ).innerHTML = "Janela fechada 🪟";
    } else {
      classe_proximidade = "janela-aberta container card";
      document.getElementById(`prox_quarto_${idQuarto}`).innerHTML = "Aberta";
      document.getElementById(
        `descricao_proximidade_quarto_${idQuarto}`,
      ).innerHTML = "Janela aberta 🪟";
    }
  
    /* alertas */
  
    if (
      umid >= limitesUmidade.ideal &&
      umid < limitesUmidade.acima &&
      temp >= limitesTemperatura.ideal &&
      temp <= limitesTemperatura.quente
    ) {
      classe_alerta = "umidade-ideal container card";
      document.getElementById(`titulo_alerta_${idQuarto}`).innerHTML = '';
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Sem alertas";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições adequadas ✅";
    } else if (tempFora >= limitesTemperatura.quente && temp <= limitesTemperatura.frio && prox == 0) {
      classe_alerta = "alerta container card";
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Fechar janela e ligar ar-condicionado";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else if (tempFora >= limitesTemperatura.quente && temp <= limitesTemperatura.frio && prox == 1) {
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Manter janela fechada e desligar ar-condicionado";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else if (tempFora >= limitesTemperatura.quente && temp >= limitesTemperatura.quente && prox == 0) {
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Fechar janela e ligar ar-condicionado";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else if (tempFora >= limitesTemperatura.quente && temp >= limitesTemperatura.quente && prox == 1) {
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Fechar janela e ligar ar-condicionado";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else if (tempFora <= limitesTemperatura.frio && temp >= limitesTemperatura.quente && prox == 0) {
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Fechar janela e desligar ar-condicionado";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else if (tempFora <= limitesTemperatura.frio && temp >= limitesTemperatura.quente && prox == 1) {
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Desligar ar-condicionado";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else if (tempFora <= limitesTemperatura.frio && temp <= limitesTemperatura.frio && prox == 0) {
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Fechar janela e desligar ar-condicionado (caso ligado)";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    } else{
      document.getElementById(`alerta_quarto_${idQuarto}`).innerHTML =
        "Manter janela fechada e desligar ar-condicionado (caso ligado)";
      document.getElementById(`descricao_alerta_quarto_${idQuarto}`).innerHTML =
        "Condições inadequadas 🚨";
    }
  
    let card;
  
    if (document.getElementById(`temp_quarto_${idQuarto}`) != null) {
      document.getElementById(`temp_quarto_${idQuarto}`).innerHTML = temp + "°C";
    }
  
    if (document.getElementById(`umid_quarto_${idQuarto}`) != null) {
      document.getElementById(`umid_quarto_${idQuarto}`).innerHTML = umid + "%";
    }
  
    document.getElementById(`temp_value`).innerHTML = tempFora + "°C";
    document.getElementById(`umid_value`).innerHTML = umidFora + "%";
  
    if (document.getElementById(`card_${idQuarto}`)) {
      card = document.getElementById(`card_${idQuarto}`);
      card.className = classe_temperatura;
    }
  
    if (document.getElementById(`card_umidade_${idQuarto}`)) {
      card = document.getElementById(`card_umidade_${idQuarto}`);
      card.className = classe_umidade;
    }
  
    if (document.getElementById(`card_proximidade_${idQuarto}`)) {
      card = document.getElementById(`card_proximidade_${idQuarto}`);
      card.className = classe_proximidade;
    }
  
    if (document.getElementById(`card_alerta_${idQuarto}`)) {
      card = document.getElementById(`card_alerta_${idQuarto}`);
      card.className = classe_alerta;
    }
  }
  
  function atualizacaoPeriodica() {
    JSON.parse(sessionStorage.quartos).forEach((item) => {
      obterdados(item.idQuarto);
    });
    setTimeout(atualizacaoPeriodica, 10000);
  }
  
  function obterdados(idQuarto) {
    fetch(`/medidas/tempo-real/${idQuarto}`)
      .then((resposta) => {
        if (resposta.status == 200) {
          resposta.json().then((resposta) => {
            console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
  
            alertar(resposta, idQuarto);
          });
        } else {
          console.error(
            `Nenhum dado encontrado para o id ${idQuarto} ou erro na API`,
          );
        }
      })
      .catch(function (error) {
        console.error(
          `Erro na obtenção dos dados do quarto p/ gráfico: ${error.message}`,
        );
      });
  }