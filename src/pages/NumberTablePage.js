import React from "react";
import NumberTable from "../components/NumberTable";
import { useState } from "react";
import "./NumberTable.css";
function NumberTablePage() {
  const [rows, setRows] = useState("");
  const [columns, setColumns] = useState("");
  const checkState = () => {
    console.log(rows);
    console.log(columns);
  };
  return (
    <div className="numberTable">
      <form
        onSubmit={(event) => {
          // To prevent a page redirect.
          event.preventDefault();

          // Obtain data from the form.
          const data = new FormData(event.target);
          const rows = data.get("rows");
          console.log(rows);
          setRows(Number(rows));
          const columns = data.get("columns");
          setColumns(Number(columns));
        }}
      >
        <div>
          <label htmlFor="rows">Rows</label>
          <input
            id="rows"
            name="rows"
            type="number"
            min={1}
            defaultValue={rows}
          />
        </div>
        <div>
          <label htmlFor="columns">Columns</label>
          <input
            id="columns"
            name="columns"
            type="number"
            min={1}
            defaultValue={columns}
          />
        </div>
        <button type="submit">Submit</button>
        {Boolean(rows) && Boolean(columns) && (
          <NumberTable rows={rows} columns={columns} />
        )}
        <button onClick={checkState}>check</button>
      </form>
    </div>
  );
}

export default NumberTablePage;
