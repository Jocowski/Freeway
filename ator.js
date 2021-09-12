let SOM_COLIDIU = new Audio();
SOM_COLIDIU.src = "snd/colidiu.mp3";
SOM_COLIDIU.volume = 0.3;
SOM_COLIDIU.load();

let SOM_PONTO = new Audio();
SOM_PONTO.src = "snd/pontos.wav";
SOM_PONTO.volume = 1;
SOM_PONTO.load();

function Ator(context, teclado, imagem, painel) {

    this.context = context;
    this.teclado = teclado;
    this.imagem = imagem;
    this.painel = painel;

    this.x = 0;
    this.y = 0;
    this.velocidade = 0;

}

Ator.prototype = {

    atualizar: function() {

        let incremento = this.velocidade * this.animacao.decorrido / 1000;

        if ((this.teclado.pressionada(SETA_ESQUERDA)) && (this.x > 0)) {

            this.x -= incremento;

        }

        if ((this.teclado.pressionada(SETA_DIREITA)) && (this.x < this.context.canvas.width - 30)) {

            this.x += incremento;

        }

        if ((this.teclado.pressionada(SETA_CIMA)) && (this.y > 0)) {

            this.y -= incremento;

        }

        if ((this.teclado.pressionada(SETA_BAIXO)) && (this.y < this.context.canvas.height - 30)) {

            this.y += incremento;

        }

        if (this.y <= 0) {

            SOM_PONTO.play();
            this.painel.pontos += 10;
            this.posicionar();

        }

    },

    desenhar: function() {

        this.context.drawImage(this.imagem, this.x, this.y, 30, 30);

    },

    retangulosColisao: function() {

        return [
            
            {

                x: this.x,
                y: this.y,
                largura: 30,
                altura: 30

            }
    
        ];

    },
    
    colidiuCom: function(sprite) {

        if (sprite instanceof Carro) {

            SOM_COLIDIU.play();

            if (!this.painel.pontos <= 0) {

                this.painel.pontos -= 5;

            }

            this.posicionar();

        }

    },

    posicionar: function() {

        this.x = 85;
        this.y = 366;

    }

}