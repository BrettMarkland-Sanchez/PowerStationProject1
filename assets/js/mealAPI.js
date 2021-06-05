//Meal API
//set api endpoint url as variable
let mealCatURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
//set DOM element for meal category cards as variable
let mealCatCard = $('#meal-categories');
//fetch data from api endpoint
fetch(mealCatURL)
    //transform response into JSON
    .then(response => response.json())
    //pass JSON data into fillMealCatArray function
    .then(data => fillMealCatArray(data));
    //this function reads thru the api data and creates an array of categories and an array
    //of the photo links for each category
    function fillMealCatArray(data){
    //create array for category names and image links
    let mealCatArray = [];
    let mealCatPhotoLinkArray =[];
    //for each category returned from the API, store the name in mealCatArray
    //and store the photo link in mealCatPhotoLinkArray
    for(let i=0;i<data.categories.length;i++){
        mealCatArray.push(data.categories[i].strCategory);
        mealCatPhotoLinkArray.push(data.categories[i].strCategoryThumb);
    }

    //pass the name array and the photo link array to the display function
    displayMealCatButtons(mealCatArray,mealCatPhotoLinkArray);
}
//this function displays the categories by creating elements, filling them
//with the array data, and then appending them to the meal category card
function displayMealCatButtons(mealCatArray, mealCatPhotoLinkArray){
    for(let i=0; i<mealCatArray.length;i++){
        let catBtn = document.createElement('input');
        catBtn.type = 'image';
        catBtn.src = mealCatPhotoLinkArray[i]
        catBtn.setAttribute('style',`background:${mealCatPhotoLinkArray[i]}`);

        mealCatCard.append(catBtn);

    }
}