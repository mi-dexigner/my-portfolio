- npx create-react-app portfolio
- cd portfolio
- npm start
- sanity login
- sanity init
  - create a project `studio`
  - use the default dataset configuration `Y`
  - `blog` (schema)
- cd studio
- sanity start
- cd portfolio
- https://www.sanity.io/docs/js-client
- npm install @sanity/client
-  create a `client.js` file
```sh
import sanityClient from '@sanity/client'
export  default sanityClient({
  projectId: 'o21v7dzg',
  dataset: 'production',
  useCdn: true // `false` if you want to ensure fresh data
})
```
- then create a repositery on github
- https://tailwindcss.com/
- @import url("https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css");
- @import url("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css");
- @import url('https://fonts.googleapis.com/css2?family=Amatic+SC:wght@700&display=swap');
- https://jaketrent.github.io/react-social-icons/
- npm install react-social-icons
- npm i @sanity/image-url
- npm i @sanity/block-content-to-react