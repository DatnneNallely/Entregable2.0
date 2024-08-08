$(document).ready(function() {
    $('#obtenerDatosBtn').on('click', function() {
        obtenerDatos();
    });

    obtenerDatos();
});

function obtenerDatos() {
    $.getJSON('listar_datos.php', function(data) {
        mostrarResultados(data);
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Error al obtener datos:', textStatus, errorThrown);
    });
}

function mostrarResultados(data) {
    var resultadosDiv = $('#resultados');
    var html = '<ul>';

    $.each(data, function(index, item) {
        html += '<li>' + item.columna1 + ' - ' + item.columna2 + '</li>';
    });

    html += '</ul>';
    resultadosDiv.html(html);
}
