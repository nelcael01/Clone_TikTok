import styled from "styled-components";

export const Btt = styled.button`
  width: 100%;
  height: 100%;
  font-size: ${(props)=> props.fontSize != null ? `${props.fontSize}px`: '18px'};
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  background: ${(props)=> props.outlined ? '#fff' : props.theme.colors.primary};
  border: ${(props) => props.outlined ? `1px solid ${props.theme.colors.primary}` : 'none'};
  color: ${(props) => (props.outlined ? props.theme.colors.primary : '#fff')};
  cursor: pointer;
  :hover{
    background: ${(props)=>
      props.outlined ? 'rgba(22,24,35,0.3)' : props.theme.colors.primary 
    }
  }
`;
 