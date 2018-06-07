1. začít jednoduše:
    1. npx create-react-app my-app` npx - npm package runner https://github.com/facebook/create-react-app
    2. (npm run eject)
    3. npm start
2. install gulp (altenativa: yarn)
    1. npm install -g gulp
3. vytvořit projekt manuálně
    1. npm init
    2. npm install gulp gulp-connect gulp-open --save-dev
    3. import to Idea (set EM6 in prefferences / languages / javascript)
    4. create gulpfie.js
    5. create src/index.html and put some content
    6. npm install react react-dom
    7. add src/app.js
4. Babel - compile next gen javascript to current
    1. npm install babel-core gulp-babel babel-preset-env babel-preset-react --save-dev
    2. mv gulpfile.js gulpfile.babel.js
    3. create .babelrc
    4. npm install del --save-dev
    5. npm install babelify browserify vinyl-source-stream --save-dev
    6. babelify - Babel trasform for browserify
    7. browserify - bundles up all the dependencies into one module
    8. vinil-source-stream - vinyl-source-stream convert the readable stream you get from browserify into a vinyl stream that is what gulp is expecting to get
    9. references to react in index.xml could be removed
5. Using sync - get rid of the need of calling clean separately
    1.  npm install gulp-sync --save-dev
    2. add gulpsync to gulp file
6. Get rid of explicitly declared javascript insertation into html
    1. npm install gulp-inject gulp-order --save-dev
    2. add config
    3. change html
    4. alter gulpfile
7. Debuging
    1. show debugging in Chrome
    2. debuging gulpfile
8. Eslint
    1. npm install babel-eslint eslint-plugin-react eslint-friendly-formatter gulp-eslint --save-dev
    2. add eslint config, ignore and add eslint task
    3. run eslint and see the errors
9. JEST
    1. npm install jest -g
    2. npm install jest react-test-renderer --save-dev 
    3. react-test-renderer - ???
