import React from 'react';
import { useTranslation } from 'react-i18next';
import 'styles/index.scss';

function App() {
  const { t } = useTranslation('App');

  return (
    <div>
      {t('app')}
    </div>
  );
}

export default App;
