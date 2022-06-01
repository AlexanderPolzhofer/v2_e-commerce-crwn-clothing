import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 15px;
`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
align-items: center;
padding: 10px 15px;

@media screen and (max-width: 800px){
    width: 50px;
}
`;

export const NavLinksContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

@media screen and (max-width: 800px){
    width: 80%;
}
`;

export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`;