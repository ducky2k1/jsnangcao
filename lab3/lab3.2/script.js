const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia;
    dogsJuliaCorrected.splice(0,2);
    dogsJuliaCorrected.splice(1,2);

    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    //3.2.3
    dogs.forEach(function(dog,i) {
        if(dog>=3){
            console.log(`Chó số ${i+1} là chó lớn và ${dog} tuổi`);
        } else{
            console.log(`Chó số ${i+1} là chó con và ${dog} tuổi`);
        }
    });
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3],);
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])