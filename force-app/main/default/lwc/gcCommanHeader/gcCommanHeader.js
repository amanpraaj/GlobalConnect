import { LightningElement, track, wire } from 'lwc';
import { commonLabels } from 'c/labels';
import USER_ID from '@salesforce/user/Id';
import IS_GUEST from '@salesforce/user/isGuest';
import { getRecord } from 'lightning/uiRecordApi';
import { getContent } from 'experience/cmsDeliveryApi';
import siteId from '@salesforce/site/Id';

const USER_FIELDS = [
    'User.Name',
    'User.Email',
    'User.SmallPhotoUrl',
];

const LOGO_CONTENT_ID = 'MCZIJJ662VIJFUJJNJ6LMBIOJ3NM';

export default class GcCommanHeader extends LightningElement {
	labels = commonLabels;

	@track isLoggedIn = false;
	@track isGuest = true;
    @track logoUrl = '';
	@track userName = '';
	@track userAvatar = '';
	@track selectedLanguage = 'en';
		@track languageOptions = commonLabels.languages;

    @wire(getRecord, { recordId: USER_ID, fields: USER_FIELDS })
    wiredUser({ error, data }) {
        if (data) {
            this.isLoggedIn = true;
            this.isGuest = false;
            this.userName = data.fields.Name.value;
            this.userAvatar = data.fields.SmallPhotoUrl.value;
            return;
        }

        if (error) {
            console.error('Failed to load community user details', error);
        }
    }

    @wire(getContent, {
        channelOrSiteId: siteId,
        contentKeyOrId: LOGO_CONTENT_ID
    })
    wiredContent({ data, error }) {
        if (data) {
            console.log('Logo CMS data:', data);
            
            this.logoUrl = data?.contentBody?.['sfdc_cms:media']?.url || '';
            return;
        }

        if (error) {
            console.error('Logo CMS error:', error);
        }
    }

	handleLogin() {
		window.location.assign('/login');
	}

	handleLogout() {
		window.location.assign('/secur/logout.jsp');
	}

	handleLanguageChange(event) {
		this.selectedLanguage = event.detail.value;
	}
}