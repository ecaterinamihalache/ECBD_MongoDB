//afisarea pretului total pentru produsele din comenzi
var mapFunc = function () { 
    for (var idx = 0; idx < this.produse.length; idx++) { 
        var key = this.produse[idx].nume_produs; 
        var value = { pret: this.produse[idx].pret }; 
        emit(key, value); 
    } 
}

var reduceFunc = function (key, countObjVals) { 
    reducedVal = { pret: 0 }; 
    for (var idx = 0; idx < countObjVals.length; idx++) { 
        reducedVal.pret += countObjVals[idx].pret; 
    } 
    return reducedVal; 
}

db.comenzi.mapReduce( 
    mapFunc, reduceFunc, 
    {
        out: {merge: "MapReduce"}
    }
);


//afisarea totalului unei comenzi (suma preturilor produselor dintr-o comanda)
var mapFunc = function () { 
    var key = this._id; 
    for (var idx = 0; idx < this.produse.length; idx++) { 
        var value = { pret: this.produse[idx].pret }; 
        emit(key, value); 
    } 
}

var reduceFunc = function (key, countObjVals) { 
    reducedVal = { pret: 0 }; 
    for (var idx = 0; idx < countObjVals.length; idx++) { 
        reducedVal.pret += countObjVals[idx].pret; 
    } 
    return reducedVal; 
}

db.comenzi.mapReduce( 
    mapFunc, reduceFunc, 
    {
        out: {merge: "mapReduce"}
    }
);