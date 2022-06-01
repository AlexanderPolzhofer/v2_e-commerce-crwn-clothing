import styled from 'styled-components';

export const DirectoryContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

@media screen and (max-width: 800px){
    height: 200px;
    display: grid;
    grid-template-columns: repeat(2, 1fr)
    grid-gap: 21px;
 }
`;