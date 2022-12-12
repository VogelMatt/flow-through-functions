const yellowChairMaker = (chairMaterial) => {
    const chairObject = {
        type: "Chair",
        color: "Yellow",
        material: chairMaterial,
        price: 49.29
    }
    return chairObject
}
const giveMetheDeets = (nothing) => {
        const details = `The ${nothing.color}, ${nothing.material} Chair costs $${nothing.price}`
        return details;
    }




const metalChair = yellowChairMaker("Aluminum");
const oakChair = yellowChairMaker("Oak");
const bronzeChair = yellowChairMaker("Bronze");

const metalChairInfo = giveMetheDeets(metalChair);
const oakChairInfo = giveMetheDeets(oakChair);
const bronzeChairInfo = giveMetheDeets(bronzeChair);
// console.log(metalChair);
console.log(metalChairInfo);
console.log(bronzeChairInfo);
console.log(oakChairInfo);
