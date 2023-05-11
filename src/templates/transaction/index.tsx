import React, { useEffect, useState } from "react";
import Layout from "custom/layout";
import ContentWrapper from "custom/wrappers/contentWrapper";
import styles from "./index.module.scss";
import Filters from "./components/filters";
import TransactionsTable from "./components/table";
import { TableHeader } from "custom/tableHeader";
import { Pagination } from "antd";

const Transaction = () => {
  const transactionsData = [
    {
      id: "1zczcx",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 1",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "123cx456789",
      status: "Confirmed",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "scdvdzv2",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 2",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "12345z6789",
      status: "Confirmed",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "cb dxv3",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 3",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "123a456789",
      status: "Confirmed",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "dcb cfb f4",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 4",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "1234w56789",
      status: "Confirmed",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "5",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 5",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "1234uy56789",
      status: "Confirmed",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "6",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 6",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "12345i6789",
      status: "Posted",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "7",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 7",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "123456p789",
      status: "Failed",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "8",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 8",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "123456p789",
      status: "For Verification",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "9",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 9",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "123456p789",
      status: "Pending For Payment",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "10",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 10",
      branch: "branch 10",
      provider: "ATS",
      country: "India",
      transactionID: "123456p789",
      status: "On Hold",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
    {
      id: "11",
      data: "27/06/2022 | 08:04:38",
      client: "Jacob Jones 11",
      branch: "branch 1",
      provider: "ATS",
      country: "India",
      transactionID: "123456p789",
      status: "Insufficient Funds",
      lexisNexisCheck: true,
      smsSent: false,
      theteRayCheck: true,
    },
  ];
  const transactionsTableData = transactionsData.map((element, index) => ({
    ...element,
    rowNumber: index + 1,
  }));
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactionsTableData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageSizeRef = React.useRef(2);
  useEffect(() => {
  }, [itemsPerPage, currentPage, setCurrentPage]);

  return (
    <Layout>
      <ContentWrapper title="Client Transaction Report">
        <div
          className={`${styles["trasaction-main-cont"]} mt-2 mr-4 pt-4 max-w-full`}
        >
          <Filters />
          <div className={`${styles["transaction-wrapper"]} max-w-full`}>
            <TableHeader
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              setCurrentPage={setCurrentPage}
            />
            <TransactionsTable data={currentItems} />
          </div>
          <div className="mt-10 pagination-cont">
            <Pagination
              onChange={(currentPage: number, itemsPerPage: number) => {
                const pageSizeChange = pageSizeRef.current !== itemsPerPage;
                if (pageSizeChange) {
                  setCurrentPage(1);
                } else {
                  setCurrentPage(currentPage);
                }
                pageSizeRef.current = itemsPerPage;
              }}
              current={currentPage}
              total={transactionsTableData.length}
              pageSize={itemsPerPage}
              showSizeChanger={true}
            />
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  );
};
export default Transaction;
