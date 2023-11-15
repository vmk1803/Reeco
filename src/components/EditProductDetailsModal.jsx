/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { setEditProductDetailsModal } from '../redux/actions';
import { CommonContainer, CommonFlexContainer, Commonpara } from './common/StyledComponents';
import styled from 'styled-components';

const EditProductInput = styled.input`
    width: 80px;
    height: 40px;
    border: 1px solid #b8b8b8;
    border-radius: 10px
`;

const EditProductDetailsModal = (props) => {
    const {
        selectedProduct = {}
    } = props;
    const dispatch = useDispatch();

    return <Modal isOpen={true}>
        <ModalHeader toggle={() => dispatch(setEditProductDetailsModal(false))}>
            {selectedProduct.productName}
        </ModalHeader>
        <ModalBody>
            <CommonFlexContainer>
                <img />
                <CommonFlexContainer>
                    <Commonpara>Price ($)</Commonpara>
                    <Commonpara>Quantity</Commonpara>
                    <Commonpara>Total</Commonpara>
                </CommonFlexContainer>
                <CommonFlexContainer>
                    <CommonContainer>
                        <EditProductInput></EditProductInput>
                    </CommonContainer>
                </CommonFlexContainer>
            </CommonFlexContainer>
        </ModalBody>
    </Modal>
}

export default EditProductDetailsModal;