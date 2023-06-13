
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

## Thought Process


### This is an Online Diary application that incorporates CRUD functionality.

1. Define the requirements: I have identified the key features of the application, which include creating a user account, logging in as a user, and managing diary entries through creation, editing, and deletion.

2. Choose the technology stack: I have carefully selected the appropriate technology stack for the project.

3. Plan the project structure: I have outlined the folder and file structure that best suits the requirements of the project. Considering the size of the application, I opted for a Separation of Concern pattern, organizing components, pages, tests, and images accordingly.

4. Implement the features: I have developed the necessary components and utilized Redux actions and reducers for user authentication and diary entry management. TypeScript has been employed to ensure type safety and detect potential errors during the development process.

5. Integrate Redux with the application: I have connected the Redux store to the components and utilized dispatched actions to update the application state.

### Challenges faced and solutions:

1. Redux setup: I encountered challenges while setting up the Redux Toolkit. To overcome this, I leveraged online resources and referred to the RTK documentation for guidance.

2. React Router issue during testing: While writing tests, I faced difficulties with React Router. To resolve this, I proactively created a test-utils file, where I encapsulated the custom render function with the Browser Router and exported it for use in all test files. This ensured proper rendering of components during testing.
