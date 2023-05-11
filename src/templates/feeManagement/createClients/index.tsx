import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useForm, Controller } from "react-hook-form";
import TypeText from "custom/inputs/typeText";
import UploadFile from "custom/buttons/upload";
import FeeAmount from "custom/inputs/feeAmount";
import PrimaryButton from "custom/buttons/primary";
import FilterButton from "custom/buttons/filter";
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
  setContactPersonName,
  setContactPersonTel,
  setContactPersonEmail,
  deleteContactPerson,
  resetState,
  setContactPersonPosition,
} from "features/createClient";
import DataInput from "custom/data";
import { Visa } from "assets/icons";
import Select from "custom/inputs/selectHeader";

type CompanyDetaisType = {
  companyName: string;
  regNumber: string;
  country: string;
  regAddress: string;
  telNumber1: number;
  telNumber2?: number;
  telNumber3?: number;
  email1: string;
  email2: string;
  email3: string;
  contactPerson1fullName: string;
  contactPerson2fullName: string;
  contactPerson3fullName: string;
  contactPerson1Position: string;
  contactPerson2Position: string;
  contactPerson3Position: string;
  contactPerson1Tel: number;
  contactPerson2Tel: number;
  contactPerson3Tel: number;
  contactPerson1Email: string;
  contactPerson2Email: string;
  contactPerson3Email: string;
  certificate: string;
};
type plusId = {
  id: string;
};

