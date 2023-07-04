![next-intl](https://next-intl-docs.vercel.app/docs/getting-started/app-router-client-components)

1) locale
the internationalization takes advantage of next.js' dynamic folder setting as a route:

```sh
app/[locale]/contacts
```

this locale will be the language version

2) middleware.js

we set the locales and the default one and configurate the middleware to crawl over folders that are routes only (since next.js utilizes folder structure as route structure)
NB. Next.js will automatically detect which locale the user prefers based on the **Accept-Language** header sent in the page request. *In an example case, although the default locale is sq, the en locale is detected in the **Accept-Language** header so you get redirected to the locale-prefixed path.*

3) messages/en.json

set the dictionaries

4) RootLayout

inject the RootLayout with the context provider 
NB -> dictionaries stored as .json files must be implemented via the async/await syntax

5) Page

inject the specific page you want utilizing the useTranslations hook