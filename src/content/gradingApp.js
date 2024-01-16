const content = {
  intro: {
    title: "Admissions Selection Optimization",
    description:
      "At Hack Reactor, I worked to improve the selection of qualified coding candidates. Starting from analysis and comparison of student entrance and outcomes data, I identified, prototyped, and tested the highest impact feature changes to their admissions testing app.",
    image: "../../assets/admissionsProject.png",
  },
  body: [
    {
      description: `The company wished to decrease the number of students failing due to technical weaknesses, and the number of students who required remediation. I collected relevant data regarding student issues over the previous 3 years and cleaned it before proceeding to analysis. <br/><br/> After I analyzed the funnel data and compared the current admissions test with curriculum expectations, it became <span class="white-highlight">clear there was a gap between assessment goals and course goals</span> and that staff lacked a clear framework from which to make entrance decisions.`,
      image: "../../assets/gradingAppProcess.png",
      imageDesc: `My analysis of data showed weaknesses in the student selection process.`,
    },
    {
      description: `<span class="white-highlight">I recommended three courses of action to confront weaknesses in the admission processes leading to stated problem areas. </span> One, create admission standards and a rubric to guide assessment creation and grading. Two, build a UI to facilitate grading by the rubric. And three, use a grading algorithm to increase accuracy.`,
      image: "../../assets/gradingAppProcess.png",
      imageDesc: `<span class="white-highlight">The original process versus revamped process.</span> As product owner, I promoted the creation of admission standards, a grading UI, and grading by algorithm to increase the accuracy of selecting for high quality candidates. *Diagram edited to redact proprietary info.`,
    },
    {
      description:
        "Not everyone was sold on the idea. Engineers who built the note taking UI and assessment staff pushed for continuing the original processes. The main complaint was time. Some staff believed rubric based grading would be less efficient than the current process. <br/><br/>To obtain buy-in I demonstrated a prototype I created of the grading app. After answering the staff fears and demonstrating the value of the concept, we moved forward with the engineering and process change.",
      image: "../../assets/gradingInterface.png",
      imageDesc: `<span class="white-highlight">My prototype for testing and to demonstrate the new grading UI in action leading to team buy-in.</span> *Skills changed due to proprietary information.`,
    },
    {
      description:
        `After implementation and training, I monitored the success of the project over 6-months to ensure efficacy. During this time, I implemented weekly evaluation procedures to reinforce staff skills and grading processes. <br/><br/>
        After 6-months and evaluation of the results were clear. We surpassed expectations to increase admissions efficacy and significantly increased grading throughput. `,
      image: "../../assets/gradingInterface.png",
      imageDesc: `<span class="white-highlight">My prototype for testing and to demonstrate the new grading UI in action leading to team buy-in.</span> *Skills changed due to proprietary information.`,
    },
  ],
  conclusion: {
    header: "Summary",
    description:
      `This project challenged me as a product owner. I needed strong negotiation skills to gain access to data from the full funnel, was pushed to excel in analytics through shifting thousands of records and student feedback to understand the story of our customers (i.e. students), and exercised leadership to obtain buy-in from a team resistant to change.<br/><br/> In the end, we soared above expectations and helped create a flourishing learning environment that changed the lives of our students.`,
    imageDesc: "",
  },
};

export default content;