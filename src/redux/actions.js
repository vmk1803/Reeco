import { SET_EDIT_PRODUCT_DETAILS_MODAL, SET_ORDER_DETAILS, UPDATE_PRODUCT_DETAILS } from "./actionConstants";

export const setUserOrderDetails = (orderDetails) => ({
    type: SET_ORDER_DETAILS,
    payload: { orderDetails }
})

export const updateProductDetails = (updatedProductObj) => ({
    type: UPDATE_PRODUCT_DETAILS,
    payload: { updatedProductObj }
})

export const setEditProductDetailsModal = (toggleStatus) => ({
    type: SET_EDIT_PRODUCT_DETAILS_MODAL,
    payload: { toggleStatus }
})