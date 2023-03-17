type Color = "FancyBlue" | "DarkBlack" | "BrightWhite";

type HexLetter = "a" | "b" | "c" | "d" | "e" | "f";
type HexNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type HexColorPart = HexLetter | HexNumber;
type HexColor = `#${HexColorPart}${HexColorPart}${HexColorPart}`;
type RGB = [number, number, number];

//const colors: Record<Color, HexColor | RGB> = {
//FancyBlue: { value: "blue" },
//DarkBlack: [0, 0, 0],
//BrightWhite: "#fff",
//};

//colors.BrightWhite.toUpperCase();

//const colors = {
//FancyBlue: "#00f",
//DarkBlack: [0, 0, 0],
//BrightWhite: "#fff",
//} satisfies Record<Color, HexColor | RGB>;

//colors.BrightWhite.toUpperCase();

const crew: Record<string, unknown> = {
  Alara: "open the jar of pickles",
  Bortus: { hatchEgg: 21 },
  Isaac: 0b0101,
};

const whatIsGordonDoing = crew.Gordon;
const howLongHatching = crew.Bortus.hatchEgg;

//type Activity =
//| { species: "xelayan"; activity: string }
//| { species: "moclan"; activity: { hatchEgg: number } }
//| { species: "kaylon"; activity: number };
//const crew: Record<string, Activity> = {
//Alara: { species: "xelayan", activity: "open the jar of pickles" },
//Bortus: { species: "moclan", activity: { hatchEgg: 21 } },
//Isaac: { species: "kaylon", activity: 0b0101 },
//};

//const whatIsGordonDoing = crew.Gordon;
//const howLongHatching =
//crew.Bortus.species === "moclan" && crew.Bortus.activity.hatchEgg;

//const crew = {
//Alara: "open the jar of pickles",
//Bortus: { hatchEgg: 21 },
//Isaac: 0b0101,
//} satisfies Record<string, unknown>;

//const whatIsGordonDoing = crew.Gordon;
//const whatIsAlaraDoing = crew.Alara;
//const howLongHatching = crew.Bortus.hatchEgg;
