import React, { useState } from "react";
import styles from "./index.module.scss";
import { FilterAllUsers } from "./components/filters";
import { SearchUsers } from "./components/search";
import { UsersTable } from "./components/table";
import { Pagination } from "antd";

const Users = () => {
  const usersTableData = [
    {
      id: "1",
      userRole: "PM",
      username: "Jacob Jones 1",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "2",
      userRole: "admin",
      username: "Jacob Jones 2",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "3",
      userRole: "admin",
      username: "Jacob Jones 3",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "4",
      userRole: "admin",
      username: "Jacob Jones 4",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "5",
      userRole: "admin",
      username: "Jacob Jones 5",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "6",
      userRole: "admin",
      username: "Jacob Jones 6",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "7",
      userRole: "admin",
      username: "Jacob Jones 7",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "8",
      userRole: "admin",
      username: "Jacob Jones 8",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "9",
      userRole: "admin",
      username: "Jacob Jones 9",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "10",
      userRole: "admin",
      username: "Jacob Jones 10",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
    {
      id: "11",
      userRole: "admin",
      username: "Jacob Jones 11",
      userFullName: "Jacob Jones full",
      creationDate: "27/06/2022",
      inactivationDate: "27/06/2022",
      status: "active",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usersTableData.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className={`${styles["all-users-cont"]} mt-2 pt-2`}>
      <FilterAllUsers />
      <SearchUsers />
      <div className="pt-8">
        <UsersTable data={currentItems} />
      </div>
      <div className="mt-10 pagination-cont">
        <Pagination
          current={currentPage}
          total={usersTableData.length}
          pageSize={itemsPerPage}
          showSizeChanger={true}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Users;