const CreateClients = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CompanyDetaisType>();
  const [inactive, setInactive] = useState<boolean>(true);
  const { v4: uuidv4 } = require("uuid");
  const [addedEmail, setAddedEmail] = useState<plusId[]>([{ id: uuidv4() }]);
  const [addedTel, setAddedTel] = useState<plusId[]>([{ id: uuidv4() }]);
  const [addedContactPerson, setAddedContactPerson] = useState<plusId[]>([
    { id: uuidv4() },
  ]);
  const [certificate, setCertificate] = useState("");

  const addEmail = () => {
    setAddedEmail((prev) => [...prev, { id: uuidv4() }]);
    console.log("length", addedEmail.length);
  };
  const addTel = () => {
    setAddedTel((prev) => [...prev, { id: uuidv4() }]);
  };
  const addPerson = () => {
    setAddedContactPerson((prev) => [...prev, { id: uuidv4() }]);
  };
  const addDetail = useSelector((state: RootState) => state.createClient);
  const dispatch = useDispatch();

  const handelDeleteEmail = (id: string) => {
    setAddedEmail(addedEmail.filter((item) => item.id !== id));
    dispatch(deleteEmail(id));
  };
  const handelDeletePerson = (id: string) => {
    setAddedContactPerson(addedContactPerson.filter((item) => item.id !== id));
    dispatch(deleteContactPerson(id));
  };

  const handelDeleteTel = (id: string) => {
    setAddedTel(addedTel.filter((item) => item.id !== id));
    dispatch(deleteTel(id));
  };

  return (
    <section className={styles["form-section"]}>
      <form
        style={{ height: "100%", width: "100%" }}
        onSubmit={handleSubmit((datacheckbox) => {
          // console.log(data);
          console.log("redux", addDetail);
        })}
      >
        <section className={`${styles["company-details"]} mt-2 pt-2`}>
          <h3 className="text-secondaryTitle font-bold text-lg ">
            Company Details
          </h3>
          <div className="flex mt-6 flex-wrap">
            <div className={styles["company-details-item"]}>
              <Controller
                control={control}
                name="companyName"
                render={({ field, fieldState }) => (
                  <TypeText
                    label="Company Name"
                    required
                    error={!!fieldState.error}
                    fields={field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e.target.value);
                      dispatch(setCompanyName(e.target.value));
                      if (inactive) {
                        setInactive(false);
                      }
                    }}
                  />
                )}
                rules={{
                  required: "This field is required*",
                  maxLength: { value: 30, message: "Name is too long" },
                  minLength: { value: 3, message: "Name is too short" },
                }}
              />
              {errors.companyName && (
                <span className="text-main font-bold text-xs relative bottom-6">
                  {errors.companyName?.message}
                </span>
              )}
            </div>
            <span>{addDetail.companyName}</span>
            <div className={styles["company-details-item"]}>
              <Controller
                control={control}
                name="regNumber"
                render={({ field, fieldState }) => (
                  <TypeText
                    label="Registration Number"
                    required
                    error={!!fieldState.error}
                    fields={field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e.target.value);
                      dispatch(setRegistrationNumber(e.target.value));
                      if (inactive) {
                        setInactive(false);
                      }
                    }}
                  />
                )}
                rules={{
                  required: "This field is required*",
                  maxLength: {
                    value: 20,
                    message: "Registration number is too long",
                  },
                  minLength: {
                    value: 5,
                    message: "Registration number is too short",
                  },
                }}
              />
              {errors.regNumber && (
                <span className="text-main font-bold text-xs relative bottom-6">
                  {errors.regNumber?.message}
                </span>
              )}
            </div>
            <span>{addDetail.registrationNumber}</span>
            <div className={styles["company-details-item"]}>
              <Controller
                control={control}
                name="country"
                render={({ field, fieldState }) => (
                  <TypeText
                    label="Country"
                    required
                    error={!!fieldState.error}
                    fields={field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e.target.value);
                      dispatch(setCountry(e.target.value));
                      if (inactive) {
                        setInactive(false);
                      }
                    }}
                  />
                )}
                rules={{
                  required: "This field is required*",
                  maxLength: {
                    value: 20,
                    message: "Country name is too long",
                  },
                  minLength: {
                    value: 3,
                    message: "Country name is too short",
                  },
                }}
              />
              {errors.country && (
                <span className="text-main font-bold text-xs relative bottom-6">
                  {errors.country?.message}
                </span>
              )}
            </div>
            <div className={styles["company-details-item"]}>
              <Controller
                control={control}
                name="regAddress"
                render={({ field, fieldState }) => (
                  <TypeText
                    label="Registration Address"
                    required
                    error={!!fieldState.error}
                    fields={field}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e.target.value);
                      dispatch(setRegistrationAddress(e.target.value));
                      if (inactive) {
                        setInactive(false);
                      }
                    }}
                  />
                )}
                rules={{
                  required: "This field is required*",
                  maxLength: {
                    value: 100,
                    message: "Registration Address is too long",
                  },
                  minLength: {
                    value: 5,
                    message: "Registration Address is too short",
                  },
                }}
              />
              {errors.regAddress && (
                <span className="text-main font-bold text-xs relative bottom-6">
                  {errors.regAddress?.message}
                </span>
              )}
            </div>
            {addedTel.map((tel, index) => (
              <div className={styles["company-details-item"]} key={tel.id}>
                <Controller
                  control={control}
                  name={
                    index + 1 === 1
                      ? "telNumber1"
                      : index + 1 === 2
                      ? "telNumber2"
                      : "telNumber3"
                  }
                  render={({ field, fieldState }) => (
                    <TypeText
                      label="Company Phone Number"
                      required
                      error={!!fieldState.error}
                      fields={field}
                      id={tel.id}
                      tel={true}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e.target.value);
                        dispatch(
                          setTelNumber({ id: tel.id, value: e.target.value })
                        );
                        if (inactive) {
                          setInactive(false);
                        }
                      }}
                    />
                  )}
                  rules={{
                    required: "This field is required*",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only Numbers required",
                    },
                    maxLength: {
                      value: 10,
                      message: "Enter a valid phone number",
                    },
                    minLength: {
                      value: 8,
                      message: "Enter a valid phone number",
                    },
                  }}
                />
                {index + 1 === 2 &&
                errors.telNumber2?.message !== "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.telNumber2?.message}
                  </span>
                ) : index + 1 === 3 &&
                  errors.telNumber3?.message !== "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.telNumber3?.message}
                  </span>
                ) : (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.telNumber1?.message}
                  </span>
                )}
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
            {addedEmail.map((email, index) => (
              <div className={styles["company-details-item"]} key={email.id}>
                <Controller
                  control={control}
                  name={
                    index + 1 === 1
                      ? "email1"
                      : index + 1 === 2
                      ? "email2"
                      : "email3"
                  }
                  render={({ field, fieldState }) => (
                    <TypeText
                      label="Company Contact Email"
                      required={index + 1 === 1}
                      error={!!fieldState.error}
                      fields={field}
                      id={email.id}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e.target.value);
                        dispatch(
                          setEmail({ id: email.id, value: e.target.value })
                        );
                        if (inactive) {
                          setInactive(false);
                        }
                      }}
                    />
                  )}
                  rules={{
                    pattern: {
                      value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
                      message: "Enter a valid email address",
                    },
                    required: "This field is required*",
                  }}
                />
                {index + 1 === 2 &&
                errors.email2?.message !== "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.email2?.message}
                  </span>
                ) : index + 1 === 3 &&
                  errors.email3?.message !== "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.email3?.message}
                  </span>
                ) : (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.email1?.message}
                  </span>
                )}
                {addedEmail.length > 1 && (
                  <span
                    onClick={() => handelDeleteEmail(email.id)}
                    className="absolute right-3 top-2"
                  >
                    <Delete />
                  </span>
                )}
              </div>
            ))}
            {addDetail.emailValue.map((email) => (
              <span key={email.value}>{email.value}</span>
            ))}
            <div className={`${styles["company-details-item"]} flex`}>
              {addedEmail.length < 3 && (
                <div className={`${styles["button-item"]} mr-1`}>
                  <PrimaryButton
                    text="+ New Email"
                    addFields={true}
                    onClick={addEmail}
                    type="button"
                  />
                </div>
              )}
              {addedTel.length < 3 && (
                <div className={`${styles["button-item"]} ml-1`}>
                  <PrimaryButton
                    text="+ New Number"
                    addFields={true}
                    onClick={addTel}
                    type="button"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
        {/* contact person section */}
        <section className={`${styles["contact-person-details"]} mt-2 pt-2`}>
          {addedContactPerson.map((person, index) => (
            <div
              key={person.id}
              className={
                addedContactPerson.length > 1 && index !== 2
                  ? "flex flex-wrap relative border-b-2 mt-10 mb-5"
                  : index === 2
                  ? "flex flex-wrap relative mt-10"
                  : "flex mt-6 flex-wrap relative"
              }
            >
              <div className={styles["contact-person-detais-item"]}>
                <Controller
                  control={control}
                  name={
                    index + 1 === 1
                      ? "contactPerson1fullName"
                      : index + 1 === 2
                      ? "contactPerson2fullName"
                      : "contactPerson3fullName"
                  }
                  render={({ field, fieldState }) => (
                    <TypeText
                      label="Contact Person Full Name"
                      required
                      error={!!fieldState.error}
                      fields={field}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e.target.value);
                        dispatch(
                          setContactPersonName({
                            id: person.id,
                            fullName: e.target.value,
                          })
                        );
                        if (inactive) {
                          setInactive(false);
                        }
                      }}
                    />
                  )}
                  rules={{
                    required: "This field is required*",
                    maxLength: {
                      value: 30,
                      message: "Contact Person name is too long",
                    },
                    minLength: {
                      value: 5,
                      message: "Contact Person name is too short",
                    },
                  }}
                />
                {index + 1 === 2 &&
                errors.contactPerson2fullName?.message !==
                  "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson2fullName?.message}
                  </span>
                ) : index + 1 === 3 &&
                  errors.contactPerson3fullName?.message !==
                    "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson3fullName?.message}
                  </span>
                ) : (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson1fullName?.message}
                  </span>
                )}
              </div>
              <div className={styles["contact-person-detais-item"]}>
                <Select
                  label="Contact Person Position"
                  data={{ data: ["CEO", "COO", "CFO", "BDM"] }}
                  singleChose={true}
                  name={person.id}
                  idData={person.id}
                  required={true}
                  reducerFunc={setContactPersonPosition}
                />
                {addDetail.contactPerson.map((item) => (
                  <span key={item.id}>
                    <span>
                      <b>position: </b>
                      {item.position},{" "}
                    </span>
                    <span>name: {item.fullName}, </span>
                    <span>id:{item.id}, </span>
                    <span>telNumber:{item.telNumber}, </span>
                    <span>email:{item.email}, </span>
                    <br />
                  </span>
                ))}
              </div>
              <div className={styles["contact-person-detais-item"]}>
                <Controller
                  control={control}
                  name={
                    index + 1 === 1
                      ? "contactPerson1Tel"
                      : index + 1 === 2
                      ? "contactPerson2Tel"
                      : "contactPerson3Tel"
                  }
                  render={({ field, fieldState }) => (
                    <TypeText
                      label="Contact Phone Number"
                      tel={true}
                      required
                      error={!!fieldState.error}
                      fields={field}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e.target.value);
                        dispatch(
                          setContactPersonTel({
                            id: person.id,
                            telNumber: e.target.value,
                          })
                        );
                        if (inactive) {
                          setInactive(false);
                        }
                      }}
                    />
                  )}
                  rules={{
                    required: "This field is required*",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only Numbers required",
                    },
                    maxLength: {
                      value: 10,
                      message: "Enter a valid phone number",
                    },
                    minLength: {
                      value: 8,
                      message: "Enter a valid phone number",
                    },
                  }}
                />
                {index + 1 === 2 &&
                errors.contactPerson2Tel?.message !==
                  "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson2Tel?.message}
                  </span>
                ) : index + 1 === 3 &&
                  errors.contactPerson3Tel?.message !==
                    "This field is required*" ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson3Tel?.message}
                  </span>
                ) : (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson1Tel?.message}
                  </span>
                )}
              </div>
              <div className={styles["contact-person-detais-item"]}>
                <Controller
                  control={control}
                  name={
                    index + 1 === 1
                      ? "contactPerson1Email"
                      : index + 1 === 2
                      ? "contactPerson2Email"
                      : "contactPerson3Email"
                  }
                  render={({ field, fieldState }) => (
                    <TypeText
                      label="Contact Email"
                      required={index + 1 === 1}
                      error={!!fieldState.error}
                      fields={field}
                      id={person.id}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onChange(e.target.value);
                        dispatch(
                          setContactPersonEmail({
                            id: person.id,
                            email: e.target.value,
                          })
                        );
                        if (inactive) {
                          setInactive(false);
                        }
                      }}
                    />
                  )}
                  rules={{
                    pattern: {
                      value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
                      message: "Enter a valid email address",
                    },
                    required: "This field is required*",
                  }}
                />
                {index + 1 === 2 ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson2Email?.message}
                  </span>
                ) : index + 1 === 3 ? (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson3Email?.message}
                  </span>
                ) : (
                  <span className="text-main font-bold text-xs relative bottom-6">
                    {errors.contactPerson1Email?.message}
                  </span>
                )}
              </div>
              {addedContactPerson.length > 1 && (
                <div
                  onClick={() => handelDeletePerson(person.id)}
                  className="absolute right-3 -top-8 cursor-pointer"
                >
                  <Delete />
                </div>
              )}
            </div>
          ))}
          <div className={`${styles["contact-person-detais-item"]} flex`}>
            <div className={`${styles["button-item"]} mr-1`}>
              {addedContactPerson.length < 3 && (
                <PrimaryButton
                  text="+ New Person"
                  addFields={true}
                  type="button"
                  onClick={addPerson}
                />
              )}
            </div>
          </div>
        </section>
        {/* upload document */}
        <section className="my-5 flex wrap pb-6">
          <div className={styles["button-cont"]}>
            <Controller
              control={control}
              name="certificate"
              render={({ field, fieldState }) => (
                <UploadFile
                  text="Certificate of Incorporation"
                  error={!!fieldState.error}
                  fields={field}
                  multiple={true}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onChange(e.target.value);
                    console.log(e?.target?.files![0]);
                    // todo dispatch(set....(e.target.value));
                    console.log("pictureName: ", e.target.files![0].name);
                    setCertificate(URL.createObjectURL(e.target.files![0]));
                    if (inactive) {
                      setInactive(false);
                    }
                  }}
                />
              )}
              rules={{
                required: "This field is required*",
                pattern: {
                  value:
                    /(.*?)\.(jpg|JPEG|jpeg|JPG|png|PNG|pdf|PDF|webp|WEBP)$/,
                  message: "Only jpeg/jpg/png/pdf formats are available",
                },
              }}
            />
            {certificate && (
              <span className={styles["uploaded-img"]}>
                <img
                  src={certificate}
                  style={{ maxWidth: "50px", maxHeight: "40px" }}
                />
              </span>
            )}
          </div>
          <div className={styles["button-cont"]}>
            <UploadFile text="Client House Documents" />
          </div>
          <div className={styles["button-cont"]}>
            <UploadFile text="Other Necessary Documents" />
          </div>
        </section>
        {/* fee amount */}
        <section className={`${styles["fee-cont"]} my-6 pt-6`}>
          <div className="flex">
            <FeeAmount dollar={true} error={true} />
            <span className="relative pt-1 ml-10">Monthly Hosting Fee</span>
          </div>
          <div className="flex">
            <FeeAmount dollar={true} />
            <span className="relative pt-1 ml-10">Monthly Maintenance Fee</span>
          </div>
          <div className="flex">
            <FeeAmount dollar={true} />
            <span className="relative pt-1 ml-10">SMS Charge Fee</span>
          </div>
          <div className="flex">
            <FeeAmount dollar={true} />
            <span className="relative pt-1 ml-10">KYC Fee Per Check</span>
          </div>
          <div className="flex">
            <FeeAmount dollar={true} />
            <span className="relative pt-1 ml-10">PAI Wallet Fee</span>
          </div>
        </section>
        {/* payment method */}
        <section className={styles["payment-method-cont"]}>
          <h3>Monthly Payment Method</h3>
          <div className={`${styles["payment-chose"]} flex  flex-wrap mt-6`}>
            <div className={`${styles["payment-item"]} ${styles.chose}`}>
              <div className={styles.relative}>
                <input type="radio" id="card" name="method" />
                <label htmlFor="card">Card Payment</label>
                <Visa />
              </div>
            </div>
            <div className={styles["payment-item"]}>
              <DataInput label="Payment Date" />
            </div>
            <div className={`${styles["payment-item"]} ${styles.chose}`}>
              <div className={styles.relative}>
                <input type="radio" id="deposit" name="method" />
                <label htmlFor="deposit">Deposit Payment</label>
              </div>
            </div>
          </div>
          <div className="text-right justify-end flex">
            <div className={styles["buttons-cont"]}>
              <div className={styles["buttons-item"]}>
                <FilterButton
                  inactive={inactive ? true : false}
                  type="reset"
                  onClick={() => {
                    dispatch(resetState());
                  }}
                >
                  Cancel
                </FilterButton>
              </div>
              <div className={styles["buttons-item"]}>
                <PrimaryButton
                  text="Save"
                  inactive={inactive ? true : false}
                  type="submit"
                />
              </div>
            </div>
          </div>
        </section>
      </form>
    </section>
  );
};

export default CreateClients;
