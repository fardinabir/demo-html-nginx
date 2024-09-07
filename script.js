function checkId() {
    // Get the value entered in the textfield
    var enteredId = document.getElementById("userId").value;
    console.log("CheckId called, value received : ", enteredId)

    // Check if the entered ID is correct (in this case, 170212)
    if (enteredId === "170212") {
        // If correct, redirect to the "answer" page
        window.location.href = "answer.html";
    } else if (enteredId === "170213") {
        // If correct, redirect to the "answer" page
        alert("Seriously?? Who else? It's you!!!");
    } else {
        // If incorrect, display an alert (you can modify this as needed)
        alert("Didn't have concern for your ID. Please try another.");
    }
}




timeout_var = null;

function typeWriter(selector_target, text_list, placeholder = false, i = 0, text_list_i = 0, delay_ms = 100) {
    if (!i) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder = "";
        } else {
            document.querySelector(selector_target).innerHTML = "";
        }
    }
    txt = text_list[text_list_i];
    if (i < txt.length) {
        if (placeholder) {
            document.querySelector(selector_target).placeholder += txt.charAt(i);
        } else {
            document.querySelector(selector_target).innerHTML += txt.charAt(i);
        }
        i++;
        timeout_var = setTimeout(typeWriter, delay_ms, selector_target, text_list, placeholder, i, text_list_i);
    } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
            timeout_var = setTimeout(typeWriter, (delay_ms * 5), selector_target, text_list, placeholder);
        } else {
            i = 0;
            timeout_var = setTimeout(typeWriter, (delay_ms * 3), selector_target, text_list, placeholder, i, text_list_i);
        }
    }
}

text_list = [
    "Enter Your Student ID...",
    "Hurry Up..",
    "Find Your True Lover..."
];

return_value = typeWriter("#userId", text_list, true);


