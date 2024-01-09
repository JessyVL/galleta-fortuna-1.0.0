// Funcion para poder tener la frase aleatoria del array que se recibe (phrases.jon) / Funcion que nos da un elemento aleatorio de un array
const getRandomFromArr = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length) // Entender mejor esta parte
    return arr[indexRandom]
}

export default getRandomFromArr