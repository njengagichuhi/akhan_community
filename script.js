
let loginForm = document.getElementById("fo");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let birthday = document.getElementById("birthday");
  let gender = document.getElementById("inputGroupSelect01");

  if (birthday.value == "" || gender.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a birthday of ${birthday.value} and gender of ${gender.value}`
    );

    birthday.addEventListener('click', getname)
    function getname() {


      let female = {
        sunday: "akosua",
        monday: "adogoa",
        tuesday: "abenaa",
        wednesday: "akua",
        thursdar: "yag",
        friday: "afua",
        satuday: "ama"
      }
      let male = {
        sunday: "kwasi",
        monday: "kwado",
        tuesday: "kwabena",
        wednesday: "kwaku",
        thursdar: "yaw",
        friday: "kufi",
        satuday: "kwame"
      }
      var birth =new Date(birthday.value);
      var day1 = birth.getDay();
      if (gender.value == 'female') {document.getElementById("fo").innerHTML=
        ( "helloo if you where born in the akhan community your name could be " + Object.values(female)[day1].toUpperCase())
      }
    
      else if (gender.value == 'male') { document.getElementById("fo").innerHTML=("helloo if you where born in the akhan community your name could be " + Object.values(male)[day1].toUpperCase())}
    }



    console.log(getname())

    function changeStyle(){
      var element = document.getElementById("guid");
      element.style.display = "none";
  }
  changeStyle()


    birthday.value = "";
    gender.value = "";
  }
});