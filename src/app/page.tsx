'use client';

import HomeComponent from '@/components/home';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { remoteLoader } from '@lingui/remote-loader';
import * as plurals from 'make-plural/plurals';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

// import LanguageSelect from '@/components/LanguageSelect';
// import { useLingui } from '@lingui/react';
// import { t } from '@lingui/macro';

const HomePage = () => {
  //   const { i18n } = useLingui();
  const { locale } = useRouter();
//   useEffect(() => {
//     const sessionId = 'asdkasjd';
//     async function load(locale: any) {
//       i18n.loadLocaleData(locale, { plurals: plurals[locale.split('_')[0]] });

//       try {
//         // Load messages from AWS, use q session param to get latest version from cache
//         const resp = await fetch(
//           `https://d3l928w2mi7nub.cloudfront.net/${locale}.json?q=${sessionId}`
//         );
//         const remoteMessages = resp.json();

//         const messages = remoteLoader({
//           messages: remoteMessages,
//           format: 'minimal'
//         });
//         i18n.load(locale, messages);
//       } catch {
//         // Load fallback messages
//         const { messages } = await import(
//           `@lingui/loader!./../../locale/${locale}.json?raw-lingui`
//         );

//         i18n.load(locale, messages);
//       }

//       i18n.activate(locale);
//     }

//     load(locale);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [locale]);
  //  ;

  return (
    <div>
      <I18nProvider i18n={i18n}>
        <HomeComponent />
      </I18nProvider>
    </div>
  );
};

export default HomePage;
