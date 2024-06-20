> ℹ️ This is a rebuild of Sinanatra's SvelteKit-Kirby personal setup. It uses npm instead of yarn, has slug pages implemented and is already configured for a Netlify deployment. Like the original model, this is work in progress and surely not "bug-free." The original Sinanatra repository can be found here: https://github.com/sinanatra/kirby-sveltekit.

## Installation

1. Using terminal, go to your production folder:

```
cd path/to/my/folder
```

2. Clone this repository along with the kirby headless setup

- `git clone https://github.com/ambientmoxie/sveltekit-kirby.git frontend`
- `git clone https://github.com/ambientmoxie/kirby-headless.git backend`
- `rm -rf ./frontend/.git && rm -rf ./backend/.git`

3. Install and run Kirby

- `cd backend`
- `composer install`
- `composer update`
- `composer start`
- Create an API user at `{url}/panel`

4. Install and run SvelteKit

- `cd ..`
- `cd frontend`
- `npm i`

5. Run or build dev. environment

- `npm run dev`
- `npm run build`

## Folder structure

```
.
├── backend (headless kirby)/
│   ├── site/
│   │   ├── blueprints/
│   │   │   └── users/
│   │   │       └── api.yml
│   │   ├── plugins/
│   │   │   └── kql
│   │   └── config/
│   │       └── config.php
│   └── index.php
└── frontend (sveltekit app.)/
    ├── src/
    │   ├── lib/
    │   │   └── utils/
    │   │       └── api.js
    │   ├── routes/
    │   │   ├── api/
    │   │   │   └── query/
    │   │   │       └── +server.js
    │   │   ├── posts/
    │   │   │   └── [slug]/
    │   │   │       ├── +page.js
    │   │   │       └── +page.svelte
    │   │   ├── +page.js
    │   │   └── +page.svelte
    │   ├── +page.js
    │   └── +page.svelte
    ├── .env
    └── svelte.config.js

```

## Fetching data process

### Load Data in SvelteKit (+page.js):

1. When the SvelteKit page/component loads, the load function is executed.
2. This load function makes a POST request to the SvelteKit endpoint (/api/query) with the query parameters in the request body.
3. The POST request from the load function in +page.js is received by the SvelteKit endpoint (/api/query), which is defined in +server.js.

### Handle the Request in SvelteKit Endpoint (+server.js):

1. The +server.js endpoint extracts the query parameters from the request body.
2. It then makes another POST request to the Kirby CMS API, using the provided credentials for Basic Authentication.
3. The query parameters are sent to the Kirby CMS API, and the response is fetched.

### Returns the Data to the Frontend (+server.js):

1. The response from the Kirby CMS API is received by the SvelteKit endpoint.
2. This response is then passed back to the load function in +page.js.
3. The data is processed, and the necessary values are returned to the SvelteKit frontend.
