



var conte = [];
if (localStorage.getItem("my products") == null) {
    conte = [];
}
else {
    conte = JSON.parse(localStorage.getItem("my products"))
    data();
}

function add() {
    var proName = document.getElementById("name").value;
    var proPrice = document.getElementById("price").value;
    var proCat = document.getElementById("cat").value;




    if (proName == "" || proPrice == "" || proCat == "") {
        alert("Please fill all fields");
        return; // exit the function without adding the product
    }

    product =
    {
        asmo: proName,
        price: proPrice,
        cat: proCat,

    }
    conte.push(product);
    localStorage.setItem("my products", JSON.stringify(conte));
    console.log(conte)
    data();
    //clear();
    clearInputs();
}

function data() {
    var temp = "";
    for (i = 0; i < conte.length; i++) {
        temp += `  <div class="col-md-3 col-sm-6 asasas mb-4">
        <img class="img-fluid" src="images/forest.jpg">
        <h5 class="d-flex justify-content-between" >`+ conte[i].asmo + ` <span class="badge bg-danger   ">` + conte[i].cat + `</span></h5>
       <div class="els3r">`+ conte[i].price + `</div>
       <button onclick="deletepro(`+ i + `)" class="btn btn-outline-danger">delete</button>
       <button onclick="updateProduct(`+ i + `)" class="btn btn-outline-warning">update</button>
    </div>`

    }

    document.getElementById("mohem").innerHTML = temp
}

function clearInputs() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
/*
function search() {
    var temp = "";
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    for (i = 0; i < conte.length; i++) {
      if (conte[i].asmo.toLowerCase().indexOf(searchTerm) !== -1) {
        temp += `  <div class="col-md-3 col-sm-6 asasas">
          <img class="img-fluid" src="images/forest.jpg">
          <h5 class="d-flex justify-content-between" >`+ conte[i].asmo + ` <span class="badge bg-danger   ">` + conte[i].cat + `</span></h5>
          <div class="els3r">`+ conte[i].price + `</div>
        </div>`
      }
    }
    document.getElementById("mohem").innerHTML = temp
  }
*/
function search(term) {
    var temp = ``
    for (i = 0; i < conte.length; i++) {
        if (conte[i].asmo.toLowerCase().includes(term.toLowerCase())) {

            temp += `  <div class="col-md-3 col-sm-6 asasas mb-4">
            <img class="img-fluid" src="images/forest.jpg">
            <h5 class="d-flex justify-content-between" >`+ conte[i].asmo + ` <span class="badge bg-danger   ">` + conte[i].cat + `</span></h5>
           <div class="els3r">`+ conte[i].price + `</div>
           <button onclick="deletepro(`+ i + `)" class="btn btn-outline-danger">delete</button>
           <button onclick="updateProduct(`+ i + `)" class="btn btn-outline-warning">update</button>
        </div>`;

        }
    }
    document.getElementById("mohem").innerHTML = temp;
}
function deletepro(indx) {
    var dele = conte.splice(indx, 1);
    localStorage.setItem("my products", JSON.stringify(conte));
    data();

}
/*
function updateProduct(indx) {
    var newName = prompt("Enter new name");
    var newPrice = prompt("Enter new price");
    var newCategory = prompt("Enter new category");
    if (newName !== null && newName !== "") {
        conte[indx].asmo = newName;
    }
    if (newPrice !== null && newPrice !== "") {
        conte[indx].price = newPrice;
    }
    if (newCategory !== null && newCategory !== "") {
        conte[indx].cat = newCategory;
    }
    localStorage.setItem("my products", JSON.stringify(conte));
    displayProducts();
}
*/
function updateProduct(index) {
    var name = prompt("Enter new product name:");
    var price = prompt("Enter new product price:");
    var category = prompt("Enter new product category:");

    if (name === "" || price === "" || category === "") {
        alert("Please enter all product information");
        return;
    }

    conte[index] = {
        asmo: name,
        price: price,
        cat: category
    };

    localStorage.setItem("my products", JSON.stringify(conte));
    data();
}
function validate(userName) {

    var userVali = /^[A-Z][a-z]{3,8}$/;
    if (userVali.test(userName) == false) {
        document.getElementById("addbtn").setAttribute('disabled', true)
    }
    else {
        document.getElementById("addbtn").removeAttribute("disabled");
    }
}