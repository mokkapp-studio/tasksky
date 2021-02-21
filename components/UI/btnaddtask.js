import styled from '@emotion/styled';

export const BtnAddTask = styled.button`
    border: none;
    background: transparent;
    color: #9495AC;
    font-size: 16px;
    margin-bottom: 1em;
    span{
        margin-left: .5em;
    }
    &:hover{
        cursor: pointer;
        color: #707090;
    }
    &:focus {
        outline:0;
        color: #707090;
    }
`;