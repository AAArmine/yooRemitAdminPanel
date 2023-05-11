import React, { useState } from "react";
import styles from "./index.module.scss";
import { CreateUserInputs } from "../createUser/components/inputs";
import PrimaryButton from "custom/buttons/primary";
import FilterButton from "custom/buttons/filter";
import { Permissions } from "./components/permissions";
import { Modal } from "antd";
import { Success } from "assets/icons";

const CreateUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createSuccess, setCreateSucces] = useState<boolean>(true);

  //modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const cancelCreatingUser = () => {
    (document.getElementById("create-newUser-form") as HTMLFormElement).reset();
  };
  const saveCreatedUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (createSuccess) {
      console.log("save");
    }
  };
  return (
    <>
      <form id="create-newUser-form" onSubmit={(e) => saveCreatedUser(e)}>
        <div className={`${styles["users-main-cont"]} mt-2 pt-4`}>
          <CreateUserInputs />
          <Permissions />
          <div
            className={`${styles["buttons-cont"]} pt-12 flex flex-wrap w-full justify-between`}
          >
            <div className={styles.item} />
            <div className={styles.item} />
            <div className={styles.item}>
              <FilterButton onClick={cancelCreatingUser}>Cancel</FilterButton>
            </div>
            <div className={styles.item}>
              {createSuccess ? (
                <PrimaryButton text="Save" type="submit" onClick={showModal} />
              ) : (
                <PrimaryButton text="Save" type="submit" />
              )}
            </div>
          </div>
        </div>
      </form>
      <Modal
        title="Success"
        visible={isModalVisible}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width="300px"
        centered={true}
      >
        {/* <div className={styles["success-icon-cont"]}> */}
        <div className="flex justify-center -mt-36 h-36">
          <Success />
        </div>
        <p className="pb-4 pt-4 font-bold">User Created Successfully</p>
        <PrimaryButton text="Close" onClick={handleCancel} />
      </Modal>
    </>
  );
};
export default CreateUser;
