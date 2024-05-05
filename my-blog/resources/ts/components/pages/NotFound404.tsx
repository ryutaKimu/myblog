import React, { FC, memo } from "react";
import styled from "styled-components";

export const NotFound404: FC = memo(() => {
  return (
    <Container>
      <Content>
        <Title>404 Not Found</Title>
        <Description>お探しのページは存在していません。</Description>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
`;


