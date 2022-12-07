# Innowise Lab Internship Clever to-do List

#### [App Deploy](https://amgod1.github.io/Innowise-Lab-Internship-Clever-to-do-List/)

#### [Task Link](https://drive.google.com/file/d/1r3jTVTyrosejvIxiuAnTM7U0XvD8vuCE/view?usp=share_link)

## How to run the app:

- For storing variables and some other data, there were created the **login, tudu** and **theme contexts** in separate files.
- The **theme** is changed through the theme context. **Dark** and **light** themes are available.

##### Login Component:

- When you first enter the site, you have the option of creating an account or logging into an existing account. (only the Login component is rendered)
- If the login or password is invalid, toast appears on the screen with an error message.
- When a user registers successfully, he is automatically logged in and his data is saved. The same happens when logging into an existing account.
- After a successful login, the todo component is rendered instead of the login.

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

├── users  
 l      ├── userLogin1  
 l       l      ├── todo-[todo-id1]  
 l       l       l      ├──  date: "Dec-31-2022"  
 l       l       l      ├──  done: "False"  
 l       l       l      ├──  id: todo-[todo-id1]  
 l       l       l      ├──  title: "buy presents"  
 l       l       l      ├──  info: "i am always forgot to buy some presents"  
 l       l      ├── todo-[todo-id2]  
 l      ├── userLogin2  
└── ...  

## Application stack:

# Folder structure:

├── ...  
├── dist  (production build)  
├── node_modules (all downloaded packages)  
├── public (html & others)  
├── src (source files)  
 l      ├── components  
 l       l      ├── Header (few jsx components for Header)  
 l       l      ├── Login (few jsx components for Login)  
 l       l      └── Todo (few jsx components for Todo)  
 l      └── context (store data, functions and variables for certain components)  
 l       l      ├── LoginContext.jsx  
 l       l      ├── ThemeContext.jsx  
 l       l      └── TodoContext.jsx  
 l      ├── App.jsx  
 l      ├── index.js  
 l      ├── firebase.config.js (config for db connection + uses .env variables)  
 l      └──  style.css (contains styles for scrollbar and app heigth)  
└── .env (contains db api and other secret values)  

Created by [Kamill](https://github.com/amgod1)
