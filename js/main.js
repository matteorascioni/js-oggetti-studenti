$(document).ready(function() {
    /**
    * Creazione oggetto studente (nome, cognome,età)
    */
    // var studenteSingolo = {
    //         nome: 'Matteo',
    //         cognome: 'Rascioni',
    //         Età: 23,
    //     } 

    //     for (var key in studenteSingolo) {
    //         console.log(studenteSingolo[key]);
    //     }

    /**
     * Array di oggetti studenti
     */
    //  var arrayStudenti = [
    //      { 
    //         nome: 'Matteo',
    //         cognome: 'Rascioni',
    //         età: 23,
    //      },
    //      { 
    //         nome: 'Paolo',
    //         cognome: 'Duzioni',
    //         età: 30,
    //     },
    //      { 
    //         nome: 'Fabio',
    //         cognome: 'Giorgini',
    //         età: 40,
    //     },
    //      { 
    //         nome: 'Marco',
    //         cognome: 'Rossi',
    //         età: 30,
    //     },
    //     { 
    //         nome: 'Matteo',
    //         cognome: 'Rossi',
    //         età: 50,
    //     },
    //  ]

    //  for (var i = 0; i < arrayStudenti.length; i++) {
    //     var student = arrayStudenti[i];

    //     console.log('studente ' + (i + 1));
    //     console.log('Nome ', student.nome);
    //     console.log('Cognome ', student.cognome);
    //     console.log('Età ', student.età);
    //     console.log('-------------------------');
    //  }

    /**
     * 3 promp per l'utente e possibilità di aggiungere oggetti all'array 
     */
        var arrayStudenti = [
            { 
                nome: 'Matteo',
                cognome: 'Rascioni',
                età: 23,
            },
            { 
                nome: 'Paolo',
                cognome: 'Duzioni',
                età: 30,
            },
            { 
                nome: 'Fabio',
                cognome: 'Giorgini',
                età: 40,
            },
            { 
                nome: 'Marco',
                cognome: 'Rossi',
                età: 30,
            },
            { 
                nome: 'Matteo',
                cognome: 'Rossi',
                età: 50,
            },
        ]

        newNome = prompt('Inserisci il nome da aggiungere').trim();
        newCognome =  prompt('Inserisci il cognome da aggiungere').trim();
        newEtà = parseInt( prompt('Inserisci l\' età').trim() );
     
    
      arrayStudenti.push ({
          nome: newNome,
          cognome: newCognome,
          età: newEtà,
      })

      console.log(arrayStudenti);
      console.table(arrayStudenti);

     

    









})