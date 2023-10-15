let taskList =
    [
        {
            // Chapter 1: ReactJS Fundamentals
            chapter: "ReactJS Fundamentals", tasks: [
                { TID: "C1T1", title: "Make Your First Component", description: "Create a simple React functional component that renders 'Hello, React!'", completed: false },
                { TID: "C1T2", title: "Illustrate Returning Multiple Elements", description: "Develop a component that returns multiple elements (e.g., a list of items) from a single component", completed: false },
                { TID: "C1T3", title: "Understand JSX and Its Power", description: "Explore JSX syntax and create a component that uses JSX to render HTML-like structures", completed: false },
                { TID: "C1T4", title: "Learn State Management", description: "Build a counter application using the `useState` hook to manage and display the count", completed: false },
                { TID: "C1T5", title: "Explore useEffect Hook", description: "Utilize the 'useEffect' hook to perform side effects, like updating the document title dynamically", completed: false },
                { TID: "C1T6", title: "React Router Basics", description: "Implement React Router to create a multi-page React application with different routes", completed: false },
                { TID: "C1T7", title: "Conditional Rendering", description: "Create a component that conditionally renders content based on a given condition", completed: false },
                { TID: "C1T8", title: "Forms and Controlled Components", description: "Build a form using controlled components and manage form state", completed: false },
                { TID: "C1T9", title: "Handling Events", description: "Implement event handlers for various user interactions like clicks, inputs, etc", completed: false },
            ]
        },
        {
            // Chapter 2: Props
            chapter: "Props",
            tasks: [
                { TID: "C2T1", title: "Greet User Using Props", description: "Design a component that takes a `username` prop and renders a greeting like 'Hello, {username}!'", completed: false },
                { TID: "C2T2", title: "Dynamic Styling with Props", description: "Create a component that accepts a `bgColor` prop and styles its background color accordingly.", completed: false },
                { TID: "C2T3", title: "Passing Functions as Props", description: "Illustrate how to pass functions as props to child components and invoke them.", completed: false },
                { TID: "C2T4", title: "Understanding Prop Types", description: "Implement PropTypes to validate props in your components for better code quality.", completed: false },
                { TID: "C2T5", title: "Destructuring Props", description: "Practice destructuring props in your functional components for cleaner and more readable code.", completed: false },
            ]
        },
        {
            // Chapter 3: State Management and Hooks
            chapter: "State Management and Hooks",
            tasks: [
                { TID: "C3T1", title: "Todo List Application", description: "Build a Todo List application using state to manage tasks and demonstrate how to add, delete, and mark tasks as completed.", completed: false },
                { TID: "C3T2", title: "Fetching Data with useEffect", description: "Integrate an API call using the `useEffect` hook to fetch data and update the component state.", completed: false },
                { TID: "C3T3", title: "Global State with Context API", description: "Implement a global state management system using the Context API for sharing state across multiple components.", completed: false },
                { TID: "C3T4", title: "Async State Management", description: "Handle asynchronous state updates, such as data fetching or API calls, using async/await and `useEffect`.", completed: false },
                { TID: "C3T5", title: "Optimizing Performance with useMemo and useCallback", description: "Optimize performance by utilizing `useMemo` and `useCallback` for memoization of values and functions.", completed: false },
            ]
        },
        {
            // Chapter 4: Advanced React Concepts
            chapter: "Advanced React Concepts",
            tasks: [
                { TID: "C4T1", title: "Higher-Order Components (HOC)", description: "Understand and implement HOCs for code reuse and component composition.", completed: false },
                { TID: "C4T2", title: "Render Props", description: "Explore the concept of render props to share code between React components using a prop whose value is a function.", completed: false },
                { TID: "C4T3", title: "Hooks Customization", description: "Create custom hooks to encapsulate and share stateful logic across components.", completed: false },
                { TID: "C4T4", title: "Error Boundaries", description: "Implement error boundaries to gracefully handle runtime errors in React applications.", completed: false },
                { TID: "C4T5", title: "Testing React Components", description: "Write unit tests for React components using testing libraries like Jest and React Testing Library.", completed: false },
                { TID: "C4T6", title: "React and Redux Integration", description: "Integrate Redux with a React application for centralized state management.", completed: false },
                { TID: "C4T7", title: "Server-Side Rendering (SSR)", description: "Explore Server-Side Rendering (SSR) in React for improved performance and SEO.", completed: false },
                { TID: "C4T8", title: "Progressive Web Apps (PWA) in React", description: "Convert a React app into a Progressive Web App with features like offline support.", completed: false },
            ]
        },
        {
            // Chapter 5: Advanced React Patterns and Best Practices
            chapter: "Advanced React Patterns and Best Practices",
            tasks: [
                { TID: "C5T1", title: "Compound Components", description: "Implement compound components to allow components to work together seamlessly.", completed: false },
                { TID: "C5T2", title: "Context API with useContext", description: "Refactor a component to use the `useContext` hook with the Context API.", completed: false },
                { TID: "C5T3", title: "Code Splitting", description: "Optimize your React application by implementing code splitting for better performance.", completed: false },
                { TID: "C5T4", title: "Lazy Loading", description: "Use lazy loading for components to improve initial load times.", completed: false },
                { TID: "C5T5", title: "React Hooks Best Practices", description: "Follow best practices when using React hooks to write clean and efficient code.", completed: false },
                { TID: "C5T6", title: "Memoization with React.memo", description: "Use `React.memo` for memoization of functional components to prevent unnecessary renders.", completed: false },
                { TID: "C5T7", title: "Immutable Data Patterns", description: "Explore and implement patterns for immutability in React applications.", completed: false },
                { TID: "C5T8", title: "Component Composition Strategies", description: "Experiment with different strategies for composing components to achieve maintainability.", completed: false },
            ]
        },
        {
            // Chapter 6: Real-world Applications and Deployment
            chapter: "Real-world Applications and Deployment",
            tasks: [
                { TID: "C6T1", title: "Build a Blogging Platform", description: "Develop a blogging platform with features like creating, editing, and deleting posts. Implement user authentication and authorization to control access.", completed: false },
                { TID: "C6T2", title: "E-commerce Application", description: "Create an e-commerce application with product listings, shopping cart functionality, and user authentication. Implement secure payment gateways and order management.", completed: false },
                { TID: "C6T3", title: "Social Media Dashboard", description: "Build a social media dashboard with real-time updates and interactive charts. Utilize APIs for fetching and displaying social media data.", completed: false },
                { TID: "C6T4", title: "Authentication and Authorization System", description: "Implement a robust authentication and authorization system. Explore features like password reset, email verification, and role-based access control.", completed: false },
            ]
        },
        {
            // Chapter 7: State Management with Redux
            chapter: "State Management with Redux",
            tasks: [
                { TID: "C7T1", title: "Integration with Redux", description: "Integrate Redux into your application for centralized state management. Create actions, reducers, and connect React components to the Redux store.", completed: false },
                { TID: "C7T2", title: "Async Operations with Redux Thunk", description: "Handle asynchronous operations using Redux Thunk middleware. Implement actions that involve API calls and manage loading states.", completed: false },
                { TID: "C7T3", title: "Selectors and Reselect", description: "Optimize state management with selectors and Reselect. Use selectors to derive data from the Redux store efficiently.", completed: false },
                { TID: "C7T4", title: "Redux Middleware", description: "Create custom Redux middleware to intercept actions and perform additional logic. Implement features like logging or analytics.", completed: false },
                { TID: "C7T5", title: "Redux DevTools Integration", description: "Integrate Redux DevTools into your application for easier debugging and time-travel debugging capabilities.", completed: false },
            ]
        },
        {
            // Chapter 8: Advanced React Patterns
            chapter: "Advanced React Patterns",
            tasks: [
                { TID: "C8T1", title: "Higher-Order Components (HOC)", description: "Revisit Higher-Order Components and implement reusable HOCs for cross-cutting concerns like logging or performance tracking.", completed: false },
                { TID: "C8T2", title: "Render Props", description: "Dive deeper into the render props pattern. Create components that share logic using render props.", completed: false },
                { TID: "C8T3", title: "Hooks Customization", description: "Explore advanced hooks customization. Create hooks that encapsulate complex stateful logic and can be reused across projects.", completed: false },
                { TID: "C8T4", title: "Error Boundaries", description: "Enhance error boundaries by customizing error messages and logging errors for better debugging.", completed: false },
                { TID: "C8T5", title: "Testing React Components", description: "Strengthen your testing skills. Write comprehensive unit tests for React components using Jest, React Testing Library, and mocking.", completed: false },
            ]
        },
        {
            // Chapter 9: Advanced React Concepts
            chapter: "Advanced React Concepts",
            tasks: [
                { TID: "C9T1", title: "Server-Side Rendering (SSR)", description: "Implement Server-Side Rendering (SSR) in your React application to improve initial loading performance and enable search engine optimization.", completed: false },
                { TID: "C9T2", title: "Progressive Web Apps (PWA)", description: "Convert your React app into a Progressive Web App (PWA). Enable features like offline support and push notifications.", completed: false },
                { TID: "C9T3", title: "GraphQL Integration", description: "Integrate GraphQL into your React application. Explore query language capabilities and optimize data fetching.", completed: false },
                { TID: "C9T4", title: "React and Redux Integration", description: "Reinforce your understanding of React and Redux integration. Implement complex state scenarios and explore advanced features.", completed: false },
                { TID: "C9T5", title: "Micro-frontends Architecture", description: "Experiment with micro-frontends architecture. Divide your application into smaller, independently deployable components.", completed: false },
            ]
        },
        {
            // Chapter 10: Advanced React Best Practices
            chapter: "Advanced React Best Practices",
            tasks: [
                { TID: "C10T1", title: "Code Splitting", description: "Optimize your React application using code splitting. Dynamically load components based on user interactions or routes.", completed: false },
                { TID: "C10T2", title: "Lazy Loading", description: "Implement lazy loading for components to reduce initial load times. Load components only when they are needed.", completed: false },
                { TID: "C10T3", title: "React Hooks Best Practices", description: "Deepen your knowledge of React hooks best practices. Write clean and efficient code using rules and guidelines.", completed: false },
                { TID: "C10T4", title: "Memoization with React.memo", description: "Master the art of memoization with `React.memo`. Optimize functional components for better performance.", completed: false },
                { TID: "C10T5", title: "Immutable Data Patterns", description: "Explore and implement advanced patterns for immutability in React applications. Understand the benefits of using immutable data structures.", completed: false },
            ]
        },
        {
            // Chapter 11: Real-world Deployment and Scaling
            chapter: "Real-world Deployment and Scaling",
            tasks: [
                { TID: "C11T1", title: "Continuous Integration and Deployment (CI/CD)", description: "Implement CI/CD pipelines for your React application. Automate testing and deployment processes for faster and reliable releases.", completed: false },
                { TID: "C11T2", title: "Containerization with Docker", description: "Containerize your React application using Docker. Explore the benefits of containerization for consistency and scalability.", completed: false },
                { TID: "C11T3", title: "Deployment to Cloud Services", description: "Deploy your React application to cloud services like AWS, Azure, or Google Cloud Platform. Configure and scale your application in a cloud environment.", completed: false },
                { TID: "C11T4", title: "Performance Optimization", description: "Optimize your React application for performance. Minify and bundle assets, optimize images, and implement other performance best practices.", completed: false },
                { TID: "C11T5", title: "Security Best Practices", description: "Implement security best practices in your React application. Address common vulnerabilities and ensure data protection.", completed: false },
            ]
        },
        {
            // Chapter 12: Full-stack Development with React
            chapter: "Full-stack Development with React",
            tasks: [
                { TID: "C12T1", title: "Backend Integration with Node.js and Express", description: "Integrate your React frontend with a Node.js and Express backend. Establish communication between the frontend and backend for data exchange.", completed: false },
                { TID: "C12T2", title: "Database Integration (MongoDB, PostgreSQL, or MySQL)", description: "Connect your React application to a database (MongoDB, PostgreSQL, or MySQL). Implement CRUD operations and understand data modeling.", completed: false },
                { TID: "C12T3", title: "Authentication and Authorization in Full-stack", description: "Extend the authentication and authorization system to the full-stack application. Secure endpoints, handle user sessions, and implement roles.", completed: false },
                { TID: "C12T4", title: "RESTful API Design", description: "Design and implement RESTful APIs for your full-stack application. Follow best practices in API design and documentation.", completed: false },
                { TID: "C12T5", title: "GraphQL in Full-stack", description: "Experiment with GraphQL in a full-stack context. Build a GraphQL API on the backend and consume it from your React frontend.", completed: false },
            ]
        },
        {
            // Chapter 13: Testing and Quality Assurance
            chapter: "Testing and Quality Assurance",
            tasks: [
                { TID: "C13T1", title: "End-to-End Testing with Cypress", description: "Perform end-to-end testing for your React application using Cypress. Write tests for user interactions, navigation, and data flow.", completed: false },
                { TID: "C13T2", title: "Performance Testing", description: "Conduct performance testing for your React application. Identify and resolve bottlenecks for optimal user experience.", completed: false },
                { TID: "C13T3", title: "Security Testing", description: "Perform security testing on your React application. Identify and mitigate security vulnerabilities through thorough testing.", completed: false },
                { TID: "C13T4", title: "Unit Testing for Backend", description: "Extend your unit testing skills to the backend. Write unit tests for your server-side code, ensuring robustness and reliability.", completed: false },
                { TID: "C13T5", title: "Continuous Monitoring and Improvement", description: "Set up continuous monitoring for your React application. Use tools like New Relic or Datadog to track performance and user behavior.", completed: false },
            ]
        },
        {
            // Chapter 14: Real-world Project Showcase
            chapter: "Real-world Project Showcase",
            tasks: [
                { TID: "C14T1", title: "Collaborative Project", description: "Collaborate with other developers on a real-world project. Use version control (e.g., Git) and follow agile development methodologies.", completed: false },
                { TID: "C14T2", title: "Documentation", description: "Create comprehensive documentation for your React application. Include setup instructions, API documentation, and guidelines for future developers.", completed: false },
                { TID: "C14T3", title: "User Feedback and Iteration", description: "Collect user feedback on your React application. Iterate based on feedback to enhance user experience and address pain points.", completed: false },
                { TID: "C14T4", title: "Deployment to Production", description: "Deploy your full-stack React application to a production environment. Configure production settings, handle environment variables, and ensure scalability.", completed: false },
                { TID: "C14T5", title: "Versioning and Release Management", description: "Implement versioning and release management for your React application. Follow semantic versioning and plan releases strategically.", completed: false },
            ]
        },
        {
            // Chapter 15: Career Development
            chapter: "Career Development",
            tasks: [
                { TID: "C15T1", title: "Building a Portfolio", description: "Create a personal portfolio showcasing your React projects, skills, and achievements. Highlight your journey and contributions.", completed: false },
                { TID: "C15T2", title: "Networking and Community Engagement", description: "Engage with the React community. Attend meetups, join forums, and contribute to open-source projects to expand your network.", completed: false },
                { TID: "C15T3", title: "Soft Skills Development", description: "Work on your soft skills. Improve communication, collaboration, and problem-solving abilities. Practice effective teamwork.", completed: false },
                { TID: "C15T4", title: "Job Search and Interview Preparation", description: "Prepare for job interviews. Research common React interview questions, practice coding challenges, and refine your resume.", completed: false },
                { TID: "C15T5", title: "Mentorship and Coaching", description: "Seek mentorship or coaching. Connect with experienced developers to gain insights, guidance, and feedback on your career path.", completed: false },
            ]
        },
        {
            // Chapter 16: Continued Learning
            chapter: "Continued Learning",
            tasks: [
                { TID: "C16T1", title: "Exploration of New Technologies", description: "Stay updated with the latest technologies in the React ecosystem and frontend development. Experiment with new libraries and frameworks.", completed: false },
                { TID: "C16T2", title: "Mastering Design Patterns", description: "Deepen your understanding of design patterns. Implement common design patterns in your React projects for maintainability.", completed: false },
                { TID: "C16T3", title: "Contributing to Open Source", description: "Contribute to open-source React projects. Gain hands-on experience, collaborate with other developers, and build a strong profile.", completed: false },
                { TID: "C16T4", title: "Specialization (React Native, Next.js, etc.)", description: "Specialize in a specific area of React development. Explore React Native for mobile development, Next.js for server-side rendering, or other specialized frameworks.", completed: false },
                { TID: "C16T5", title: "Advanced Topics Exploration", description: "Delve into advanced topics such as serverless architecture, microservices, or progressive web app features. Experiment with cutting-edge concepts.", completed: false },
            ]
        },
    ]

localStorage.setItem("taskList", JSON.stringify(taskList));
