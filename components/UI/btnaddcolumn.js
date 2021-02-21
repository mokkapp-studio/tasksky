import styled from '@emotion/styled';

export const BtnAddColumn = styled.button`
    border: none;
    background: #9a9bb1;    
    position: fixed;
    bottom: 1em;
    color: white;
    padding: .7em;
    border-radius: 50%;
    display: flex;
    align-items: center;    
    font-size: 20px;
    box-shadow: 0px 6px 13px 0px #0000002b;

    &:hover{
        cursor: pointer;
        background: #707090;
    }
    &:focus {
        outline:0;
        background: #707090;
    }
`;