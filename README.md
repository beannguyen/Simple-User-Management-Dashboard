Project: Simple-User-Management-Dashboard (https://github.com/beannguyen/Simple-User-Management-Dashboard)

Description:
- This project is divided from big project called Simple-User-Management
- This project focuses on Front-End (Javascript - AngularJs)
- Back-End of big project can be refered from https://github.com/beannguyen/Simple-User-Management-API

Feature:
- Build a website with several features below
- Login/Signup page:
    - Login by username/password
    - Signup with Google account (required account verify) / Social network account (FB, TW, ...)
    - Forgot password (reset through email or contact admin)
- User profile page
    - Show all information of current active user (First name, Last name, Birthday, Gender, Address, Email, connected social network account)
    - Allow user to edit/update information
- Search other users by name (both first/last name, email, username (if existed))
- User management page (for admin role/system users)
    - Add/delete/edit users
    - Group management (admin/mod/system/normal users)
    - Allow method for superuser to classify group for users:
        - Normal user: view other users' information, edit current information
        - Moderator user: has all of normal user's right and bonus add/delete/edit all normal users
        - Administrator user: has all of moderator user's right and bonus add/delete/edit all moderator users, upgrade role of normal users to moderator ones
        - System user (superuser): has all of administrator user's right and bonus add/delete/edit all users in any roles, upgrade role of any users not superusers
- Page/pop-up for online chat (should have UI as FB messenger)
    - If a user visits others' profile page and those users are online, there should be chat icon in their profile pages
    - In user management page, each row of online user should also have chat icon
    - A specific active user can chat with any other active users at the same time

References: 
- Example for online chat: https://medium.com/@kent_19698/build-a-real-time-chat-app-from-scratch-using-vue-js-and-c-in-5-minutes-599387bdccbb
- Front-end example: https://www.figma.com/file/VbZ2ugRJDVCR44Kgterr3B/Figma-Admin-Dashboard-UI-Kit-(Community)?node-id=0%3A1
