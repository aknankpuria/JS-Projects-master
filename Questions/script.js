let data = [
    {
        "button" : q1btn = document.querySelector("#q1btn"),
        "status" : false,
        "answer" : a1 = document.querySelector("#a1")
    },

    {
        "button" : q2btn = document.querySelector("#q2btn"),
        "status" : false,
        "answer" : a2 = document.querySelector("#a2")
    },

    {
        "button" : q3btn = document.querySelector("#q3btn"),
        "status" : false,
        "answer" : a3 = document.querySelector("#a3")
    },

    {
        "button" : q4btn = document.querySelector("#q4btn"),
        "status" : false,
        "answer" : a4 = document.querySelector("#a4")
    }
]

let current;

data.forEach(addlister);

function addlister(value, index, array)
{
    value.button.addEventListener("click", () => {
        if (!value.status)
        {
            value.status = true;
            current = index;

            value.answer.style.maxHeight = "200px";
            styleButton(value.button);
        }

        else
        {
            value.status = false;

            value.answer.style.maxHeight = "0";
            unStyleButton(value.button);
        }

        data.forEach(checkStatus);
    })
}

function checkStatus(value, index, array)
{
    if (value.status && index != current)
    {
        value.status = false;

        value.answer.style.maxHeight = "0";
        unStyleButton(value.button);
    }
}

const styleButton = (button) => {
    button.style.color = "#fff";
    button.style.backgroundColor = "#000";
}

const unStyleButton = (button) => {
    button.style.color = "#000";
    button.style.backgroundColor = "transparent";
}