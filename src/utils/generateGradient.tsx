const colorPalette = ["#abdcc0", "#dbbdc0", "#b7dbe1", "#ffcc84"];

export function GenerateGradient() {
  const color1 = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  let color2 = colorPalette[Math.floor(Math.random() * colorPalette.length)];

  while (color1 === color2) {
    color2 = colorPalette[Math.floor(Math.random() * colorPalette.length)];
  }

  return `radial-gradient(ellipse at bottom, ${color1}, ${color2}, transparent)`;
}
