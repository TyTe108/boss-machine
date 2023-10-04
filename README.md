# Boss Machine

The Boss Machine is a unique management application for today's most demanding bosses. This project was developed to manage a team of minions, their tasks, and various other aspects of a modern organization.

## Features

1. **Minion Management**: The application allows the boss to manage a list of minions, including their names, titles, salaries, and weaknesses.
2. **Idea Management**: Bosses can brainstorm and store new million-dollar ideas. Each idea has a name, description, and a number of weeks it will take to build.
3. **Meeting Management**: Organize and schedule meetings. The application ensures that no two meetings overlap.
4. **API Endpoints**: The backend provides a comprehensive set of API endpoints to manage minions, ideas, and meetings.
5. **Middleware**: Custom middleware is implemented to validate if an idea is worth a million dollars.
6. **Frontend**: A browser-based user interface to interact with the application.

## Technologies Used

- Node.js
- Express.js
- SQLite

## How to Run

1. Clone the repository.
2. Install the required packages using `npm install`.
3. Start the server using `npm start`.
4. Navigate to `http://localhost:4001` in your browser to access the application.

## Testing

### Automated Tests
A testing suite has been provided for you, checking for all essential functionality and edge cases.

1. **Setup**:
   - Open the root project directory in your terminal.
   - Run `npm install` to install all necessary testing dependencies (you will only need to do this step once).

2. **Running the Tests**:
   - Run `npm run test` to execute the test suite. 
   - You will see a list of tests that ran with information about whether or not each test passed.
   - After this list, you will see more specific output about why each failing test failed. 
   - While they are open in a terminal window, these tests will re-run every time you save server files.
   - If you want to quit the testing loop, use `Ctrl + C`.
   - If you only want to run the tests once, you can run the `mocha` command in the terminal from your project root directory.

3. **Debugging and Further Testing**:
   - As you implement functionality, run the tests to ensure you are implementing your routes and middleware correctly. 
   - The tests will additionally help you identify edge cases that you may not have anticipated when first writing your routes. 
   - Feel free to add logging middleware to your server, it will help with debugging!

### Manual Testing
In addition to automated tests, you should also perform manual tests to ensure everything functions as intended:

1. **Frontend Testing**:
   - Navigate through the app's frontend.
   - Create, update, delete, and retrieve data using the provided user interfaces. Ensure that data displays as expected and interactions feel smooth.
   - Monitor any errors or unexpected behaviors.

2. **Backend Testing**:
   - Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to send requests to your server endpoints.
   - Check the server's response to ensure it matches expected outputs.
   - Monitor the server logs for any unexpected errors.

3. **Console Logs**:
   - Implement `console.log` statements in critical parts of your code. This will help you trace and debug any issues that might arise during manual testing.

### Writing Additional Tests
If you want to ensure broader coverage or test specific functionality not covered by the provided suite:

1. Familiarize yourself with the testing library/framework being used in the project.
2. Write additional test cases focusing on edge cases or specific functionalities.
3. Run the tests as previously mentioned to ensure they are passing and that you've captured the desired behaviors.

Remember, the combination of automated tests, manual testing, and attentive debugging will help ensure a robust and efficient application!



## Author

Tyler Te

## License

This project is licensed under the MIT License.
