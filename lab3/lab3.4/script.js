const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
    ];
//1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight**0.75*28)));
console.log(dogs);
//2.
const dogSarah = dogs.find(dog=>dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Chó của Sarah ăn ${dogSarah.curFood > dogSarah.recFood ? 'quá nhiều' : 'quá ít'} `);
//3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
//4.
console.log(`Chó của ${ownersEatTooMuch.join(' và ')} ăn quá nhiều`);
console.log(`Chó của ${ownersEatTooLittle.join(' và ')} ăn quá ít`);
//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));
//6.
const checkEat = dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood*1.1;
console.log(dogs.some(checkEat));
//7.
console.log(dogs.filter(checkEat));
//8.
const dogSort = dogs.slice().sort((a,b) => a.recFood - b.recFood);
console.log(dogSort);