//Chris Pipitone Assinment-4 TTP


// 1.	Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"
const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const p1 = document.getElementById("p1");

if (b1 && b2)
{
    b1.addEventListener("click", () => {
        p1.innerText= "I'm Right";
    });
    
    b2.addEventListener("click", () => {
        p1.innerText= "No I'm Right!";
    
    });
}


// 2.	Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!
const part2 = document.getElementById("part2");
if(part2)
{
    part2.addEventListener("mouseover", () =>{ 
        alert('Hey, I told you not to hover over me!');
    });
}

// 3.	Create an HTML page with a form. It should include inputs for a username, email, and password. Also a submit button.
// 4.	In a Javascript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.HTML page.
// 5.	Add a CSS stylesheet that styles all of your pages.
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("Password");
const form = document.getElementById("part3Form");
const part3Header = document.getElementById("part3Heading");

if(form)
{
    form.addEventListener('submit', (e) => {
        if(password.value == "12345678")
        {
          part3Header.innerHTML = "Correct Password!";
        }
        else
            alert('Incorrect Password!!!!!');
        e.preventDefault();
    })
}

