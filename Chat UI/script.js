document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".sidebar-tab");
    const profileContent = document.querySelector(
      ".user-profile-card, .user-info-section"
    );
    const filesContent = document.querySelector(".files-list");
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        tabs.forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
  
        if (this.textContent === "Profile") {
          profileContent.style.display = "block";
          filesContent.style.display = "none";
        } else {
          profileContent.style.display = "none";
          filesContent.style.display = "block";
        }
      });
    });
  
    // Dark mode toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
  
      if (document.body.classList.contains("dark-mode")) {
        this.innerHTML = `
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                          </svg>
                      `;
      } else {
        this.innerHTML = `
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <circle cx="12" cy="12" r="5"></circle>
                              <line x1="12" y1="1" x2="12" y2="3"></line>
                              <line x1="12" y1="21" x2="12" y2="23"></line>
                              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                              <line x1="1" y1="12" x2="3" y2="12"></line>
                              <line x1="21" y1="12" x2="23" y2="12"></line>
                              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                          </svg>
                      `;
      }
    });
  
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const leftSidebar = document.querySelector(".left-sidebar");
  
    mobileMenuBtn.addEventListener("click", function () {
      leftSidebar.classList.toggle("active");
    });
  
    const toggleRightSidebar = document.getElementById("toggle-right-sidebar");
    const rightSidebar = document.querySelector(".right-sidebar");
  
    toggleRightSidebar.addEventListener("click", function () {
      rightSidebar.classList.toggle("active");
    });
  
    document.addEventListener("click", function (e) {
      if (
        window.innerWidth <= 768 &&
        !e.target.closest(".left-sidebar") &&
        !e.target.closest("#mobile-menu-btn") &&
        leftSidebar.classList.contains("active")
      ) {
        leftSidebar.classList.remove("active");
      }
  
      if (
        window.innerWidth <= 1200 &&
        !e.target.closest(".right-sidebar") &&
        !e.target.closest("#toggle-right-sidebar") &&
        rightSidebar.classList.contains("active")
      ) {
        rightSidebar.classList.remove("active");
      }
    });
  
    const messageInput = document.querySelector(".message-input");
    const sendButton = document.querySelector(".send-button");
  
    messageInput.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)";
      this.parentElement.style.transition = "all 0.3s ease";
    });
  
    messageInput.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
    });
  
    sendButton.addEventListener("click", function () {
      const messageText = messageInput.value.trim();
      if (messageText) {
        const messagesContainer = document.querySelector(".messages");
        const newMessage = document.createElement("div");
        newMessage.className = "message sent";
  
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const time = `${hours}:${minutes}`;
  
        newMessage.innerHTML = `
                          <div class="message-content">
                              ${messageText}
                              <div class="message-meta">
                                  <span class="message-time">${time}</span>
                                  <span class="message-status">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                          <polyline points="20 6 9 17 4 12"></polyline>
                                      </svg>
                                  </span>
                              </div>
                          </div>
                      `;
  
        messagesContainer.appendChild(newMessage);
        messageInput.value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
        // Animate send button
        sendButton.style.transform = "scale(0.8)";
        setTimeout(() => {
          sendButton.style.transform = "scale(1)";
        }, 200);
      }
    });
  
    messageInput.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        sendButton.click();
      }
    });
  
    // Contacts interaction
    const contacts = document.querySelectorAll(".contact");
    contacts.forEach((contact) => {
      contact.addEventListener("click", function () {
        contacts.forEach((c) => c.classList.remove("active"));
        this.classList.add("active");
        this.classList.remove("unread");
  
        if (window.innerWidth <= 768) {
          leftSidebar.classList.remove("active");
        }
      });
    });
  });