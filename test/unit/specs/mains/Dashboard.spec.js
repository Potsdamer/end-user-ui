import Vue from 'vue';
import Dashboard from '@/components/mains/Dashboard';
import VueI18n from 'vue-i18n';
import BootstrapVue from 'bootstrap-vue';
import translations from '@/translations';
import { shallow } from '@vue/test-utils';

describe('Dashboard.vue', () => {
    Vue.use(VueI18n);
    Vue.use(BootstrapVue);

    const i18n = new VueI18n({
        locale: 'en',
        messages: translations
    });

    it('Dashboard page loaded', () => {
        let userStore = {
            getUserState () {
                return {};
            }
        };
        const wrapper = shallow(Dashboard, {
            i18n,
            mocks: {
                userStore
            }
        });

        expect(wrapper.name()).to.equal('Dashboard');
    });
});
