import styled from "styled-components";

const Navbar = () => {

    const FixedContainer = styled.div`
        position: fixed;
        width: 100%;
        background-color: #1e633f;
    `;

    const NavContainer = styled.div`
        padding: 18px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1220px;
        margin: auto
    `;

    const NavElement = styled.p`
        font-weight: 500;
        font-size: 18px;
        color: white;
        cursor: pointer;
        margin: 0
    `
    const NavElementsContainer = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    `

    return <FixedContainer>
        <NavContainer>
            <NavElementsContainer>
                <img alt="reeco-logo" src="https://reeco.io/assets/logo.44b75468.svg" width="80" height="auto" />
                <NavElement>Store</NavElement>
                <NavElement>Orders</NavElement>
                <NavElement>Analytics</NavElement>
            </NavElementsContainer>
            <NavElementsContainer>
                <NavElement>
                    <i className="fas fa-solid fa-cart-arrow-down"></i>
                </NavElement>
                <NavElement>Hello, James <i className="fas fa-solid fa-angle-down"></i></NavElement>
            </NavElementsContainer>
        </NavContainer>
    </FixedContainer>
}

export default Navbar;