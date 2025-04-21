$(document).ready(function () {
    $("#modificar_perfil").submit(function (event) {
        event.preventDefault();
        let isValid = true;

       
        $(".error-message").hide();
        $(".form-control, .form-select").removeClass("is-invalid");

        // Campos obligatorios
        const campos = ['nombre', 'usuario', 'correo', 'nueva_contraseña', 'fecha_nac', 'direccion', 'rol'];

        const mensajes = [
            "El nombre es obligatorio.",
            "El usuario es obligatorio",
            "El correo es obligatorio.",
            " ",
            "La fecha de nacimiento es obligatoria.",
            "La dirección es obligatorio.",
            " ", 
        ];

        campos.forEach((campo, i) => {
            const input = $("#" + campo);  
            if (input.val().trim() === "") {
                input.addClass("is-invalid");
                input.next(".error-message").text(mensajes[i]).show();
                isValid = false;
            }
        });

        if (isValid) {
            const datos = {
                nombre: $("#nombre").val(),
                usuario: $("#usuario").val(),
                correo: $("#correo").val(),
                contraseña: $("#nueva_contraseña").val(),
                fecha_nac: $("#fecha_nac").val(),
                direccion: $("#direccion").val(),
                rol: $("#rol").val(),
            };

            $.ajax({
                url: "/core/modificar_perfil/",
                type: "POST",
                data: JSON.stringify(datos),
                contentType: "application/json",
                headers: {
                    "X-CSRFToken": getCookie("csrftoken")
                },
                success: function (response) {
                    alert(response.mensaje); 
                    $("#nueva_contraseña").val("");
                },
                error: function (xhr) { 
                    const res = xhr.responseJSON;
                    alert(res?.error);
                }
            });
        }
    });

    // Función para obtener el token CSRF desde cookies (si usas @csrf_protect)
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Verifica si este cookie empieza con el nombre que buscamos
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
