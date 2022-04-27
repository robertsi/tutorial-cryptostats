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
npm install @nestjs/mongoose mongoose
npm install @nestjs/config
nx g @nrwl/nest:library users --controller --service
nx g @nrwl/nest:library auth --controller --service
@REM nx g @nrwl/nest:library users --directory=cryptostats-backend --controller --service
npm i class-validator class-transformer  
nx g @nrwl/workspace:move --destination=cryptostats-backend/auth --projectName=auth
npm i @nestjs/passport @nestjs/jwt passport passport-jwt passport-local 
npm i -D @types/passport-jwt @types/passport-local 
npm i bcrypt
```
