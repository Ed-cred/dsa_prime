export default function two_crystal_balls(breaks: boolean[]): number {
<<<<<<< HEAD
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    for(;i < breaks.length; i+=jumpAmount){
        if (breaks[i]){
            break;
        }
    }
    i -= jumpAmount;
    for (let j=0; j<jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
=======
>>>>>>> ebb855c8d149d1970e0aae70d7d7b741bb6b46d8

}