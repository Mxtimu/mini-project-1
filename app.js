const btn = document.getElementById("loadUser");
const output = document.getElementById("output");

btn.addEventListener ("click",async function userDashboard (){
    try{
        output.innerHTML = "Loading...";
        const userRes = await fetch('https://randomuser.me/api/');
        if(!userRes.ok){
            throw new Error("Something went wrong...")
        }
        const userData = await userRes.json();
        const user = userData.results[0];

        const userName = user.name.first;
        const userCountry = user.location.country;

        // console.log(userName);

        const ageRes = await fetch(`https://api.agify.io/?name=${userName}`);
        if(!ageRes.ok){
            throw new Error("Something went wrong when trying to get the age...");
        }
        const ageData = await ageRes.json();
        const userAge = ageData.age;
        // console.log(userAge);

        const genderRes = await fetch(`https://api.genderize.io/?name=${userName}`);
        if(!genderRes.ok){
            throw new Error("Something went wrong when trying to get the gender...");


        }
        const genderData = await genderRes.json();
        const userGender = genderData.gender;

        // console.log(userGender);

        output.innerHTML = `
            <p><strong>Name:</strong> ${userName}</p>
            <p><strong>Country:</strong> ${userCountry}</p>
            <p><strong>Age:</strong> ${userAge}</p>
            <p><strong>Gender:</strong> ${userGender}</p>
        `;
    }catch(error){
        console.error("Error: ", error);
        
    }
}
 );
// userDashboard(); 