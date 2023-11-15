/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import OrderPageHeader from "../../components/OrderPageHeader/OrderPageHeader";
import { CommonContainer, CommonFlexContainer, Commonpara } from "../../components/common/StyledComponents";
import { useEffect } from "react";
import orderDetailsMockData from "../../components/data.json";
import OrderDetailsTable from "../../components/OrderDetailsTable";
import { useDispatch, useSelector } from "react-redux";
import { setUserOrderDetails } from "../../redux/actions";

const OrderPage = () => {
    const orderDetailHeadings = [{
        name: 'Supplier',
        fieldName: 'supplier'
    }, {
        name: 'Shipping date',
        fieldName: 'shipping_date'
    }, {
        name: 'Total',
        fieldName: 'total'
    }, {
        name: 'Category',
        fieldName: 'category'
    }, {
        name: 'Department',
        fieldName: 'department'
    }, {
        name: 'Status',
        fieldName: 'status'
    }];

    const dispatch = useDispatch();
    const userOrderDetails = useSelector(state => state.userOrderDetails) || {};

    useEffect(() => {
        const userOrderDetails = JSON.parse(JSON.stringify(orderDetailsMockData));
        dispatch(setUserOrderDetails(userOrderDetails));
    }, [])
    return <CommonContainer>
        <OrderPageHeader />
        <CommonFlexContainer padding="170px 0" maxwidth="1220px" flexdirection="column">
            <CommonFlexContainer gap="30px" padding="20px 30px" borderradius="10px" border="1px solid #b8b8b8">
                {orderDetailHeadings.map((orderDetailsObj, index) =>
                    <BoxWithHeaderAndSubHeading
                        key={`${orderDetailsObj.fieldName}`}
                        heading={orderDetailsObj.name}
                        type={orderDetailsObj.fieldName}
                        subHeading={userOrderDetails[`${orderDetailsObj.fieldName}`]}
                        showBorder={index + 1 < orderDetailHeadings.length}
                    />)}
            </CommonFlexContainer>
            <OrderDetailsTable userOrderDetails={userOrderDetails} />
        </CommonFlexContainer>
    </CommonContainer>
}

const BoxWithHeaderAndSubHeading = (props) => {
    const {
        heading = "",
        subHeading = "",
        showBorder = false,
        type = ""
    } = props;
    return <CommonFlexContainer
        borderright={showBorder ? '1px solid #929292' : ''}
        alignitems="start"
        minheight="70px"
        flexdirection="column"
        gap="10px">
        <Commonpara color="#929292">
            {heading}
        </Commonpara>
        <Commonpara fontsize="18px">
            {subHeading}
        </Commonpara>
        {type === 'category' ? <CommonFlexContainer flexdirection="column">
            <CommonFlexContainer gap="30px" justifycontent="flex-start">
                <i className="fas fa-light fa-blender"></i>
                <i className="fas fa-light fa-mug-hot"></i>
                <i className="fas fa-light fa-seedling"></i>
            </CommonFlexContainer>
            <CommonFlexContainer margin="10px 0 0" gap="30px" justifycontent="flex-start">
                <i className="fas fa-solid fa-cookie-bite"></i>
                <i className="fas fa-light fa-blender"></i>
                <i className="fas fa-solid fa-wine-bottle"></i>
            </CommonFlexContainer>
        </CommonFlexContainer> : ""}
    </CommonFlexContainer>
}

export default OrderPage;