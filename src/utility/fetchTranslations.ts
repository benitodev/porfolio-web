import { LanguageState } from '../context/LanguageContext';

type LanguageType = {
  language: LanguageState;
};

export const fetchTranslations = ({ language = 'es' }: LanguageType) =>
  import(`../data/Languages/${language}.ts`).then((module) => module.default);
