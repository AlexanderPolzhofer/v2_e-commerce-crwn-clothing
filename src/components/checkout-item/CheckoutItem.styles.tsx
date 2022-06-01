import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
justify-content: space-between;

@media screen and (max-width: 800px) {
  font-size: 18px;
}
`;

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;

img {
    width: 100%;
    height: 100%;
}
`;

export const BaseSpan = styled.span`
width: 23%;

@media screen and (max-width: 800px) {
  width: 13%;
}
`;

export const Quantity = styled.span`
width: 23%;
display: flex;

@media screen and (max-width: 800px) {
  width: 13%;
}
`;

export const Price = styled.span`
width: 23%;

@media screen and (max-width: 800px) {
  width: 13%;
}
`;

export const Value = styled.span`
margin: 0 10px;

@media screen and (max-width: 800px) {
  width: 13%;
}
`;

export const Arrow = styled.div`
cursor: pointer;

@media screen and (max-width: 800px) {
  width: 13%;
}
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;