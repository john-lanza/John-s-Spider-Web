document.getElementById("submitButton").addEventListener("click", function () {
    const userQuestion = document.getElementById("userQuestion").value.trim();
    const responseElement = document.getElementById("response");

    if (!userQuestion) {
        responseElement.textContent = "Please enter a question.";
        return;
    }

    // Simple classification logic (can be expanded for more advanced scenarios)
    let classification;
    let response;

    if (userQuestion.toLowerCase().includes("increase") || userQuestion.toLowerCase().includes("decrease")) {
        classification = "Linearly";
        response = "Your question seems to describe a situation that can be modeled linearly.";
    } else if (userQuestion.toLowerCase().includes("growth") || userQuestion.toLowerCase().includes("decay")) {
        classification = "Exponentially";
        response = "Your question seems to describe a situation that can be modeled exponentially.";
    } else if (userQuestion.toLowerCase().includes("cycle") || userQuestion.toLowerCase().includes("repeat")) {
        classification = "Cyclically";
        response = "Your question seems to describe a situation that can be modeled cyclically.";
    } else {
        classification = "In another way";
        response = "Your question seems to describe a situation that can be modeled in a different way.";
    }

    // Display classification and response
    responseElement.textContent = `${response} Thank you for your submission!`;
});
