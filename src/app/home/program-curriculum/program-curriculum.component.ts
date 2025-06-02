import { Component } from '@angular/core';

interface Week {
  label: string;
  value: string;
  bootcamp?: boolean;
  visible: boolean;
}

interface Content {
  heading: string;
  points: string[];
}

@Component({
  selector: 'app-program-curriculum',
  templateUrl: './program-curriculum.component.html',
  styleUrls: ['./program-curriculum.component.css']
})
export class ProgramCurriculumComponent {
  // Tabs for program types
  programTabs = [
    { label: 'Web/App Development', key: 'webApp' },
    { label: 'Data Science', key: 'dataScience' },
    { label: 'DevOps', key: 'devOps' },
    { label: 'Bootcamp', key: 'bootcamp' }
  ];
  selectedProgram = 'webApp';

  // Weeks data with bootcamp toggle
  weeks: Week[] = [
    { label: 'Week 1-4', value: '1', visible: true },
    { label: 'Week 5-8', value: '2', visible: true },
    { label: 'Week 9-12', value: '3', visible: true },
    { label: 'Week 13-16', value: '4', visible: true },
    { label: 'Week 17-20', value: '5', visible: true },
    { label: 'Week 21-24', value: '6', visible: true },
    // Bootcamp days hidden by default
    { label: 'Day 1', value: '1', bootcamp: true, visible: false },
    { label: 'Day 2', value: '2', bootcamp: true, visible: false }
  ];
  selectedWeek = this.weeks[0];

