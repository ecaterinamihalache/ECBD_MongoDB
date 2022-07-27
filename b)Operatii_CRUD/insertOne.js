//insert One in clienti collection
db.clienti.insert(
    { _id : ObjectId(),
      nume : "Mihalache", 
      prenume : "Nicoleta-Ecaterina", 
      date_contact : 
      {
        telefon : "0755477364",
        email : "ecaterinamihalache98@gmail.com",
        adresa : 
        {
          strada : "Bl Tudor Vladimirescu nr 87",
          oras : "Iasi",
          judet : "Iasi",
          tara : "Romania"
        }
      }
    }
);

db.clienti.insert(
  { _id : ObjectId(),
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
  }
);

db.clienti.insert(
  { _id : ObjectId(),
    nume : "client1", 
    prenume : "client1", 
    date_contact : 
    {
      telefon : "0755488333",
      email : "client1@gmail.com",
      adresa : 
      {
        strada : "Principala",
        oras : "Botosani",
        judet : "Botosani",
        tara : "Romania"
      }
    }
  }
);

db.clienti.insert(
  { _id : ObjectId(),
    nume : "client2", 
    prenume : "client2", 
    date_contact : 
    {
      telefon : "0755488333",
      email : null,
      adresa : 
      {
        strada : "Principala",
        oras : "Dorohoi",
        judet : "Botosani",
        tara : "Romania"
      }
    }
  }
);


//insert One in comenzi collection
db.comenzi.insert(
  { 
    _id : ObjectId(),
    data_plasarii : new Date("2022-01-21"), 
    modalitate_livrare : "livrare prin curier",
    modalitate_plata : "ramburs",
    produse : 
    [
      {
        nume_produs : "Laptop ASUS",
        pret : 2500,
        livrat_EMAG : false,
        detalii :
        {
          procesor : "Intel",
          tip_procesor : "i5",
          greutate : 1.5,
          RAM : "8 GB",
          tip_stocare : "SSD",
          capacitate_SSD : "512 GB",
          diagonala : "14 inch",
          format_display : "Full HD"
        },
        imagine : "D:/An_4/Semestrul2/ECBD/Proiect/poze/LaptopAsus.jpg"
      }, 
      {
        nume_produs : "Scaun de birou ergonomic",
        pret : 350,
        livrat_EMAG : true,
        detalii :
        {
          greutate : "10 KG",
          culoare : "negru",
          orgonomic : true,
          greutate_suportata : "150 KG"
        },
        imagine : "D:/An_4/Semestrul2/ECBD/Proiect/poze/Scaun.png"
      }
    ],
    status : "finalizata",
    _id_client : ObjectId("628a51b5c9ac7563a55b9c69")
  }
);

db.comenzi.insert(
  { 
    _id : ObjectId(),
    data_plasarii : new Date("2022-01-21"), 
    modalitate_livrare : "livrare prin curier",
    modalitate_plata : "ramburs",
    produse : 
    [
      {
        nume_produs : "Laptop ASUS",
        pret : 3000,
        livrat_EMAG : false,
        detalii :
        {
          procesor : "Intel",
          tip_procesor : "i3",
          greutate : 1.5,
          RAM : "4 GB",
          tip_stocare : "HDD",
          diagonala : "15.6 inch",
          format_display : "Full HD"
        },
        imagine : "D:/An_4/Semestrul2/ECBD/Proiect/poze/LaptopAsus.jpg"
      }
    ],
    status : "finalizata",
    _id_client : ObjectId("628a51bcc9ac7563a55b9c6a")
  }
);


db.comenzi.insert(
  { 
    _id : ObjectId(),
    data_plasarii : new Date("2022-03-21"), 
    modalitate_livrare : "livrare prin curier",
    modalitate_plata : "ramburs",
    produse : 
    [
      {
        nume_produs : "Laptop HP",
        pret : 3000,
        livrat_EMAG : false,
        detalii :
        {
          procesor : "Intel",
          tip_procesor : "i3",
          greutate : 1.5,
          RAM : "8 GB",
          tip_stocare : "SSD",
          diagonala : "15.6 inch",
          format_display : "Full HD"
        },
        imagine : null
      }
    ],
    status : "finalizata",
    _id_client : ObjectId("628a51c2c9ac7563a55b9c6b")
  }
);


db.comenzi.insert(
  { 
    _id : ObjectId(),
    data_plasarii : new Date("2022-04-20"), 
    modalitate_livrare : "easybox EMAG",
    modalitate_plata : "card",
    produse : 
    [
      {
        nume_produs : "Mouse ASUS",
        pret: 34.99,
        livrat_EMAG : true,
        detalii :
        {
          culoare : "negru",
          orgonomic : false,
          wireless_mouse: true,
          Dpi : [800, 2400],
          compatibilitate : "Windows (7 sau mai nou)" 
        }
      }
    ],
    status : "finalizata",
    _id_client : ObjectId("628a51c8c9ac7563a55b9c6c")
  }
);

db.comenzi.insert(
  { 
    _id : ObjectId(),
    data_plasarii : new Date("2022-05-01"), 
    modalitate_livrare : "easybox EMAG",
    modalitate_plata : "card la easybox",
    produse : 
    [
      {
        nume_produs : "Mouse Myria",
        pret: 64.99,
        livrat_EMAG : true
      }
    ],
    status : "activa",
    _id_client : ObjectId("628a523ec9ac7563a55b9c71")
  }
);

//insert One in recenzii collection
db.recenzii.insert(
    { _id : ObjectId(),
      comentariu: "Foarte comfortabil. Isi merita toti banii.",
      stele: 4,
      data: new Date(),
      _id_comanda: ObjectId("628c7c4e9e5b8f7aaa439b3a")
    }
);

db.recenzii.insert(
  { _id : ObjectId(),
    comentariu : "Foarte bun",
    stele : 5,
    data : new Date(),
    _id_comanda : ObjectId("628c7c559e5b8f7aaa439b3b")
  }
);

db.recenzii.insert(
  { _id : ObjectId(),
    stele : 5,
    data : new Date(),
    _id_comanda : ObjectId("628c7c5b9e5b8f7aaa439b3c")
  }
);