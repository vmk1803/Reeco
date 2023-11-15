import styled from "styled-components"

export const CommonContainer = styled.div`
    padding: ${(props) => props.padding || 0};
    max-width: ${(props) => props.maxwidth || 'none'};
    margin: ${props => props.margin || 'auto'};
    border: ${props => props.border || 'none'};
    width: ${props => props.width || '100%'};
    box-sizing: border-box;
`;

export const CommonFlexContainer = styled.div`
    display: flex;
    flex-direction: ${(props) => props.flexdirection || 'row'};
    justify-content: ${(props) => props.justifycontent || 'space-between'};
    align-items: ${(props) => props.alignitems || 'center'};
    padding: ${(props) => props.padding || '0'};
    width: ${(props) => props.width || '100%'};
    gap: ${(props) => props.gap || 0};
    margin: ${props => props.margin || 'auto'};
    border: ${props => props.border || 'none'};
    max-width: ${props => props.maxwidth || 'none'};
    border-radius: ${props => props.borderradius || '0'};
    height: ${props => props.height || '100%'};
    border-right: ${props => props.borderright || ''};
    box-sizing: border-box;
    min-height: ${props => props.minheight || '100%'}
`;

export const Commonpara = styled.p`
    font-size: ${(props) => props.fontsize || '16px'};
    color: ${props => props.color || 'black'};
    font-weight: ${props => props.fontweight || 'bold'};
    margin: ${props => props.margin || 0};
    cursor: ${props => props.cursor || 'auto'}
`;

export const CommonButton = styled.button`
    outline: none;
    border: 1px solid #1e633f;
    border-radius: 20px;
    background: ${(props) => props?.bgcolor || "transparent"};
    padding: 5px 20px;
    color: ${(props) => props.color};
    font-weight: 600;
    cursor: pointer
`;