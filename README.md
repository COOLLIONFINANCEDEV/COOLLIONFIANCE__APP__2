# **COOL LION FINANCE**

## **Introduction**

Cool Lion Finance is a cutting-edge lending platform that connects borrowers and lenders, allowing users to invest in various projects and receive returns on their investments. The platform supports multiple payment methods, including crypto, wallets, and mobile money, with a particular emphasis on crypto and Web3 integrations, providing users with a convenient and secure investment experience.

Our repository contains the technical infrastructure for the Cool Lion Finance platform, including the user interface, payment processing, and investment management features, with a strong focus on crypto and Web3 implementations. Our code is responsible for securely storing user data, processing transactions in a decentralized and trustless manner, and providing users with a seamless and intuitive experience. With our emphasis on cutting-edge technology and innovative payment methods, we aim to revolutionize the lending industry and create new opportunities for investors and borrowers alike.

## **Getting Started**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### **`npm start`**

Runs the app in the development mode.Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.You may also see any lint errors in the console.

### **`npm test`**

Launches the test runner in the interactive watch mode.See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### **`npm run build`**

Builds the app for production to the `build` folder.It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### **`npm run eject`**

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## **Functional Requirements**

1. User Registration: Users must be able to create accounts and log in to the platform.
2. Project Submission: Borrowers must be able to submit project proposals for consideration by lenders.
3. Investment: Lenders must be able to invest in selected projects.
4. Payment Processing: The platform must support multiple payment methods, including crypto, wallets, and mobile money, for convenient investing and returns.
5. User Dashboard: All users must have access to a personalized dashboard that displays their investments, transactions, and account information.
6. Admin Dashboard: The platform must have an admin dashboard that allows the administrator to track all transactions, review project proposals, and manage user accounts.
7. Messaging: The platform must have a messaging system that allows users to communicate with each other and with the admin.
8. Group Feature: The platform must allow users to create and join groups, with a group leader who can put one project in the header for the rest of the group to prioritize.
9. Project Tracking: All users must be able to track the progress of their projects and investments.

## **Non-Functional Requirements**

1. Security: The platform must be secure and protect user data and transactions from unauthorized access or fraud.
2. Performance: The platform must perform well and provide a seamless user experience, with minimal lag time or downtime.
3. Scalability: The platform must be able to handle a growing number of users and transactions over time.
4. Usability: The platform must be user-friendly and easy to navigate, with clear instructions and guidance for users.
5. Compatibility: The platform must be compatible with various devices and operating systems.
6. Reliability: The platform must be reliable and consistently available to users, with minimal system errors or bugs.

## **Crypto Payments Processing and Multi-Crypto Conversion to Stablecoin**

Cool Lion Finance offers users the ability to invest in projects using a variety of payment methods, including cryptocurrencies. Our platform is fully integrated with Web3 wallets, enabling users to seamlessly invest in projects using cryptocurrencies such as Bitcoin and Ethereum.

Our support for cryptocurrency payments offers several significant advantages over traditional payment methods. Cryptocurrency transactions are fast, secure, and can be completed with low fees, making them an ideal option for users looking to quickly and easily invest in projects.

In addition to supporting cryptocurrency payments, our platform also offers multi-crypto conversion to stablecoin, allowing users to easily convert their cryptocurrency holdings into stablecoins like USD Coin (USDC). This feature provides users with an additional layer of stability and security, as stablecoins are pegged to the value of a fiat currency and are less prone to the price volatility often associated with cryptocurrencies.

Overall, our support for cryptocurrency payments and Web3 wallet integration provides users with a fast, secure, and flexible way to invest in projects on our platform. We believe that our focus on cutting-edge technology and innovative payment methods will be a key driver of growth and adoption in the years to come.

## **Architecture**

The Cool Lion Finance application is built using ReactJS and Redux Toolkit, with React DOM Router used for handling client-side routing. The code is structured into different folders, each serving a specific purpose.

### **Folders**

### **`app`**

This folder contains the Redux Toolkit setup and configuration.

### **`assets`**

This folder contains all the static assets used in the application, such as images and fonts.

### **`components`**

This folder contains all the React components used throughout the application, such as navbar, popups, and more.

### **`containers`**

This folder contains all the high-level block components of the application, such as header, footer, and sidebar.

### **`features`**

This folder contains all the Redux Toolkit slices, representing different features of the application.

### **`helpers`**

This folder contains utility functions that can be used throughout the application.

### **`pages`**

This folder contains all the React components representing different pages of the application.

### **`router`**

This folder contains the client-side routing configuration for the application.

### **`services`**

This folder contains all the API service functions that interact with the server-side backend, configured using Axios.

### **Other Files**

Apart from these folders, there are a few other files such as **`index.js`**, **`App.js`**, and **`App.css`** which serve as the entry point, main component, and styling for the application, respectively.

### **Context**

The **`context`** folder contains all the global state management related code, including the creation of a global state object and functions to set, update and get state values, which can be accessed throughout the application.

## **Data Model**

The Cool Lion Finance application has a data model designed to store information about projects, lenders, and borrowers.

### **Entities**

The following entities are part of the data model:

- **Projects**: Each project has a unique identifier, a title, a description, a status (e.g., pending, funded, completed), an interest rate, a loan amount.
- **Lenders**: Each lender has a unique identifier, a name, an email address, and a wallet address.
- **Borrowers**: Each borrower has a unique identifier, a name, an email address, and a wallet address.

### **Relationships**

The following relationships exist between the entities:

- A project can have multiple lenders, and a lender can participate in multiple projects.
- A project can have only one borrower, and a borrower can have multiple projects.

### **Data Storage and Access**

The data for the Cool Lion Finance application will be stored in a database. The database will have tables for projects, lenders, and borrowers. The project table will have foreign keys to the lender and borrower tables, which will allow for efficient retrieval of data across the different entities.

Data access will be handled using APIs, with different endpoints for each entity. For example, the API for lenders will allow for creating, updating, and deleting lenders, as well as retrieving information about lenders and the projects they have participated in. Similarly, the API for borrowers will allow for creating, updating, and deleting borrowers, as well as retrieving information about the projects they have taken part in. The API for projects will allow for creating, updating, and deleting projects, as well as retrieving information about the lenders and borrower associated with each project.

## **Conclusion**

In conclusion, the Cool Lion Finance platform is a lending platform that connects borrowers and lenders, allowing users to invest in various projects and receive returns on their investments. The platform supports multiple payment methods, including crypto, wallets, and mobile money, providing users with a convenient and secure investment experience.

The application is built using ReactJS and Redux Toolkit, with React DOM Router used for handling client-side routing. The code is structured into different folders, each serving a specific purpose. The data for the Cool Lion Finance application will be stored in a database, and data access will be handled using APIs.

The functional and non-functional requirements have been clearly defined, ensuring that the platform is secure, performs well, is scalable, user-friendly, compatible with various devices and operating systems, reliable, and accessible to users with disabilities.

Overall, the architecture and data model have been designed to provide a seamless and intuitive experience for users, while ensuring the security and privacy of their data and transactions.
