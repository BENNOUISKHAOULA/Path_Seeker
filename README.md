# **Path Seeker**

Path Seeker is a modern React application designed to help students discover academic and career paths that align with their interests. Using an interactive questionnaire and AI-driven analysis, Path Seeker provides personalized recommendations to guide students toward the fields that best fit their aspirations.

## **Features**
- **Interactive Questionnaire**: Collects student preferences and interests.
- **AI-Driven Recommendations**: Leverages artificial intelligence to provide tailored academic and career paths.
- **ElasticSearch Integration**: Implements powerful search and filtering capabilities to explore academic fields and career options.

---

## **Prerequisites**

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version **20** or higher)
- npm (comes with Node.js) or [yarn](https://yarnpkg.com/)
- [ElasticSearch](https://www.elastic.co/elasticsearch/) (latest version)

---

## **Installation**

### 1. **Clone the Repository**
```bash
git clone https://github.com/BENNOUISKHAOULA/path_seeker.git
cd react-19
```

### 2. **Install the Dependencies**
```bash
npm install
```

### 3. **Set Up ElasticSearch**
- Download and install ElasticSearch from the [official website](https://www.elastic.co/downloads/elasticsearch).
- Start the ElasticSearch server:
  ```bash
  elasticsearch
  ```
- Verify ElasticSearch is running by visiting:
  ```
  http://localhost:9200
  ```

### 4. **Start the Development Server**
```bash
npm start
```
The application will run on `http://localhost:3000` by default.

---

## **Usage**

1. Open your browser and navigate to `http://localhost:3000`.
2. Complete the questionnaire to receive personalized recommendations.
3. Use the search bar (powered by ElasticSearch) to explore academic fields and career options.
4. View suggestions based on AI-driven analysis and refine your preferences as needed.

---

## **Project Structure**
- **`src`**: Contains all React components, hooks, and pages.
- **`public`**: Static files like `index.html` and assets.
- **`vite.config.ts`**: Configuration file for Vite.
- **ElasticSearch Integration**: 
  - The search logic resides in `src/hooks/useElasticSearch.ts` (example location).

---

## **Future Enhancements**
- **Enhanced AI Algorithms**: Improve the accuracy of recommendations using advanced machine learning models.
- **ElasticSearch Optimization**: Add autocomplete suggestions, search filters, and paginated results.
- **User Dashboard**: Create a personalized space for users to track their progress and explore further recommendations.
- **Feedback Module**: Allow users to rate recommendations and provide feedback to improve the AI's performance.
- **Mobile Support**: Build a responsive and user-friendly mobile version of the app.

---

## **Contributing**

We welcome contributions from the community! To contribute:
1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to your branch: `git push origin feature-name`.
5. Open a pull request, and describe your changes in detail.

Feel free to open an issue to suggest new ideas or report bugs.

---

## **License**

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

