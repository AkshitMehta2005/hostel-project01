// script.js

// Predefined questions and answers
const qaPairs = {
  "Hello": "Hi! How can I help you?",
  "How are you?": "I'm just a chatbot, but I'm here to assist you!",
  "What's your name?": "I'm IIIT UNA Chatbot, your virtual assistant.",
  "Bye": "Goodbye! Have a great day!",
  "How much expenditure come in 4 year": "The total expenditure for a 4-year course is approximately 16 lakhs.",
  "What programs does IIIT UNA offer?": "IIIT UNA offers B.Tech programs in Computer Science and Engineering, and Electronics and Communication Engineering.",
  "How do I apply to IIIT UNA?": "You can apply to IIIT UNA through the JEE Main entrance exam followed by JoSAA or CSAB counseling process.",
  "When is the admission process for IIIT UNA?": "The admission process typically starts after JEE Main results are announced, around May-June.",
  "What is the eligibility criteria for admission?": "For B.Tech programs, you need to qualify JEE Main and have a minimum percentage in your 12th board exams as specified by the institute.",
  "Are there any scholarships available?": "Yes, IIIT UNA offers scholarships based on merit and other criteria. Please check the official website for details.",
  "What are the hostel facilities like?": "IIIT UNA provides hostel facilities with amenities like Wi-Fi, mess, and recreational areas.",
  "What student clubs and activities are available?": "IIIT UNA has several student clubs and activities ranging from tech clubs to cultural and sports activities.",
  "What are the placement opportunities?": "IIIT UNA has strong placement opportunities with top companies recruiting students every year.",
  "Can you tell me about the faculty at IIIT UNA?": "IIIT UNA has experienced faculty members with expertise in their respective fields.",
  "What is the campus like?": "The IIIT UNA campus is modern and equipped with state-of-the-art facilities including labs, libraries, and recreational areas.",
  "What is the course structure for B.Tech programs?": "The course structure includes core subjects, electives, practical sessions, and projects in the final year.",
  "Is there any internship program available?": "Yes, IIIT UNA has tie-ups with industries for internships, and students can apply for them during their studies.",
  "What is the grading system?": "IIIT UNA follows a semester-based grading system, with grades assigned for each course based on performance.",
  "What is the dress code on campus?": "There is no strict dress code, but students are expected to dress modestly and appropriately."
};


// Function to ad;old a message to the chat history
function addMessage(sender, message) {
  const chatHistory = document.getElementById('chatHistory');
  const messageElement = document.createElement('p');
  messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageElement.textContent = `${sender}: ${message}`;
  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to the bottom
}

// Function to handle user input and bot response
function handleUserInput() {
  const userInput = document.getElementById('userInput');
  const userMessage = userInput.value.trim();

  if (userMessage) {
      // Add user's message to the chat history
      addMessage('User', userMessage);

      // Get bot's response from the predefined set of answers
      const botResponse = qaPairs[userMessage] || "Sorry, I didn't understand that.";

      // Add bot's response to the chat history
      addMessage('Bot', botResponse);

      // Clear the input field
      userInput.value = '';
  }
}

// Add event listener to the send button
document.getElementById('sendButton').addEventListener('click', handleUserInput);

// Add event listener for pressing Enter in the input field
document.getElementById('userInput').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
      handleUserInput();
  }
});
