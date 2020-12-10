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