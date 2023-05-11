import React, { FC } from "react";

type UsersDataProp = {
  data: UsersDataItem[];
};
type UsersDataItem = {
  id: string;
  userRole: string;
  username: string;
  userFullName: string;
  creationDate: string;
  inactivationDate: string;
  status: string;
};
export const UsersTable: FC<UsersDataProp> = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="small text-center" style={{ width: "1.5rem" }}>
              No
            </th>
            <th>User Role</th>
            <th>Username</th>
            <th>User Full Name</th>
            <th>Creation Date</th>
            <th>Inactivation Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="small text-center">{row.id}</td>
              <td>{row.userRole}</td>
              <td>{row.username}</td>
              <td>{row.userFullName}</td>
              <td>{row.creationDate}</td>
              <td>{row.inactivationDate}</td>
              <td>{row.status}</td>
              <td>ddd</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
