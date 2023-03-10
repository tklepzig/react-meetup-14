//type Colors = "red" | "green" | "blue";
//type RGB = [red: number, green: number, blue: number];

//const palette = {
//red: [255, 0, 0],
//green: "#00ff00",
//blue: [0, 0, 255],
//} satisfies Record<Colors, string | RGB>;

//const redComponent = palette.red[0];
//const greenNormalized = palette.green.toUpperCase();

interface B {
  age: number;
}

const b = JSON.stringify({ blubb: 42 });
const c: B = JSON.parse(b) satisfies B;
console.dir(c.age);
