        npm init    

        npm install --save-dev babel-cli


// in package.json we add a build command:

        "scripts":{
            "build":"babel src -d dist"
        }
        
    //this will take the source files from the src directory and output the result in a dist directory.


//to install the plugins that will transform our code:
        npm install babel-preset-env --save-dev


//then create a .babelrc file in the root of your project and add:
        {
            "presets": ["env"]
        }
    //env preset selects the appropriate plugins depending on the target browsers that are indicated.
    
//the .babelrc file is where you put all your settings for babel. If your dot files are hidden, you can put your babel settings in package.json file under a babel key:
        {
            "name": "babel-test",
            "version": "1.0.0",
            "babel":{
                //config
            }
        }



//we should create a directory dist that is being expected by babel.
mkdir src dist  


//and give the file something to transform
        let a = 9;
        let b = 28;
        [a,b] = [b,a];
        console.log(a);
        console.log(b);


        npm run build
    //this will take the code from src/index.js to ES5 and output the transformed code to dist/index.js




//you can also indicate target browsers eg.
        {
            "presets": [
                ["env", {
                        "targets": {
                            "browsers": ["last 2 versions","safari >== 7"]
                        }
                    }]
            ]
        }
    //this will transform to support the last two versions of each browser and safari, versions greater than 7.
features of js that can't be transformed syntactically eg. promises, have to be implemented by a library used in the code. That's the work of a polyfill.


information obtained from https://www.sitepoint.com/babel-beginners-guide/