
        // FORMULARIO INICIO SESION
        $("#formulario_inicio_sesion").submit(function (event) {
    
            event.preventDefault()
    
            $(".error-message").hide(); 
            $(".form-control").removeClass("is-invalid"); 
    
            let isValid = true;
    
        
           //valida que el input de correo no quede vacio
           let correo = ($("#correo").val() || "").trim();

           if (correo === "") {
               $("#correo").addClass("is-invalid");
               $(".error-message").text("Ingresa tu correo").show();
               isValid = false;
           }
           
    
        
            //valida que el input de contraseña no quede vacio
            let contrasenaInput = $("#contraseña").val();
            let contrasena = (contrasenaInput || "").trim();
            
            if (contrasena === "") {
                $("#contraseña").addClass("is-invalid");
                $(".error-message").text("Ingresa tu contraseña").show();
                isValid = false;
            }
            
    
            if (isValid) {
                const datos = {
                    correo: $("#correo").val(),
                    contraseña: $("#contraseña").val()
                };
            
                $.ajax({
                    url: "/core/login/",
                    type: "POST",
                    data: JSON.stringify(datos),
                    contentType: "application/json",
                    success: function (response) {
                        alert(response.mensaje);
                        $("#formulario_inicio_sesion")[0].reset();
                        $("#miAlerta")
                        .removeClass("d-none")
                        .addClass("alert-success");
                         window.location.href = "/#";
                    },
                    error: function (xhr) {
                        const res = xhr.responseJSON;
                        alert(res?.error || "Error al iniciar sesión.");
                    }
                });
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