import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding: 3.5rem;

  h1 {
    color: ${(props) => props.theme['gray-100']};

    font-size: 1.5rem;
  }
`

export const HistoryList = styled.div`
  flex: 1;

  margin-top: 2rem;

  overflow: auto;

  table {
    width: 100%;
    min-width: 600px;

    border-collapse: collapse;

    th {
      padding: 1rem;

      color: ${(props) => props.theme['gray-100']};
      background: ${(props) => props.theme['gray-600']};

      font-size: 0.875rem;
      text-align: left;
      line-height: 1.6rem;

      &:first-child {
        padding-left: 1.5rem;
        border-top-left-radius: 8px;
      }

      &:last-child {
        padding-right: 1.5rem;
        border-top-right-radius: 8px;
      }
    }

    td {
      padding: 1rem;
      border-top: 4px solid ${(props) => props.theme['gray-800']};

      background: ${(props) => props.theme['gray-700']};

      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};

    content: '';
  }
`
