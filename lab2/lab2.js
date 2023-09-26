
const gameEvents = new Map([
    [17, 'Ghi bàn'],
    [32, 'Thay người'],
    [47, 'Ghi bàn'],
    [61, 'Thay người'],
    [64, 'Thẻ vàng'],
    [69, 'Thẻ đỏ'],
    [70, 'Thay người'],
    [72, 'Thay người'],
    [76, 'Ghi bàn'],
    [88, 'Ghi bàn'],
    [94, 'Thẻ vàng'],
]);


//1.
const events = [...new Set(gameEvents.values())];
console.log(events);
//2.
gameEvents.delete(64);
//3.
const time = [...gameEvents.keys()].pop();
console.log(`Thời gian trận đấu ${time} phút.`);
console.log(
    `Một sự kiện xảy ra, trung bình mỗi ${time/gameEvents.size} phút.`
);
//4.
for(const [min,event] of gameEvents){
    const half = min <= 45 ? '1' : '2';
    console.log(`[Hiệp ${half}] ${min}: ${event}`);
}

