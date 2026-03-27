async function userDashboard (){
    try{
        const userRes = await fetch('https://randomuser.me/api/');
        if(!userRes.ok){
            throw new Error("Something went wrong...")
        }
        const userData = await userRes.json();
        const user = userData.results[0];

        const userName = user.name.first;

        // console.log(userName);

        const ageRes = await fetch(`https://api.agify.io/?name=${userName}`);
        if(!ageRes.ok){
            throw new Error("Something went wrong when trying to get the age...");
        }
        const ageData = await ageRes.json();
        const userAge = ageData.age;
        console.log(userAge);
    }catch(error){
        console.error("Error: ", error);
        
    }
}

userDashboard(); 