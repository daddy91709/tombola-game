async function estraiNumero() {
    const response = await fetch('/estrazione', { method: 'POST' });
    if (response.ok) {
        
        const data = await response.json();

        // Se il gioco è finito, chiedi conferma per ricominciare
        if (data.game_over) {
            const confirmRestart = confirm("Tutti i numeri sono stati estratti! Vuoi ricominciare la partita?");
            if (confirmRestart) {
                resetGame();  // Richiama la funzione per riavviare la partita
            }
            return;
        }

        // Se il gioco non é finito, aggiorna l'interfaccia
        document.getElementById('num-estratto').textContent = data.num_estratto;
        document.getElementById('num-desc').textContent = data.desc;

        const estrattiDiv = document.getElementById('estratti');
        estrattiDiv.innerHTML = '';
        data.estratti_recenti.forEach(num => {
            const div = document.createElement('div');
            div.className = 'small circle';
            div.textContent = num;
            estrattiDiv.appendChild(div);
        });

        document.getElementById(`num-${data.num_estratto}`).classList.add('active');

    } else {
        const error = await response.json();
        alert(error.error);
    }
}

async function resetGame() {
    const confirmReset = confirm("Sei sicuro di voler ricominciare la partita?");
    if (!confirmReset) return;

    const response = await fetch('/reset', { method: 'POST' });
    if (response.ok) {
        alert("Partita riavviata!");
        location.reload(); // Ricarica la pagina per aggiornare il tabellone
    } else {
        alert("Errore nel riavvio della partita.");
    }
}
