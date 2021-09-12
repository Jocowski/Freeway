function Painel(context) {

    this.context = context;

    this.pontos = 0;

}

Painel.prototype = {

    atualizar: function() {

    },

    desenhar: function() {

        this.context.save();

        this.context.fillStyle = "black";
        this.context.font = "25px sans-serif";
        this.context.fillText(this.pontos, this.context.canvas.width / 2, 28);

        this.context.restore();

    }

}