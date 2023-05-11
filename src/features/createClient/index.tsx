import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type telEmailType = {
  id: string;
  value: string;
};
export type contactPersonType = {
  id: string;
  fullName?: string;
  position?: string;
  telNumber?: string;
  email?: string;
};
export interface createClientI {
  companyName: string;
  registrationNumber: string;
  country: string;
  registrationAddress: string;
  telNumber: telEmailType[];
  emailValue: telEmailType[];
  contactPerson: contactPersonType[];
}

const initialState: createClientI = {
  companyName: "",
  registrationNumber: "",
  country: "",
  registrationAddress: "",
  telNumber: [],
  emailValue: [],
  contactPerson: [],
};

export const createClientSlice = createSlice({
  name: "createClient",
  initialState,
  reducers: {
    setCompanyName: (state, action: PayloadAction<string>) => {
      state.companyName = action.payload;
    },
    setRegistrationNumber: (state, action: PayloadAction<string>) => {
      state.registrationNumber = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setRegistrationAddress: (state, action: PayloadAction<string>) => {
      state.registrationAddress = action.payload;
    },
    setEmail: (state, action: PayloadAction<telEmailType>) => {
      if (
        state.emailValue.filter((e) => e.id === action.payload.id).length > 0
      ) {
        state.emailValue.forEach((element) => {
          if (element.id === action.payload.id) {
            element.value = action.payload.value;
          }
        });
      } else {
        state.emailValue.push(action.payload);
      }
    },
    deleteEmail: (state, action: PayloadAction<string>) => {
      state.emailValue = state.emailValue.filter(
        (e) => e.id !== action.payload
      );
    },
    setTelNumber: (state, action: PayloadAction<telEmailType>) => {
      if (
        state.telNumber.filter((el) => el.id === action.payload.id).length > 0
      ) {
        state.telNumber.forEach((el) => {
          if (el.id === action.payload.id) {
            el.value = action.payload.value;
          }
        });
      } else {
        state.telNumber.push(action.payload);
      }
    },
    deleteTel: (state, action: PayloadAction<string>) => {
      state.telNumber = state.telNumber.filter((e) => e.id !== action.payload);
    },
    setContactPersonName: (
      state,
      action: PayloadAction<{ id: string; fullName: string }>
    ) => {
      if (
        state.contactPerson.filter((el) => el.id === action.payload.id).length >
        0
      ) {
        state.contactPerson.forEach((el) => {
          if (el.id === action.payload.id) {
            el.fullName = action.payload.fullName;
          }
        });
      } else {
        state.contactPerson.push(action.payload);
      }
    },
    setContactPersonTel: (
      state,
      action: PayloadAction<{ id: string; telNumber: string }>
    ) => {
      if (
        state.contactPerson.filter((el) => el.id === action.payload.id).length >
        0
      ) {
        state.contactPerson.forEach((el) => {
          if (el.id === action.payload.id) {
            el.telNumber = action.payload.telNumber;
          }
        });
      } else {
        state.contactPerson.push(action.payload);
      }
    },
    setContactPersonEmail: (
      state,
      action: PayloadAction<{ id: string; email: string }>
    ) => {
      if (
        state.contactPerson.filter((el) => el.id === action.payload.id).length >
        0
      ) {
        state.contactPerson.forEach((el) => {
          if (el.id === action.payload.id) {
            el.email = action.payload.email;
          }
        });
      } else {
        state.contactPerson.push(action.payload);
      }
    },
    setContactPersonPosition: (
      state,
      action: PayloadAction<{
        id: string;
        position: string;
      }>
    ) => {
      if (
        state.contactPerson.filter((el) => el.id === action.payload.id).length >
        0
      ) {
        state.contactPerson.forEach((el) => {
          if (el.id === action.payload.id) {
            el.position = action.payload.position;
          }
        });
      } else {
        state.contactPerson.push(action.payload);
      }
    },
    deleteContactPerson: (state, action: PayloadAction<string>) => {
      state.contactPerson = state.contactPerson.filter(
        (e) => e.id !== action.payload
      );
    },
    resetState: (state) => {
      return initialState;
    },
  },
});

export const {
  setCompanyName,
  setRegistrationNumber,
  setCountry,
  setRegistrationAddress,
  setEmail,
  deleteEmail,
  setTelNumber,
  deleteTel,
  setContactPersonName,
  setContactPersonPosition,
  setContactPersonTel,
  setContactPersonEmail,
  deleteContactPerson,
  resetState,
} = createClientSlice.actions;

export default createClientSlice.reducer;
