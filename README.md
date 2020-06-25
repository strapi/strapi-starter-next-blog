# Strapi Starter Next Blog

Next starter for creating a blog with Strapi.

This starter allows you to try Strapi with Next with the example of a simple blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-blog-with-next-react-js-strapi-and-apollo) **but without using Apollo**

![screenshot image](/screenshot.png)

### Deploy the backend

To deploy the Strapi instance you'll need:

- [An Heroku account](https://signup.heroku.com/) for free
- [A Cloudinary account for saving images](https://cloudinary.com/users/register/free) for free

Once you have created these accounts you can deploy your instance by clicking on this button

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-blog)

[Here](https://github.com/strapi/strapi-starter-blog) is the repository of the backend of this starter

### Deploy the frontend

**On Netflify**

Coming soon...

**On Vercel**

  - Log in to Vercel by installing now CLI:

  `npm i -g now`

  - Secure your `API_URL` with now by running the following command:

  `now secret add api-url <https://your-strapi-instance.herokuapp.com>`

You can deploy your app and for this you have two options. But for each one of them, just press enter when the root directory of your code is asked.

  - Execute `now`

  - Or you can simply click on the following button

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/strapi/strapi-starter-next-blog)

### Features

- 2 Content types: Article, Category
- 2 Created articles
- 3 Created categories
- Permissions set to `true` for article and category
- Responsive design using UIkit

### Pages

- "/" display every articles
- "/article/:id" display one article
- "/category/:id" display articles depending on the category

### Getting started

**Backend**

See full instructions [here](https://github.com/strapi/strapi-starter-blog)

**Frontend**

```bash
git clone https://github.com/strapi/strapi-starter-next-blog.git
cd strapi-starter-next-blog
```

#### Start the frontend server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop

# Create a .env.local file containing the API_URL variable
echo "API_URL=http://localhost:1337" >> .env.local
```

Next server is running here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter
