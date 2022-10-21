import React from 'react';
import Checkbox from './Checkbox';
import datas from '../datas/datas.js';
import '../CSS/Filter.css';

function Filter(props) {
  const {
    age,
    checkedAge,
    handleOnChangeAgeCheckbox,
    flavours,
    checkedFlavour,
    handleOnChangeFlavourCheckbox,
  } = props;

  return (
    <div className='Filter'>
      {' '}
      <h1>Filtrer</h1>
      {age.map((name, index) => {
        return (
          <ul>
            <li key={index}>
              <div className='age-list-item'>
                <div>
                  <Checkbox
                    value={name}
                    handleChange={() => handleOnChangeAgeCheckbox(index)}
                    checked={checkedAge[index]}
                  />
                  {/* <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedAge[index]}
                    onChange={() => handleOnChangeAgeCheckbox(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label> */}
                </div>
              </div>
            </li>
          </ul>
        );
      })}
      {flavours.map((name, index) => {
        return (
          <ul>
            <li key={index}>
              <div className='age-list-item'>
                <div>
                  <Checkbox
                    value={name}
                    handleChange={() => handleOnChangeFlavourCheckbox(index)}
                    checked={checkedFlavour[index]}
                  />
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Filter;
