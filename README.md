
# DevRev Assignment

 



## Utilizing DevRev API
For using a DevRev api we should have a DevRev Account.

Once we create a DevRev account the next important step is to Generate a PAT(Personal Access Token) 

Here using the generated PAT the DevRev API can be accessed to retrive the user details.


## Hello world Snap-in
To install the hello world snap-in 

1) First install all the required tools ie;
    
        A)Node-js
    
        B)DevRev cli
    
        C)./jq
    
        D)Dev org (workspace)

        E)DevRev typescript SDK

Once the code is ready the first step is to packaging the code
    
    npm install
    npm run build
    npm run package

once these commands run successfully . build.tar.gz file will be created .

Next step is to login to DevRev for authentication
    
    devrev profiles authenticate -o <dev-org-slug> -u <youremail@yourdomain.com>

Creating a snap-in package

    devrev snap_in_package create-one --slug hello_world | jq .

Creating a snap-in version

    devrev snap_in_version create-one --manifest.yaml manifest.yaml --archive build.tar.gz | jq .

Installing a snap-in from a snap-in version

    devrev snap_in draft

Once the above commands are run successfully 
the snap-in will reflect in the DevRev account.

Open the DevRev account and install the snap-in


To test the snap in Create a issue 

once the issue is created the Snap-in will display a hello Worls comment in the body


## Output screenshot
![Screenshot 2024-04-12 005032](https://github.com/Nishanth57/DevRev/assets/90918241/565b3120-c16f-42a1-ad9f-8aa852e3a0f3)
![Screenshot 2024-04-12 005933](https://github.com/Nishanth57/DevRev/assets/90918241/e8b9e5b6-66bc-4097-92a4-1b7dc48a21f9)
![Screenshot 2024-04-12 010009](https://github.com/Nishanth57/DevRev/assets/90918241/42fea63a-92f5-4eef-9c09-3ff276f8153e)





