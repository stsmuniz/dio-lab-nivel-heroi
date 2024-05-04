const herois = [
    {
        nome: "Alastor",
        xp: 700
    },
    {
        nome: "Bryanna",
        xp: 7800
    },
    {
        nome: "Charlie",
        xp: 5920
    },
    {
        nome: "Daymon",
        xp: 8127
    },
    {
        nome: "Elba",
        xp: 16700
    },
    {
        nome: "Fenryr",
        xp: 3300
    },
    {
        nome: "Gonzaga",
        xp: 17700
    },
    {
        nome: "Hylda",
        xp: 9367
    }
]

for (let index = 0; index < herois.length; index++) {
    const name = herois[index].nome;
    const xp = herois[index].xp;
    let level = ''
    switch(true) {
        case (xp < 1000):
            level = 'Ferro';
            break;
        case (xp < 2000):
            level = 'Bronze';
            break;
        case (xp < 5000):
            level = 'Prata';
            break;
        case (xp < 7000):
            level = 'Ouro';
            break;
        case (xp < 8000):
            level = 'Platina';
            break;
        case (xp < 9000):
            level = 'Ascendente';
            break;
        case (xp < 10000):
            level = 'Imortal';
            break;
        case (xp > 10000):
            level = 'Radiante';
            break;
        default:
            level = 'invalid input'
            break;
    }

    console.log(`O herói de nome **{${name}}** está no nível **{${level}}**`)
}