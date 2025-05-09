function convertLength(value: number, unit: "cm" | "km"): number {
    if (unit === "cm") return value / 100000;
    if (unit === "km") return value * 100000; 
    throw new Error("Unit tidak valid");
}

console.log(convertLength(100000, "cm")); 
console.log(convertLength(1, "km"));