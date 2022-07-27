//Creare index
db.clienti.createIndex( {nume: 1} )
db.clienti.createIndex( {nume: "text", prenume: "text"} )
db.comenzi.createIndex( { "produse.nume_produs" : "text"} )
db.comenzi.createIndex( { produse : 1} )
db.recenzii.createIndex( { comentariu : "text"} )

//Cautarea unui client dupa nume
db.clienti.find({"nume": "Mihalache"}).explain()
db.clienti.find({"nume": "Mihalache"})

//Cautarea unui client dupa nume si prenume
db.clienti.find({"nume": "Mihalache", "prenume": "Nicoleta-Ecaterina"}).explain()
db.clienti.find({"nume": "Mihalache", "prenume": "Nicoleta-Ecaterina"})

//Afisarea clientilor a caror nume nu incep cu "mi" case insensitive
db.clienti.find({ nume: { $not: /^mi/i} });

//Afisarea comenzilor cu 2 produse
db.comenzi.find({ produse: { $size: 2} })

//Afisarea comenzilor cu numele produsului = laptop ASUS
db.comenzi.find({ "produse.nume_produs": "Laptop ASUS" })

//Afisarea comenzilor ale caror produse contin "tura" 
db.comenzi.find({"produse.nume_produs": { $regex : /tura/, $options: "i"} } , { produse : 1, _id : 0})

//Afisarea recenziilor ale caror comentarii contin "Foarte" 
db.recenzii.find({comentariu: { $regex : /Foarte/, $options: "i"} })