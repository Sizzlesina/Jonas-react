/*
* What is TAILWIND CSS?:
👉 - A utility first CSS framework packed with utility classed like "flex, text-center" and "rotate-90" that can be composed to build any design directly in your markup (HTML or JSX)

@ 👉 - Utility first CSS approach: writing tiny classes with one single purpose and then combining them to build entire layouts

👉 - In tailwind, these classes are already written for us. So we're not gonna write any new CSS, but instead use some of tailwind's hundreds of classes


* The good and bad about tailwind:
@ The good:
1 - You dont need to think about class names
2 - No jumping between files to write markup and styles
3 - Immediately undrestand styling in any project that uses tailwind
4 - Tailwind is a design system: many design decisions have been taken for you,which makes UI's look better and more consistent
5 - Saves a lot of time, e.g. on responsive design
6 - Docs and VS code integration are great

@ The bad:
1 - Markup (HTML or JSX) looks very unreadable, with lots of class names (you get used to it)
2 - You have to learn a lot of class names (but after a day of usage you know fundementals)
3 - You need to install and set up tailwind on each new project
4 - You're giving up on "vanilla CSS" 🥲

++ Many people love to hate on tailwind for no reason. Please don't be that person! Try it before judging 🙏

* How to use Tailwind?:
@ 1- Create your project:
npm create vite@latest my-project -- --template react
cd my-project
@ 2- Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
@ 3- Configure your template paths:
++ change the tailwind.config.js file
(Refrence in the tailwind vite framework documentation (cant copy the code in the notes file))

@ 4-Add the Tailwind directives to your CSS:
@tailwind base;
@tailwind components;
@tailwind utilities;

@ 5- Start your build process:
npm run dev

@ 6- Start using Tailwind in your project:
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}


* Customized responsive:
- We can customize out Tailwind in config.js file and use the codes in the documentation of Tailwind
!HINT: (We can prevent the default bahavior of Tailwind responsive classes)

* Reusing the Tailwind styled elements:
- We can use the @layer in the index.css file and then copy paste the styles there like a CSS code and whenver we want to reuse the styles just write the class name (Just like CSS):
++ Example:
 @layer components{
  .input{
    @apply (some Tailwind classes)
  }
}
!HINT: Its better to not use this method of reusing the Tailwind styles because its like writing raw CSS codes

- A better way of reusing Tailwind styles is to use React components

* Tailwind confige file:
- We can configure the default Tailwind styles and add one another style class to that by using the tailwind.confige.js theme part

@ 1- In the theme commands write the command that you want to overwrite in the tailwind default styles behavior
@ 2- If you want to add a class style to an existed class style use the extended part of theme

++ Example:
theme:{
  fontFamily :{
    sans : "Roboto Mono,monospace",
  },
  extend:{
    colors:{
      pizza : "#123456",
    },
  },
},

* Adding a google font to the project:
@ 1- In the google fonts search for the font you want
@ 2- Select the styles that you want the font to have
@ 3- Get the link code from the google and add it into your index.html file
@ 4- Add the font to the tailwind.config.js theme part


- When we want to add a style to the default style of the "styled class" we will  defaultTheme from tailwindcss/defaultTheme
++ Example:
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  ...
  ,
  theme: {
   ...
   ,
      height: {
        ...defaultTheme.height,
        screen: '100dvh',
      },
    },
  plugins: [],
};
 
*/  