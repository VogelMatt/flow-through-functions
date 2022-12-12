const createWoodBlock = () => {
    // Return an object with 4 properties.
        return {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
        
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
   return `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
    
}

// The function returns a value, so that value is stored in a variable
const pineBlock = createWoodBlock();

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(pineBlock);  // <-- Missing an argument. Fix it.
console.log(pineBlock);
console.log(carvingString);
