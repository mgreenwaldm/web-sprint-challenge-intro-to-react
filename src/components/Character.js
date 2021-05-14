import React from 'react';
import styled from "styled-components";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div = styled.div`
  background-color: teal;
  color: white;
  padding: 20px;
  margin: 10px 0;
  width: 200px;
  border: 1px solid yellow;
`;

const Character = ({characters}) => {
    return (
        <WrapperDiv>
            {characters.map(c=>{
                return <Div>{c.name} - {c.birth_year}</Div>
            })}
        </WrapperDiv>
    );
}

export default Character;
