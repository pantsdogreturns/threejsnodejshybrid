# Instructions and Description
This github repository contains the code necessary to set up a three.js and node.js project without importing three as a node module, allowing you to run the three.js code on the user side, instead of the server side. Upon a succesful run you will load a webpage with some 3d objects. The green one is  a GLTF object (to ensure XMLHttpRequests are working on the server, and the other color ones are three objects.

In order to get this to work you will need to install git: https://git-scm.com/download/
and run the following commands in your command prompt/terminal inside of your projects folder:

```
git init
git config --global user.name 'your name here'
git config --global user.email 'your username here'
git clone --depth=1 https://github.com/mrdoob/three.js.git
```
this will install the necessary three.js files to your project, avoiding export and import commands, which lead to errors when used in javascript with node.js

finally inside of your projects folder run the command
```
node server.js
```
and visit
http://localhost:3000/index.html
if it is not opened automatically.

developed by 
https://github.com/EyeOfMidas
& https://github.com/pantsdogreturns
