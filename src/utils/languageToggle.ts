import i18n from '../i18n';

/**
 * Toggles the application language between Thai and English
 * @returns {string} The new language code after toggling
 */
export const toggleLanguage = (): string => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);

    // Store the language preference in localStorage for persistence
    localStorage.setItem('i18nextLng', newLang);

    return newLang;
};

/**
 * Gets the current application language
 * @returns {string} The current language code
 */
export const getCurrentLanguage = (): string => {
    return i18n.language;
};

/**
 * Sets the application language directly
 * @param {string} lang - The language code to set ('th' or 'en')
 */
export const setLanguage = (lang: string): void => {
    if (lang === 'th' || lang === 'en') {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
    }
};
