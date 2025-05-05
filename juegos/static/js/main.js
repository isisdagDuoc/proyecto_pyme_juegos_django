$(document).ready(function() {
    $.get('/api/noticias/', function(data) {
      if (Array.isArray(data.articles) && data.articles.length) {
        data.articles.forEach(function(noticia) {
          // recortes
          const desc = noticia.description
            ? noticia.description.substring(0, 80) + '…'
            : '';
          const cont = noticia.content
            ? noticia.content.substring(0, 100) + '…'
            : '';
  
          const cardNoticia = $(`
            <div class="col-12">
              <div class=" categoria h-20">
                <img src="${noticia.urlToImage}" class="card-img-top" alt="${noticia.title}">
                <div class="card-body d-flex flex-column noticia-body">
                  <h6 class="card-title">${noticia.title}</h6>
                  <p class="card-text flex-grow-1 fs-6">${desc}</p>
                  <p class="card-text flex-grow-1 fs-6">${cont}</p>
                  <a href="${noticia.url}" target="_blank" class="btn-iniciar-sesion btn-sm mt-auto">
                    Leer más en ${noticia.source.name}
                  </a>
                </div>
              </div>
            </div>
          `);
          $('#noticias').append(cardNoticia);
        });
      } else {
        $('#noticias').append('<p class="text-light">No hay noticias disponibles.</p>');
      }
    }).fail(function() {
      $('#noticias').append('<p class="text-danger">Error al cargar noticias.</p>');
    });
  });
  