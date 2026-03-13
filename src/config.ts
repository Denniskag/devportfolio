
export const siteConfig = {
  name: "Dennis Kagaba",
  title: "Data Scientist",
  description: "Portfolio website of Dennis Kagaba",
  accentColor: "#1d4ed8",
  social: {
    email: "denniskag@gmail.com",
    //phone: "+256XXXXXXXXX",
    linkedin: "https://www.linkedin.com/in/kagaba-dennis-b56853176/",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/Denniskag",
  },
  aboutMe:
    "Data Scientist focused on turning data into practical solutions using machine learning, statistical analysis, and data visualization. Experienced in building predictive models, uncovering patterns in complex datasets, and communicating insights that guide strategic decisions. Passionate about developing data-driven systems that improve efficiency, product performance, and business impact.",
  skills: ["Machine learning", "Python", "Power Bi", "Python", "SQL", "Advanced Excel", "Deep Learning", "NLP"],
  projects: [
    {
      name: "Fraud_detection in Mobile Money Transactions using differentially Private Machine learning Techniques",
      description:
        "Developing a fraud detection models for mobile money transactions using synthetic data while incorporating differential privacy to preserve user privacy",
      link: "https://github.com/Denniskag/Python-Project-for-Data-Science/blob/main/Fraud_detection_in_Mobile_Money_Transactions_using_differentially_Private_Machine_learning_Techniques.ipynb",
      skills: ["Machine Learning", "Mobile Money Fraud detection", "Differential Privacy"],
    },
    {
      name: "Explainable Deep Ensemble Learning for Improved Credit Default Prediction",
      description:
        "Designing deep learning ensemble frameworks for credit default prediction and integrating SHAP and LIME methods to provide interpretable and explainable AI insights",
      link: "https://nbviewer.org/github/Denniskag/Python-Project-for-Data-Science/blob/main/Explainable_Deep_Ensemble_Learning_for_Improved_Credit_Default_Prediction.ipynb",
      skills: ["Deep Learning", "Explainable AI", "Credit default Prediction"],
    },
    {
      name: "Sentiment Analysis Web App (NLP)",
      description:
        "Building a sentiment analysis model to classify text as positive, negative, or neutral, and deploying the model using Streamlit",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["NLP", "Streamlit"],
    },
    {
      name: "Wildlife Image Classification Web App",
      description:
        "Developed a machine learning model to classify animal species in a national park using image data and deployed the model as an interactive web application.",
      link: "https://github.com/Denniskag/Image-Classification/blob/main/Mini_Project.ipynb",
      skills: ["Computer vision", "Machine learning", "Streamlit"],
    },
  
  ],
  experience: [
    {
      company: "Volcafe Uganda",
      title: "Data Analyst",
      dateRange: "May 2024 - Present",
      bullets: [
        "Led the development of a robust coffee traceability system, enabling end to end tracking from farm to export in compliance with the EU Deforestation Regulation, thereby enhancing supply chain transparency and efficiency.",
        "Managed end-to-end data for 50,000+ farmers, ensuring high-quality datasets for compliance, performance monitoring, and strategic decision-making.",
        "Automated KPI frameworks and interactive dashboards to track supply chain performance, farmer engagement, and ESG risks, enabling real-time reporting for audits",
      ],
    },
    {
      company: "Ruparelia Group",
      title: "IT Systems Technician",
      dateRange: "Sep 2022 - Sep 2023",
      bullets: [
        "Designed, configured, and installed analog and digital surveillance systems",
        "Monitored and documented system performance, generated incident reports, and offered strategic recommendations for surveillance enhancements. ",
        "Independently resolved 95% of field technical issues and bridged communication gaps by delivering clear, actionable findings to non-technical stakeholders",
      ],
    },
    {
      company: "KPMG",
      title: "Data Analytics Consulting Graduate Trainee",
      dateRange: "May 2022 - March 2023",
      bullets: [
        "Conducted a structured data quality assessment identifying data inconsistencies, profiling issues, and missing values using KPMG approved frameworks.",
        "Produced a detailed assessment report highlighting process observations, data quality risks, and recommended remediation strategies.",
        "Derived meaningful insights from raw datasets using analytical techniques to support client decision making objectives and business goals.",
      ],
    },
  ],
  education: [
    {
      school: "Makerere University",
      degree: "Master of Science in Computer Science",
      dateRange: "2023 - 2025",
      achievements: [
      ],
    },
    {
      school: "National Institute of Technology Meghalaya",
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      dateRange: "2017 - 2021",
      achievements: [
      ],
    },
  ],
};
