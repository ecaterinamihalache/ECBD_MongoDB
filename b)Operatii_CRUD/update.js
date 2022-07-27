// Update prenume client
db.clienti.updateOne(
    {nume: "Mihalache"},
    {
		$set: 
		{ 
			prenume : "Nicoleta" 
		} 
	}
)

//Update la data comenzii cu id-ul = 62695274e34a67e081cd0e36
db.comenzi.updateOne(
    {
        _id: ObjectId("62695274e34a67e081cd0e36")
    },
    {
        $set: { data_plasarii: new Date("2022-04-21") }
    }
)

db.comenzi.updateMany(
    {
        "produse.nume_produs" : "Mouse ASUS"
    },
    {
        $set: { status: "finalizata" }
    }
)

//update la stelele recenziei cu id-ul = 626952c2e34a67e081cd0e37
db.recenzii.updateOne(
    {
        _id: ObjectId("626952c2e34a67e081cd0e37")
    },
    {
        $set: {
            stele : 5
        }
    }
)

