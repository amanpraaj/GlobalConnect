import HEADER_TITLE from '@salesforce/label/c.HeaderTitle';
import WELCOME_MESSAGE from '@salesforce/label/c.WelcomeMessage';
import SELECT_LANGUAGE from '@salesforce/label/c.SelectLanguage';
import LANG_EN from '@salesforce/label/c.LanguageEnglish';
import LOGOUT_LABEL from '@salesforce/label/c.Logout';
import LOGIN_LABEL from '@salesforce/label/c.Login';
import LANG_ES from '@salesforce/label/c.LanguageSpanish';
import LANG_FR from '@salesforce/label/c.LanguageFrench';
import LANG_DE from '@salesforce/label/c.LanguageGerman';
import WELCOME_GREET from '@salesforce/label/c.WelcomeGreet';
import SEARCH_USER from '@salesforce/label/c.SearchUser';

export const commonLabels = {
    headerTitle: HEADER_TITLE,
    welcomeMessage: WELCOME_MESSAGE,
    selectLanguage: SELECT_LANGUAGE,
    logoutLabel: LOGOUT_LABEL,
    loginLabel: LOGIN_LABEL,
    welcomeGreet: WELCOME_GREET,
    searchUser: SEARCH_USER,
    languages: [
        { label: LANG_EN, value: 'en' },
        { label: LANG_ES, value: 'es' },
        { label: LANG_FR, value: 'fr' },
        { label: LANG_DE, value: 'de' }
    ]
};