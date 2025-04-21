$(document).ready(function () {
    $(".eliminar_usuario").click(function (e) {
        e.preventDefault();

        const confirmado = confirm("¿Estás seguro de eliminar este usuario?");
        if (!confirmado) return;

        const userId = $(this).data("id");

        $.ajax({
            url: "/core/eliminar_usuario/",  
            type: "POST",
            data: JSON.stringify({ id: userId }),
            contentType: "application/json",
            headers: {
                "X-CSRFToken": getCookie("csrftoken")
            },
            success: function (response) {
                alert(response.mensaje);
                location.reload(); 
            },
            error: function (xhr) {
                alert("Error al eliminar el usuario.");
            }
        });
    });

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});
