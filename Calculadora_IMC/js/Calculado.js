calc = document.getElementById("calc");
kg = document.getElementById("kg");
m = document.getElementById("m");
imc = document.getElementById("imc");
lectura = document.getElementById("lectura");

/* Función de cálculo */
calc.onclick = function () {
    if (kg.value !== "" && m.value !== "") {
        // Validación de números negativos
        if (kg.value < 0 || m.value < 0) {
            alert("Por favor, ingrese valores válidos (no negativos) para peso y altura.");
            return; // Detener el proceso si los valores son negativos
        }

        imcx = kg.value / (m.value * m.value);
        imc.innerHTML = imcx;

        // Función para formatear el IMC con dos decimales
            function formatIMC(imc) {
                return imc.toFixed(2);
            }
  

        // Resto del código para categorizar y mostrar el mensaje
        if (imcx <= 15) {
            lectura.innerHTML = "Delgadez muy severa";
            document.getElementById("15oM").style.backgroundColor = "#F1C40F";
        } else if (imcx >= 15.00000001 && imcx <= 15.9) {
            lectura.innerHTML = "Delgadez severa";
            document.getElementById("DelgadezS").style.backgroundColor = "#F9E79F";
        } else if (imcx >= 16 && imcx <= 18.4) {
            lectura.innerHTML = "Delgadez";
            document.getElementById("Delgadez").style.backgroundColor = "#FF9033";
        } else if (imcx >= 18.5 && imcx <= 24.9) {
            lectura.innerHTML = "Peso Saludable";
            document.getElementById("pesoS").style.backgroundColor = "#10BB10";
        } else if (imcx >= 25 && imcx <= 29.9) {
            lectura.innerHTML = "Sobrepeso";
            document.getElementById("Sobrepeso").style.backgroundColor = "#E59866";
        } else if (imcx >= 30 && imcx <= 39.9) {
            lectura.innerHTML = "Obesidad Severa";
            document.getElementById("ObesidadS").style.backgroundColor = "#E67E22";
        } else if (imcx >= 40) {
            lectura.innerHTML = "Obesidad Mórbida";
            document.getElementById("ObesidadM").style.backgroundColor = "#BA4A00";
        } else {
            alert("Ingrese los datos de Peso y Altura.");
        }

        // Mostrar el IMC formateado
        imc.innerHTML = formatIMC(imcx);
    }
};
