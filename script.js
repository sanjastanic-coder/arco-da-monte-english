// GESTIONE DEL TEST INIZIALE
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const formula = document.getElementById('formula').value;
    const resultBox = document.getElementById('testResult');
    
    resultBox.innerHTML = `Grazie ${nome}! Il tuo test iniziale (Tariffa: €20) è stato registrato con successo. Formula richiesta: Lezione ${formula}. Tuo figlio ti contatterà a breve per concordare il primo appuntamento in studio e definire il piano mensile!`;
    resultBox.style.display = "block";
});

// GESTIONE DELLA PRENOTAZIONE CALENDARIO
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = document.getElementById('b-data').value;
    const orario = document.getElementById('b-orario').value;
    const bookingResult = document.getElementById('bookingResult');
    
    bookingResult.innerHTML = `Richiesta di prenotazione inviata! Sessione richiesta per il giorno ${data} alle ore ${orario}. La lezione è in attesa di approvazione manuale.`;
    bookingResult.style.display = "block";
});
