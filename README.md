## After Clone
- clone
- npm ci
- cp .env.example .env
- node ace list:routes
- node ace serve

goto: server_address/examples

Note: kelamaan terbengkalai jadi lupa lagi todo nya ini wkwkwk


## Labs Logs
### 1. Creating New Project
```bash
npm init adonis-ts-app@latest adonis-ux-design
```

```bash
     _       _             _         _ ____
    / \   __| | ___  _ __ (_)___    | / ___|
   / _ \ / _` |/ _ \| '_ \| / __|_  | \___ \
  / ___ \ (_| | (_) | | | | \__ \ |_| |___) |
 /_/   \_\__,_|\___/|_| |_|_|___/\___/|____/



CUSTOMIZE PROJECT
❯ Select the project structure · web
❯ Enter the project name · adonis-ux-design
❯ Setup eslint? (y/N) · false
❯ Configure webpack encore for compiling frontend assets? (y/N) · true

RUNNING TASKS
❯ Scaffold project 48 ms
❯ Install dependencies 51 s
❯ Configure installed packages 19 s
❯ Configure webpack encore 33 s

[ success ]  Project created successfully

╭─────────────────────────────────────────────────╮
│    Run following commands to get started        │
│─────────────────────────────────────────────────│
│                                                 │
│    ❯ cd adonis-ux-design                        │
│    ❯ node ace serve --watch                     │
│                                                 │
╰─────────────────────────────────────────────────╯

```

### 2. Intial Git

### 3. Install TailwindCss & Configure
```bash
npm install -D tailwindcss postcss autoprefixer
npm i -D postcss-loader
npx tailwindcss init
npm install -D @tailwindcss/typography
npm install -D @tailwindcss/forms
npm install -D @tailwindcss/aspect-ratio
npm install -D @tailwindcss/line-clamp
```

### 4. Install Configure alpinejs
```bash
npm install alpinejs
```

### 5. install Configure
```bash
npm install tw-elements
```
