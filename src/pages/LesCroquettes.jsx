import React, { useState } from 'react';
import datas from '../datas/datas.js';
import '../CSS/LesCroquettes.css';
import Filter from '../components/Filter.jsx';
import CardList from '../components/CardList.jsx';

function LesCroquettes() {
  const age = ['adulte', 'sénior', 'chaton'];
  const flavours = ['poulet', 'poisson', 'dinde'];
  const brands = ['CARNILOVE', 'PURIZON', 'TASTE-OF-WILD'];
  const categories = [
    'sans céréales',
    'chats stérilisés',
    'contrôle du poids',
    'santé urinaire',
  ];

  const [checkedAge, setCheckedAge] = useState(
    new Array(age.length).fill(false)
  );
  console.log('checkedAge', checkedAge);

  const [checkedFlavour, setCheckedFlavour] = useState(
    new Array(flavours.length).fill(false)
  );
  console.log('vérif flavour', checkedFlavour);

  const [checkedBrands, setCheckedBrands] = useState(
    new Array(brands.length).fill(false)
  );
  console.log('verif brands', checkedBrands);

  const [checkedCategories, setCheckedCategories] = useState(
    new Array(categories.length).fill(false)
  );
  console.log('checked Catégories', checkedCategories);

  let updateDatas = [...datas];

  const handleFilter = () => {
    //if none checked
    if (
      !checkedAge[0] &&
      !checkedAge[1] &&
      !checkedAge[2] &&
      !checkedFlavour[0] &&
      !checkedFlavour[1] &&
      !checkedFlavour[2] &&
      !checkedBrands[0] &&
      !checkedBrands[1] &&
      !checkedBrands[2] &&
      !checkedCategories[0] &&
      !checkedCategories[1] &&
      !checkedCategories[2] &&
      !checkedCategories[3]
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
      checkedFlavour[2] &&
      checkedBrands[0] &&
      checkedBrands[1] &&
      checkedBrands[2] &&
      checkedCategories[0] &&
      checkedCategories[1] &&
      checkedCategories[2] &&
      checkedCategories[3]
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

    //if checkedBrands checked only
    if (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) {
      updateDatas = datas.filter((data) => {
        return (
          (data.brand === brands[0].valueOf() && checkedBrands[0]) ||
          (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
          (data.brand === brands[2].valueOf() && checkedBrands[2])
        );
      });
    }

    //if checkedCategories checked only
    if (
      checkedCategories[0] ||
      checkedCategories[1] ||
      checkedCategories[2] ||
      checkedCategories[3]
    ) {
      updateDatas = datas.filter((data) => {
        return (
          (data.cereal && checkedCategories[0]) ||
          (data.sterelised && checkedCategories[1]) ||
          (data.weight && checkedCategories[2]) ||
          (data.urinaryCare && checkedCategories[3])
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

    //if checkedFlavour and checkedBrands checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedFlavour[0] || checkedFlavour[1] || checkedFlavour[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.flavour === flavours[0].valueOf() && checkedFlavour[0]) ||
            (data.flavour === flavours[1].valueOf() && checkedFlavour[1]) ||
            (data.flavour === flavours[2].valueOf() && checkedFlavour[2]))
        );
      });
    }

    //if checkedAge and checkedBrands checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedAge[0] || checkedAge[1] || checkedAge[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
          ((data.age === age[0].valueOf() && checkedAge[0]) ||
            (data.age === age[1].valueOf() && checkedAge[1]) ||
            (data.age === age[2].valueOf() && checkedAge[2]))
        );
      });
    }

    //if checkedAge, checkedBrands and checkedFlavours checked
    if (
      (checkedBrands[0] || checkedBrands[1] || checkedBrands[2]) &&
      (checkedAge[0] || checkedAge[1] || checkedAge[2]) &&
      (checkedFlavour[0] || checkedFlavour[1] || checkedFlavour[2])
    ) {
      updateDatas = datas.filter((data) => {
        return (
          ((data.brand === brands[0].valueOf() && checkedBrands[0]) ||
            (data.brand === brands[1].valueOf() && checkedBrands[1]) ||
            (data.brand === brands[2].valueOf() && checkedBrands[2])) &&
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

  const handleOnChangeBrandsCheckbox = (position) => {
    const updatedCheckedBrands = checkedBrands.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedBrands(updatedCheckedBrands);
    handleFilter(updatedCheckedBrands);
  };

  const handleOnChangeCategoriesCheckbox = (position) => {
    const updatedCheckedCategories = checkedCategories.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedCategories(updatedCheckedCategories);
    handleFilter(updatedCheckedCategories);
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
        brands={brands}
        checkedBrands={checkedBrands}
        handleOnChangeBrandsCheckbox={handleOnChangeBrandsCheckbox}
        categories={categories}
        checkedCategories={checkedCategories}
        handleOnChangeCategoriesCheckbox={handleOnChangeCategoriesCheckbox}
      />
      <CardList updateDatas={updateDatas} />
    </div>
  );
}

export default LesCroquettes;
