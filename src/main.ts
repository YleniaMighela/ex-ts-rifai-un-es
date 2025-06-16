// dati dell'oggetto  ricetta
type Ricetta = {
  id: number;
  name: string;
  userId: number;

};

// dati dell'oggetto  chef
type Chef = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
}


async function getChefBirthday(id: number): Promise<string> {

  try {
    const ricettaResponse: Response = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricettaId: Ricetta = await ricettaResponse.json();
    // console.log(ricettaId);

    const infoChef: Response = await fetch(`https://dummyjson.com/users/${ricettaId.userId}`)
    const chefId: Chef = await infoChef.json();
    // console.log(chefId);

    return chefId.birthDate;
  } catch (error: any) {
    throw new Error("Errore nel recupero della data di nascita dello chef");
  }
}

// Esempio di utilizzo
getChefBirthday(1)
  .then((birthday: string) => {
    console.log("📅 Data di nascita dello chef:", birthday);
  })
  .catch((error: Error) => {
    console.error("❌ Errore:", error.message);
  });

