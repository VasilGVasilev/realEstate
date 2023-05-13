What does Next.js offer in comporison to React?
- Rendering flexibility between client side and server side rendering, the latter providing immediate display via pre-rendering, thus, better SEO 
- File-based routing system
- possible fullstack app via route.js
- code-splitting is automatic -> Loading.js, not all the lazy import, <Supsense /> in traditional React

Data Fetching:
1. Server Side Renedering (SSR)

```sh
async function Page({params}) {
    const res = await fetch(URL,
    {cache: 'no-store'}
    )
    const data = await res.json()
    return()
}
```

2. Static Side Generation (SSG) - default with cache

```sh
async function Page({params}) {
    const res = await fetch(URL)
    const data = await res.json()
    return()
}
```
3. Incremental Static generation (ISC)