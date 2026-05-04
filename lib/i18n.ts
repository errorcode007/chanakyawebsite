import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'

// English translations bundled inline as fallback (no flash on first load)
import commonEn from '../public/locales/en/common.json'
import homeEn from '../public/locales/en/home.json'
import aboutEn from '../public/locales/en/about.json'
import practiceAreasEn from '../public/locales/en/practice-areas.json'
import teamEn from '../public/locales/en/team.json'
import contactEn from '../public/locales/en/contact.json'
import blogEn from '../public/locales/en/blog.json'
import disclaimerEn from '../public/locales/en/disclaimer.json'
import testimonialsEn from '../public/locales/en/testimonials.json'

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'hi', 'ur', 'bn', 'mr'],
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'practice-areas', 'team', 'contact', 'blog', 'disclaimer', 'testimonials'],

    // Bundle English inline to prevent flash
    resources: {
      en: {
        common: commonEn,
        home: homeEn,
        about: aboutEn,
        'practice-areas': practiceAreasEn,
        team: teamEn,
        contact: contactEn,
        blog: blogEn,
        disclaimer: disclaimerEn,
        testimonials: testimonialsEn,
      },
    },

    // Load other languages via HTTP
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'chanakya-lang',
      caches: ['localStorage'],
    },

    react: {
      useSuspense: false,
    },

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
