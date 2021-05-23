import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation('Home');

  return (
    <div>
      {t('app')}
    </div>
  );
}

export default Home;
