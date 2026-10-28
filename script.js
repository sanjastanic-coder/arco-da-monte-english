// GESTIONE DEL TEST INIZIALE
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const formula = document.getElementById('formula').value;
    const resultBox = document.getElementById('testResult');
    
    resultBox.innerHTML = `Grazie ${nome}! Il tuo test è salvato. Formula consigliata: Lezione ${formula}. Verrai ricontattato dall'insegnante.`;
    resultBox.style.display = "block";
});


// GESTIONE DELLA PRENOTAZIONE CALENDARIO
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = document.getElementById('b-data').value;
    const orario = document.getElementById('b-orario').value;
    const bookingResult = document.getElementById('bookingResult');
    
    bookingResult.innerHTML = `Richiesta Inviata! Sessione richiesta per il giorno ${data} alle ${orario} (In attesa di approvazione).`;
    bookingResult.style.display = "block";
});
