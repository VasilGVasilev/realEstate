### React Essentials

**Client and Server Components**
Pages Router adheres to the client components parasigm, while the new App Router does to the server components convention, but you can enable client component by adding the 'use client' directive at the top of the component.

1. Server-side default for App Router

Thus, default is the any data fetching will be done on the server, the *fetched* data is used to render the component STILL on the server and then that *rendered* verison of the page is sent to the browser.

2. Client-side

UseEffect is a hook for the client side and next.js will put out an error if special 'use client' directive does not designate that the component is client side.

3. Current project use

If you want to you Next.js as a framework for client side rendering of components, you better make static site generation and also set the directive for all data fetching, therefore, ensuring that there is no JS that need to be run on server, but also that in development, there are no errors for using client component hooks in server components

4. Old Pages Router way

Before next.js v13, next was client component centered and data fetching was done via special functions - getServerSideProps, getStaticPaths, getStaticProps

**By default, components inside app are React Server Components. So, you may be thinking, why Server Components?** 

With Server Components, the initial page load is faster, and the client-side JavaScript bundle size is reduced. The base client-side runtime is cacheable and predictable in size, and does not increase as your application grows. Also, the majority of components are non-interactive and can be rendered on the server as Server Components

How it all runs?

When a route is loaded with Next.js, the initial HTML is rendered on the server. This HTML is then progressively enhanced in the browser, allowing the client to take over the application and add interactivity, by asynchronously loading the Next.js and React client-side runtime. (Previously, done with hydration)

**There is a difference between App Router and Pages Router documentation.**

The *Pages Router* has a file-system based router built on concepts of pages. When a file is added to the pages directory, it's automatically available as a route. 

The *App Router* takes priority over the Pages Router. Routes across directories should not resolve to the same URL path and will cause a build-time error to prevent a conflict.

Unlike the *pages* directory which uses client-side routing, the *App Router* uses server-centric routing to align with Server Components and data fetching on the server. With server-centric routing, the client does not have to download a route map and the same request for Server Components can be used to look up routes.

**Static Site Genertion**

We generate a static site - an output of HTML, JavaScript and CSS, by changing the next.config. Those static sites are generated at build time (compile time, packing, etc) and still can have srcipts for fetching for example but very little hydration happens in comparison to SSR. 
This phase that is prior to hydration is also known as pre-rendering.


### Building your app

Special files:
- layout.js
- template.js
- error.js (React error boundary)
- loading.js (React suspense boundary)
- not-found.js (React error boundary)
- page.js or nested layout.js

Colocating files - your own ones -> components, tests, module.css

### Routing
Inside the app directory, **folders** are used to define routes. Each folder represents a route segment that maps to a URL segment. 
A special **page.js** file is used to make route segments publicly accessible.
Thus, **folder** without **page.js** could be used for storing of colocated files.

### Rendering

### Data Fetching
