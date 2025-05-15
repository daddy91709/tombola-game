let nums = Array.from({ length: 90 }, (_, i) => i + 1);
let estratti = [];
const desc = {
    1: "L'Italia",
    2: "'A criatura (il bimbo)",
    3: "'A jatta (il gatto)",
    4: "'O puorco (il maiale)",
    5: "'A mano (la mano)",
    6: "Chella che guarda 'nterra (organo sessuale femminile)",
    7: "'A scuppetta (il fucile)",
    8: "'A maronna (la madonna)",
    9: "'A figliata (la prole)",
    10: "'E fasule (i fagioli)",
    11: "'E surice (i topi)",
    12: "'E surdate (i soldati)",
    13: "Sant' Antonio",
    14: "'O mbriaco (l'ubriaco)",
    15: "'O guaglione (il ragazzo)",
    16: "'O culo (il deretano)",
    17: "'A disgrazia (la disgrazia)",
    18: "'O sanghe (il sangue)",
    19: "'A resata (la risata)",
    20: "'A festa (la festa)",
    21: "'A femmena annura (la donna nuda)",
    22: "'O pazzo (il pazzo)",
    23: "'O scemo (lo scemo)",
    24: "'E gguardie (le guardie)",
    25: "Natale",
    26: "Nanninella (diminuitivo del nome Anna)",
    27: "'O cantero (il vaso da notte)",
    28: "'E zzizze (il seno)",
    29: "'O pate d''e criature (organo sessuale maschile)",
    30: "'E palle d''o tenente (le palle del tenente, riferito all'organo sessuale maschile)",
    31: "'O padrone 'e casa (il proprietario di casa)",
    32: "'O capitone (il capitone)",
    33: "L'anne 'e Cristo (gli anni di Cristo)",
    34: "'A capa (la testa)",
    35: "L'aucielluzzo (l'uccellino)",
    36: "'E castagnelle (sorta di petardi)",
    37: "'O monaco (il frate)",
    38: "'E mmazzate (le botte)",
    39: "'A funa 'nganna (la corda al collo)",
    40: "'A paposcia (ernia inguinale)",
    41: "'O curtiello (il coltello)",
    42: "'O ccafè (il caffè)",
    43: "'A femmena 'ncopp'' o balcone (la donna al balcone)",
    44: "'E ccancelle (il carcere)",
    45: "'O vino (il vino)",
    46: "'E denare (i denari)",
    47: "'O muorto (il morto)",
    48: "'O muorto che parla (il morto che parla)",
    49: "'O piezzo 'e carne (il pezzo di carne)",
    50: "'O ppane (il pane)",
    51: "'O ciardino (il giardino)",
    52: "'A mamma (la mamma)",
    53: "'O viecchio (il vecchio)",
    54: "'O cappiello (il cappello)",
    55: "'A museca (la musica)",
    56: "'A caruta (la caduta)",
    57: "'O scartellato (il gobbo)",
    58: "'O paccotto (imbroglio)",
    59: "'E pile (i peli)",
    60: "Se lamenta (si lamenta)",
    61: "'O cacciatore (il cacciatore)",
    62: "'O muorto acciso (il morto ammazzato)",
    63: "'A sposa (la sposa)",
    64: "'A sciammeria (la marsina)",
    65: "'O chianto (il pianto)",
    66: "'E ddoie zetelle (le due zitelle)",
    67: "'O totano int''a chitarra (il totano nella chitarra)",
    68: "'A zuppa cotta (la zuppa cotta)",
    69: "Sott'e'ncoppo (sottosopra)",
    70: "'O palazzo (il palazzo)",
    71: "L'ommo 'e merda (l'uomo senza princìpi)",
    72: "'A meraviglia (la meraviglia)",
    73: "'O spitale (l'ospedale)",
    74: "'A rotta (la grotta)",
    75: "Pullecenella (Pulcinella)",
    76: "'A funtana (la fontana)",
    77: "'E diavule (i diavoli)",
    78: "'A bella figliola (la bella ragazza)",
    79: "'O mariuolo (il ladro)",
    80: "'A vocca (la bocca)",
    81: "'E sciure (i fiori)",
    82: "'A tavula 'mbandita (la tavola imbandita)",
    83: "'O maletiempo (il maltempo)",
    84: "'A cchiesa (la chiesa)",
    85: "Ll'aneme 'o priatorio (le anime del purgatorio)",
    86: "'A puteca (il negozio)",
    87: "'E perucchie (i pidocchi)",
    88: "'E casecavalle (i caciocavalli)",
    89: "'A vecchia (la vecchia)",
    90: "'A paura (la paura)"
};

