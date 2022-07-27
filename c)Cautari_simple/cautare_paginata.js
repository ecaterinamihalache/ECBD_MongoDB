//Afisarea numelui si prenumelui pentru toti clientii cu conditia sa fie cate 2 clienti pe pagina
db.clienti.find({}, { nume: 1, prenume: 1, _id:0 }).limit(2).skip(2);

//Afisarea comenzilor ordonate descrescator in functie de data plasarii cu conditia sa fie cate 3 comenzi pe pagina
db.comenzi.find().sort({data_plasarii: -1}).limit(2);
db.comenzi.find().sort({data_plasarii: -1}).limit(2).skip(2);


