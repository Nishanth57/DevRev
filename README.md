
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






![](output_snapshot\Screenshot 2024-04-12 005032.png)
![](output_snapshot\Screenshot 2024-04-12 005032.png)
![](output_snapshot\Screenshot 2024-04-12 005032.png)
