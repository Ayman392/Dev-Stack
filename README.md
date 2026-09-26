<div align="center">

# 🧱 Dev-Stack

### Explore Technologies. Build Your Stack.

A responsive React application where users can explore popular web development technologies and create their own personalized development stack.

[🌐 Live Website](https://devstack404.netlify.app/) • [📂 GitHub Repository](https://github.com/Ayman392/Dev-Stack)

</div>

---

## 📖 About Dev-Stack

**Dev-Stack** is an interactive web application designed to help users explore different web development technologies and build a personalized technology stack.

Users can browse technology cards containing useful information such as category, difficulty, rating, and description, then add their preferred technologies to **Your Stack**.

The application also prevents duplicate selections, allows individual technologies to be removed, provides a **Remove All** option, and uses toast notifications to provide interactive feedback.

---

## ✨ Key Features

### 🔍 Explore Development Technologies

Browse a collection of web development technologies dynamically loaded from JSON data.

Each technology card contains information such as:

- Technology name
- Icon
- Description
- Category
- Difficulty
- Rating
- Badge

### 🧰 Build Your Own Stack

Users can select technologies and create their own personalized development stack.

### 🚫 Duplicate Prevention

A technology cannot be added repeatedly to the stack.

Once selected, its corresponding action is disabled to prevent duplicate entries.

### ➕ Stack Management

Users can:

- Add technologies
- Remove individual technologies
- Clear the entire stack
- View the number of selected technologies

### 🔔 Interactive Notifications

**React Toastify** provides feedback when users interact with the application.

### 📱 Responsive Design

Dev-Stack is designed to work across different screen sizes, providing a responsive experience on desktop, tablet, and mobile devices.

---

## 🛠️ Technologies Used

<p align="left">
  <img
    src="https://skillicons.dev/icons?i=react,ts,vite,tailwind"
    alt="React, TypeScript, Vite and Tailwind CSS"
  />
</p>

| Technology | Purpose |
|---|---|
| **React** | Component-based user interface |
| **TypeScript** | Type-safe application development |
| **Vite** | Development server and build tool |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Tailwind CSS component library |
| **React Toastify** | Toast notifications |
| **ESLint** | Code linting and quality checking |
| **Prettier** | Code formatting |
| **Netlify** | Application deployment |

---

## 📦 Dependencies

### Production Dependencies

| Package | Version |
|---|---:|
| React | `^19.2.8` |
| React DOM | `^19.2.8` |
| React Toastify | `^11.1.0` |
| Tailwind CSS | `^4.3.3` |
| @tailwindcss/vite | `^4.3.3` |

### Development Dependencies

| Package | Version |
|---|---:|
| TypeScript | `~6.0.2` |
| Vite | `^8.3.0` |
| DaisyUI | `^5.7.34` |
| ESLint | `^10.10.0` |
| Prettier | `3.9.6` |
| @vitejs/plugin-react | `^6.1.1` |
| typescript-eslint | `^8.69.0` |
| eslint-plugin-react-hooks | `^7.1.1` |
| eslint-plugin-react-refresh | `^0.5.6` |
| Babel React Compiler | `^1.0.0` |

---

## ⚙️ Installation & Local Setup

Follow these steps to run Dev-Stack on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/Ayman392/Dev-Stack.git
