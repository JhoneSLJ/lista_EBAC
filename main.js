$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>')
        $(`<span>${novTarefa}</span>`).appendTo(novoItem);
        $(novoItem).appendTo('ul')

        $(novoItem).click(function(){
            $(novoItem).toggleClass("concluido")
        })
        

    })

    $('#botao-enviar').click(function(){
        $('ul, h2').slideDown();
    })
})