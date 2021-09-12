function Carro(context, imagem, imgExplosao) {

    this.context = context;
    this.imagem = imagem;
    this.imgExplosao = imgExplosao;

    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
    this.largura = 50;
    this.altura = 40;

}

Carro.prototype = {

    atualizar: function() {

        let incremento = this.velocidade * this.animacao.decorrido / 1000;

        this.x -= incremento;

        if (this.x < -50) {

            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);

        }

    },

    desenhar: function() {

        this.context.drawImage(this.imagem, this.x, this.y, this.largura, this.altura);

    },

    retangulosColisao: function() {

        return [
            
            {

                x: this.x,
                y: this.y,
                largura: this.largura,
                altura: this.altura

            }
    
        ];

    },
    
    colidiuCom: function(sprite) {

        if (sprite instanceof Carro) {

            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
            this.animacao.excluirSprite(sprite);
            this.colisor.excluirSprite(sprite);

            let explosao = new Explosao(this.context, this.imgExplosao, this.x, this.y);
            this.animacao.novoSprite(explosao);

        }

    }

}