const prizes = {
    ambo: { count: 0, required: 2, completed: false, claimed: false, manualClaimed: false, emoji: '👥' },
    terno: { count: 0, required: 3, completed: false, claimed: false, manualClaimed: false, emoji: '🎯' },
    quaterna: { count: 0, required: 4, completed: false, claimed: false, manualClaimed: false, emoji: '🎲' },
    cinquina: { count: 0, required: 5, completed: false, claimed: false, manualClaimed: false, emoji: '🌟' },
    tombola: { count: 0, required: 15, completed: false, claimed: false, manualClaimed: false, emoji: '🏆' }
};

// Definizione delle regioni del tabellone
const regioni = [
    { // Regione 1: prima metà delle prime tre righe
        numeri: [
            [1, 2, 3, 4, 5],
            [11, 12, 13, 14, 15],
            [21, 22, 23, 24, 25]
        ]
    },
    { // Regione 2: seconda metà delle prime tre righe
        numeri: [
            [6, 7, 8, 9, 10],
            [16, 17, 18, 19, 20],
            [26, 27, 28, 29, 30]
        ]
    },
    { // Regione 3: prima metà delle righe centrali
        numeri: [
            [31, 32, 33, 34, 35],
            [41, 42, 43, 44, 45],
            [51, 52, 53, 54, 55]
        ]
    },
    { // Regione 4: seconda metà delle righe centrali
        numeri: [
            [36, 37, 38, 39, 40],
            [46, 47, 48, 49, 50],
            [56, 57, 58, 59, 60]
        ]
    },
    { // Regione 5: prima metà delle ultime tre righe
        numeri: [
            [61, 62, 63, 64, 65],
            [71, 72, 73, 74, 75],
            [81, 82, 83, 84, 85]
        ]
    },
    { // Regione 6: seconda metà delle ultime tre righe
        numeri: [
            [66, 67, 68, 69, 70],
            [76, 77, 78, 79, 80],
            [86, 87, 88, 89, 90]
        ]
    }
];

function calcolaNumeriVisibili() {
    const estrattiDiv = document.getElementById('estratti');
    const containerWidth = estrattiDiv.offsetWidth;
    const circleWidth = 40; // Larghezza base di un cerchio
    const gap = 8; // Spazio tra i cerchi
    return Math.floor((containerWidth) / (circleWidth + gap));
}

function updateEstrattiVisibili() {
    const numeriVisibili = calcolaNumeriVisibili();
    const estrattiDiv = document.getElementById('estratti');
    estrattiDiv.innerHTML = '';
    
    const numeriDaMostrare = estratti.slice(-numeriVisibili);
    numeriDaMostrare.forEach(num => {
        const div = document.createElement('div');
        div.className = 'small circle';
        div.textContent = num;
        estrattiDiv.appendChild(div);
    });
}

function contaNumeriInRegione(regione) {
    const numeriRegione = estratti.filter(num => 
        regione.numeri.flat().includes(num)
    );
    return { count: numeriRegione.length, numeri: numeriRegione };
}

function contaNumeriInRiga(row) {
    return estratti.filter(num => Math.floor((num - 1) / 10) === row).length;
}

function contaNumeriInRegionePerRiga(regione) {
    const risultati = [];
    regione.numeri.forEach((riga, indiceRiga) => {
        // Conta quanti numeri della riga sono stati estratti
        const numeriTrovati = estratti.filter(num => 
            riga.includes(num)
        );

        risultati.push({
            row: indiceRiga,
            count: numeriTrovati.length,
            numeri: numeriTrovati
        });
    });
    return risultati;
}

