import React, { FC } from "react";

type viewInvoiceProps = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event?: React.FormEvent<HTMLElement>) => void;
  data?: string;
};
const ViewInvoice: FC<viewInvoiceProps> = ({ text, onClick, type, data }) => {
  return (
    <button className="px-3 py-1 font-semibold border rounded border-buttonGrey x-2/5 text-buttonGrey bg-transparent hover:text-main hover:border-main ease-in duration-300">
      {text}
    </button>
  );
};
export default ViewInvoice;
