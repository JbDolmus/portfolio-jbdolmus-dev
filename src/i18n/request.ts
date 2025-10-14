import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {

    let locale: Locale =
        requestLocale && routing.locales.includes(await requestLocale as Locale)
            ? (await requestLocale as Locale)
            : routing.defaultLocale as Locale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});