function updateVincite() {
    // Array per tenere traccia di tutti i conteggi di tutte le righe
    const conteggiRighe = [];
    
    for (let r = 0; r < 6; r++) {
        const regione = regioni[r];
        // Per ogni riga nella regione
        regione.numeri.forEach(riga => {
            // Conta quanti numeri della riga sono stati estratti
            const numeriTrovati = estratti.filter(num => riga.includes(num));
            conteggiRighe.push(numeriTrovati.length);
        });

        // La tombola viene ancora verificata per regione intera
        const risultatiRighe = contaNumeriInRegionePerRiga(regione);
        const totalNumeriRegione = risultatiRighe.reduce((total, r) => total + r.count, 0);
        
        // Aggiorna il contatore della tombola anche se non è stata ancora vinta
        prizes.tombola.count = Math.max(prizes.tombola.count, totalNumeriRegione);
        updatePrizeDisplay('tombola');
        
        if (totalNumeriRegione >= 15 && !prizes.tombola.claimed) {
            prizes.tombola.won = true;
            prizes.tombola.claimed = true;
            if (!prizes.tombola.manualClaimed) {
                celebraVincita('tombola');
            }
        }
    }

    // Trova il miglior conteggio tra tutte le righe
    const migliorConteggio = Math.max(...conteggiRighe);
    
    // Aggiorna i contatori per ogni premio
    prizes.ambo.count = Math.min(migliorConteggio, 2);
    prizes.terno.count = Math.min(migliorConteggio, 3);
    prizes.quaterna.count = Math.min(migliorConteggio, 4);
    prizes.cinquina.count = Math.min(migliorConteggio, 5);

    // Aggiorna i display di tutti i premi
    updatePrizeDisplay('ambo');
    updatePrizeDisplay('terno');
    updatePrizeDisplay('quaterna');
    updatePrizeDisplay('cinquina');
    
    // Verifica le vincite in base al miglior conteggio
    if (migliorConteggio >= 2 && !prizes.ambo.claimed) {
        prizes.ambo.won = true;
        prizes.ambo.claimed = true;
        if (!prizes.ambo.manualClaimed) {
            celebraVincita('ambo');
        }
    }
    if (migliorConteggio >= 3 && !prizes.terno.claimed) {
        prizes.terno.won = true;
        prizes.terno.claimed = true;
        if (!prizes.terno.manualClaimed) {
            celebraVincita('terno');
        }
    }
    if (migliorConteggio >= 4 && !prizes.quaterna.claimed) {
        prizes.quaterna.won = true;
        prizes.quaterna.claimed = true;
        if (!prizes.quaterna.manualClaimed) {
            celebraVincita('quaterna');
        }
    }
    if (migliorConteggio >= 5 && !prizes.cinquina.claimed) {
        prizes.cinquina.won = true;
        prizes.cinquina.claimed = true;
        if (!prizes.cinquina.manualClaimed) {
            celebraVincita('cinquina');
        }
    }
}

function updatePrizeDisplay(tipo) {
    const element = document.getElementById(tipo);
    if (!element) return;

    // Aggiorna il contatore
    const counter = element.querySelector('.vincita-counter');
    if (counter) {
        counter.textContent = `${prizes[tipo].count}/${prizes[tipo].required}`;
    }

    // Aggiorna lo stato visivo (claimed/won)
    if (prizes[tipo].claimed) {
        element.classList.add('claimed');
    } else {
        element.classList.remove('claimed');
    }
}

function celebraVincita(tipo) {
    // Crea l'overlay per la celebrazione
    const overlay = document.createElement('div');
    overlay.className = 'celebration-overlay';
    document.body.appendChild(overlay);

    // Rimuovi l'overlay dopo l'animazione
    setTimeout(() => {
        overlay.remove();
    }, 1500);

    // Mostra un messaggio di congratulazioni
    alert(`Congratulazioni! Hai fatto ${tipo.toUpperCase()}! 🎉`);
}

