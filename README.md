# Phishing Website Detection Chrome Extension

## 🚀 Overview
This project is a Chrome extension that detects phishing websites using a machine learning model.

## 🧠 Features
- Real-time phishing URL detection
- Machine learning-based classification
- Chrome extension integration
- Gradio-based API deployment

## 🛠️ Tech Stack
- Python (scikit-learn, pandas, numpy)
- JavaScript (Chrome Extension APIs)
- Gradio (for deployment)

## ⚙️ How it Works
- User opens a website
- Extension sends URL to ML model
- Model predicts phishing or safe
- Result displayed in extension popup

## 📂 Project Structure
- manifest.json → Chrome config
- pop.html / pop.js → Extension UI
- model.pkl → trained ML model
- vectorizer.pkl → text processing
- dataset → training data

## 📸 Demo

### 🔍 Chrome Extension Output
#### ⚠️ Phishing Website
<img width="389" height="474" alt="image" src="https://github.com/user-attachments/assets/fe477eef-953b-408d-846e-08760a11134e" />

#### ✅ Safe Website
<img width="384" height="477" alt="image" src="https://github.com/user-attachments/assets/de74e005-7607-4aed-a8f5-a3da932325d3" />

### 📊 Model Performance
<img width="645" height="678" alt="image" src="https://github.com/user-attachments/assets/9dede6b2-edc2-4363-8457-c7d1bf6854ef" />
- Logistic Regression Accuracy: ~97%
- Ensemble Model Accuracy: ~95%

## 👨‍💻 Author
Mohd Asim

## Note
Due to GitHub file size limits, trained model files and dataset are not included in this repository.
