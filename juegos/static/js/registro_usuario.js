$(document).ready(
    function () {
        // FORMULARIO REGISTRO DE USUARIO
        $("#formulario").submit(function (event) {
         event.preventDefault()
    
            $(".error-message").hide(); 
            $(".form-control").removeClass("is-invalid"); 
    
            let isValid = true;
    
            // NOMBRE USUARIO
            //valida que el input de nombre no quede vacio
            if ($("#nombre").val().trim() === "") {
                $("#nombre").addClass("is-invalid");
                $(".error-message").text("El nombre es obligatorio.").show();
                isValid = false;
            }
    
            // USUARIO
            //valida que el input de usuario no quede vacio
            if ($("#usuario").val().trim() === "") {
                $("#usuario").addClass("is-invalid");
                $(".error-message").text("El nombre de usuario es obligatorio.").show();
                isValid = false;
            }
    
            // CORREO
            //valida que el input de correo no quede vacio
            if ($("#correo").val().trim() === "") {
                $("#correo").addClass("is-invalid");
                $(".error-message").text("El correo electronico es obligatorio.").show();
                isValid = false;
            }
    
            // CONTRASEÑA
            const contraseña = $("#contraseña").val().trim();
            const repcontraseña = $("#repcontraseña").val().trim();
    
            const largoContraseña = contraseña.length < 4;
            const contieneCaracteresEspeciales = /[<>@!#$%^&*()_+\[\]{}?:;|'\"\\,./~`\-=/]/.test(contraseña);
            const contieneNumero = /\d/.test(contraseña);
            const contieneMayuscula = /[A-Z]/.test(contraseña);
    
            // valida input vacio
            if (contraseña === "" || repcontraseña === "") {
                $("#contraseña").addClass("is-invalid");
                $("#repcontraseña").addClass("is-invalid");
    
                $(".error-message").text("La contraseña es obligatoria.").show();
                
                isValid = false;
            }
    
            // coincidencia contraseñas
            if (contraseña !== repcontraseña) {
                $("#repcontraseña").addClass("is-invalid");
    
                $(".error-message").text("Las contraseñas deben coindicir").show();
                
                isValid = false;
            }
    
            // valida largo cadena
            if (largoContraseña) {
                $("#contraseña").addClass("is-invalid");
                $("#repcontraseña").addClass("is-invalid");
    
                $(".error-message").text("Debe tener 4 o más caracteres").show();
                
                isValid = false;
            }
    
            // valida caracteres especiales
            if (!contieneCaracteresEspeciales) {
                $("#contraseña").addClass("is-invalid");
                $("#repcontraseña").addClass("is-invalid");
    
                $(".error-message").text("Debe contener al menos un caracter especial como por ejemplo: '/[<>@!#$%^&*()_+\[\]{}?:;|'\"\\,./~`\-=/]/'").show();
                
                isValid = false;
            }
    
            // valida letras mayusculas y numeros
            if (!contieneNumero || !contieneMayuscula) {
                $("#contraseña").addClass("is-invalid");
                $("#repcontraseña").addClass("is-invalid");
    
                $(".error-message").text("Debe contener al menos una mayuscula y un número").show();
                
                isValid = false;
            }
    
        // FECHA NACIMIENTO
        //valida que el input de fecha nacimiento no quede vacio
         if ($("#fecha_nac").val().trim() === "") {
            $("#fecha_nac").addClass("is-invalid");
            $(".error-message").text("La fecha de nacimiento es obligatoria.").show();
            isValid = false;
        }
    
        // DIRECCION
        //valida que el input de dirección no quede vacio
        if ($("#direccion").val().trim() === "") {
            $("#direccion").addClass("is-invalid");
            $(".error-message").text("La dirección es obligatoria.").show();
            isValid = false;
        }
    
        if (isValid) {

            const datos = {
                nombre: $("#nombre").val(),
                usuario: $("#usuario").val(),
                correo: $("#correo").val(),
                contraseña: $("#contraseña").val(),
                repcontraseña: $("#repcontraseña").val(),
                fecha_nac: $("#fecha_nac").val(),
                direccion: $("#direccion").val(),
                rol: $("#rol").val()
            };
         
            $.ajax({
                url: "/core/registrar/",
                type: "POST",
                data: JSON.stringify(datos),
                contentType: "application/json",
                success: function (response) {
                    alert(response.mensaje);
                    $("#formulario")[0].reset();
                    $("#miAlerta")
                        .removeClass("d-none")
                        .addClass("alert-success");
                         // Redirigir  
                         window.location.href = "/inicio-sesion";
                },
                error: function (xhr) {
                    const res = xhr.responseJSON;
                    alert(res?.error || "Error al registrar.");
                }
            });
        }
        
        })
    
    
        //LIMPIEZA FORMULARIO REGISTRO USUARIO
        $("#btnLimpiar").on("click", function () {
            // Limpiar campos
            $("#nombre").val("");
            $("#usuario").val("");
            $("#correo").val("");
            $("#contraseña").val("");
            $("#repcontraseña").val("");
            $("#fecha_nac").val("");
            $("#direccion").val("");
        
            // Quitar clases de error
            $("#nombre").removeClass("is-invalid");
            $("#usuario").removeClass("is-invalid");
            $("#correo").removeClass("is-invalid");
            $("#contraseña").removeClass("is-invalid");
            $("#repcontraseña").removeClass("is-invalid");
            $("#fecha_nac").removeClass("is-invalid");
            $("#direccion").removeClass("is-invalid");
    
            // Ocultar mensajes de error
            $(".error-message").hide().text("");
    
            // Ocultar mensaje de exito
            $("#miAlerta").addClass("d-none")
        });
    
    }) 
    
    
    
    
    