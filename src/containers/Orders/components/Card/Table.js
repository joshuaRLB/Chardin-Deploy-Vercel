import React from "react";

const Table = ({ data, columns, total, deposit, balance }) => {
  return (
    <div>
      <h1 className="heading py-3">Order Summary</h1>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="col-lg-4">{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td className="bg-medium-gray text-white" key={colIndex}>
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="borderless" />
            <td className="borderless text-end heading p-1 pt-3"> Deposit </td>
            <td className="borderless py-1 pt-3"> ₱ {deposit} </td>
          </tr>
          <tr>
            <td className="borderless" />
            <td className="borderless text-end heading p-1"> Balance </td>
            <td className="borderless py-1"> ₱ {balance} </td>
          </tr>
          <tr>
            <td className="borderless" />
            <td className="borderless text-end heading p-1">
              <h5 className="mb-0">Total</h5>
            </td>
            <td className="borderless py-1">
              <h5 className="mb-0">₱ {total} </h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
