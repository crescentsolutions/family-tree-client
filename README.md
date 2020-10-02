![Crescent Media Logo](https://www.crescentdigitalmedia.solutions/wp-content/uploads/2020/05/logo-v3.png)

# Application Title: Family Tree

This app is a Client that allows users to input their family members and the data is then sent to the server and stored for future use.

Repository: https://github.com/crescentsolutions/family-tree-client
Live Site: https://crescentsolutions.github.io/family-tree-client/

Accompanying App: Family Tree Server
Repository: https://github.com/crescentsolutions/family-tree
Live Server: https://stormy-gorge-66260.herokuapp.com/

## Wireframe:
![Project 2 - Full Stack](https://media.git.generalassemb.ly/user/30423/files/a221c280-f8d7-11ea-825c-39ed4926c828)

## User Stories:

- As a User I want a form so that I can sign up [POST]
- As a User I want a form so that I can sign in [GET]
- As a User I want a form so that I can change my password [PATCH]
- As a User I want a form so that I can sign out [DELETE]
- As a User I want a dashboard so that I can view my objects and options [GET]
- As a User I want a button so that I can create a new generation
- As a User I want a form so that I can add a new generation [POST]
- As a User I want a process to edit my generation [PATCH]
- As a User I want a button to delete a generation [DELETE]

## Process for Building Desktop Application
1. Create auth folder to contain .sh files for curl scripts /curl-scripts/auth
2. Create .sh files for each curl script I need to test
      - ex: /curl-scripts/auth/sign-in.sh,
          -- /curl-scripts/auth/sign-up.sh,
          -- etc.
3. Test the API using curl scripts in /curl-scripts/auth
4. Create sign up form and sign in form using HTML in index.html
4. Create gameboard using BootStrap in index.html
5. Create /assests/scripts/app.js file
6. Initialize the submit event using document.ready in /assests/scripts/app.js
7. Create /assets/scripts/auth folder to contain .js files that handle the app
8. Create /assets/scripts/auth/events.js
9. Initialize process that needs to happen for each form
    submission
    - path: /assets/scripts/auth/events.js
9. Create /assets/scripts/auth/api.js
10. Create the API requests
    - path: /assets/scripts/auth/api.js
11. Create /assets/scripts/auth/ui.js
12. Initialize the process that does error handling. Did the API request
succeed or fail?
13. Do the same above process for second resource. In this case, it is "family members"

In the future, I would like to flesh out my update feature more and work out some of the kinks in the UI.

## Technologies Used
- HTML/CSS
- JavaScript
- jQuery
- Bootstrap
