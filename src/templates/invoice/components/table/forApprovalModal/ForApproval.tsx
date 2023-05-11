import React, { FC, useState } from "react";
import styles from "./index.module.scss";
import PrimaryButton from "custom/buttons/primary";
import FilterButton from "custom/buttons/filter";
import TypeText from "custom/inputs/typeText";
import DataInput from "custom/data";
import FeeAmount from "custom/inputs/feeAmount";

type ForApprovalProps = {
  setIsForApprovalModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  ifEditable: boolean;
  setIfEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

const ForApproval: FC<ForApprovalProps> = ({
  setIsForApprovalModalVisible,
  ifEditable,
  setIfEditable,
}) => {
  const handleApprove = () => {
    setIsForApprovalModalVisible(false);
  };
  const handleEdit = () => {  setIfEditable(true);
    // return (event: React.MouseEvent) => {
    
    //   event.preventDefault();
    // };
  };
  const handleSave = () => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
    };
  };
  const invoiceDatafromStorage = localStorage.getItem("invoiceData");
  const invoiceData = invoiceDatafromStorage
    ? JSON.parse(invoiceDatafromStorage)
    : null;
  console.log(invoiceData);

  return (
    <div className={styles["modal-cont"]}>
      <form
        style={{ height: "100%", width: "100%" }}
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
        }}
      >
        <section className={styles["details-cont"]}>
          <div className={styles["detail-item"]}>
            <TypeText
              label="Company Name"
              placeholder={invoiceData.companyName}
              disabled={ifEditable ? false : true}
            />
          </div>
          <div className={styles["detail-item"]}>
            <TypeText
              label="Company Contact Email"
              placeholder={invoiceData.companyContactEmail}
              disabled={ifEditable ? false : true}
            />
          </div>
          {invoiceData.companySecondaryEmail && (
            <div className={styles["detail-item"]}>
              <TypeText
                label="Company Secondary Email"
                placeholder={invoiceData.companySecondaryEmail}
                disabled={ifEditable ? false : true}
              />
            </div>
          )}
          {invoiceData.companyThirdEmail && (
            <div className={styles["detail-item"]}>
              <TypeText
                label="Company Third Email"
                placeholder={invoiceData.companyThirdEmail}
                disabled={ifEditable ? false : true}
              />
            </div>
          )}

          <div className={styles["detail-item"]}>
            <DataInput
              label="Creation Date From"
              defaultValue={invoiceData.creationDataFrom}
              disabled={ifEditable ? false : true}
            />
          </div>
          <div className={styles["detail-item"]}>
            <DataInput
              label="Creation Date To"
              defaultValue={invoiceData.creationDataTo}
              disabled={ifEditable ? false : true}
            />
          </div>
        </section>
        <section className={styles["fee-details-cont"]}>
          <div className={styles["fee-details"]}>
            <div className={styles.title}>
              <h6 className={`${styles["title-item"]} pt-1`}>
                Monthly Hosting Fee
              </h6>
              <h6 className={styles["title-item"]}>Monthly Maintenance Fee</h6>
              <h6 className={styles["title-item"]}>SMS Charge Fee</h6>
              <h6 className={styles["title-item"]}>KYC Fee Per Check</h6>
              <h6 className={styles["title-item"]}>PAI Wallet Fee</h6>
            </div>
            <div className={styles.data}>
             
              <FeeAmount
                placeholder={invoiceData.monthlyHostingFee}
                disabled={ifEditable ? false : true}
                dollar={true}
              />
              <FeeAmount
                placeholder={invoiceData.monthlyMaintenanceFee}
                disabled={ifEditable ? false : true}
                dollar={true}
              />
              <FeeAmount
                placeholder={invoiceData.smsChargeFee}
                disabled={ifEditable ? false : true}
                dollar={true}
              />
              <FeeAmount
                placeholder={invoiceData.kycFeePerCheck}
                disabled={ifEditable ? false : true}
                dollar={true}
              />
              <FeeAmount
                placeholder={invoiceData.paiWalletFee}
                disabled={ifEditable ? false : true}
                dollar={true}
              />
            
              
            </div>
            <div className={styles.data}>
              <h4>No of Transactions Made</h4>
              <div className="pt-20 relative -top-5">
                <FeeAmount
                  placeholder={invoiceData.noTransactiosSms}
                  disabled={ifEditable ? false : true}
                />
                <FeeAmount
                  placeholder={invoiceData.noTransactiosKyc}
                  disabled={ifEditable ? false : true}
                />
                <FeeAmount
                  placeholder={invoiceData.noTransactiosPai}
                  disabled={ifEditable ? false : true}
                />
              </div>
            </div>
            <div className={styles.data}>
              <h4>Total Charge</h4>
              <div className="relative -top-5">
                <div className="relative">
                  <FeeAmount
                    placeholder={invoiceData.monthlyHostingFee}
                    disabled={ifEditable ? false : true}
                    dollar={true}
                  />
                </div>
                <FeeAmount
                  placeholder={invoiceData.monthlyMaintenanceFee}
                  disabled={ifEditable ? false : true}
                  dollar={true}
                />
                <FeeAmount
                  placeholder={invoiceData.smsChargeFee}
                  disabled={ifEditable ? false : true}
                  dollar={true}
                />
                <FeeAmount
                  placeholder={invoiceData.kycFeePerCheck}
                  disabled={ifEditable ? false : true}
                  dollar={true}
                />
                <FeeAmount
                  placeholder={invoiceData.paiWalletFee}
                  disabled={ifEditable ? false : true}
                  dollar={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`flex-between mt-12  mb-7 ${styles.subtotal}`}>
          <div>
            <h6 className={styles["title-item"]}>Credit</h6>
            <h6 className={styles["title-item"]}>Tax</h6>
          </div>
          <div>
            <div className={`${styles.data} text-center`}>
              <h4>Subtotal</h4>
              <div className="relative -top-5">
                <div className="relative">
                  <FeeAmount
                    placeholder={invoiceData.monthlyHostingFee}
                    disabled={ifEditable ? false : true}
                    dollar={true}
                    percent={true}
                  />
                </div>
                <FeeAmount
                  placeholder={invoiceData.monthlyMaintenanceFee}
                  disabled={ifEditable ? false : true}
                  dollar={true}
                />
              </div>
            </div>
          </div>
        </section>
        <section className={`flex-between mt-6 pb-4 mb-7 ${styles.subtotal}`}>
          <div>
            <h6 className={`${styles["title-item"]} ${styles.bolder}`}>
              Grand Total Charge
            </h6>
          </div>
          <div>
            <div className={styles.data}>
              <div className="relative">
                <FeeAmount
                  placeholder={invoiceData.monthlyMaintenanceFee}
                  disabled={ifEditable ? false : true}
                  dollar={true}
                />
              </div>
            </div>
          </div>
        </section>
        <div className={`flex-between ${styles["buttons-wrapper"]}`}>
          <div className={styles["button-cont"]}>
            <FilterButton onClick={ifEditable ? handleSave : handleEdit}>
              {ifEditable ? "Save Invoice" : "Edit Invoice"}
            </FilterButton>
          </div>
          <div className={styles["button-cont"]}>
            <PrimaryButton
              text="Approve Invoice"
              type="submit"
              onClick={handleApprove}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForApproval;
