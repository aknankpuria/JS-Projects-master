const submitBtn = document.querySelector("#submit-item-btn");
const inputContainer = document.querySelector("#item-input-container");
const itemContainer = document.querySelector(".item-container");
const clearItemsBtn = document.querySelector("#clear-items-btn");

let editMode = false;
let itemToEdit;
let count = 0;

submitBtn.addEventListener("click", SubmitBtnFunc);

//    *** ADD LOCAL STORAGE FUNCTIONALITY ***

// if (window.localStorage.length)
// {
//     let i = 0;
//     let len = window.localStorage.length - 1;
//     while (len)
//     {
//         itemContainer.appendChild(window.localStorage.getItem(i));
//         i++;
//         len--;
//     }
// }

function SubmitBtnFunc(e)
{
    e.preventDefault();

    if (editMode)
    {
        submitBtn.innerHTML = "Submit";
        let itemToEditNewName = inputContainer.value;
        itemToEdit.innerHTML = itemToEditNewName;

        addStatus("Item Edited");

        editMode = false;
    }

    else
    {
        let itemName = inputContainer.value;
    
        if (itemName)
        {
            addItem(itemName);
            addStatus("Item Submitted");
        }

        else
            addStatus("Please Enter Item Before Submiting");
    }
    inputContainer.value = "";
}

const addItem = (itemName) => {
    let div = document.createElement("div");
    div.classList.add("item");

    let text = document.createElement("text");
    text.classList.add("item-name");
    text.innerHTML = itemName;

    let editItemBtn = document.createElement("button");
    editItemBtn.classList.add("edit-item-btn");
    editItemBtn.innerHTML = `<img src="res/editIcon.png"/>`;
    editItemBtn.addEventListener("click", editBtnFunc);

    let delItemBtn = document.createElement("button");
    delItemBtn.classList.add("del-item-btn");
    delItemBtn.innerHTML = `<img src="res/deleteIcon.png"/>`;
    delItemBtn.addEventListener("click", delBtnFunc);

    div.appendChild(text);
    div.appendChild(editItemBtn);
    div.appendChild(delItemBtn);

    itemContainer.appendChild(div);

    console.log(div)
    count++;
}

clearItemsBtn.addEventListener("click", () => {
    if (itemContainer.firstChild)
    {
        itemContainer.textContent = "";
        addStatus("All Items Cleared!");
    }

    else
        addStatus("No Item To Clear");
})

function editBtnFunc(e)
{
    editMode = true;
    submitBtn.innerHTML = "Edit";
    inputContainer.focus();

    itemToEdit = e.target.parentElement.parentElement.querySelector(".item-name");
    itemToEditOldName = e.target.parentElement.parentElement.querySelector(".item-name").innerHTML;

    inputContainer.value = itemToEditOldName;
}

function delBtnFunc(e)
{
    itemContainer.removeChild(e.target.parentElement.parentElement);
    addStatus("Item Deleted!");
}

const statusContainer = document.querySelector(".status-container");

function addStatus(status)
{
    statusContainer.firstChild.innerHTML = status;

    setTimeout(() => {
        statusContainer.firstChild.innerHTML = "";        
    }, 2000);
}

function AddToStorage(value)
{
    localStorage.setItem("1", JSON.stringify(value));
}