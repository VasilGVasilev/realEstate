# Website is mainly nice UI with a few requests to DB on two pages

## Building approach:
- Chose create-react-app since the app will be Front-end disply of available apartments with no CRUD operations on the DB apart from GET requests.
- Decide on a CSS superset Tailwind or SASS based mainly on the instruments' capability to deliver seamless mobile resposniveness, but also useMap for mapping pictures to relevant routes.
- Hosting will most likely be Hostinger
- DB will also most likely be Hostinger depending on how well it connects with the website for GET requests, thus, no separate admin page for CRUD of DB.

## Main Problems:
1. Choose a CSS superset.
 - Mobile responsiveness
 - Mapping pictures
2. Make website translatable

## Website specific implementations:

- translate3d()
- zoom on hover
- integrate images, youtube videos and maps
- no search in app, heavy to implement
- navbar becomes sticky on scrolling down the page
- a few nice pictures that we have to change with custom ones done by our UX designer
- lazy loading on some of the pictures

## Tasks:
1. Do the easiest pages: Контакти, Галерия, Инвеститор, За комплекса, Начало