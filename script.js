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
        mensaje = "Mi amor, si estás leyendo esto es porque me extrañas... \n\nRecuerda que aunque la rutina o el día a día nos mantenga ocupados por un momento, te llevo en cada pensamiento. Eres mi persona favorita, mi lugar seguro, mi motivo para sonreír y en general para todo. Espero que nunca lo olvides, te amo con todo mi corazón.";
    } else if (idCarta === 2) {
        titulo = "Para cuando tengas un mal día";
        mensaje = "Mi princesita, sé que hoy pudo ser un día difícil, frustrante o agotador... \n\nPero quiero recordarte lo increíblemente fuerte e inteligente que eres. No dejes que un mal día nuble lo hermosa que eres y la gran capacidad que tienes para resolver todo tipo de cosas. Respira profundo, ponte cómoda y acuérdate de que aquí estoy yo siempre listo para escucharte y darte el abrazo más grande del mundo. Te amo con todo mi corazón.";
    } else if (idCarta === 3) {
        titulo = "Para cuando quieras sonreír";
        mensaje = "Hola mi bebé. Solo paso por aquí para recordarte la forma tan bonita en la que se rasgan tus ojitos cuando te ríes o lo mucho que me fascina ver tu felicidad. \n\nGracias por llenar mis días de luz. Si necesitabas una señal para alegrarte el día, es esta: Eres el amor de mi vida y haces que todo sea mejor y mas brillante, te amodoro";
    } else if (idCarta === 4) {
        titulo = "Para cuando dudes de ti misma";
        mensaje = "Escúchame bien: eres capaz de lograr absolutamente todo lo que te propongas. \n\nA veces eres muy dura contigo misma, pero yo veo desde afuera tu dedicación, tu hermosa forma de ser y el gran corazón que tienes. Confío en ti ciegamente, incluso cuando a ti te cueste trabajo hacerlo. Eres mi mayor orgullo y la mujer mas capaz que conozco. Recuerda que esos dos pregrados y esa especialización demuestran tu gran capacidad mi amor.";
    } else if (idCarta === 5) {
        titulo = "Para antes de dormir";
        mensaje = "Espero que hayas tenido un día lindo, y si no fue así, ya terminó y estas a punto de iniciar uno nuevo. Deja ir todas las preocupaciones en la almohada. \n\nDescansa profundo, mi amor. Sueña con angelitos (o conmigo jaja) y que Dios siempre te bendiga y te cuide. Eres el amor de mi vida, mi princesita bella y todo lo que mas quiero. Descansa y mañana nos hablamos amor mio.";
    } else {
        titulo = "Buzón Secreto";
        mensaje = "Ya está lista, hoy te la entregan.";
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

function enviarMensajeAmor() {
    const frases = [
        "¡Te estoy pensando en este preciso instante! 🥰",
        "Paso por aquí para recordarte que te amo muchísimo. ❤️",
        "Eres lo más bonito de mi día. 😍",
        "Me distraje un segundo y me acordé de ti. 🌹"
    ];
    
    // Selecciona una frase al azar
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    // Muestra la alerta nativa en el navegador
    alert(fraseAleatoria);
    
    // Redirige a su WhatsApp con el mensaje codificado para la URL
    const telefono = "573215808512";
    const textoUrl = encodeURIComponent(fraseAleatoria);
    window.open(`https://wa.me/${telefono}?text=${textoUrl}`, '_blank');
}

// ========================================================
// MOTOR DIARIO DE FLORES ANIMADAS EN CANVAS Y BOTÓN WHATSAPP
// ========================================================

const basesFlores = ["Rosas", "Tulipanes", "Girasoles", "Lirios", "Orquídeas", "Margaritas", "Dalias", "Azucenas", "Gardenias", "Camelias", "Magnolias", "Violetas", "Claveles", "Crisantemos"];
const adjetivosFlores = ["Silvestres", "del Valle", "Imperiales", "de Primavera", "del Bosque", "de la Montaña", "de Otoño", "del Amanecer", "de Luna", "Ángel", "Premium", "Princesa", "Preciosas", "Eternas"];

// Paleta HSL para pintar pétalos fluidos de manera dinámica
const paletaColores = [
    { nombre: "Carmesí", h: 345, s: 85, l: 45 },
    { nombre: "Rosado Pastel", h: 330, s: 90, l: 75 },
    { nombre: "Coral Cálido", h: 16, s: 100, l: 66 },
    { nombre: "Fucsia Vibrante", h: 320, s: 85, l: 50 },
    { nombre: "Lavanda Dulce", h: 260, s: 70, l: 70 },
    { nombre: "Oro Solar", h: 45, s: 100, l: 50 },
    { nombre: "Violeta Mágico", h: 280, s: 80, l: 45 }
];

const iniciosSignificado = [
    "Son el reflejo de un amor que crece sin límites.",
    "Simbolizan la magia y la complicidad que compartimos.",
    "Representan la pureza de cada risa a tu lado.",
    "Son la promesa de que cada día contigo es mejor que el anterior.",
    "Reflejan la paz y la calma que traes a mi vida.",
    "Simbolizan que eres mi lugar seguro en este mundo."
];
const centrosSignificado = [
    " Cada pétalo de esta flor guarda un pensamiento bonito dedicado a ti,",
    " Su forma única me recuerda lo increíblemente especial que eres,",
    " Así como esta especie florece con el sol, mi corazón se ilumina con tu sonrisa,",
    " Representan ese lazo invisible e inquebrantable que nos une,"
];
const cierresSignificado = [
    " demostrando que lo nuestro es una hermosa aventura. Te amo.",
    " recordándote que eres lo más valioso de mi vida entera.",
    " haciendo que el mundo sea un lugar mucho más brillante.",
    " confirmando que eres mi persona favorita hoy y siempre."
];

let animationFrameId = null;

function mostrarFloresDelDia() {
    const fechaActual = new Date();
    const inicioAño = new Date(fechaActual.getFullYear(), 0, 0);
    const diaDelAño = Math.floor((fechaActual - inicioAño) / (1000 * 60 * 60 * 24));

    // Generación de textos únicos basados en la fecha
    const base = basesFlores[diaDelAño % basesFlores.length];
    const adjetivo = adjetivosFlores[(diaDelAño * 3) % adjetivosFlores.length];
    const colorObj = paletaColores[diaDelAño % paletaColores.length];
    const especieUnica = `${base} ${adjetivo} ${colorObj.nombre}`;

    const significadoUnico = `${iniciosSignificado[diaDelAño % iniciosSignificado.length]}${centrosSignificado[(diaDelAño * 2) % centrosSignificado.length]}${cierresSignificado[(diaDelAño + 4) % cierresSignificado.length]}`;

    document.getElementById('flor-titulo').innerText = `Tus flores de hoy: ${especieUnica}`;
    document.getElementById('flor-significado').innerText = significadoUnico;

    // Desplegar Modal
    document.getElementById('modal-flores').classList.add('activo');

    // Inicializar el render del Canvas
    setTimeout(() => {
        const numPetalos = 5 + (diaDelAño % 5); // Cambia la geometría de 5 a 9 pétalos según el día
        const tamañoFlor = 50 + (diaDelAño % 20); // Varía el radio de los pétalos
        
        dibujarFlorAnimada(colorObj, numPetalos, tamañoFlor);
    }, 100);
}

function dibujarFlorAnimada(color, numPetalos, radioPetalo) {
    const canvas = document.getElementById('canvas-flor');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let progresoTallo = 0;
    let progresoFlor = 0;
    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2 - 20;

    function animar() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Renderizar Tallo
        ctx.beginPath();
        ctx.strokeStyle = '#2d6a4f';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.moveTo(centroX, canvas.height);
        
        let actualY = canvas.height - (canvas.height - centroY) * progresoTallo;
        ctx.quadraticCurveTo(centroX - 10, (canvas.height + actualY) / 2, centroX, actualY);
        ctx.stroke();

        if (progresoTallo < 1) {
            progresoTallo += 0.04;
        } else if (progresoFlor < 1) {
            progresoFlor += 0.03;
        }

        // 2. Renderizar Flor Completa
        if (progresoTallo >= 1) {
            ctx.save();
            ctx.translate(centroX, centroY);

            for (let i = 0; i < numPetalos; i++) {
                ctx.save();
                ctx.rotate((Math.PI * 2 / numPetalos) * i);
                
                ctx.beginPath();
                ctx.fillStyle = `hsl(${color.h}, ${color.s}%, ${color.l - 5}%)`;
                
                let rActual = radioPetalo * progresoFlor;
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(-rActual/2, -rActual, rActual/2, -rActual, 0, 0);
                ctx.fill();
                
                ctx.beginPath();
                ctx.fillStyle = `hsl(${color.h}, ${color.s}%, ${color.l + 15}%)`;
                ctx.bezierCurveTo(-rActual/4, -rActual/1.5, rActual/4, -rActual/1.5, 0, 0);
                ctx.fill();

                ctx.restore();
            }

            // Pistilo Central
            ctx.beginPath();
            ctx.arc(0, 0, 14 * progresoFlor, 0, Math.PI * 2);
            ctx.fillStyle = '#ffb703';
            ctx.fill();
            
            ctx.restore();
        }

        if (progresoTallo < 1 || progresoFlor < 1) {
            animationFrameId = requestAnimationFrame(animar);
        }
    }

    animar();
}

function cerrarModalFlores() {
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    document.getElementById('modal-flores').classList.remove('activo');
}

// Control del botón de corazón flotante
function enviarMensajeAmor() {
    const frases = [
        "¡Te estoy pensando en este preciso instante! 🥰",
        "Paso por aquí para recordarte que te amo muchísimo. ❤️",
        "Eres lo más bonito de mi día. 😍",
        "Me distraje un segundo y me acordé de ti. 🌹"
    ];
    
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    alert(fraseAleatoria);
    
    const telefono = "573215808512";
    const textoUrl = encodeURIComponent(fraseAleatoria);
    window.open(`https://wa.me/${telefono}?text=${textoUrl}`, '_blank');
}
