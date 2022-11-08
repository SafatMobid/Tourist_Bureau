/* Place to keep tested code or need to test code */

activityBox.length = 0
for(let i = 0; i < activities.length; i++)
{
    let aCategory = activities[i].category
    let aId = activities[i].id
    let aName = activities[i].name
    let aDescription = activities[i].description
    let aLocation = activities[i].location
    let aPrice = number(activities[i].price).value
    
    if (currentChoice == aCategory)
    {
        let 
    }
}


/* --------------------------------------------------------------------------- */

function activitiesChange()
{
    const currentChoice = document.getElementById("activitiesList").value;
    const activitiesBox = document.getElementById("activitiesBox");

    if (currentChoice == "Adventures")
    {
        activitiesBox.length = 0
        for(let i = 0; i < activities.length; i++)
        {
            let aCategory = activities[i].category
            let aId = activities[i].id
            let aName = activities[i].name
            let aDescription = activities[i].description
            let aLocation = activities[i].location
            let aPrice = number(activities[i].price).value
            
            if (currentChoice == activities[i].category)
            {
                let categories = activities.categories
                let length = categories.length
                
                for (let i = 0; i < length; i++) 
                {
                let activitiesName = activities[i].category
                
                let option = document.createElement("option"); 
                option.textContent = activitiesName;
                option.value = activitiesName;
                activitiesBox.appendChild(option);

                }
            }
        }
        
    }
}


