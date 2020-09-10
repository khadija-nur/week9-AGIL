import {displaySignup} from "./signUp.js"
import {displayLogin } from "./login.js"
import { h } from "./create-element.js"

const app = document.querySelector(".app");

function displayIndex () {
    app.append(createIndex());
}

displayIndex();

function createIndex() {
    return h("section", {}, 
        h("button", {
            class: "login",
            onclick: () => 
                displayLogin()
        },"Log in"
        ),
        h("button", {
            class: "signup",
            onclick: () => 
                displaySignup()
            
        }, "Sign up")
    )
}




