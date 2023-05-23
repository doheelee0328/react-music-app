import styled from 'styled-components'
import { theme } from '../../theme/theme'

export const Container = styled.ul`
  display: flex;
  justify-content: end;
  font-size: 30px;
  list-style-type: none;
  gap: 10px;
  font-size: 20px;
  margin-top: 60px;
  margin-right: 20px;
  margin-bottom: 80px;
  color: ${theme.color.black};
`
export const List = styled.li`
  a {
    text-decoration: none;
    color: ${theme.color.black};
    transition: 0.3s ease-in-out;
    position: relative;
    margin: 1px;
    cursor: pointer;
    font-size: 20px;
  }

  a::after {
    content: '';
    position: absolute;

    height: 2px;
    width: 100%;
    left: 0;
    bottom: -10px;
    transform: scaleX(0);
    transform-origin: center;
    opacity: 1;
    transition: transform 0.3s ease;
  }

  a:hover {
    color: ${theme.color.pink};
  }

  a:hover::after {
    transform: scaleX(1);
    background-color: ${theme.color.pink};
  }
`
