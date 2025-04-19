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
                $("#miAlerta")
                .removeClass("d-none")
                .addClass("alert-success")
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
    
        // FORMULARIO INICIO SESION
        $("#formulario_inicio_sesion").submit(function (event) {
    
            event.preventDefault()
    
            $(".error-message").hide(); 
            $(".form-control").removeClass("is-invalid"); 
    
            let isValid = true;
    
        
           //valida que el input de correo no quede vacio
            if ($("#correo").val().trim() === "") {
                $("#correo").addClass("is-invalid");
                $(".error-message").text("Ingresa tu correo").show();
                isValid = false;
            }
    
        
            //valida que el input de contraseña no quede vacio
            if ($("#contraseña").val().trim() === "") {
                $("#contraseña").addClass("is-invalid");
        
                $(".error-message").text("Ingresa tu contraseña").show();
                isValid = false;
            }
    
            if (isValid) {
                $("#miAlerta")
                .removeClass("d-none")
                .addClass("alert-success")
            }
        })
    
        // Recuperar contraseña
        $("#recuperar_contraseña").submit(function (event) {
    
            event.preventDefault()
            console.log(event)
    
            $(".error-message").hide(); 
            $(".form-control").removeClass("is-invalid"); 
    
            let isValid = true;
            const correo = $("#correo").val().trim();
    
            console.log(correo)
            console.log($("#contraseña").val())
    
    
        
           //valida que el input de correo no quede vacio
            if (correo === "") {
                correo.addClass("is-invalid");
                $(".error-message").text("Ingresa tu correo").show();
                isValid = false;
            }
    
        
            //valida que el input de contraseña no quede vacio
            if ($("#contraseña").val().trim() === "") {
                $("#contraseña").addClass("is-invalid");
        
                $(".error-message").text("Ingresa tu contraseña").show();
                isValid = false;
            }
    
            if (isValid) {
                $("#miAlerta")
                .removeClass("d-none")
                .addClass("alert-success")
                .text(`Recuperación exitosa. Se ha enviado un correo a: ${correo}`);
            }
        })
    
    }) 
    
    
    
    
    