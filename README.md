# wbdio
Automated UI Tests using WebdriverIO 
This repository contains automated end-to-end tests developed with WebdriverIO as part of a course project. It includes examples of test automation best practices, Page Object Model implementation, and reusable test components.

## Project Structure

```
└── WebdriverIOTest
    ├── src
    │   ├── artifacts
    │   │   ├── logs
    │   │   └── screenshots
    │   ├── data
    │   │   └── credentials.json
    │   ├── pages
    │   │   ├── login.page.js
    │   │   └── loginPom.page.js
    │   └── tests
    │       ├── login-empty.spec.js
    │       ├── login-invalid.spec.js
    │       └── login-success.spec.js
    ├── wdio.conf.js
    └── package.json
```

## Features

- Page Object Model (POM) implementation for login page
- Test scenarios:
  - Successful login
  - Login with invalid credentials
  - Login with empty fields
- Artifacts storage for logs and screenshots
- Test data management using JSON files

## Test Cases

1. **Successful Login Test**
   - Validates that users can successfully log in with valid credentials
   - File: `src/tests/login-success.spec.js`

2. **Invalid Login Test**
   - Verifies system behavior with invalid credentials
   - File: `src/tests/login-invalid.spec.js`

3. **Empty Fields Login Test**
   - Tests system validation for empty login fields
   - File: `src/tests/login-empty.spec.js`

## Setup and Configuration

The project uses WebDriverIO as the test automation framework. Configuration can be found in `wdio.conf.js`.

## Project Organization

- **Pages**: Contains Page Object Models for the application
  - `login.page.js`: Basic login page object
  - `loginPom.page.js`: Enhanced POM implementation for login functionality

- **Data**: Stores test data
  - `credentials.json`: Test user credentials

- **Artifacts**: Contains test execution artifacts
  - `logs`: Test execution logs
  - `screenshots`: Captured screenshots during test execution

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run tests:
   ```bash
   npm test
   ```

## Test Reports

Test execution reports and artifacts can be found in the following locations:
- Logs: `src/artifacts/logs`
- Screenshots: `src/artifacts/screenshots`
