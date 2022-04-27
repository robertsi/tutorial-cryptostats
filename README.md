```
nx g component login-form
nx g component signup-form
npm i @mui/material @emotion/react @emotion/styled
npm i tailwindcss@latest postcss@latest autoprefixer@latest
cd apps/cryptostats
npx tailwindcss init -p
npm i react-router react-router-dom
cd -
npm i -D @nrwl/nest
nx list @nrwl/nest
nx g @nrwl/nest:app --help 
nx g @nrwl/nest:app cryptostats-backend --frontendProject cryptostats
npm i @nestjs/mongoose mongoose
npm i @nestjs/config
nx g @nrwl/nest:library users --controller --service
nx g @nrwl/nest:library auth --controller --service
@REM nx g @nrwl/nest:library users --directory=cryptostats-backend --controller --service
npm i class-validator class-transformer  
nx g @nrwl/workspace:move --destination=cryptostats-backend/auth --projectName=auth
npm i @nestjs/passport @nestjs/jwt passport passport-jwt passport-local 
npm i -D @types/passport-jwt @types/passport-local 
npm i bcrypt
nx g @nrwl/react:redux authApi
npm i cookie-parser
npm i -D @types/cookie-parser
npm i @nestjs/axios
nx g @nrwl/nest:library coinbase --controller --service
nx g @nrwl/workspace:move --destination=cryptostats-backend/coinbase --projectName=coinbase
```
