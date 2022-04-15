import "./colorpalette.css";
export function ColorPalette() {
  return (
    <>
      <div className="children-center grid-gap card-palette">
        <div className="shade-ball card-shade-1"></div>
        <div className="shade-ball card-shade-2"></div>
        <div className="shade-ball card-shade-4"></div>
        <div className="shade-ball card-shade-3"></div>

        <div className="shade-ball card-shade-5"></div>
      </div>
    </>
  );
}
