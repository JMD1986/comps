function Table({ data }) {
  const renderedRows = data.map((fruit) => {
    return (
      <tr key={fruit.name}>
        <td>{fruit.name}</td>
        <td>{fruit.color}</td>
        <td>{fruit.score}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fruit</th>
            <th>color</th>
            <th>score</th>
          </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
