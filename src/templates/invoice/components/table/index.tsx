import React, { FC, useState } from "react";
import styles from "./index.module.scss";
import { Edit } from "assets/icons";
import ViewInvoice from "custom/buttons/view";
import { Modal } from "antd";
import { Select } from "antd";
import ForApproval from "./forApprovalModal/ForApproval";

type InvoiceDataProp = {
  data: InvoiceDataItem[];
};
type InvoiceDataItem = {
  id: number;
  client: string;
  data: string;
  status: string;
  invoiceAmount: string;
  view: React.ReactNode;
  companyName?: string;
  companyContactEmail?: string;
  companySecondaryEmail?: string;
  companyThirdEmail?: string;
  creationDataFrom?: string;
  creationDataTo?: string;
  monthlyHostingFee?: number;
  monthlyMaintenanceFee?: number;
  smsChargeFee?: number;
  kycFeePerCheck?: number;
  paiWalletFee?: number;
  noTransactiosSms?: number;
  noTransactiosKyc?: number;
  noTransactiosPai?: number;
  credit?: number;
  tax?: number;
};
const InvoiceTable: FC<InvoiceDataProp> = ({ data }) => {
  const [isStatusModalVisible, setIsStatusModalVisible] = useState(false);
  const [isForApprovalModalVisible, setIsForApprovalModalVisible] =
    useState(false);

  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const { Option } = Select;
  const showStatusModal = (status: string) => {
    setIsStatusModalVisible(true);
    setSelectedStatus(status);
  };

  const handleOk = () => {
    setIsStatusModalVisible(false);
  };
  const handleCancel = () => {
    setIsStatusModalVisible(false);
  };
  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
  };

  //for approval
  const [ifEditable, setIfEditable] = useState<boolean>(false);
  type dataType = {
    id: number;
    client: string;
    data: string;
    status: string;
    invoiceAmount: string;
    view: React.ReactNode;
    companyName?: string;
    companyContactEmail?: string;
    companySecondaryEmail?: string;
    companyThirdEmail?: string;
    creationDataFrom?: string;
    creationDataTo?: string;
    monthlyHostingFee?: number;
    monthlyMaintenanceFee?: number;
    smsChargeFee?: number;
    kycFeePerCheck?: number;
    paiWalletFee?: number;
    noTransactiosSms?: number;
    noTransactiosKyc?: number;
    noTransactiosPai?: number;
    credit?: number;
    tax?: number;
  };
  const showForApprovalModal = (data: dataType) => {
    setIsForApprovalModalVisible(true);
    localStorage.setItem("invoiceData", JSON.stringify(data));
  };
  const hideModal = () => {
    setIsForApprovalModalVisible(false);
    setIfEditable(false);
  };
  const modalStatusOptions: string[] = [
    "Pending For Payment",
    "Paid",
    "Canceled",
  ];
  return (
    <>
      <table className={styles["invoice-table"]}>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Status</th>
            <th>Invoice Amount</th>
            <th className={styles["text-center"]}>View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.client}</td>
              <td>{row.data}</td>
              <td className="smal text-left">
                <div className={`circle ${row.status}`}></div>
                {row.status}
                {row.status === "Pending For Payment" ||
                row.status === "Paid" ||
                row.status === "Canceled" ? (
                  <span
                    onClick={() => showStatusModal(row.status)}
                    className="ml-2 cursor-pointer"
                  >
                    <Edit />
                  </span>
                ) : row.status === "For Approval" ? (
                  <span
                    onClick={() => showForApprovalModal(row)}
                    className="ml-2 cursor-pointer"
                  >
                    <Edit />
                  </span>
                ) : (
                  ""
                )}
              </td>
              <td>{row.invoiceAmount}</td>
              <td className={styles["text-center"]}>
                <ViewInvoice text="View Invoice" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="modal-edit-status-cont">
        <Modal
          title="Edit Status"
          visible={isStatusModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{ style: { display: "none" } }}
          width={300}
          centered={true}
          okText="Submit"
          okButtonProps={{ style: { width: "100%" } }}
        >
          <Select
            value={selectedStatus}
            onChange={handleStatusChange}
            style={{ width: 228, borderRadius: "20px" }}
          >
            {modalStatusOptions
              .filter((el) => el !== selectedStatus)
              .map((el) => (
                <Option value={el} key={el}>
                  {el}
                </Option>
              ))}
          </Select>
          <div className={styles.label}></div>
        </Modal>
      </div>
      <div className={styles["modal-for-approval-cont"]}>
        <Modal
          title="Edit Status"
          visible={isForApprovalModalVisible}
          onCancel={hideModal}
          cancelText="Edit Invoice"
          cancelButtonProps={{ style: { display: "none" } }}
          okButtonProps={{ style: { display: "none" } }}
          width={800}
          centered={true}
          okText="Approve Invoice"
          // bodyStyle={{
          //   backgroundColor: "#f7f7f7",
          //   borderRadius: "7px",
          // }}
        >
          <ForApproval
            setIsForApprovalModalVisible={setIsForApprovalModalVisible}
            ifEditable={ifEditable}
            setIfEditable={setIfEditable}
          />
        </Modal>
      </div>
    </>
  );
};
export default InvoiceTable;
