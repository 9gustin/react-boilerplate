import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// eslint-disable-next-line import/prefer-default-export
export const lngs = {
  SPANISH: 'es',
  ENGLISH: 'en',
};

const defaultLanguage = lngs.ENGLISH;

i18n.use(initReactI18next).init({
  fallbackLng: defaultLanguage,
  react: {
    useSuspense: false,
  },
});

// eslint-disable-next-line no-undef
function requireAll(requireContext: __WebpackModuleApi.RequireContext): void {
  requireContext.keys().map(requireContext);
}

requireAll(require.context('..', true, /i18n.(js|ts)$/));
