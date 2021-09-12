function Ator(context, teclado, imagem) {

    this.context = context;
    this.teclado = teclado;
    this.imagem = imagem;

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

        if ((this.teclado.pressionada(SETA_DIREITA)) && (this.x < this.context.canvas.width - 36)) {

            this.x += incremento;

        }

        if ((this.teclado.pressionada(SETA_CIMA)) && (this.y > 0)) {

            this.y -= incremento;

        }

        if ((this.teclado.pressionada(SETA_BAIXO)) && (this.y < this.context.canvas.height - 48)) {

            this.y += incremento;

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



    },

    posicionar: function() {

        this.x = 85;
        this.y = 366;

    }

}