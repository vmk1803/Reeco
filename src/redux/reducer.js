/* eslint-disable no-case-declarations */
import { SET_EDIT_PRODUCT_DETAILS_MODAL, SET_ORDER_DETAILS, UPDATE_PRODUCT_DETAILS } from "./actionConstants";

const OrderDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ORDER_DETAILS:
            return { ...state, userOrderDetails: action.payload.orderDetails }
        case UPDATE_PRODUCT_DETAILS:
            const {
                updatedProductObj = {}
            } = action.payload;
            const updatedProductDetails = state.userOrderDetails?.products?.map((productObj) => {
                if (productObj.id === updatedProductObj.id) {
                    return { ...updatedProductObj };
                }
                return productObj
            })
            return { ...state, userOrderDetails: { ...state.userOrderDetails, products: updatedProductDetails } };
        case SET_EDIT_PRODUCT_DETAILS_MODAL:
            return {...state, editProductDetailsModal: action.payload.toggleStatus}
        default: return { ...state }
    }
}

export default OrderDetailsReducer;