/*
-- install bootstrap //? npm install bootstrap

-- install tailwind //? npm install tailwindcss

-- install sass //? npm install sass

-- sass compile => //? sass input.scss output.css

-- compile sass to css => //? sass input.scss -w output.css

-- install type script //? npm install typescript

-- install jquery //? npm install jquery

-- jQuery For Type Script => //? npm install --save-dev @types/node @types/jquery

-- install Angular CLI: //? npm install -g @angular/cli

-- install React and React DOM: //? npm install react react-dom

-- Lodash ( library JavaScript) //? npm install lodash

-- Axios (للقيام بطلبات HTTP): //? npm install axios

-- Webpack (لإعداد وتجميع المشروع): //? npm install webpack webpack-cli --save-dev

-- Babel (للترجمة البرمجية للـ JavaScript): //? npm install @babel/core @babel/preset-env babel-loader --save-dev

-- ESLint (لتحليل جودة الشيفرة البرمجية): //? npm install eslint --save-dev

-- npm install -g http-server
-- http-server //? http://localhost:8080

-- npm install concurrently --save-dev
? run Many Commit
"watch": "concurrently \"npm run watch:sass\" \"npm run watch:postcss\" \"npm run watch:ts\""

-- npm install cssnano postcss-cli --save-dev
minify
at postcss.config.js
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("cssnano")({ preset: 'default' })
  ],
};

*/
/*
* -- Angular
? ---------- npm install -g @angular/cli
? ---------- ng new ( Project Name )
? ---------- npm Start To Start Project
? ---------- Create Component => ng g ( Generate ) c ( Component ) Component Name


*/


let i = 4;

  let var_1 = parseInt(i / 3); // 1
  let var_3 = var_1; // 4
  let var_2 = i - ( var_1 + var_3 ) ; // 3

  let num_of_row_one = var_1;
  let num_of_row_two = var_2;
  let num_of_row_three = var_3;

  console.log(`begging 0f ${var_1}`);
  console.log(`numbers of element ${num_of_row_one}`);
  console.log(`begging 0f ${var_2}`);
  console.log(`numbers of element ${num_of_row_two}`);
  console.log(`begging 0f ${var_3}`);
  console.log(`numbers of element ${num_of_row_three}`);
  

    // for( let j = 0; j < var_1; j++ ) {

    //   console.log(` number of loop 1 ${j}`);

    // }

    // for( let j = var_1 ; j < var_2; j++ ) {

    //   console.log(` number of loop 2 ${j}`);

    // }

    // for( let j = var_2; j < var_3; j++ ) {

    //   console.log(` number of loop 3 ${j}`);

    // }

