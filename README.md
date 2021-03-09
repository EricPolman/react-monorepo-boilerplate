# TypeScript React Monorepository Boilerplate

This repository serves as boilerplate for setting up a React application as a mono repository, using Lerna and Yarn.

This is an approach I like to take when developing React applications, because it allows you to separate your entire business logic from your React application, thus allowing multiple applications to use the same business logic. Ideally, React Native applications can also be used in this setup.

## Structure

There will be a folder with shared packages called "shared" and an applications folder called "apps". Shared will contain business logic and UI kit-like packages and Apps will contain the actual buildable end products.

This boilerplate will provide a Business Logic package that implements a basic service that fetches dummy data using Axios. The UI Kit will implement Storybook for demo-ing the components built in this package, and styled-components to demo theming and creation of small components.

The Applications folder will contain two React applications implementing the same business logic and UI Kit packages without having a relation between the packages. One of the applications will provide a boilerplate for an authenticated vs non-authenticated flow which I personally like to use.

ESlint, Jest, and Prettier will also be available in this boilerplate.
