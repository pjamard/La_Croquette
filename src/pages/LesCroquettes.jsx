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

  const handle = () => {
    let updateDatas = [...datas];

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
          (data.age === 'adulte' && checkedAge[0]) ||
          (data.age === 'sénior' && checkedAge[1]) ||
          (data.age === 'chaton' && checkedAge[2])
        );
      });
    }

    //if checkedFlavour checked only
    if (checkedFlavour[0] || checkedFlavour[1] || checkedFlavour[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.flavour === 'poulet' && checkedFlavour[0]) ||
          (data.flavour === 'poisson' && checkedFlavour[1]) ||
          (data.flavour === 'dinde' && checkedFlavour[2])
        );
      });
    }

    if (
      (checkedAge[0] || checkedAge[1] || checkedAge[2]) &&
      (checkedFlavour[0] || checkedFlavour[1] || checkedFlavour[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.age === 'adulte' && checkedAge[0]) ||
            (data.age === 'sénior' && checkedAge[1]) ||
            (data.age === 'chaton' && checkedAge[2])) &&
          ((data.flavour === 'poulet' && checkedFlavour[0]) ||
            (data.flavour === 'poisson' && checkedFlavour[1]) ||
            (data.flavour === 'dinde' && checkedFlavour[2]))
        );
      });
    }

    // updateDatas = datas.filter((data) => {
    //   if (checkedFlavour) {
    //     return (
    //       (data.flavour === 'poulet' && checkedFlavour[0]) ||
    //       (data.flavour === 'poisson' && checkedFlavour[1]) ||
    //       (data.flavour === 'dinde' && checkedFlavour[2])
    //     );
    //   } else if (!checkedFlavour && checkedAge) {
    //     return (
    //       (data.age === 'adulte' && checkedAge[0]) ||
    //       (data.age === 'sénior' && checkedAge[1]) ||
    //       (data.age === 'chaton' && checkedAge[2])
    //     );
    //   } else if (checkedAge && checkedFlavour) {
    //     return (
    //       ((data.age === 'adulte' && checkedAge[0]) ||
    //         (data.age === 'sénior' && checkedAge[1]) ||
    //         (data.age === 'chaton' && checkedAge[2])) &&
    //       ((data.flavour === 'poulet' && checkedFlavour[0]) ||
    //         (data.flavour === 'poisson' && checkedFlavour[1]) ||
    //         (data.flavour === 'dinde' && checkedFlavour[2]))
    //     );
    //   }
    // });
    console.log('solution', updateDatas);
  };

  const handleOnChangeFlavourCheckbox = (position) => {
    const updatedCheckedFlavour = checkedFlavour.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedFlavour(updatedCheckedFlavour);
    handle(updatedCheckedFlavour);
  };

  const handleOnChangeAgeCheckbox = (position) => {
    const updatedCheckedAge = checkedAge.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedAge(updatedCheckedAge);
    handle(updatedCheckedAge);
  };

  console.log(handle())

  return (
    <div className='card-container'>
      <Filter
        age={age}
        checkedAge={checkedAge}
        handleOnChangeAgeCheckbox={handleOnChangeAgeCheckbox}
        flavours={flavours}
        checkedFlavour={checkedFlavour}
        handleOnChangeFlavourCheckbox={handleOnChangeFlavourCheckbox}
        handle={handle}
      />
      <CardList datas={datas} />
    </div>
  );
}

export default LesCroquettes;
