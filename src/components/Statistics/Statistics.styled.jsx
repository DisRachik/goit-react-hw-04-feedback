import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(3)};
`;

export const StatisticsItem = styled.li`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  > span {
    font-weight: 400;
  }
`;
