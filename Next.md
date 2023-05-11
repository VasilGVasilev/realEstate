There is a difference between App Router and Pages Router documentation.

The Pages Router has a file-system based router built on concepts of pages. When a file is added to the pages directory it's automatically available as a route. 

The App Router takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.

By default, components inside app are React Server Components. So, you may be thinking, why Server Components? What are the advantages of using them over Client Components? - With Server Components, the initial page load is faster, and the client-side JavaScript bundle size is reduced. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. 