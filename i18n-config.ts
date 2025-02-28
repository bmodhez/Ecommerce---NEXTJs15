export const i18n = {
  locales: [
    { code: 'en-US', name: 'English', icon: '🇺🇸' },
    { code: 'fr', name: 'Français', icon: '🇫🇷' },
    { code: 'ar', name: 'العربية', icon: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', icon: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', icon: '🇮🇳' },  
    { code: 'gu', name: 'ગુજરાતી', icon: '🇮🇳' }


  ],
  defaultLocale: 'en-US',
}

export const getDirection = (locale: string) => {
  return locale === 'ar' ? 'rtl' : 'ltr'
}
export type I18nConfig = typeof i18n
export type Locale = I18nConfig['locales'][number]
