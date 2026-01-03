package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

type ContactRequest struct {
	Name           string `json:"name"`
	Email          string `json:"email"`
	ProjectDetails string `json:"projectDetails"`
	Message        string `json:"message"`
}

func sendMail(data ContactRequest) error {
	from := os.Getenv("SMTP_EMAIL")
	password := os.Getenv("SMTP_PASSWORD")
	to := os.Getenv("RECEIVER_EMAIL")

	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	body := fmt.Sprintf(
		"Name: %s\nEmail: %s\n\nProject Details:\n%s\n\nMessage:\n%s",
		data.Name,
		data.Email,
		data.ProjectDetails,
		data.Message,
	)

	msg := []byte(
		"Subject: New Portfolio Contact 🚀\n\n" + body,
	)

	auth := smtp.PlainAuth("", from, password, smtpHost)

	return smtp.SendMail(
		smtpHost+":"+smtpPort,
		auth,
		from,
		[]string{to},
		msg,
	)
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	// CORS headers
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	// Handle preflight
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}

	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var data ContactRequest
	err := json.NewDecoder(r.Body).Decode(&data)
	if err != nil {
		log.Println("JSON decode error:", err)
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	log.Printf("Received contact form: Name=%s, Email=%s", data.Name, data.Email)

	err = sendMail(data)
	if err != nil {
		log.Println("SMTP error:", err)
		http.Error(w, "Failed to send email", 500)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message": "Mail sent successfully"}`))
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found")
	}

	http.HandleFunc("/send-mail", contactHandler)

	fmt.Println("✅ Backend running on http://localhost:8080")
	fmt.Println("📬 Endpoint: POST http://localhost:8080/send-mail")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
