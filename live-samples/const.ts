type Names = readonly string[];

const getNames = <T extends Names>(arg: T): T => arg;
const getNamesConst = <const T extends Names>(arg: T): T => arg;

//Type of names: string[]
const names = getNames(["Ed", "Kelly", "Gordon"]);

//Type of namesConst: readonly ["Ed", "Kelly", "Gordon"]
const namesConst = getNamesConst(["Ed", "Kelly", "Gordon"]);
