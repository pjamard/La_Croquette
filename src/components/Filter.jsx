import React from 'react';
import Checkbox from './Checkbox';
import '../CSS/Filter.css';

function Filter(props) {
  const {
    age,
    checkedAge,
    handleOnChangeAgeCheckbox,
    flavours,
    checkedFlavour,
    handleOnChangeFlavourCheckbox,
    brands,
    checkedBrands,
    handleOnChangeBrandsCheckbox,
    categories,
    checkedCategories,
    handleOnChangeCategoriesCheckbox,
  } = props;

  return (
    <div className='Filter'>
      {' '}
      <h1>Filtrer</h1>
      {/* Age checkbox */}
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
      {/* Flavours checkbox */}
      {flavours.map((name, index) => {
        return (
          <ul>
            <li key={index}>
              <div className='flavours-list-item'>
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
      {/* Brands checkbox */}
      {brands.map((name, index) => {
        return (
          <ul>
            <li key={index}>
              <div className='brands-list-item'>
                <div>
                  <Checkbox
                    value={name.toLowerCase()}
                    handleChange={() => handleOnChangeBrandsCheckbox(index)}
                    checked={checkedBrands[index]}
                  />
                </div>
              </div>
            </li>
          </ul>
        );
      })}

      {/* Categories checkbox */}
      {categories.map((name, index) => {
        return (
          <ul>
            <li key={index}>
              <div className='categories-list-item'>
                <div>
                  <Checkbox
                    value={name}
                    handleChange={() => handleOnChangeCategoriesCheckbox(index)}
                    checked={checkedCategories[index]}
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
