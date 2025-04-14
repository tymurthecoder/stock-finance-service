import React from "react";
import { testIncomeStatementData } from "./testData";

const data = testIncomeStatementData;
interface Props {
  configs: any;
  data: any;
}

const Table = (props: Props) => {
  const renderRow = data.map((company) => {
    return (
      <tr key={company.cik}>
        {props.configs.map((val: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {val.render(company) == null ? "N/A" : val.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });
  const renderHeaders = props.configs.map((config: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-fray-500 uppercase tracking-wider"
        key={config.Label}
      >
        {config.Label}
      </th>
    );
  });
  return (
    <table>
      <thead className="min-w-full divide-y divide-gray-200 m-5">
        <tr>{renderHeaders}</tr>
      </thead>
      <tbody>{renderRow}</tbody>
    </table>
  );
};

export default Table;
