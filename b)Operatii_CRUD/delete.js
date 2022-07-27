//Stergerea clientului cu numele = AAAA
db.clienti.deleteOne( { nume: "AAAA" } )

//Stergerea comenzii cu status = finalizatat
db.comenzi.deleteOne( { status: "finalizatat" } )

//Stergerea recenziei cu comentariu = "Foarte bun"
db.recenzii.deleteOne( { comentariu: "Foarte bun" } )