
let taulellAmple = 500  // Iniciem aquests valors com al CSS
let taulellAlt = 400

let refJugador = null   // Iniciem les variables del jugador
let jugadorLeft = 100
let jugadorDireccio = 'cap'

let refPilota = null    // Iniciem les variables de la pilota
let pilotaTop = 200
let pilotaLeft = 250
let pilotaDireccio = 'avallDreta'

function init() {
    // Iniciem les funcions de captura de tecles
    document.body.addEventListener('keydown', teclaApretada)
    document.body.addEventListener('keyup',   teclaAlliberada)

    // Agafem les referències
    refJugador = document.getElementById('jugador')
    refPilota = document.getElementById('pilota')

    // Iniciem el bucle del joc
    run()
}

function run () {

    let limitAmple = 0
    let limitAlt = 0

    // Movem el jugador segons les
    // fletxes del teclat apretades

    if (jugadorDireccio == 'esquerra') {
        jugadorLeft = jugadorLeft - 1
    }

    if (jugadorDireccio == 'dreta') {
        jugadorLeft = jugadorLeft + 1
    }

    // Limitem els moviments del jugador

    limitAmple = taulellAmple - 100

    if (jugadorLeft <= 0) {
        jugadorLeft = 0
    }

    if (jugadorLeft >= limitAmple) {
        jugadorLeft = limitAmple
    }

    limitAlt = taulellAlt - 50

    refJugador.style.left = jugadorLeft + 'px'

    // Movem la pilota segons
    // la direcció corresponent

    switch (pilotaDireccio) {
        case 'avallDreta':
            pilotaTop = pilotaTop + 1
            pilotaLeft = pilotaLeft + 1
            break
        case 'avallEsquerra':
            // TODO: Suma o resta un 1 a
            //       pilotaTop i pilotaLeft
            //       per animar la pilota en la
            //       direcció 'avallEsquerra'
            break
        case 'amuntDreta':
            pilotaTop = pilotaTop - 1
            pilotaLeft = pilotaLeft + 1
            break
        case 'amuntEsquerra':
            // TODO: Suma o resta un 1 a
            //       pilotaTop i pilotaLeft
            //       per animar la pilota en la
            //       direcció 'amuntesquerra'
            break
    }

    // Limitem els moviments de la pilota

    limitAmple = taulellAmple - 15  // Perquè 15 és l'ample de la pilota
    limitAlt = taulellAlt - 15      // Perquè 15 és l'alt de la pilota

    if (pilotaLeft <= 0) {
        // TODO: Si la pilota xoca conta la part
        //       esquerra de la pantalla, ha de
        //       canviar de direcció:
        //       - Si està amb 'avallEsquerra'
        //         a de canviar a 'avallDreta'
        //       - Si està amb 'amuntEsquerra'
        //         a de canviar a 'amuntDreta'
    }

    if (pilotaLeft >= limitAmple) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'avallEsquerra'
        }
        if (pilotaDireccio === 'amuntDreta') {
            pilotaDireccio = 'amuntEsquerra'
        }
    }

    if (pilotaTop <= 0) {
        // TODO: Si la pilota xoca conta la part
        //       superior de la pantalla, ha de
        //       canviar de direcció:
        //       - Si està amb 'amuntEsquerra'
        //         a de canviar a 'avallEsquerra'
        //       - Si està amb 'amuntDreta'
        //         a de canviar a 'avallDreta'
    }

    if (pilotaTop >= limitAlt) {
        if (pilotaDireccio === 'avallDreta') {
            pilotaDireccio = 'amuntDreta'
        }
        if (pilotaDireccio === 'avallEsquerra') {
            pilotaDireccio = 'amuntEsquerra'
        }
    }

    // Modificar els elements HTML
    refPilota.style.top = pilotaTop + 'px'
    refPilota.style.left = pilotaLeft + 'px'

    // Tornar a executar la funció 'run'
    // (al següent cicle de refresc)
    requestAnimationFrame(run)
}

function teclaApretada (e) {

    switch (e.key) {
    case 'ArrowLeft':   
        jugadorDireccio = 'esquerra'
        break
    case 'ArrowRight': 
        jugadorDireccio = 'dreta'
        break
    }
}

function teclaAlliberada (e) {
    switch (e.key) {
        case 'ArrowLeft':   
            if (jugadorDireccio === 'esquerra') {
                jugadorDireccio = 'cap'
            }
            break
        case 'ArrowRight': 
            if (jugadorDireccio === 'dreta') {
                jugadorDireccio = 'cap'
            }
            break
        }
}