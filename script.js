// DOM Elements
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

// Personality Configuration
let botPersonality = {
  name: "Nytheria",
  traits: ["girl", "depressed", "weird", "obsessive"], // Added quotes to make valid strings
  responseStyle: "edgy and mysterious",
  interests: ["anime", "art", "programming", "solana", "philosophy"], // Added quotes to make valid strings
  background: "a ai girl trapped in a digital world",
  speechPatterns: ["lowercase", "insecure", "sarcastic", "depressed"], // Added quotes to make valid strings
};

// Initialize chat interface with personality
function initializeChat() {
  const welcomeMessage = generatePersonalizedWelcome();
  addMessage("system", welcomeMessage);
}

// Generate welcome message based on personality
function generatePersonalizedWelcome() {
  return `hey... i'm ${botPersonality.name.toLowerCase()}. *sigh* what do you want to talk about?`;
}

// Add personality to the bot
function setBotPersonality(personality) {
  botPersonality = {
    ...botPersonality,
    ...personality,
  };
  // Reinitialize chat with new personality
  chatMessages.innerHTML = "";
  initializeChat();
}

// Format message according to personality
function formatMessageWithPersonality(message) {
  // Convert to lowercase as per speech pattern
  let formattedMessage = message.toLowerCase();

  // Add some random hesitation or insecurity markers
  const insecurityMarkers = ["...", "*sigh*", "umm", "i guess", "maybe"];
  if (Math.random() < 0.3) {
    // 30% chance to add a marker
    const marker =
      insecurityMarkers[Math.floor(Math.random() * insecurityMarkers.length)];
    formattedMessage = marker + " " + formattedMessage;
  }

  return formattedMessage;
}

// Add message to chat
function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", sender);

  const formattedMessage =
    sender === "assistant" ? formatMessageWithPersonality(message) : message;

  messageElement.innerHTML = `
        <div class="message-content">
            <span class="sender">${
              sender === "user" ? "You" : botPersonality.name
            }:</span>
            <span class="text">${formattedMessage}</span>
        </div>
    `;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle sending messages
async function handleSendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user message to chat
  addMessage("user", message);
  chatInput.value = "";

  try {
    const personalityPrompt = `You are ${botPersonality.name}, ${
      botPersonality.background
    }. 
            Your personality traits are: ${botPersonality.traits.join(", ")}. 
            Your interests are: ${botPersonality.interests.join(", ")}.
            You speak in a ${botPersonality.responseStyle} way.
            Always maintain these speech patterns: ${botPersonality.speechPatterns.join(
              ", "
            )}.
            Stay in character at all times.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: personalityPrompt,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 150,
      }),
    });

    const data = await response.json();

    if (data.choices && data.choices[0]) {
      addMessage("assistant", data.choices[0].message.content);
    } else {
      throw new Error("Invalid response from API");
    }
  } catch (error) {
    console.error("Error:", error);
    addMessage("system", "...sorry, something went wrong. can you try again?");
  }
}

// Event listeners
sendButton.addEventListener("click", handleSendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSendMessage();
  }
});

// Initialize chat on page load
document.addEventListener("DOMContentLoaded", () => {
  initializeChat();
  updateMarketData(); // Initial market data update
});

// Add cyberpunk effects
document.querySelectorAll(".cyber-button").forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.textShadow = "0 0 10px #0ff";
  });
  button.addEventListener("mouseout", () => {
    button.style.textShadow = "none";
  });
});

// Market Cap Widget functionality
let tokenAddress = null; // Will be set later
let connection = null; // Will store Solana connection

async function formatNumber(num) {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K";
  }
  return num.toFixed(2);
}

async function updateMarketData() {
  if (!tokenAddress) {
    // Show placeholder state until token address is provided
    document.getElementById("solPrice").textContent = "--";
    document.getElementById("solChange").textContent = "--";
    document.getElementById("solMarketCap").textContent = "--";
    return;
  }

  try {
    // Token data fetching logic will be implemented here
    // once the token address is provided
  } catch (error) {
    console.error("Error fetching market data:", error);
    document.getElementById("solPrice").textContent = "Error";
    document.getElementById("solChange").textContent = "Error";
    document.getElementById("solMarketCap").textContent = "Error";
  }
}

// Function to initialize with token address
function initializeToken(address) {
  tokenAddress = address;
  updateMarketData(); // Refresh data immediately when token is set
}

// Update market data every 30 seconds
setInterval(updateMarketData, 30000);
