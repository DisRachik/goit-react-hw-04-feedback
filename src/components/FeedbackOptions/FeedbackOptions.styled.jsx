import styled from '@emotion/styled';

export const OptionList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(4)};
`;

export const OptionBtn = styled.button`
  min-width: ${props => props.theme.spacing(16)};
  padding: ${props => props.theme.spacing(2)};

  text-transform: capitalize;
  font-size: ${props => props.theme.fontSizes.small};

  background-color: ${props => props.theme.colors.light};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.medium};

  transition: ${props => props.theme.animation('background-color, box-shadow')};

  :hover {
    background-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.regular};
  }
`;
