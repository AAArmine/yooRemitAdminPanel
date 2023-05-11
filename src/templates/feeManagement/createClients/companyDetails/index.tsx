import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import TypeText from "custom/inputs/typeText";
import PrimaryButton from "custom/buttons/primary";
import { Delete } from "assets/icons";
import type { RootState } from "app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setCompanyName,
  setRegistrationNumber,
  setCountry,
  setRegistrationAddress,
  setEmail,
  deleteEmail,
  setTelNumber,
  deleteTel,
} from "features/createClient";
// import { v4 as uuidv4 } from "uuid";
import { telEmailType } from "features/createClient";
import { useForm, Controller } from "react-hook-form";

type plusId = {
  id: string;
};

const CompanyDetails = ({ control }: { control: any }) => {
  const { v4: uuidv4 } = require("uuid");
  const [addedEmail, setAddedEmail] = useState<plusId[]>([{ id: uuidv4() }]);
  const [addedTel, setAddedTel] = useState<plusId[]>([{ id: uuidv4() }]);

  const addEmail = () => {
    setAddedEmail((prev) => [...prev, { id: uuidv4() }]);
  };
  const addTel = () => {
    setAddedTel((prev) => [...prev, { id: uuidv4() }]);
  };
  useEffect(() => {}, [addedEmail, addedTel]);

  const addDetail = useSelector((state: RootState) => state.createClient);
  const dispatch = useDispatch();

  const handelDeleteEmail = (id: string) => {
    setAddedEmail(addedEmail.filter((item) => item.id !== id));
    dispatch(deleteEmail(id));
  };

  const handelDeleteTel = (id: string) => {
    setAddedTel(addedTel.filter((item) => item.id !== id));
    dispatch(deleteTel(id));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setCompanyName(e.target.value));
  return (
    <div className={`mt-2 pt-2`}>
      <section className={styles["company-details"]}>
        <h3 className="text-secondaryTitle font-bold text-lg ">
          Company Details
        </h3>
        <div className="flex mt-6 flex-wrap">
          <div className={styles["company-details-item"]}>
            <Controller
              control={control}
              name="iasd"
              render={({ field, fieldState }) => (
                <TypeText
                  label="Company Name"
                  required
                  error={!!fieldState.error}
                  value={field.value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setCompanyName(e.target.value))
                  }
                />
              )}
              rules={{
                required: "please enter Company name",
                maxLength: { value: 10, message: "Name is too long" },
                minLength: { value: 3, message: "Name is too short" },
              }}
            />
          </div>
          <span>{addDetail.companyName}</span>
          <div className={styles["company-details-item"]}>
            <TypeText
              label="Registration Number"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setRegistrationNumber(e.target.value))
              }
            />
          </div>
          <span>{addDetail.registrationNumber}</span>
          <div className={styles["company-details-item"]}>
            <TypeText
              label="Country"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setCountry(e.target.value))
              }
            />
          </div>
          <span>{addDetail.country}</span>
          <div className={styles["company-details-item"]}>
            <TypeText
              label="Registration Address"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setRegistrationAddress(e.target.value))
              }
            />
          </div>
          {addDetail.registrationAddress}

          {addedTel.map((tel) => (
            <div className={styles["company-details-item"]} key={tel.id}>
              <TypeText
                label="Company Phone Number"
                id={tel.id}
                tel={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setTelNumber({ id: tel.id, value: e.target.value }))
                }
              />
              {addedTel.length > 1 && (
                <span
                  onClick={() => handelDeleteTel(tel.id)}
                  className="absolute right-3 top-2"
                >
                  <Delete />
                </span>
              )}
            </div>
          ))}

          {addedEmail.map((email) => (
            <div className={styles["company-details-item"]} key={email.id}>
              <TypeText
                label="Company Contact Email"
                id={email.id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEmail({ id: email.id, value: e.target.value }))
                }
              />
              {addedEmail.length > 1 && (
                <>
                  <span
                    onClick={() => handelDeleteEmail(email.id)}
                    className="absolute right-3 top-2"
                  >
                    <Delete />
                  </span>
                  {addDetail.emailValue.map((el: telEmailType) => (
                    <span key={el.id}>
                      value: {el.value},<br /> id: {el.id}
                      <br />
                    </span>
                  ))}
                </>
              )}
            </div>
          ))}

          <div className={`${styles["company-details-item"]} flex`}>
            <div className={`${styles["button-item"]} mr-1`}>
              <PrimaryButton
                text="+ New Email"
                addFields={true}
                onClick={addEmail}
                type="button"
              />
            </div>
            <div className={`${styles["button-item"]} ml-1`}>
              <PrimaryButton
                text="+ New Number"
                addFields={true}
                onClick={addTel}
                type="button"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetails;
