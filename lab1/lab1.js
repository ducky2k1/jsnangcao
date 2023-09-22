const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski','Gnarby','Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2045',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//1. 
const [players1, players2] = game.players;
console.log(players1,players2);

//2.
console.log('Danh sách team1');
const [gk, ...fieldPlayers] = players1;
console.log(`GK: ${gk}`, fieldPlayers);
console.log('Danh sách team2');
const [gk1, ...fieldPlayers1] = players2;
console.log(`GK: ${gk1}`, fieldPlayers1);

//3.
console.log('Danh sách tất cả cầu thủ.');
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
console.log('Danh sách cầu thủ Bayern')
const players1Final =[...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//5.
console.log('Tỷ lệ cược')
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function(...players){
    console.log(`${players.length} goals were scored`);
    console.log(`List of goal scorers: ${players}`);
};

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

//7. 
team1 < team2 && console.log('Team 1 có tỷ lệ thắng cao hơn.');
team1 > team2 && console.log('Team 2 có tỷ lệ thắng cao hơn.');


//lab1.2
console.log('Lab 1.2');
//1.
for(const[i,players] of game.scored.entries())
    console.log(`Goal ${i + 1}: ${players}`);
//2.
let average = 0;
for (const odd of Object.values(game.odds))
    average += odd;
average /= Object.values(game.odds).length;
console.log(average);
//3.
for(const[team, odd] of Object.entries(game.odds)){
    const teamStr = team === `x` ? `hòa` : `chiến thắng của ${game[team]}`;
    console.log(`Tỷ lệ ${teamStr} là ${odd}`);
}



