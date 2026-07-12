<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Macros OneState - Facción Médica Barry</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <img src="logo.png" alt="Logo Médico" class="logo">

    <h1>Macros OneState</h1>
    <h2>🏥 Facción Médica Barry 🩺</h2>

    <p>
        Sistema de macros para rol médico
    </p>
</header>


<main>

<section>
    <h3>🚑 Emergencias</h3>

    <button onclick="copiarMacro('/flobby EN RUTA A LLAMADA DE EMERGENCIA')">
    En ruta a emergencia
    </button>

    <button onclick="copiarMacro('/do ENCENDER SIRENAS (LLAMADA DE EMERGENCIA)')">
    Activar sirenas
    </button>

    <button onclick="copiarMacro('/flobby EN LOCALIZACIÓN/ESCENA DE EMERGENCIA')">
    Llegada a escena
    </button>

</section>


<section>
    <h3>🩺 Atención Médica</h3>

    <button onclick="copiarMacro('/me REALIZO VALORACIÓN PRIMARIA AL PACIENTE')">
    Valoración paciente
    </button>

    <button onclick="copiarMacro('/do REVISANDO SIGNOS VITALES DEL PACIENTE')">
    Signos vitales
    </button>

</section>


<section>
    <h3>🎓 Entrenamiento</h3>

    <button onclick="copiarMacro('/flobby SOLICITO A UN INSTRUCTOR PARA REALIZAR MISIÓN DE RCP')">
    Solicitar instructor RCP
    </button>

    <button onclick="copiarMacro('/flobby ENTRENANDO A NUEVO ENFERMERO /MACROS/REGLAS/ROL DE SERVICIOS MÉDICOS')">
    Capacitación médico
    </button>

</section>


<section>
    <h3>📻 Comunicación Interna</h3>

    <button onclick="copiarMacro('/flobby COMUNICACIÓN INTERNA ACTIVA')">
    Comunicación interna
    </button>

</section>


</main>


<footer>

<p>
OneState<br>
Macros<br>
🏥 Facción Médica Barry 🩺
</p>

<p>
Creado por: Azael Durán
</p>

</footer>


<script src="script.js"></script>

</body>
</html>
