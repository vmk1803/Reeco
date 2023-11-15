import styled from "styled-components";
import "./OrderPageHeader.css";
import { CommonButton } from "../common/StyledComponents";

const HeaderFixedContainer = styled.div`
    position: fixed;
    margin-top: 63px;
    width: 100%;
    box-shadow: 0px 0px 10px 2px grey;
    background-color: #FFFFFF
`;

const HeaderContainer = styled.div`
    max-width: 1220px;
    margin: auto;
    padding: 10px
`;

const OrderDetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${(props) => props.gap || "auto"}
`;

const OrderHeading = styled.h3`
    font-size: 20px;
    margin: 25px 0 0;
`;

const OrderPageHeader = () => {
    return <HeaderFixedContainer>
        <HeaderContainer>
            <nav className="order-page-nav">
                <ul className="">
                    <li>Orders</li>
                    <li>
                        <a href="#">Order 32457ABC</a>
                    </li>
                </ul>
            </nav>
            <OrderDetailHeader>
                <OrderHeading>Order 32457ABC</OrderHeading>
                <OrderDetailHeader gap="40px">
                    <CommonButton color="#1e633f">Back</CommonButton>
                    <CommonButton color="#FFFFFF" bgcolor="#1e633f">Approve Order</CommonButton>
                </OrderDetailHeader>
            </OrderDetailHeader>
        </HeaderContainer>
    </HeaderFixedContainer>
}

export default OrderPageHeader;