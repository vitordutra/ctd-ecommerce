import styled from 'styled-components';
import { 
  FaAngleLeft as FaAngleLeftIcon, 
  FaAngleRight as FaAngleRightIcon 
} from 'react-icons/fa';
import selectIcon from '../../assets/icons/select.png';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 20px 30px;
  margin: 30px 0;
  box-shadow: 0 1px 1px rgb(0 0 0 / 30%);
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #898e90;

`;

const Filter = styled.div`
  select {
      margin: 0 5px;
      padding: 8px 50px 8px 8px;
      display: inline-block;
      border: none;
      outline: none;
      appearance: none;
      background: #e9e9e9 url(${selectIcon}) right center no-repeat;
    }
`;

const Pagination = styled.div`
  a, span {
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 2;
    border-radius: 3px;
    display: inline-block;
    background-color: #e9e9e9;
    color: #898e90;
    font-weight: 300;

    &.current {
      background-color: #45b77d;
      color: #ffffff;
    }
  }
`;

export function FilterBar() {
  return (
    <Wrapper>
       <Filter>
        <span>
          <label>Sort by:</label>
          <select name="#">
            <option value="#">Popularity</option>
            <option value="#">Highest Rating</option>
            <option value="#">Lowest price</option>
          </select>
        </span>
        <span>
          <label>Genre</label>
          <select name="#">
            <option value="#">Show All</option>
            <option value="#">Action</option>
            <option value="#">Racing</option>
            <option value="#">Strategy</option>
          </select>
        </span>
        <span>
          <label>Show:</label>
          <select name="#">
            <option value="#">8</option>
            <option value="#">16</option>
            <option value="#">24</option>
          </select>
        </span>
      </Filter> 
      <Pagination>
        <a href="/">
          <FaAngleLeftIcon />
        </a>
        <span className='current'>1</span>
        <a href="/">2</a>
        <a href="/">3</a>
        <a href="/">...</a>
        <a href="/">12</a>
        <a href="/">
          <FaAngleRightIcon />
        </a>
      </Pagination> 
    </Wrapper>
  )
}