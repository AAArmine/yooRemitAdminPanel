import React from "react";
import styles from "./index.module.scss";

export const Permissions = () => {
  return (
    <div className={styles["permissions-cont"]}>
      <h2 className="pb-2">User Permissions</h2>
      <table className={`${styles["permissions-table"]} pt-4`}>
        <thead>
          <tr>
            <th className={styles.first}></th>
            <th className="text-center">View</th>
            <th className="text-center">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.first}>Client Transaction Report</td>
            <td className="text-center">
              <input type="checkbox" id="view-transactions" />
              <label htmlFor="view-transactions"></label>
            </td>
            <td className="text-center"></td>
          </tr>
          <tr>
            <td className={styles.first}>User Management</td>
            <td className="text-center">
              <input type="checkbox" id="view-userManagement" />
              <label htmlFor="view-userManagement" />
            </td>
            <td className="text-center">
              <input type="checkbox" id="edit-userManagement" />
              <label htmlFor="edit-userManagement" />
            </td>
          </tr>
          <tr>
            <td className={styles.first}>Client Fee Management</td>
            <td className="text-center">
              <input type="checkbox" id="view-clientFee" />
              <label htmlFor="view-clientFee" />
            </td>
            <td className="text-center">
              <input type="checkbox" id="edit-cientFee" />
              <label htmlFor="edit-cientFee" />
            </td>
          </tr>
          <tr>
            <td className={styles.first}>Client Invoice Report</td>
            <td className="text-center">
              <input type="checkbox" id="view-invoice" />
              <label htmlFor="view-invoice" />
            </td>
            <td className="text-center">
              <input type="checkbox" id="edit-view-invoice" />
              <label htmlFor="edit-view-invoice" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
