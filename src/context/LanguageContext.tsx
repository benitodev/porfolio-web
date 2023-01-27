import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { fetchTranslations } from '../utility/fetchTranslations';

export interface Translation {
  Home: {
    HomeTitle: {
      Hello: string;
      Im: string;
      AboutMe: string;
    };
    Presentation: {
      ContactButton: string;
      ResumeButton: string;
    };
    Scroll: string;
  };
  Projects: {
    ProjectTitle: {
      PreTitle: string;
      Title: string;
    };
  };
  Skills: {
    SkillsTitle: {
      PreTitle: string;
      Title: string;
    };
  };
  Contact: {
    ContactTitle: {
      PreTitle: string;
      Title: string;
    };
    ContactForm: {
      ButtonSend: string;
      NameLabel: string;
      MessageLabel: string;
    };
  };
  Footer: {
    DesignedBy: string;
  };
  Navbar: {
    Hamburger: {
      Home: string;
      Projects: string;
      Skills: string;
      Contact: string;
    };
  };
}

export type LanguageState = 'en' | 'es';

export interface State {
  language: LanguageState;
  translation: Translation;
}

interface LanguageContextValues {
  language: LanguageState;
  translation: State['translation'];
  // setLanguage: Dispatch<SetStateAction<State>>;
  languageCondition: boolean;
  updateLanguage: (newLanguage: LanguageState) => {};
}

interface LanguageProviderTypes {
  children: React.ReactNode;
}

export const LanguageContext = createContext<LanguageContextValues>(
  {} as LanguageContextValues
);

export const LanguageProvider = ({ children }: LanguageProviderTypes) => {
  const initialStringsLoaded = useRef(false);
  const [{ language, translation }, setLanguage] = useState<State>({
    language: 'es',
    translation: {} as Translation,
  });
  const languageCondition = language !== 'es';

  const updateLanguage = useCallback(
    async (newLanguage: LanguageState) => {
      if (initialStringsLoaded.current && newLanguage === language) return;
      const newStrings = await fetchTranslations({ language: newLanguage });
      initialStringsLoaded.current = true;
      setLanguage({
        language: newLanguage,
        translation: newStrings,
      });
    },
    [language, fetchTranslations]
  );

  useEffect(() => {
    updateLanguage(language);
  }, [language, updateLanguage]);

  return (
    <LanguageContext.Provider
      value={{ language, translation, languageCondition, updateLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
