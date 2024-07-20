import { useEffect, useState } from "react";

let backspaceSymbol = "⌫";

let INTERVAL = 1000;
let PHASESHIFT = 300;

let Button = ({ setSelection, text, colorOn, selection }) => {
  let active = selection === text;
  return (
    <div
      className={[
        "cursor-default rounded text-4xl  font-black transition-colors duration-50 ease-in-out flex flex-row items-center justify-center border-4 ",
        colorOn
          ? active
            ? "bg-teal-300 text-teal-800 border-teal-600"
            : "bg-cyan-200 text-cyan-500 border-cyan-400"
          : "bg-white text-cyan-500 border-cyan-400",
      ].join(" ")}
      onMouseEnter={(_) => setSelection((v) => text)}
      onMouseLeave={(_) => setSelection((v) => (v === text ? "" : v))}
    >
      {text}
    </div>
  );
};

let main = () => {
  let [state, setState] = useState({
    colorOn: false,
    text: "",
    selection: "",
  });

  useEffect(() => {
    let colorOnAndWrite = setInterval(() => {
      setState((v) => {
        return {
          colorOn: true,
          selection: v.selection,
          text:
            v.selection === backspaceSymbol
              ? v.text.substring(0, v.text.length - 1)
              : v.text + v.selection,
        };
      });
    }, INTERVAL);

    let colorOff = setTimeout(() => {
      setInterval(() => {
        setState((v) => {
          return {
            ...v,
            colorOn: false,
          };
        });
      }, INTERVAL);
    }, PHASESHIFT);

    return () => {
      clearInterval(colorOnAndWrite);
      clearInterval(colorOff);
    };
  }, []);

  let { selection, text, colorOn } = state;

  let setSelection = (f) => {
    setState((v) => {
      return {
        ...v,
        selection: f(v.selection),
      };
    });
  };

  return (
    <div className="p-3 ">
      <div className="font-black text-5xl w-80 text-center text-pink-500 mb-2">
        {"BFDDR"}
      </div>
      <div className="grid grid-cols-3 gap-1 w-80 h-80 mb-2">
        <Button
          selection={selection}
          text={"."}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={"+"}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={","}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={"<"}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={backspaceSymbol}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={">"}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={"["}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={"-"}
          setSelection={setSelection}
          colorOn={colorOn}
        />
        <Button
          selection={selection}
          text={"]"}
          setSelection={setSelection}
          colorOn={colorOn}
        />
      </div>
      <div>
        <div
          style={{ overflowWrap: "break-word" }}
          className="my-1 w-80 bg-teal-100 border-4 border-teal-400 text-teal-900 rounded min-h-40 p-2 font-black text-xl leading-none "
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export default main;
