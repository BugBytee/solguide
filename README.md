WebApp preview


![ScreenShots](https://ik.imagekit.io/dgyjhsxq7/Screenshot_2022-05-13_032958_18vXt5lT3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652716317944)
![ScreenShots](https://ik.imagekit.io/dgyjhsxq7/ss1_BUBTwNkr-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652716318747)
![ScreenShots](https://ik.imagekit.io/dgyjhsxq7/ss2__SSCTR5Xj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652716318193)











To get a a local copy on your system:



### Installation & setup

## Prerequisite

1. Set up Docker Environment if u dont.


1. Clone the repository
  
    ```bash
     git clone https://github.com/IRSHIT033/Appwrite.git
     ```
2. Change the directory
    ```bash
    cd Appwrite
    ```
3. Install node modules
    ```
    npm install
    ```
4. Install appwrite sdk using Docker
    # Unix
    ```
    docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:0.13.4
     
    ```
    # Powershell
    ```
      docker run -it --rm ,
    --volume /var/run/docker.sock:/var/run/docker.sock ,
    --volume ${pwd}/appwrite:/usr/src/code/appwrite:rw ,
    --entrypoint="install" ,
    appwrite/appwrite:0.13.4
    ```
    
    # CMD 
    ```
    docker run -it --rm ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/appwrite:/usr/src/code/appwrite:rw ^
    --entrypoint="install" ^
    appwrite/appwrite:0.13.4
    ```
    
    then run the Appwrite dashboard in localhost:80 
    
 5. Install App Dependencies
     ```
     cd client
     ```  
    ```
      npm install
    ```
    ```
      npm start
    ```




### Working model

Our web-app lands with a login/ signup page(user can switch between two according to their convenience). After the user has logged in, the dashboard of the user comes up where it shows the username, email and number of contributions of the respective user. It has been implemented using Appwrite SDK. We then have our most interesting part of the web-app which is the 'Contribtion' section where user can answer to the problems asked by an author in real-time. User can also be an author and post their respective doubts or the problem they are facing in the code(user are also allowed to attach their code screenshots).
