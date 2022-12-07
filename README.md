# Innowise Lab Internship Clever to-do List

#### [App Deploy](https://amgod1.github.io/Innowise-Lab-Internship-Clever-to-do-List/)

#### [Task Link](https://drive.google.com/file/d/1r3jTVTyrosejvIxiuAnTM7U0XvD8vuCE/view?usp=share_link)

## How to run the app:

- For storing variables and some other data, there were created the **_login, tudu_** and **_theme contexts_** in separate files.
- The **_theme_** is changed through the theme context. **_Dark_** and **light\_** themes are available.

##### Login Component:

- When you first enter the site, you have the option of **_creating_** an account or **_logging_** into an existing account. (only the Login component is rendered)
- If the login or password is invalid, **_toast_** appears on the screen **_with an error message_**.
- When a user registers **_successfully_**, he is **_automatically logged in_** and his data is saved. The same happens when **_logging into_** an existing account.
- After a **_successful_** login, **_the todo component_** is rendered instead of the login.

##### To-do Component:

- When we draw the component, we get thirty buttons, each of which allows us to choose a day to create a note (or to-do).
- The first button always shows today's date.
- Infinite scrolling for creating notes for future months is implemented.
- After rendering a component, only ONE request is made to the database, to retrieve notes from an authorized user.
- If the user has already created notes, the application draws mini-circles under the specific date.
- The number of circles is the number of notes.
- Unfinished tasks are highlighted in red, and completed tasks are highlighted in green. in the opposite case, nothing is drawn additionally.
- You can create a note after selecting a specific date, entering a title and description, and then pressing the create button.
- Once created, the note is automatically rendered and the user has the following options for further interaction with the item: mark it as done/not done, change the title or description, and delete it.

## Database snapshot:

- Firebase Authenticition was used for registration
- Firebase Realtime Database was used to store the to-do notes.

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

# Folder structure:

├── ...  
├── dist **_(production build)_**  
├── node_modules **_(all downloaded packages)_**  
├── public ***(html & others)***  
├── src ***(source files)***  
 l      ├── components  
 l       l      ├── Header ***(few jsx components for Header)***  
 l       l      ├── Login ***(few jsx components for Login)***  
 l       l      └── Todo ***(few jsx components for Todo)***  
 l      └── context ***(store data, functions and variables for certain components)***  
 l       l      ├── LoginContext.jsx  
 l       l      ├── ThemeContext.jsx  
 l       l      └── TodoContext.jsx  
 l      ├── App.jsx  
 l      ├── index.js  
 l      ├── firebase.config.js ***(config for db connection + uses .env variables)***  
 l      └── style.css ***(contains styles for scrollbar and app heigth)***  
└── .env ***(contains db api and other secret values)***

Created by [Kamill](https://github.com/amgod1)
