async function userDashboard (){
    try{
        const userRes = await fetch('https://randomuser.me/api/');
        if(!userRes.ok){
            throw new Error("Something went wrong...")
        }
        const userData = await userRes.json();
        const user = userData.results[0];

        const userName = user.name.first;

        console.log(userName);
    }catch(error){
        console.error("Error: ", error);
        
    }
}

userDashboard(); 