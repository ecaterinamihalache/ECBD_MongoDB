db.clienti.bulkWrite(
    [
        {
            insertOne:
            {
                "document":
                {
                    _id : ObjectId(),
                    nume : "AAAA", 
                    prenume : "Nicoleta", 
                    date_contact : 
                    {
                        "telefon" : "0755488364",
                        "email" : "AAAA@gmail.com",
                        "adresa" : 
                        {
                            "strada" : "Bl Independentei Nr 02",
                            "oras" : "Iasi",
                            "judet" : "Iasi",
                            "tara" : "Romania"
                        }
                    }
                }
            }
        },

        {
            insertMany:
            {
                "document":
                [
                    {
                        _id : ObjectId(),
                        nume : "AAAA", 
                        prenume : "Nicoleta", 
                        date_contact : 
                        {
                            telefon : "0755488364",
                            email : "AAAA@gmail.com",
                            adresa : 
                            {
                                strada : "Bl Independentei Nr 02",
                                oras : "Iasi",
                                judet : "Iasi",
                                tara : "Romania"
                            }
                        }
                    },
                    {
                        _id : ObjectId(),
                        nume : "BBBB", 
                        prenume : "Nicoleta", 
                        date_contact : 
                        {
                            telefon : "0755488538",
                            email : "BBBB@gmail.com",
                            adresa : 
                            {
                                strada : "Bl Socola Nr 5",
                                oras : "Iasi",
                                judet : "Iasi",
                                tara : "Romania"
                            }
                        }
                    }
                ]
            }
        },

        {
            updateOne:
            {
                filter : {nume: "AAAA"},
                update : {$set: { "nume": "Popa" } }
            }
        },

        {
            deleteOne:
            {
                filter:
                {
                    prenume : "Nicoleta"
                }
            }
        }
    ]
)