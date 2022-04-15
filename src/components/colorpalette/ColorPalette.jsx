import "./colorpalette.css";
export function ColorPalette() {
  const shades = [
    "card-shade-1",
    "card-shade-2",
    "card-shade-3",
    "card-shade-4",
    "card-shade-5",
  ];
  return (
    <>
      <div className="children-center grid-gap card-palette">
        {shades.map(item => (
          <div className={`shade-ball ${item}`}></div>
        ))}
      </div>
    </>
  );
}
