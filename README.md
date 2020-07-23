# Simple User Management Dashboard UI

This is the project divided from big project called **Simple-User-Management** focusing on Front-End, which is generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0. The Back-End of big project can be refered from [here](https://github.com/beannguyen/Simple-User-Management-API).

## Components

1. *Signin/Signup*
- Login by username/password	
- Signup with Google account (required account verify) / Social network account (FB, TW, ...)	
- Forgot password (reset through email or contact admin)

2. *User profile*
- Show all information of current active user (First name, Last name, Birthday, Gender, Address, Email, connected social network account)	
- Allow user to edit/update information	
- Search other users by name (both first/last name, email, username (if existed))

3. *User management (for admin role/system users)*
- Add/delete/edit users
- Group management (admin/mod/system/normal users)	
- Allow method for superuser to classify group for users:
    - *Normal user*: view other users' information, edit current information
    - *Moderator user*: has all of normal user's right and bonus add/delete/edit all normal users	Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
    - *Administrator user*: has all of moderator user's right and bonus add/delete/edit all moderator users, upgrade role of normal users to moderator ones
    - *System user (superuser)*: has all of administrator user's right and bonus add/delete/edit all users in any roles, upgrade role of any users not superusers
    
4. *Online chat (targeting to replicate FB messenger UI)*
- If a user visits others' profile page and those users are online, there should be chat icon in their profile pages	
- In user management page, each row of online user should also have chat icon	
- A specific active user can chat with any other active users at the same time

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
