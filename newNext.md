# New Next project instructions
Made this doc so I don't gotta redo the same damn steps every time.

## Javascript
### New next project
```
npx create-next-app@latest
```
`cd` into the project directory

### Format directory properly
Run
```
REALNAME=<insert name>
```
and then

```
yarn add -D tailwindcss postcss autoprefixer
yarn add daisyui mongodb
npx tailwindcss init -p
rm styles/Home.module.css
cp -rf ~/repos/Gbox4/boilerplate/next-js/* .
sed -i "s/NEXT_DB_NAME/$REALNAME/" .env
sed -i "s/NEXT_DB_NAME/$REALNAME/" lib/db.js
```

For typescript, replace the `next-js` with `next-ts`