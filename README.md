# Innowise Lab Internship Clever to-do List

#### [App Deploy](https://amgod1.github.io/Innowise-Lab-Internship-Clever-to-do-List/)

#### [Task Link](https://drive.google.com/file/d/1r3jTVTyrosejvIxiuAnTM7U0XvD8vuCE/view?usp=share_link)

## How to run the app:

##### Login Component:

- When you first enter the site, you have the option of **_creating_** an account or **_logging_** into an existing account. (only the Login component is rendered)
- If the login or password is invalid, **_toast_** appears on the screen **_with an error message_**.
- When a user registers **_successfully_**, he is **_automatically logged in_** and his data is saved. The same happens when **_logging into_** an existing account.
- After a **_successful_** login, **_the todo component_** is rendered instead of the login.

##### To-do Component:

- When we render the component, we get **_thirty buttons_**, each of which allows us to **_choose a day_** to create a note (or to-do).
- The first button always shows **_today's date_**.
- **_Infinite scrolling_** for creating notes for future months **_is implemented_**.
- After rendering a component, **_only ONE request_** is made to the database, to retrieve notes from an authorized user.
- If the user **_has already created_** notes, the application **_draws mini-circles_** under the specific date.
- The **_number of circles_** is the number of notes.
- **_Unfinished_** tasks are highlighted in **_red_**, and **_completed_** tasks are highlighted in **_green_**. In the opposite case, nothing is drawn additionally.
- You can **_create_** a note after **_selecting_** a specific date, **_entering_** a title and description, and then **_pressing_** the create button.
- Once created, the note is **_automatically rendered_** and the user has the following options for further interaction with the item: **_mark it as done/not done_**, **_change the title or description_**, and **_delete_** it.

##### Notes:

- For storing variables and some other data, there were created the **_login, todo_** and **_theme contexts_** in separate files.
- The **_theme_** is changed through the theme context. **_Dark_** and **light\_** themes are available.

## Database snapshot:

- **_Firebase Authenticition_** was used for registration
- **_Firebase Realtime Database_** was used to store the to-do notes.

##### Database structure:

├── **users**  
 l      ├── userLogin1  
 l       l      ├── **todo-[todo-id1]**  
 l       l       l      ├── date: **_"Dec-31-2022"_**  
 l       l       l      ├── done: **_"False"_**  
 l       l       l      ├── id: **_todo-[todo-id1]_**  
 l       l       l      ├── title: **_"buy presents"_**  
 l       l       l      ├── info: **_"i am always forgot to buy some presents"_**  
 l       l      ├── **todo-[todo-id2]**  
 l      ├── userLogin2  
└── ...

## Application stack:
- Firebase (used for **_authentication and storing data_**)
- React-Bootstrap/Bootstrap (used for **_fast layout_**)
- Dotenv (used for **_storing secret data_**)

The **react-router-dom** library **was not used**, as there was no need in routing (the **_priority_** was on the **_user-friendly interface_**). If the user is **_logged in_** - the **_Todo_** component is displayed there, **_otherwise_** - **_login_**.

# Folder structure:

├── ...  
├── dist **_(production build)_**  
├── node_modules ***(all downloaded packages)***  
├── public **_(html & others)_**  
├── src **_(source files)_**  
 l      ├── components  
 l       l      ├── Header **_(contains child jsx components for Header)_**  
 l       l      ├── Login **_(contains child jsx components for Login)_**  
 l       l      └── Todo **_(contains child jsx components for Todo)_**  
 l      └── context **_(store data, functions and variables for certain components)_**  
 l       l      ├── LoginContext.jsx  
 l       l      ├── ThemeContext.jsx  
 l       l      └── TodoContext.jsx  
 l      ├── App.jsx  
 l      ├── index.js  
 l      ├── firebase.config.js ***(config for db connection + uses .env variables)***  
 l      └── style.css ***(contains styles for scrollbar and app heigth)***  
└── .env ***(contains db api and other secret values)***

Created by [Kamill](https://github.com/amgod1)
