//afisarea tuturor comenzilor cu status=finalizata
db.comenzi.find({status : "finalizata"});

//afisarea tuturor comenzilor cu status=finalizata ordonate crescator dupa data_plasarii
db.comenzi.find({status : "finalizata"}).sort({data_plasarii: 1});

//afisarea tuturor comenzilor cu status=„ridicata”
db.comenzi.find({status : "ridicata"});

//afisarea tuturor comenzilor ce nu au detalii pentru produse
db.comenzi.find({"produse.detalii" : { $exists: false} });

//afisarea tuturor comenzilor ce nu au aribuite imagini pentru produse
db.comenzi.find({"produse.imagine" : { $type: 10 } });

//afisarea tuturor produselor ce au pretul mai mare decat 50.55
db.comenzi.find({"produse.pret": { $gt: 50.55 } }, { produse : 1, _id:0 });

//afisarea tuturor produselor din comenzi livrate de EMAG care au produse ce incep cu litera M 
db.comenzi.find({"produse.livrat_EMAG" : true, "produse.nume_produs": /^M/});

//afisarea comenzilor de contin 2 produse
db.comenzi.find({produse : { $size: 2} });

//afisarea detaliilor produselor ale caror nume se termina cu US
db.comenzi.find({"produse.nume_produs": /US$/}, { "produse.detalii" : 1, _id : 0});

//afisarea comenzilor ce au un singur produs si acel produs este de culoare nearga 
db.comenzi.find({produse : { $size: 1}, "produse.detalii.culoare" : "negru"});

//Cautarea documentelor cu status „ridicata”, „activa” sau „finalizata” 
db.comenzi.find( { status: { $in: [ "ridicata", "activa", "finalizata"] } } )

//Cautarea dupa o anumita valoare din vector
db.comenzi.find({ "produse.detalii.Dpi": { $exists : true}, "produse.detalii.Dpi": { $gt: 850} });
db.comenzi.find({"produse.detalii.Dpi": 800 });

//Cautarea dupa indexul vectorului de sub-documente
db.comenzi.find({ "produse.0.pret": { $gt : 2300 } });

//afisarea comenzilor finalizate cu ultimul document din vectorul produse
db.comenzi.find({ status : "finalizata" }, { status: 1, produse: { $slice: -1}, _id:0 } );

//afisarea clientilor ordonati crescator dupa nume si descrescator dupa prenume
db.clienti.find().sort({ nume: 1, prenume: -1});

//afisarea tuturor clientilor ce au domiciliul in judetul Iasi
db.clienti.find({ "date_contact.adresa.judet" : "Iasi" });

//afisarea clientilor din judetul Botosani, oras Dorohoi ce nu au email ordonati crescator dupa nume
db.clienti.find({"date_contact.email": { $type : 10 }, "date_contact.adresa.judet" : "Botosani", "date_contact.adresa.oras" : "Dorohoi" }).sort({nume: 1});

//afiasrea tuturor recenziilor cu mai mult de 3 stele 
db.recenzii.find({ stele : {$gt : 3} });

//afiasrea tuturor recenziilor ce nu au comentarii
db.recenzii.find({comentariu: { $exists : false } });