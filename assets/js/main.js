function criaCalculadora() {
    let listaN = [1, 2, 3, 410, 45, 11]; //lista de numeros
    console.log(listaN[3]); //imprime 410
    let listaS = ["a", "b", "c"]//lista string
    console.log(listaS[0]) ;//imprime o primeiro
    let objetoPessoa = {
        nome: "João",
        idade: 14
    };
    console.log(`Nome: ${objetoPessoa.nome} e idade: ${objetoPessoa.idade}`);
    let pessoas = [objetoPessoa];
    return {
        display: document.querySelector('.display'),


        inicia() {
            // alert('bora fazer uns calculos');
            this.CliqueBotoes();
            this.pressionaEnter();
        },
        pressionaEnter() {
            this.display.addEventListener('keypress' , e => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }

            });
        },

        CliqueBotoes() {
            //this -> calculadora
            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;

        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                console.info(e);
                alert('conta inválida');
                return;
            }

        }
    }


};

// DOM - Objeto com toda estrutura da página
// Para acessar objetos do DOM:
//  document.getElementById("<nome>")
//  document.getElementsByClass("<nome>")

const calculadora = criaCalculadora();
calculadora.inicia();