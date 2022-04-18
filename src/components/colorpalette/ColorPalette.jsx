import "./colorpalette.css";
export function ColorPalette({ newNote, setNewNote }) {
  const shadeNames = [
    "card-shade-1",
    "card-shade-2",
    "card-shade-3",
    "card-shade-4",
    "card-shade-5",
  ];

  const shadeColors = [
    "var(--white-color)",
    "var(--pastel-shade-blue)",
    "var(--pastel-shade-green)",
    "var(--pastel-shade-yellow)",
    "var(--pastel-shade-red)",
  ];

  return (
    <>
      <div className="children-center grid-gap card-palette">
        {shadeNames.map((item, idx) => (
          <div
            key={idx}
            className={`shade-ball ${item}`}
            onClick={() => {
              setNewNote({ ...newNote, cardColor: shadeColors[idx] });
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
