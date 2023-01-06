import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Wrapper>
      <p>Loading</p>
    </Wrapper>
  );
};
export { Loading };