  // Mock content for each program and week (example)
  contentMap: Record<string, Record<string, Content>> = {
    webApp: {
      1: {
        heading: "Building Foundations",
        points: [
          "HTML & CSS: Structuring and Styling Websites",
          "JavaScript Essentials: Programming for the Web",
          "Version Control with Git and GitHub",
          "Responsive Design and Accessibility",
        ],
      },
      2: {
        heading: "Frontend Development",
        points: [
          "Advanced JavaScript Concepts",
          "React Basics: Components, State, and Props",
          "Introduction to Angular: Modules and Components",
          "Building Dynamic User Interfaces with Frontend Frameworks",
        ],
      },
      3: {
        heading: "Backend Development",
        points: [
          "Introduction to Node.js and Express.js",
          "Database Management with MongoDB",
          "Creating RESTful APIs",
          "Authentication and Authorization with JWT",
        ],
      },
      4: {
        heading: "Full-Stack Development",
        points: [
          "Integrating Frontend and Backend",
          "Building End-to-End Features",
          "Error Handling and Debugging Techniques",
          "Deployment Basics with Heroku and AWS",
        ],
      },
      5: {
        heading: "Certification Phase",
        points: [
          "Deep Dive into Your Chosen Technology Stack (MERN or MEAN)",
          "Mock Certification Projects and Assessments",
          "Hands-on Practice with Industry-Standard Tools",
          "Prepare for Certification in Your Selected Technology",
        ],
      },
      6: {
        heading: "Real-Time Project",
        points: [
          "Work on a Live Full-Stack Project",
          "Collaborate with a Mentor for Real-World Problem Solving",
          "Deploy and Showcase Your Project",
          "Final Presentation and Portfolio Building",
        ],
      },
    },
    dataScience: {
      1: {
        heading: "Introduction to Data Science & Python Fundamentals",
        points: [
          "Understand the role and scope of data science in modern industries.",
          "Learn Python programming essentials, including data types, loops, and functions.",
          "Introduction to Jupyter Notebook and data science libraries like NumPy and Pandas.",
          "Perform basic data cleaning and manipulation tasks.",
        ],
      },
      2: {
        heading: "Data Visualization & Exploratory Data Analysis",
        points: [
          "Learn to visualize data with Matplotlib and Seaborn.",
          "Understand the importance of Exploratory Data Analysis (EDA) in data projects.",
          "Generate insights by identifying patterns, trends, and correlations.",
          "Work on case studies to perform EDA on real-world datasets.",
        ],
      },
      3: {
        heading: "Statistics & Probability for Data Science",
        points: [
          "Master fundamental concepts of descriptive and inferential statistics.",
          "Learn probability distributions and hypothesis testing.",
          "Apply statistical techniques to analyze datasets.",
          "Understand confidence intervals and p-values.",
        ],
      },
      4: {
        heading: "Machine Learning Fundamentals",
        points: [
          "Introduction to supervised and unsupervised learning techniques.",
          "Understand the concepts of regression, classification, and clustering.",
          "Learn to build and evaluate machine learning models using Scikit-learn.",
          "Hands-on practice with datasets to implement machine learning algorithms.",
        ],
      },
      5: {
        heading: "Specialization: Get Certified in Advanced Data Science Tools",
        points: [
          "Choose a specialization: Natural Language Processing (NLP), Computer Vision, or Time Series Analysis.",
          "Learn advanced tools like TensorFlow, PyTorch, or Spark (depending on specialization).",
          "Work on mini-projects to apply the advanced tools to specific domains.",
          "Prepare for relevant certification exams.",
        ],
      },
      6: {
        heading: "Real-Time Data Science Project",
        points: [
          "Collaborate on a capstone project involving a real-world problem.",
          "Perform end-to-end data science workflows: Data collection, cleaning, modeling, and deployment.",
          "Document findings and build a comprehensive project report.",
          "Present your work to mentors and industry experts for feedback.",
        ],
      },
    },
    devOps: {
      1: {
        heading: "Foundations of DevOps & Linux Essentials",
        points: [
          "Introduction to DevOps: Principles, tools, and workflows.",
          "Learn Linux fundamentals and shell scripting for automation.",
          "Understand version control with Git and GitHub.",
          "Build a basic CI/CD pipeline using GitHub Actions.",
        ],
      },
      2: {
        heading: "Continuous Integration & Continuous Deployment (CI/CD)",
        points: [
          "Deep dive into CI/CD concepts and workflows.",
          "Set up Jenkins and integrate with source control.",
          "Automate testing and deployment pipelines.",
          "Hands-on practice deploying applications to a local environment.",
        ],
      },
      3: {
        heading: "Infrastructure as Code & Configuration Management",
        points: [
          "Learn Infrastructure as Code (IaC) with tools like Terraform.",
          "Understand configuration management with Ansible.",
          "Set up automated server provisioning and configuration.",
          "Work on practical exercises to deploy scalable infrastructure.",
        ],
      },
      4: {
        heading: "Containerization with Docker & Orchestration with Kubernetes",
        points: [
          "Introduction to Docker: Building and managing containers.",
          "Learn container orchestration concepts with Kubernetes.",
          "Deploy and manage multi-container applications using Kubernetes.",
          "Hands-on with Helm charts and Kubernetes networking.",
        ],
      },
      5: {
        heading: "Specialization: Cloud Platforms & Monitoring Tools",
        points: [
          "Choose a specialization: AWS, Azure, or Google Cloud.",
          "Learn cloud-native tools and services for deploying DevOps pipelines.",
          "Understand monitoring and logging using tools like Prometheus, Grafana, and ELK Stack.",
          "Work on real-world scenarios, such as auto-scaling and disaster recovery.",
        ],
      },
      6: {
        heading: "Real-Time DevOps Project",
        points: [
          "Collaborate on a capstone project to implement an end-to-end DevOps pipeline.",
          "Include IaC, CI/CD, containerization, and cloud deployment.",
          "Integrate security practices in your DevOps workflows (DevSecOps).",
          "Present your project to industry mentors and get valuable feedback.",
        ],
      },
    },
    bootcamp: {
      1: {
        heading: "Foundations of Web Development",
        points: [
            "HTML & CSS: Learn how to structure and style websites.",
            "JavaScript Basics: Make web pages interactive with JS fundamentals.",
            "Responsive Design: Create mobile-friendly, adaptive layouts.",
            "Version Control (Git & GitHub): Collaborate & manage code efficiently.",
        ],
    },
    2: {
        heading: "Advanced Concepts & Live Deployment",
        points: [
            "React Basics: Build dynamic, interactive web applications.",
            "API Integration: Connect your website with real-world data.",
            "Debugging & Optimization: Improve performance and fix issues.",
            "Deployment & Hosting (GitHub & AWS): Make your site live!",
        ],
    },
    }
  };

  get visibleWeeks(): Week[] {
    // Show only weeks relevant to selected program
    if (this.selectedProgram === 'bootcamp') {
      return this.weeks.filter(w => w.bootcamp);
    }
    return this.weeks.filter(w => !w.bootcamp);
  }

  onSelectProgram(key: string) {
    this.selectedProgram = key;
    // Reset week to first visible week of selected program
    const firstWeek = this.visibleWeeks[0];
    if (firstWeek) this.selectedWeek = firstWeek;
  }

  onSelectWeek(week: Week) {
    this.selectedWeek = week;
  }

  get currentContent(): Content {
    return (
      this.contentMap[this.selectedProgram]?.[this.selectedWeek.value] || {
        heading: 'Program Overview',
        points: ['Content coming soon...']
      }
    );
  }
}
