/* eslint-disable react/prop-types */
import styled from "styled-components";
import { CommonButton, CommonFlexContainer, Commonpara } from "./common/StyledComponents"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductDetails } from "../redux/actions";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const OrderSearchBarInput = styled.input`
    border: none;
    height: 100%;
    width: 80%;
    background: transparent;
    cursor: pointer;
    outline: none
`;

const OrderTableHeadColumn = styled.th`
    border: 1px solid #b8b8b8;
    border-radius: 10px 10px 0 0;
    border-left: ${props => props.removeborderleft ? "none" : ""};
    border-right: ${props => props.removeborderright ? "none" : ""};
    width: ${props => props.width || 'auto'};
    text-align: center;
    font-size: 16px;
    color: grey;
    padding: 10px
`;

const OrderTableRow = styled.tr`
    border-bottom: ${props => props.borderBottom ? '1px solid #b8b8b8' : 'none'};
    padding: 10px
`;

const OrderTableColumn = styled.td`
    text-align: center;
    padding: 10px
`;

const ProductStatusContainer = styled.div`
    padding: 5px 10px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    border-radius: 10px;
    width: fit-content;
    margin: auto;
    background-color: ${props => props.bgcolor || ''}
`;

const OrderDetailsTable = () => {
    const productHeadings = [{
        fieldName: 'imageName',
        type: 'image'
    }, {
        name: 'Product name',
        fieldName: 'productName',
        type: 'text',
        width: '30%'
    }, {
        name: 'Brand',
        fieldName: 'brand',
        type: 'text',
        width: '10%'
    }, {
        name: 'Price',
        fieldName: 'price',
        type: 'price',
        width: '15%'
    }, {
        name: 'Quantity',
        fieldName: 'quantity',
        type: 'quantity',
        width: '15%'
    }, {
        name: 'Total',
        fieldName: 'total',
        type: 'total',
        width: '15%'
    }, {
        name: 'Status',
        fieldName: 'status',
        type: 'status',
        width: '20%'
    }, {
        name: '',
        type: 'editOptions',
        fieldName: 'editOptions'
    }]

    const dispatch = useDispatch();
    const userOrderDetails = useSelector(state => state.userOrderDetails) || {};
    const [openMissingProductModal, setMissingProductModal] = useState({
        status: false
    });
    const [selectedProduct, setSelectedProduct] = useState({});
    const handleEditProductDetails = () => { };

    const handleReportProductMissing = (toggleStatus, selectedProduct) => {
        setSelectedProduct(selectedProduct);
        setMissingProductModal({
            status: toggleStatus,
            subHeading: `Is ${selectedProduct.productName} urgent?`
        })
    };

    const handleUpdateOrderDetails = (productDetails) => {
        dispatch(updateProductDetails(productDetails));
    }
    
    const handleUpdateMissingProductStatus = (productDetails) => {
        handleUpdateOrderDetails(productDetails);
        setMissingProductModal({});
        setSelectedProduct({});
    }


    return <CommonFlexContainer flexdirection="column" gap="20px" borderradius="20px" border='1px solid #b8b8b8' padding="20px 30px" margin="20px 0 0">
        <CommonFlexContainer>
            <CommonFlexContainer padding="0 10px" height='40px' margin='0' width="40%" borderradius="20px" border="1px solid #b8b8b8">
                <OrderSearchBarInput placeholder="Search...."></OrderSearchBarInput>
                <img alt="search_icon" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png" width='20' height='auto' />
            </CommonFlexContainer>
            <CommonFlexContainer width="15%" margin='0'>
                <CommonButton color="#1e633f">Add Item</CommonButton>
                <i className="fas fa-solid fa-print" style={{ color: "#1e633f", fontSize: 20 }}></i>
            </CommonFlexContainer>
        </CommonFlexContainer>
        <table style={{ width: "100%", borderCollapse: 'collapse' }}>
            <thead>
                {productHeadings.map((headingObj, index) => <OrderTableHeadColumn width={headingObj.width} removeborderleft={index + 1 != 1 ? "true" : ''} removeborderright={index + 1 !== productHeadings.length ? "true" : ''} key={headingObj.fieldName}>{headingObj.name}</OrderTableHeadColumn>)}
            </thead>
            <tbody>
                {userOrderDetails?.products?.length > 0 ? userOrderDetails.products.map((orderDetailObj, index) => {
                    const itemMeasure = `${orderDetailObj.itemsPerProduct} * ${orderDetailObj.size}LB`;
                    const statusBgColor = orderDetailObj.status === "Approved" ? "#3dca72" : orderDetailObj.status === "Missing" ? "#f66d44" : "#db2114";
                    return <OrderTableRow borderBottom={index + 1 < userOrderDetails?.products?.length} key={`${orderDetailObj.id}_${index}`}>
                        {productHeadings.map((productHeadingObj) => {
                            return <OrderTableColumn style={{ textAlign: 'center' }} key={productHeadingObj.fieldName}>
                                {productHeadingObj.type === 'image' ? <img src={`/${orderDetailObj.imageName}`} width='50' height='50' alt={orderDetailObj[`${productHeadingObj.fieldName}`]} /> : ''}
                                {productHeadingObj.type === 'text' ? <Commonpara color="grey" fontsize="14px">{orderDetailObj[`${productHeadingObj.fieldName}`]}</Commonpara> : ''}
                                {productHeadingObj.type === 'price' ?
                                    <Commonpara color="grey" fontsize="14px">
                                        {orderDetailObj.updatedPrice ?
                                            <>
                                                <span>${orderDetailObj.updatedPrice} / {itemMeasure}</span> <br />
                                                <span>${orderDetailObj.price}</span>
                                            </> :
                                            <span>
                                                ${orderDetailObj.price} / {itemMeasure}
                                            </span>}
                                    </Commonpara> : ""}
                                {productHeadingObj.type === 'quantity' ? <Commonpara color="grey" fontsize="14px">
                                    {orderDetailObj.updatedQuantity ?
                                        <>
                                            <span>{orderDetailObj.updatedQuantity} x {itemMeasure}</span> <br />
                                            <span>{orderDetailObj.quantity}</span>
                                        </> :
                                        <span>
                                            {orderDetailObj.quantity} x {itemMeasure}
                                        </span>}
                                </Commonpara> : ""}
                                {productHeadingObj.type === 'total' ? <Commonpara color="grey" fontsize="14px">
                                    {orderDetailObj.updatedPrice || orderDetailObj.updatedQuantity ?
                                        <>
                                            <span>${orderDetailObj.updatedPrice || orderDetailObj.price * orderDetailObj.updatedQuantity || orderDetailObj.quantity}</span> <br />
                                            <span>${orderDetailObj.price * orderDetailObj.quantity}</span>
                                        </> :
                                        <span>
                                            ${orderDetailObj.price * orderDetailObj.quantity}
                                        </span>}
                                </Commonpara> : ""}
                                {productHeadingObj.type === 'status' && orderDetailObj.status ? <ProductStatusContainer bgcolor={statusBgColor}>{orderDetailObj.status}</ProductStatusContainer> : ""}
                                {productHeadingObj.type === 'editOptions' ? <CommonFlexContainer gap="10px">
                                    <i onClick={() => handleUpdateOrderDetails({ ...orderDetailObj, status: 'Approved' })} className="fas fa-solid fa-check" style={{ cursor: "pointer" }}></i>
                                    <Commonpara onClick={() => handleReportProductMissing(true, orderDetailObj)} cursor="pointer">x</Commonpara>
                                    <Commonpara onClick={handleEditProductDetails} cursor="pointer" fontsize="14px">Edit</Commonpara>
                                </CommonFlexContainer> : ""}
                            </OrderTableColumn>
                        })}
                    </OrderTableRow>
                }) : ''}
            </tbody>
        </table>
        {openMissingProductModal.status && <Modal isOpen={true} centered={true}>
            <ModalHeader toggle={() => setMissingProductModal(false)}>
                Missing Product
            </ModalHeader>
            <ModalBody>
                <Commonpara color="grey" fontsize="14px">{openMissingProductModal.subHeading}</Commonpara>
                <CommonFlexContainer margin="20px 0 0" gap="20px" justifycontent="flex-end">
                    <Commonpara onClick={() => handleUpdateMissingProductStatus({ ...selectedProduct, status: 'Missing' })} cursor="pointer">No</Commonpara>
                    <Commonpara onClick={() => handleUpdateMissingProductStatus({ ...selectedProduct, status: 'Missing - Urgent' })} cursor="pointer">Yes</Commonpara>
                </CommonFlexContainer>
            </ModalBody>
        </Modal>}
    </CommonFlexContainer>
}

export default OrderDetailsTable;