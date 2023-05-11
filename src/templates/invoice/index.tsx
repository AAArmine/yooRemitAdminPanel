import React, { useState } from "react";
import Layout from "../../custom/layout";
import ContentWrapper from "../../custom/wrappers/contentWrapper";
import { InvoiceFilters } from "./components/filters";
import { TableHeader } from "../../custom/tableHeader";
import InvoiceTable from "./components/table";
import styles from "./index.module.scss";
import { Pagination } from "antd";

const Invoice = () => {
  const invoiceTableData = [
    {
      id: 1,
      client: "Jacob Jones 1",
      data: "27/06/2022",
      status: "Pending For Payment",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 2,
      client: "Jacob Jones 2",
      data: "27/06/2022",
      status: "Due",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 3,
      client: "Jacob Jones 3",
      data: "2022-05-27",
      status: "Paid",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 4,
      client: "Jacob Jones 4",
      data: "2022-05-27",
      status: "For Approval",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
      companyName: "ATS",
      companyContactEmail: "j.jones@gmail.com",
      companySecondaryEmail: "j.jones2@gmail.com",
      companyThirdEmail: "j.jones3@gmail.com",
      creationDataFrom: "2022-05-27",
      creationDataTo: "2022-09-01",
      monthlyHostingFee: 500,
      monthlyMaintenanceFee: 650,
      smsChargeFee: 0.3,
      kycFeePerCheck: 0.3,
      paiWalletFee: 0.3,
      noTransactiosSms: 1000,
      noTransactiosKyc: 750,
      noTransactiosPai: 150,
      credit: 0.0,
      tax: 0.0,
    },
    {
      id: 5,
      client: "Jacob Jones 5",
      data: "27/06/2022",
      status: "Paid",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 6,
      client: "Jacob Jones 6",
      data: "27/06/2022",
      status: "Canceled",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 7,
      client: "Jacob Jones 7",
      data: "27/06/2022",
      status: "For Approval",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 8,
      client: "Jacob Jones 8",
      data: "27/06/2022",
      status: "For Approval",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 9,
      client: "Jacob Jones 9",
      data: "27/06/2022",
      status: "For Approval",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 10,
      client: "Jacob Jones 10",
      data: "27/06/2022",
      status: "For Approval",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 11,
      client: "Jacob Jones 11",
      data: "27/06/2022",
      status: "For Approval",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 12,
      client: "Jacob Jones 12",
      data: "27/06/2022",
      status: "Pending for Payment",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
    {
      id: 13,
      client: "Jacob Jones 13",
      data: "27/06/2022",
      status: "Canceled",
      invoiceAmount: "2000HKD",
      view: "view",
      upload: "upload",
    },
  ];
  const statusData = [
    {
      id: 1,
      name: "For Approval",
      value: 8,
    },
    {
      id: 2,
      name: "Pending for Payment",
      value: 12,
    },
    {
      id: 3,
      name: "Paid",
      value: 5,
    },
    {
      id: 4,
      name: "Due",
      value: 5,
    },
    {
      id: 5,
      name: "Canceled",
      value: 5,
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = invoiceTableData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const pageChange = (page: number) => {
    setCurrentPage(page);
  };
  const handleChange = () => {};
  return (
    <Layout>
      <ContentWrapper title="Client Invoice Report">
        <InvoiceFilters />
        <TableHeader
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          setCurrentPage={setCurrentPage}
        />
        <section className={`${styles["invoices-wrapper"]} flex`}>
          <div className={styles["invoice-table-cont"]}>
            <InvoiceTable data={currentItems} />
            <div className="my-10 pagination-cont">
              <Pagination
                onChange={(arg: number) => pageChange(arg)}
                defaultCurrent={currentPage}
                total={invoiceTableData.length}
                pageSize={itemsPerPage}
              />
            </div>
          </div>
          <div className={styles["invoice-statistics-cont"]}>
            <div className="w-full p-4 border rounded shadow">
              <h3 className="text-secondaryTitle font-bold text-lg">
                O Due invoices
              </h3>
              <p className="text-buttonGrey text-sm py-2">
                You have no unpaid invoices at this time
              </p>
            </div>
            <div className="w-full p-4 border rounded shadow mt-8">
              <h3 className="text-secondaryTitle font-bold text-lg pb-4">
                Status
              </h3>
              {statusData.map((status) => (
                <div className="flex-between py-2 " key={status.id}>
                  <div>
                    <input
                      type="checkbox"
                      name={status.name}
                      onChange={handleChange}
                    />
                    <span className="relative top-[-8px] pl-2 text-black">
                      {status.name}
                    </span>
                  </div>
                  <div className="text-main font-bold">{status.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ContentWrapper>
    </Layout>
  );
};
export default Invoice;
