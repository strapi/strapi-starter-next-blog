# Strapi Starter Next Blog

Next starter for creating a blog with Strapi.

![screenshot image](/screenshot.png)

This starter allows you to try Strapi with Next with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features.


## Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Responsive design using UIkit
- The following pages:
  - "/" to display every articles
  - "/article/:id" to display one article
  - "/category/:id" display articles depending on the category

## Getting started

**Backend**

See full instructions [here](https://github.com/strapi/strapi-starter-blog)

**Frontend**

```bash
git clone https://github.com/strapi/strapi-starter-next-blog.git
cd strapi-starter-next-blog
```

#### Start the frontend server

```bash
# Using yarn:
yarn install
yarn develop

# Or using npm:
npm install
npm run develop
```

If you want to change the default environment variables, create a `.env.local` file like this:

```
cp .env.local.example .env.local
```

Next server is running here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter!