function handleVincitaClick(tipo) {
    if (!prizes[tipo]) return;
    
    // Se il premio non è stato ancora vinto, lo marchiamo come riscattato manualmente
    if (!prizes[tipo].won) {
        prizes[tipo].manualClaimed = !prizes[tipo].manualClaimed;
    }
    
    prizes[tipo].claimed = !prizes[tipo].claimed;
    updatePrizeDisplay(tipo);
}

function estraiNumero() {
    if (nums.length === 0) {
        if (confirm("Tutti i numeri sono stati estratti! Vuoi ricominciare la partita?")) {
            resetGame();
        }
        return;
    }

    const index = Math.floor(Math.random() * nums.length);
    const numEstratto = nums.splice(index, 1)[0];
    estratti.push(numEstratto);

    document.getElementById('num-estratto').textContent = numEstratto;
    document.getElementById('num-desc').textContent = desc[numEstratto];

    updateEstrattiVisibili();
    document.getElementById(`num-${numEstratto}`).classList.add('active');
    
    // Aggiorna le vincite dopo ogni estrazione
    updateVincite();
}

// Modifica resetGame per gestire anche lo stato claimed
function resetGame() {
    if (!confirm("Sei sicuro di voler ricominciare la partita?")) return;

    nums = Array.from({ length: 90 }, (_, i) => i + 1);
    estratti = [];
    
    // Reset delle vincite
    Object.keys(prizes).forEach(tipo => {
        prizes[tipo].count = 0;
        prizes[tipo].won = false;
        prizes[tipo].claimed = false;
        prizes[tipo].manualClaimed = false;
        updatePrizeDisplay(tipo);
    });

    location.reload();
}

function createTabellone() {
    const tabellone = document.querySelector('.tabellone');
    tabellone.innerHTML = '';
    
    // Crea contenitori per le regioni e separatori
    for (let regionIdx = 0; regionIdx < 6; regionIdx++) {
        const regionContainer = document.createElement('div');
        regionContainer.className = `region-container region-${regionIdx + 1}`;
        
        // Aggiungi label della regione
        const label = document.createElement('span');
        label.className = 'region-label';
        label.textContent = `R${regionIdx + 1}`;
        regionContainer.appendChild(label);

        // Calcola l'intervallo di numeri per questa regione
        const startRow = Math.floor(regionIdx / 2) * 3;
        const isRightSide = regionIdx % 2 === 1;
        const baseStart = startRow * 10 + 1;
        
        // Aggiungi i numeri per questa regione
        for (let row = 0; row < 3; row++) {
            const rowStart = baseStart + (row * 10);
            for (let i = 0; i < 5; i++) {
                const num = isRightSide ? rowStart + i + 5 : rowStart + i;
                const circle = document.createElement('div');
                circle.className = 'circle hoverable';
                circle.id = `num-${num}`;
                circle.textContent = num;
                regionContainer.appendChild(circle);
            }
        }

        tabellone.appendChild(regionContainer);

        // Aggiungi separatore verticale dopo le regioni dispari (tranne l'ultima)
        if (regionIdx % 2 === 0 && regionIdx < 5) {
            const sepV = document.createElement('div');
            sepV.className = 'region-separator-v';
            tabellone.appendChild(sepV);
        }

        // Aggiungi separatore orizzontale dopo ogni coppia di regioni (tranne l'ultima)
        if (regionIdx === 1 || regionIdx === 3) {
            const sepH = document.createElement('div');
            sepH.className = 'region-separator-h';
            tabellone.appendChild(sepH);
        }
    }
}

// Aggiunta degli event listener quando il documento è caricato
document.addEventListener('DOMContentLoaded', () => {
    const numEstrattoElement = document.getElementById('num-estratto');
    const resetButton = document.querySelector('.reset-btn');
    
    numEstrattoElement.addEventListener('click', estraiNumero);
    resetButton.addEventListener('click', resetGame);
    
    // Aggiungi event listener per i premi cliccabili
    Object.keys(prizes).forEach(tipo => {
        const element = document.getElementById(tipo);
        if (element) {
            element.addEventListener('click', () => handleVincitaClick(tipo));
        }
    });
    
    // Aggiorna i numeri visibili quando la finestra viene ridimensionata
    window.addEventListener('resize', updateEstrattiVisibili);
});
