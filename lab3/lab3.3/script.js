const calcAverageHumanAge = function (ages){
    console.log(ages);
    ages.forEach(function(dog,i) {
        if(dog>2){
            console.log(`Tuổi của chó là ${dog} tuổi và tuổi của người là ${dog*4+16} tuổi`);
        } else{
            console.log(`Tuổi của chó là ${dog} tuổi và tuổi của người là ${dog*2} tuổi`);
        }
    });
    const humanAges = ages.map(age => (age <= 2 ? 2*age : 16+age*4));
    // console.log(`Tuổi của người tính theo tuổi chó là ${humanAges}`);
    const adults = humanAges.filter(age=> age >= 18);
    console.log(`Tuổi người lớn hơn 18 là ${adults} tuổi`);
    const average = adults.reduce((acc,age)=>acc+age,0)/adults.length;
    console.log(`Trung bình tuổi của các chú chó trưởng thành là ${average} tuổi`);
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
