With Next.js the default approach is dependant on the the final result, we want a static or a full-stack app. If static, we make a ssg. SSG is pre-rendered code so that the only requests are to the hosting server and the return is HTML. You may enable client side rendering (the defualt is server side which most importantly is not in conflict with haveing SSG, namely, build time not run time app). However, this client side rendering is not the best option if fetching is aimed, it is okay for state. The whole idea behind Next.js in its recent development is to enable Server Components, thus, Server Side Rendering, which pre-renders everyhting on a running server and the fetches from browser client to that server recieve a similar end effect as if the app was SSG, thus, build time.

# Client-Side Rendering

    This is the usual kind of data fetching using useEffect hooks; data is mainly fetched by API calls on the client side. The client will receive this code, execute the request and build the page.
    client-side rendering is great for logged-in experiences and single-page applications. Client-side rendering is the way to go if we need to authenticate a user on every interaction.

# Server-Side Rendering

    Server-side rendering is ideal for creating pages with fast loading speed. It is also beneficial for page SEO. In server-side rendering, the server generates HTML and sends the entire page in the response to the client request. 
    Server-side rendering is performed on the server so that all work is completed before the site is delivered to the browser.

# Static Site Generation

    Static site generation can be very useful if a website does not rely on any external data and only serves static pages that rarely change. SSG describes the process of building websites that render at build time. The output is an HTML file, assets such as JavaScript and CSS, and a few other static files.

    The page is pre-rendered at build-time when using SSG with Next.js. That is, the user will not have to wait for the page to load in the browser; instead, the page will be rendered immediately. When the browser receives the page, it’s usually a simple HTML without a lot of content.

    This then loads the scripts to pull the content into the page, a process also known as hydration. Allowing us to serve the entire content on the first load. The scripts can still hydrate the page during this process, but ideally with fewer changes or no changes at all.