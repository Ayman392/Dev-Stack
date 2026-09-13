# 🧱 Dev Stack

### Explore Technologies. Build Your Development Stack.

**Dev Stack** is a responsive React application where users can explore popular web development technologies and create their own personalized development stack.

Users can browse technology cards, check information such as category, difficulty, rating, and description, and add their preferred technologies to the **Your Stack** section. Technologies can also be removed individually or cleared from the stack.

🔗 **Live Site:** https://devstack404.netlify.app/

🔗 **GitHub Repository:** https://github.com/Ayman392/Dev-Stack

---

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- Vite
- React Toastify
- JSON
- HTML5
- CSS3

---

## ✨ Three Core Features

### 1. 🔍 Explore Development Technologies

Users can explore different development technologies loaded dynamically from a JSON file.

Each technology card displays useful information such as:

- Technology name
- Icon
- Description
- Category
- Difficulty level
- Rating
- Badge

This makes it easier for users to learn about different technologies before adding them to their stack.

### 2. 🧰 Build and Manage Your Own Stack

Users can create their own development stack by clicking the **Add to Stack** button.

The application:

- Adds the selected technology to the **Your Stack** section
- Prevents the same technology from being added twice
- Shows the number of selected technologies
- Allows individual technologies to be removed
- Provides a **Remove All** option to clear the entire stack
- Disables the button after a technology has already been selected

### 3. 📱 Responsive and Interactive UI

Dev Stack is designed to work across different screen sizes, including mobile, tablet, and desktop.

The application also provides interactive feedback using **React Toastify** when users add or remove technologies from their stack.

---

# ❓ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

React uses JSX because it makes creating and understanding user interfaces much easier. Instead of creating HTML elements using separate JavaScript commands, we can write the UI directly inside our React components.

For example:

```tsx
const title = <h1>Welcome to Dev Stack</h1>;
```

In this project, I used JSX/TSX to create components such as technology cards, the navbar, the stack section, and other UI elements.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

For example, a parent component can pass technology information to a Technology Card using props.

**State**, on the other hand, is data managed inside a component that can change while the application is running.

In simple words:

- **Props → data received from another component**
- **State → data that can change inside the application**

For example, the list of selected technologies in Dev Stack is managed using state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows a React component to store and update data.

When the state changes, React automatically re-renders the component to show the updated information.

In this project, I used `useState` to manage data such as the selected technologies in **Your Stack**.

For example:

```tsx
const [selectedStack, setSelectedStack] = useState([]);
```

When a user adds or removes a technology, the state is updated and React updates the UI automatically.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook is used to perform side effects after a React component renders.

One common use of `useEffect` is loading data.

In this project, I used it to fetch the technology information from the JSON file when the application loads.

For example:

```tsx
useEffect(() => {
  fetch("/technologies.json")
    .then(res => res.json())
    .then(data => setTechnologies(data));
}, []);
```

The empty dependency array `[]` means the effect runs when the component is first loaded.

This allows the technology data to be loaded without hardcoding the entire technology array inside the component.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

When we use `.map()` to display multiple elements, React needs a unique `key` for each item.

The key helps React identify which item has been:

- Added
- Removed
- Updated

For example:

```tsx
{technologies.map(technology => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here, `technology.id` is used as the key because every technology has a unique ID.

This helps React update lists efficiently.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements depending on a condition.

For example, in the **Your Stack** section, I can check whether the user has selected any technology.

```tsx
{selectedStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList technologies={selectedStack} />
)}
```

If there are no selected technologies, the application displays an empty-stack message.

If technologies have been selected, it displays those technologies instead.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

For example:

```tsx
<TechnologyCard technology={technology} />
```

Here, the parent sends the `technology` object to the `TechnologyCard` component.

A child component can communicate back to its parent using a callback function passed through props.

For example:

```tsx
<TechnologyCard
  technology={technology}
  onAdd={handleAddTechnology}
/>
```

Inside the child component:

```tsx
<button onClick={() => onAdd(technology)}>
  Add to Stack
</button>
```

When the button is clicked, the child calls the parent's function.

So the basic idea is:

**Parent → Child:** Data through props

**Child → Parent:** Callback function through props

---

## 🚀 Run the Project Locally

Clone the repository:

```bash
git clone https://github.com/Ayman392/Dev-Stack.git
```

Go to the project directory:

```bash
cd Dev-Stack
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

---

## 🌐 Deployment

The project is deployed on **Netlify**.

**Live Website:**

https://devstack404.netlify.app/

---

## 👨‍💻 Author

**Ayman**

GitHub: https://github.com/Ayman392

---

## 🔗 Project Links

**Live Site:**  
https://devstack404.netlify.app/

**GitHub Repository:**  
https://github.com/Ayman392/Dev-Stack

---

<p align="center">
  Made with React ⚛️ + TypeScript 💙
</p>