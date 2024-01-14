/*
* Netlify:
- This is a free service for deployment of the project

@ How to use netlify:
1- Build the project using the npm run build command
2- Create an netlify.toml file 
3- Write this commands inside the file:
[[redirects]]
from = "/*"
to = "/index.html"
status = 200

4- Get a copy of the file in case we may need it
5- Create an account in netlify
6- Drag and drop or upload the dist folder in it
7- in the site configurations change the URL of the application
8- Click on the URL and use the application

*/