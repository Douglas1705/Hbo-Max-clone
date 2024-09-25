import styled from "styled-components";

export const ButtonNav = styled.button `
background-color: ${(props) => props.bgColor || 'blue'};
border: none;
padding: 12px 24px 10px 26px;
font-size: 14px;
font-weight: 700;
line-height: 15px;
color: white;
cursor: pointer;
border-radius: 8px;

&:hover{
    background-color: ${(props) => props.bgColorHover || '#0021b2'};
}
`