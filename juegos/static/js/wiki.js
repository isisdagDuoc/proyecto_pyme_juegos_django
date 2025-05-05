$(document).ready(function() {
    console.log('estamos cargado');
  
    $.get('/api/categoria/', function(data) {
      console.log('Datos recibidos:', data);
  
      // Si la respuesta es lista de categorías…
      if (Array.isArray(data) && data.length > 0) {
        
        data.forEach(function(juego) {
         
            const card = $(`
                 <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div class="card h-100">
                    <img src="${juego.thumbnail}" class="card-img-top" alt="${juego.title}">
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">${juego.title}</h5>
                      <p class="card-text flex-grow-1">${juego.short_description}</p>
                      <a href="${juego.game_url}" target="_blank" class="btn-iniciar-sesion btn btn-primary mt-auto">
                        Ver Detalles
                      </a>
                    </div>
                  </div>
                </div>
              `);

          $('#wiki_juegos').append(card);
        });
        console.log('Tenemos categorías:', data);
      }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.error('Error llamando a /api/categoria/:', textStatus, errorThrown);
    });
  });
  