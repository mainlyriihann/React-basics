
Basic react information and tools to learn it , practically and deeply.
___________1______________<>
React is not a framework, it is a library (framework has strict rules. Library is chill in that matter)
npm run start , npm run build. 
build mein naya build folder bhi banta hai jo actually use hota hai.
npm create vite@latest -> to create vite(react )app. (vite is a bundler.)

dev dependencies(package.json) never go to production, only help in development.

Jab bhi node modules vala folder na ho , npm install karlena.

*** cd .. ** -> ek folder bahar lejayega. 
 ls -> list of files in a folder.
 
__________2____________

manifest.json mobile mien use aati hai but ho na ho itna frk nhi pdta.

-> index.html important hai. 
ye files tab ayengi jab create react-app vale tareeke se import karu react ko. 
npm create vite@latest mien nhi hai ye sab.

-> react khudka ek dom banata hai ( virtual dom) , and then after changes compare krta hai real dom( browseer dom) ke saath and changes only the things which needs to be changed.

react kya kr rha 01vitereact mein : 
ek function mein html likha, aur render karva diya. basically JS mein HTML likh diya.


-> can we render in app.jsx itself? instead of main.jsx?
Yes, bas import and export ka dhyan rkhna, 
 function ka naam hi HTML tag bann jayega.
 LEKIN fucntion ka naam jo hoga uska start 
 uppercase se hoga!!!!!!!!!!

 =>jo fucntions export kr rhe hain, inko components kehte. files aur components ka naam uppercase se shuru karo.
 render ( <component />) -> render krdega component ko.
 ______3________
 render mein fucntion, object bhi render hojayega lekin obv  object ko ()method ki zaroorat nhiu. 
