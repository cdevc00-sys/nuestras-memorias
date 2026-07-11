// ==========================================
// 1. CONFIGURACIÓN DEL CONTADOR DE TIEMPO
// ==========================================

const FECHA_INICIO = new Date("2023-06-02T19:00:00");

function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - FECHA_INICIO;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutes;
}

actualizarContador();
setInterval(actualizarContador, 60000);


// ==========================================
// 2. LÓGICA PARA ABRIR LAS CARTAS
// ==========================================

function abrirCarta(idCarta) {
    const modal = document.getElementById("carta-modal");
    const tituloHtml = document.getElementById("modal-titulo");
    const textoHtml = document.getElementById("modal-texto");

    let titulo = "";
    let mensaje = "";

    if (idCarta === 1) {
        titulo = "Para cuando me extrañes";
        mensaje = "Mi amor, si estás leyendo esto es porque me extrañas... \n\nRecuerda que aunque la rutina o el día a día nos mantenga ocupados por un momento, te llevo en cada pensamiento. Eres mi persona favorita, mi lugar seguro y mi motivo para sonreír. ¡Nunca lo olvides! ❤️";
    } else if (idCarta === 2) {
        titulo = "Para cuando tengas un mal día";
        mensaje = "Hey mi princesa, sé que hoy pudo ser un día difícil, frustrante o agotador... \n\nPero quiero recordarte lo increíblemente fuerte e inteligente que eres. No dejes que un mal día nuble lo hermoso que es tu camino. Respira profundo, ponte cómoda y acuérdate de que aquí estoy yo siempre listo para escucharte y darte el abrazo más grande del mundo. Te amo con todo mi corazón.";
    } else if (idCarta === 3) {
        titulo = "Para cuando quieras sonreír";
        mensaje = "¡Hola cosita hermosa! Solo paso por aquí para recordarte la forma tan bonita en la que arrugas la nariz cuando te ríes o lo mucho que me fascina ver tu felicidad. \n\nGracias por llenar mis días de luz. Si necesitabas una señal para alegrarte el día, es esta: ¡Eres el amor de mi vida y haces que todo sea mejor! 😊";
    } else if (idCarta === 4) {
        titulo = "Para cuando dudes de ti misma";
        mensaje = "Escúchame bien: eres capaz de lograr absolutamente todo lo que te propongas. \n\nA veces eres muy dura contigo misma, pero yo veo desde afuera tu dedicación, tu hermosa forma de ser y el gran corazón que tienes. Confío en ti ciegamente, incluso cuando a ti te cueste trabajo hacerlo. Eres mi mayor orgullo.";
    } else if (idCarta === 5) {
        titulo = "Para antes de dormir";
        mensaje = "Espero que hayas tenido un día lindo, y si no fue así, ya terminó. Deja ir todas las preocupaciones en la almohada. \n\nDescansa profundo, mi amor. Sueña con angelitos (o conmigo jaja) y recuerda que mañana es una nueva oportunidad para ser felices juntos. Te amo, buenas noches. 🌙❤️";
    } else {
        titulo = "Buzón Secreto";
        mensaje = "¡Ups! Esta carta aún se está escribiendo.";
    }

    tituloHtml.innerText = titulo;
    textoHtml.innerText = mensaje;
    modal.classList.add("activo");
}

function cerrarCarta() {
    const modal = document.getElementById("carta-modal");
    modal.classList.remove("activo");
}


// ==========================================
// 3. LÓGICA DEL FORMULARIO DE CITAS
// ==========================================

function abrirModalCita() {
    const modal = document.getElementById("cita-modal");
    modal.classList.add("activo");
}

function cerrarModalCita() {
    const modal = document.getElementById("cita-modal");
    modal.classList.remove("activo");
    document.getElementById("form-cita").reset();
}

function enviarCita(event) {
    event.preventDefault();

    const botonEnvio = document.querySelector(".btn-enviar-cita");
    botonEnvio.innerText = "Enviando propuesta...";
    botonEnvio.disabled = true;

    // Usando tu Service ID real 'service_1kzv7mk' de tu captura
    emailjs.sendForm('service_1kzv7mk', 'template_cita', '#form-cita')
        .then(function() {
            alert("¡Tu propuesta de cita ha sido enviada con éxito a Cristian! ❤️ Prepárate.");
            cerrarModalCita();
            botonEnvio.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Propuesta a Cristian';
            botonEnvio.disabled = false;
        }, function(error) {
            alert("Oops... Hubo un pequeño error al enviar. Inténtalo de nuevo.");
            console.log("Error de EmailJS:", error);
            botonEnvio.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Propuesta a Cristian';
            botonEnvio.disabled = false;
        });
}

// Cierre global para ambos modales haciendo clic afuera
window.onclick = function(event) {
    const cartaModal = document.getElementById("carta-modal");
    const citaModal = document.getElementById("cita-modal");
    
    if (event.target === cartaModal) {
        cartaModal.classList.remove("activo");
    }
    if (event.target === citaModal) {
        citaModal.classList.remove("activo");
    }
}