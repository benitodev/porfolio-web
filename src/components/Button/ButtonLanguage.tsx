import { useContext, useEffect, useState } from 'react';
import { Button, Container, Option, Select } from './ButtonLanguage.styled';
import { LanguageContext, LanguageState } from '../../context/LanguageContext';

interface TagOptionType {}

const ButtonLanguage = () => {
  const { language, translation, languageCondition, updateLanguage } =
    useContext(LanguageContext);
  const toggleLanguage = language === 'es' ? 'en' : 'es';
  const handleClick = () => {
    updateLanguage(toggleLanguage);
  };
  console.log(language);
  const handleUpdateLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.target.value as LanguageState;
    updateLanguage(newValue);
  };

  //   const toggleLanguage = language === 'en' ? 'es' : 'en';
  return (
    <Select>
      <Option onClick={handleClick}>{language}</Option>
    </Select>
  );
};
export default ButtonLanguage;
