# Prompify

Prompify is an open-source AI prompting tool that empowers users to discover, create, and share creative prompts for various applications. Whether you're a writer seeking inspiration, a developer exploring coding prompts, or an artist looking for visual prompts, Prompify has got you covered.

## Features

- **Explore Prompts**: Browse through a vast collection of prompts across multiple categories, including writing, coding, art, and more.
- **Create Prompts**: Contribute your own prompts to the community by easily creating and submitting new prompts.
- **Share Prompts**: Share your favorite prompts with others, fostering collaboration and inspiration.
- **User Profiles**: Create personalized user profiles to showcase your prompts and interact with the community.
- **Search and Filtering**: Easily search and filter prompts based on categories, tags, or keywords to find exactly what you need.
- **Responsive Design**: Enjoy a seamless experience across desktop and mobile devices.

## Getting Started

To get a local copy of Prompify up and running, follow these steps:

1. Clone the repository:

```
git clone git@github.com:fullstack-daddy/Promptify.git
```

2. Install the dependencies:

```
cd prompify
npm install
```

3. Set up the environment variables:

Create a `.env` file in the project root and add the following variables:

```
MONGODB_URI=<your-mongodb-uri>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
NEXTAUTH_URL=http://localhost:3000 you'll later change this to your url after hosting it
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=<randomly generate 32 random characters on your terminal or use a generator online>
```

Replace the placeholders with your actual MongoDB URI and Google Client ID and Secret.

4. Start the development server:

```
npm run dev
```

The application should now be running at `http://localhost:3000`.

## Contributing

We welcome contributions from the community! If you'd like to contribute to Prompify, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure that your code adheres to our coding standards and includes appropriate tests.

## License

Prompify is released under the [MIT License](LICENSE).
