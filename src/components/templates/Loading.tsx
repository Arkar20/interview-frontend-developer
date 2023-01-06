import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = () => {
  return (
    <>
      <Wrapper>
        <p>Loading</p>
      </Wrapper>
    </>
  );
};
export { Loading };
