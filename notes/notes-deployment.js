/*
* Netlify:
- This is a free service for deployment of the project

@ How to use netlify?:
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


* Github:
- We can deploy the project on git repository

@ How to do it?:
1- Download git from the git site
2- git init in the folder that the project exists
3- git add and git commit the files
4- Create a new repository
5- Go to the settings/developer settings/personal access tokens/tokens (classic)
6- Look up for a generate new token and select repo option and then generate the token
8- copy the token (treat it as a password)
9- Connect the project files to the newly created repository
10- git push the files into the repository

@ Now we want to use this github repo to deploy the application:
1- 
*/