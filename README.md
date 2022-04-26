```
nx g component login-form
nx g component signup-form
npm install @mui/material @emotion/react @emotion/styled
npm install tailwindcss@latest postcss@latest autoprefixer@latest
cd apps/cryptostats
npx tailwindcss init -p
npm install react-router react-router-dom
cd -
npm install -D @nrwl/nest
nx list @nrwl/nest
nx g @nrwl/nest:app --help 
nx g @nrwl/nest:app cryptostats-backend --frontendProject cryptostats
```
