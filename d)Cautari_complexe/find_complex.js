//afisarea clientului cu numele = Mihalache si prenumele = Nicoleta-Ecaterina
function find_nume_prenume(n, p){
	var myCursor;
	var findObj = {};

	if(n !== null && p !== null){
		findObj.nume = n;
		findObj.prenume = p;
	}else if( n === null){
		findObj.p = p;
	}else if(p === null){
		findObj.nume = n;
	}
	printjson(findObj);
	myCursor = db.clienti.find(findObj);
	myCursor.forEach(printjson);
}

function execute_find(){
	print("find_nume_prenume: Mihalache Nicoleta-Ecaterina");
	find_nume_prenume("Mihalache", "Nicoleta-Ecaterina");
}

//execute_find();

//afisarea totalului unei comenzi (suma preturilor produselor dintr-o comanda)
function suma_preturi(){
	var myCursor = db.comenzi.find();
	var result = [];
	myCursor.forEach( e => {
        var suma = 0;
		produse = e.produse; 
        for(var idx = 0; idx < produse.length; idx++){
            suma += produse[idx].pret;
        }
		var resultObj = {
            "id_comanda" : e._id,
			"suma": suma
		}
		result.push(resultObj);
	})
	result.forEach(printjson);
}

suma_preturi();