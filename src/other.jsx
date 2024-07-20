import { useEffect, useState } from "react";

function insertTextAtCursor(text) {
  const textarea = document.getElementById("myTextarea");

  const startPos = textarea.selectionStart;
  const endPos = textarea.selectionEnd;

  const currentValue = textarea.value;

  textarea.value =
    currentValue.substring(0, startPos) + text + currentValue.substring(endPos);

  textarea.selectionStart = textarea.selectionEnd = startPos + text.length;

  textarea.focus();
}

let main = () => {
  let [selection, setSelection] = useState("");

  useEffect(() => {
    let id = setInterval(() => {
      insertTextAtCursor(selection);
    }, 300);
    return clearInterval(id);
  }, []);

  return (
    <div>
      <div className="grid-cols-3">
        <div onMouseOver={(_) => setSelection(">")}>{">"}</div>
        <div onMouseOver={(_) => setSelection("<")}>{"<"}</div>
        <div onMouseOver={(_) => setSelection("+")}>{"+"}</div>
        <div onMouseOver={(_) => setSelection("-")}>{"-"}</div>
        <div>{null}</div>
        <div onMouseOver={(_) => setSelection(".")}>{"."}</div>
        <div onMouseOver={(_) => setSelection(",")}>{","}</div>
        <div onMouseOver={(_) => setSelection("[")}>{"["}</div>
        <div onMouseOver={(_) => setSelection("]")}>{"]"}</div>
      </div>
      <div>
        <textarea id="myTextarea" />
      </div>
    </div>
  );
};

export default main;
