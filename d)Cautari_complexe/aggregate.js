//Afisarea numarului de comenzi din luna martie (luna 3)
db.comenzi.aggregate([ 
    {
        $project:
        {
            luna: { $month : "$data_plasarii"},
            cod_comanda: "$_id"
        }
    },
    {
        $match: 
        {
          luna : 3
        }
    },
    {
    
        $group : 
        { 
            _id : {luna:"$luna"} , number : { $sum : 1 }
        } 
    }
]);

//afisarea numarului total de comenzi pe luna
db.comenzi.aggregate( [
    { 
        $project : 
        { 
            luna : { $month : "$data_plasarii" } 
        } 
    } ,
    { 
        $group : { 
            _id : {luna:"$luna"} , 
            number : { $sum : 1 } 
        } 
    },
    { 
        $sort : { "_id.luna" : 1 } 
    }
])

//afisarea totalului unei comenzi (suma preturilor produselor dintr-o comanda), descrescator dupa total
db.comenzi.aggregate([ 
    {
        $unwind: "$produse"
    },
    {   
        $group : 
        { 
            _id : "$_id", 
            total_comanda: { $sum: "$produse.pret" }
        }
    },
    {
        $project:
        {
            total_comanda: 1
        }
    },
    {
        $sort: {
            total_comanda: -1
        }
    },
    {
        $limit: 5
    }
])