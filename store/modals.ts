import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createStreak: false,
  payment: false,
  PaymentVerify: false,
  selectBreakfast: false,
  triggerAutoFast: false,
  createFavourite: false,
  applyCoupan: false,
};

const frameSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    OPEN_CREATESTREAK_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    CLOSE_CREATESTREAK_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    OPEN_PAYMENT_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: true,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    CLOSE_PAYMENT_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    OPEN_PAYMENTVERIFY_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: true,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    CLOSE_PAYMENTVERIFY_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    OPEN_SELECTBREAKFAST_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: true,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    CLOSE_SELECTBREAKFAST_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    OPEN_TRIGGERAUTOFAST_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: true,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    CLOSE_TRIGGERAUTOFAST_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    OPEN_CREATEFAV_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: true,
        applyCoupan: false,
      };
    },
    CLOSE_CREATEFAV_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
    OPEN_APPLYCOUPAN_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: true,
      };
    },
    CLOSE_APPLYCOUPAN_MODAL: (state, action) => {
      return {
        ...state,
        createStreak: true,
        payment: false,
        PaymentVerify: false,
        selectBreakfast: false,
        triggerAutoFast: false,
        createFavourite: false,
        applyCoupan: false,
      };
    },
  },
});

export const {
  OPEN_CREATESTREAK_MODAL,
  CLOSE_CREATESTREAK_MODAL,
  OPEN_PAYMENT_MODAL,
  CLOSE_PAYMENT_MODAL,
  OPEN_PAYMENTVERIFY_MODAL,
  CLOSE_PAYMENTVERIFY_MODAL,
  OPEN_SELECTBREAKFAST_MODAL,
  CLOSE_SELECTBREAKFAST_MODAL,
  OPEN_TRIGGERAUTOFAST_MODAL,
  CLOSE_TRIGGERAUTOFAST_MODAL,
  OPEN_CREATEFAV_MODAL,
  CLOSE_CREATEFAV_MODAL,
  OPEN_APPLYCOUPAN_MODAL,
  CLOSE_APPLYCOUPAN_MODAL,
} = frameSlice.actions;
export default frameSlice.reducer;
