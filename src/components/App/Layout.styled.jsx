import styled from '@emotion/styled';

export const Layout = styled.section`
  width: ${props => props.theme.spacing(80)};
  margin: ${props => props.theme.spacing(5)} auto;
  padding: ${props => props.theme.spacing(5)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.spacing(5)};

  background: ${props => props.theme.colors.mainBackground};
`;
