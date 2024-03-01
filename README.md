# Odin Blog Read Client

![Screenshot](./.jpg)



**:point_right: See it live [here](https://xandernesta.github.io/odin-blog-read-client/)**

Odin Blog Edit Client is one of the frontend portions of the blog project that is part of the Odin Node Course. The intention is to allow anyone to see the blog posts that are published. In order to submit comments on posts the user will need to sign up and/or login in order for the backend to verify their JWT. From there they can create comments. To use the Editor, you will need to signup with tiny.cloud and receive an API key to include in the .env file. Otherwise no editing to content can be completed.

I created this project mainly to practice full-stack development with a focus on authentication, JSON Web Tokens, and connecting different front ends to a backend api.

## Features

- CRUD operations on Blog posts.
- Create, Read, and Delete on public comments on those posts.
- User authentication with passport and jwt.
- Securing passwords using bcryptjs.
- Schema validation using Mongoose.


### Prerequisites

- You'll need a running MongoDB instance, either locally or deployed in the cloud. You can deploy one easily following this [documentation](https://www.mongodb.com/docs/atlas/getting-started/).
- Nodejs version `20.9.0` or above.

### Cloning the repository

```bash
# Clone this repository
$ git clone git@github.com:xandernesta/odin-blog-read-client.git

# Go into the repository
$ cd odin-blog-read-client
```

### Getting the project ready

From `odin-blog-read-client` directory run the following commands.

```bash
# Install dependencies
$ npm install
```


### Setting up environment variables

- Populate `.env` located in server with the following environment variables:
  - `VITE_TINYMCE_API_KEY` = this is the api key required to use TinyMCE api editor. Sign up at https://www.tiny.cloud/auth/signup/ and register for a key to include here

### Starting the application

From `odin-blog-api` directory, run the following commands:

```bash

# Start the client - dev is a script located in package.json that will use concurrently to run (in parallel) nodemon and tailwindcss
$ npm run dev
```

## Technologies Used

- [Nodejs](https://nodejs.org/)
- [Expressjs](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoosejs](https://mongoosejs.com/)
- [TinyMCE](https://www.tiny.cloud/)

## License

<a href="https://github.com/xandernesta/odin-members-only/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT License">
</a>
