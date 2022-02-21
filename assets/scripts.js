let conta, mrc = 0;
let painel = document.getElementsByClassName("painel")[0];
let teclas = document.querySelectorAll(".teclas");

let exibirConta = () => {
    if (conta == 0) {
        painel.innerHTML = conta
        conta = ""
    } else {
        painel.innerHTML = conta
    }
}

function resolverMRC(value) {
    conta = eval(conta + value + mrc);
    exibirConta();
    conta = conta.toString();
}

function salvarMRC() {
    mrc = eval(conta);
}

function validacao() {
    if (conta.slice(-1) == "/" || conta.slice(-1) == "*" || conta.slice(-1) == "+" || conta.slice(-1) == "-" || conta.slice(-1) == "%" || conta.slice(-1) == ".") {
        alert("Operação não permitida!");
        return false;
    } else {
        return true;
    }
}

function resolver() {
    conta = eval(conta);
    exibirConta();
    conta = conta.toString();
}

// LIGAR
teclas[3].addEventListener("click", ligar);

function ligar() {
    conta = "0";
    exibirConta();
    conta = "";

    // RESETAR / LIMPAR
    teclas[4].addEventListener("click", () => {
        conta = "0";
        exibirConta();
        conta = "";
    });

    // APAGAR ULTIMO
    teclas[5].addEventListener("click", () => {
        if (conta.length <= 1) {
            conta = "0";
            exibirConta();
            conta = "";
        } else {
            conta = conta.slice(0, conta.length - 1);
            exibirConta();
        }
    });

    // SALVAR MRC
    teclas[0].addEventListener("click", () => {
        salvarMRC();
    });

    // RESOLVER M+
    teclas[2].addEventListener("click", () => {
        resolverMRC("+");
    });

    // RESOLVER M-
    teclas[1].addEventListener("click", () => {
        resolverMRC("-");
    });

    // ADICIONAR 0
    teclas[19].addEventListener("click", () => {
        conta = conta + "0";
        exibirConta();
    });

    // ADICIONAR 1
    teclas[16].addEventListener("click", () => {
        conta = conta + "1";
        exibirConta();
    });

    // ADICIONAR 2
    teclas[17].addEventListener("click", () => {
        conta = conta + "2";
        exibirConta();
    });

    // ADICIONAR 3
    teclas[18].addEventListener("click", () => {
        conta = conta + "3";
        exibirConta();
    });

    // ADICIONAR 4
    teclas[12].addEventListener("click", () => {
        conta = conta + "4";
        exibirConta();
    });

    // ADICIONAR 5
    teclas[13].addEventListener("click", () => {
        conta = conta + "5";
        exibirConta();
    });

    // ADICIONAR 6
    teclas[14].addEventListener("click", () => {
        conta = conta + "6";
        exibirConta();
    });

    // ADICIONAR 7
    teclas[8].addEventListener("click", () => {
        conta = conta + "7";
        exibirConta();
    });

    // ADICIONAR 8
    teclas[9].addEventListener("click", () => {
        conta = conta + "8";
        exibirConta();
    });

    // ADICIONAR 9
    teclas[10].addEventListener("click", () => {
        conta = conta + "9";
        exibirConta();
    });

    // ADICIONAR %
    teclas[6].addEventListener("click", () => {
        if (validacao()) {
            conta = conta + "%";
            exibirConta();
        }
    });

    // ADICIONAR /
    teclas[7].addEventListener("click", () => {
        if (validacao()) {
            conta = conta + "/";
            exibirConta();
        }
    });

    // ADICIONAR X
    teclas[11].addEventListener("click", () => {
        if (validacao()) {
            conta = conta + "*";
            exibirConta();
        }
    });

    // ADICIONAR -
    teclas[15].addEventListener("click", () => {
        if (validacao()) {
            conta = conta + "-";
            exibirConta();
        }
    });

    // ADICIONAR +
    teclas[22].addEventListener("click", () => {
        if (validacao()) {
            conta = conta + "+";
            exibirConta();
        }
    });

    // ADICIONAR =
    teclas[21].addEventListener("click", () => {
        resolver();
    });

    // ADICIONAR PONTO FLUTUANTE
    teclas[20].addEventListener("click", () => {
        if (validacao()) {
            conta = conta + ".";
            exibirConta();
        }
    });

    // DESLIGAR
    teclas[3].addEventListener("click", () => {
        location.reload();
    });
}




