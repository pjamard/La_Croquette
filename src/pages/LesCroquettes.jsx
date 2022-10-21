import React, { useCallback, useEffect, useState } from 'react';
import datas from '../datas/datas.js';
import '../CSS/LesCroquettes.css';
import Filter from '../components/Filter.jsx';
import CardList from '../components/CardList.jsx';
import Card from '../components/Card.jsx';

function LesCroquettes() {
  const age = ['adulte', 'sénior', 'chaton'];
  const flavours = ['poulet', 'poisson', 'dinde'];

  const [checkedAge, setCheckedAge] = useState(
    new Array(age.length).fill(false)
  );
  console.log('checkedAge', checkedAge);

  const [checkedFlavour, setCheckedFlavour] = useState(
    new Array(flavours.length).fill(false)
  );
  console.log('vérif flavour', checkedFlavour);

  let updateDatas = [...datas];
  
  const handleFilter = () => {
    //if none checked
    if (
      !checkedAge[0] &&
      !checkedAge[1] &&
      !checkedAge[2] &&
      !checkedFlavour[0] &&
      !checkedFlavour[1] &&
      !checkedFlavour[2]
    ) {
      console.log(datas);
      return;
    }

    //if all checked
    if (
      checkedAge[0] &&
      checkedAge[1] &&
      checkedAge[2] &&
      checkedFlavour[0] &&
      checkedFlavour[1] &&
      checkedFlavour[2]
    ) {
      console.log(datas);
      return;
    }

    //if checkedAge checked only
    if (checkedAge[0] || checkedAge[1] || checkedAge[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.age === age[0].valueOf() && checkedAge[0]) ||
          (data.age === age[1].valueOf() && checkedAge[1]) ||
          (data.age === age[2].valueOf() && checkedAge[2])
        );
      });
    }

    //if checkedFlavour checked only
    if (checkedFlavour[0] || checkedFlavour[1] || checkedFlavour[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.flavour === flavours[0].valueOf() && checkedFlavour[0]) ||
          (data.flavour === flavours[1].valueOf() && checkedFlavour[1]) ||
          (data.flavour === flavours[2].valueOf() && checkedFlavour[2])
        );
      });
    }

    //if checkedFlavour and checkedAge checked
    if (
      (checkedAge[0] || checkedAge[1] || checkedAge[2]) &&
      (checkedFlavour[0] || checkedFlavour[1] || checkedFlavour[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.age === age[0].valueOf() && checkedAge[0]) ||
            (data.age === age[1].valueOf() && checkedAge[1]) ||
            (data.age === age[2].valueOf() && checkedAge[2])) &&
          ((data.flavour === flavours[0].valueOf() && checkedFlavour[0]) ||
            (data.flavour === flavours[1].valueOf() && checkedFlavour[1]) ||
            (data.flavour === flavours[2].valueOf() && checkedFlavour[2]))
        );
      });
    }

    console.log('solution', updateDatas);
    return updateDatas;
  };

  const handleOnChangeFlavourCheckbox = (position) => {
    const updatedCheckedFlavour = checkedFlavour.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedFlavour(updatedCheckedFlavour);
    handleFilter(updatedCheckedFlavour);
  };

  const handleOnChangeAgeCheckbox = (position) => {
    const updatedCheckedAge = checkedAge.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedAge(updatedCheckedAge);
    handleFilter(updatedCheckedAge);
  };

  console.log(handleFilter());

  return (
    <div className='card-container'>
      <Filter
        age={age}
        checkedAge={checkedAge}
        handleOnChangeAgeCheckbox={handleOnChangeAgeCheckbox}
        flavours={flavours}
        checkedFlavour={checkedFlavour}
        handleOnChangeFlavourCheckbox={handleOnChangeFlavourCheckbox}
      />
      <CardList datas={datas} updateDatas={updateDatas} />
    </div>
  );
}

export default LesCroquettes;
