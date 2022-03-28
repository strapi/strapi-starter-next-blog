**:no_entry: DEPRECATED**

This repository is no longer maintained and only works for Strapi v3. You can find the latest Strapi v4 version of this starter on the [starters-and-templates monorepo](https://github.com/strapi/starters-and-templates/tree/main/packages/starters/next-blog).

---

# Strapi Starter Next Blog

Next starter for creating a blog with Strapi.

![screenshot image](/screenshot.png)

This starter allows you to try Strapi with Next with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. So do not hesitate to add new features and report bugs!

This starter uses the [Strapi blog template](https://github.com/strapi/strapi-template-blog)

Check out all of our starters [here](https://strapi.io/starters)

## Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Responsive design using UIkit

Pages:

- "/" to display every articles
- "/article/:id" to display one article
- "/category/:id" display articles depending on the category

## Getting started

Use our `create-strapi-starter` CLI to create your project.

```sh
npx create-strapi-starter@3 my-project next-blog
```

The CLI will create a monorepo, install dependencies, and run your project automatically.

The Next frontend server will run here => [http://localhost:3000](http://localhost:3000)

The Strapi backend server will run here => [http://localhost:1337](http://localhost:1337)

## Deploying to production

You will need to deploy the `frontend` and `backend` projects separately. Here are the docs to deploy each one:

- [Deploy Strapi](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/deployment.html#hosting-provider-guides)
- [Deploy Next](https://nextjs.org/docs/deployment)

Don't forget to setup the environment variables on your production app:

For the frontend the following environment variable is required: 
- `NEXT_PUBLIC_STRAPI_API_URL`: URL of your Strapi backend, without trailing slash


Enjoy this starter!
