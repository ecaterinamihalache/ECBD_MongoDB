//insert Many in clienti collection
db.clienti.insertMany([
    { 
      _id : ObjectId(),
      nume : "Morosan", 
      prenume : "Carla", 
      date_contact : 
        {
          telefon : "0755477554",
          email : "carlamorosan@gmail.com",
          adresa : 
          {
            strada : "Tatarasi nr 10",
            oras : "Iasi",
            judet : "Iasi",
            tara : "Romania"
          }
        }
    },
    {
      _id : ObjectId(),
      nume : "Radion", 
      prenume : "Claudia", 
      date_contact : 
        {
          telefon : "0744477554",
          email : "claudiaradion@gmail.com",
          adresa : 
          {
            strada : "Pacurari nr 3",
            oras : "Iasi",
            judet : "Iasi",
            tara : "Romania"
          }
        }
    }
]);

//insert Many in comenzi collection
db.comenzi.insertMany([
    { 
      _id : ObjectId(),
      data_plasarii : new Date("2022-03-10"), 
      modalitate_livrare : "easybox EMAG",
      modalitate_plata : "card",
      produse : 
        [
          {
            nume_produs : "Mouse ASUS",
            pret : 79.99,
            livrat_EMAG : true,
            detalii :
            {
                culoare : "negru",
                orgonomic : true,
                wireless_mouse: true,
                Dpi : [800, 2400],
                compatibilitate : "Windows (7 sau mai nou)" 
            },
            imagine : "D:/An_4/Semestrul2/ECBD/Proiect/poze/mouseAsus.png"
          }
        ],
      status : "in proces",
      _id_client : ObjectId("628a523ec9ac7563a55b9c72")
    },
    {
      _id : ObjectId(),
      data_plasarii : new Date("2021-12-21"), 
      modalitate_livrare : "curier",
      modalitate_plata : "card VISA",
      produse : 
        [
          {
            nume_produs : "Tastatura Marvo",
            pret : 99.99,
            livrat_EMAG : false,
            detalii :
            {
                culoare : "negru",
                orgonomic : true,
                wireless : false,
                iluminare : "Rainbow (6 culori)",
                numar_taste : 87,
                compatibilitate : "Windows (7 sau mai nou)" 
            },
            imagine : "D:/An_4/Semestrul2/ECBD/Proiect/poze/tastaturaMarvo.png"
          }
        ],
      status : "ridicata",
      _id_client : ObjectId("628a523ec9ac7563a55b9c71")
    }
]);


//insert Many in recenzii collection
db.recenzii.insertMany([
    { 
      _id : ObjectId(),
      comentariu: "Mouse cam galagios. Cu greu l-am conectat la PC.",
      stele: 3,
      data: Date("2022-04-10"),
      _id_comanda: ObjectId("628c7c639e5b8f7aaa439b3d")
    },
    { 
        _id : ObjectId(),
        comentariu : "Mouse bun. Sunt multumita de el.",
        stele : 5,
        data : Date("2022-04-10"),
        _id_comanda : ObjectId("628c7cb99e5b8f7aaa439b42")
    },
    {
        _id : ObjectId(),
        comentariu : "Foarte buna tastatura. Este foarte silentioasa si prietenoasa cu degetele.",
        stele : 5,
        data : Date("2021-09-21"),
        _id_comanda : ObjectId("628c7cb99e5b8f7aaa439b43")
    }
]);