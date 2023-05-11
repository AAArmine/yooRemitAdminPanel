import React, { FC } from "react";

type TransactionsDataProp = {
  data: TransactionsDataItem[];
};
type TransactionsDataItem = {
  id: string;
  data: string;
  client: string;
  branch: string;
  provider: string;
  country: string;
  transactionID: string;
  status: string;
  lexisNexisCheck: boolean;
  smsSent: boolean;
  theteRayCheck: boolean;
  rowNumber: number;
};
const TransactionsTable: FC<TransactionsDataProp> = ({ data }) => {
  return (
    <div className="table-container max-w-fit">
      <table className="max-w-fit block">
        <thead>
          <tr>
            <th className="small text-center" style={{ width: "1.5rem" }}>
              No
            </th>
            <th>Date</th>
            <th>Client</th>
            <th>Branch</th>
            <th>Provider</th>
            <th>Destination Country</th>
            <th>Transaction ID</th>
            <th>Status</th>
            <th className="medium">Lexis-Nexis Check</th>
            <th className="medium">SMS Sent</th>
            <th className="medium">TheteRay Check</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td className="small text-center">{row.rowNumber}</td>
              <td>{row.data}</td>
              <td>{row.client}</td>
              <td>{row.branch}</td>
              <td>{row.provider}</td>
              <td>{row.country}</td>
              <td>{row.transactionID}</td>
              <td><div className={`circle ${row.status.split(" ")[0]}`}></div>{row.status}</td>
              <td className="medium">{row.lexisNexisCheck ? "yes" : "no"}</td>
              <td className="medium">{row.smsSent ? "yes" : "no"}</td>
              <td className="medium">{row.theteRayCheck ? "yes" : "no"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TransactionsTable;
