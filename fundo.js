function Fundo(context, imagem) {

    this.context = context;
    this.imagem = imagem;

}

Fundo.prototype = {

    atualizar: function() {

    },

    desenhar: function() {

        this.context.drawImage(this.imagem, 0, 0, this.context.canvas.width, this.context.canvas.height);

    }

}