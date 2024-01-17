const content = {
  intro: {
    title: "Admissions Selection Optimization",
    description:
      "At Hack Reactor, I worked to improve the selection of qualified coding candidates. Starting from analysis and comparison of student entrance and outcomes data, I identified, prototyped, and tested the highest impact feature changes to their admissions testing app.",
    image: "../../assets/admissionsProject.png",
  },
  body: [
    {
      description: `I collected relevant data regarding student issues over the previous 3 years (from the start of the current admission assessment) and cleaned it before proceeding to analysis. <br/><br/> After <span class="white-highlight">I analyzed the funnel data and compared the current admissions test with curriculum expectations</span>, it became clear assessment and course goals did not match and that staff lacked a clear framework from which to make entrance decisions.`,
      image: "../../assets/WithdrawnVsDismissedGraph.png",
      imageDesc: `My analysis of data demonstrated disconnects between admissions and course expectations.<br/><small>Data not representative of actual figures.</small>`,
    },
    {
      description: `<span class="white-highlight">I recommended three courses of action</span> to confront weaknesses in the admission processes: One, create admission standards and a rubric to guide assessment creation and grading. Two, build a UI to facilitate grading by the rubric. And three, use a grading algorithm to increase accuracy.`,
      image: "../../assets/gradingAppProcess.png",
      imageDesc: `The original process versus revamped process.</span> As product owner, I promoted the creation of admission standards, a grading UI, and grading by algorithm to increase the accuracy of selecting for high quality candidates. <br/><small>Diagram edited to redact proprietary info.</small>`,
    },
    {
      description: `Not everyone was sold on the idea. Engineers who built the note taking UI and assessment staff pushed for continuing the original processes. The main complaint was time. Some staff believed rubric based grading would be less efficient than the current process. <br/><br/>To obtain buy-in <span class="white-highlight">I demonstrated a prototype I created of the grading app.</span> After answering the staff fears and demonstrating the value of the concept, we moved forward with the engineering and process change.`,
      image: "../../assets/gradingInterface.png",
      imageDesc: `My functional prototype to demonstrate the new grading UI concept in action.<br/><small>Skills changed due to proprietary information.</small>`,
    },
    {
      description: `After implementation and training, <span class="white-highlight">I monitored the success of the project over 6-months to ensure efficacy.</span> During this time, <span class="white-highlight">I implemented weekly evaluation procedures to reinforce staff skills and grading processes.</span> <br/><br/>
        After 6-months and evaluation of the results were clear. We surpassed expectations to increase admissions efficacy - increasing graduation rate by 20% - and significantly increased grading throughput. `,
      image: "../../assets/celebrateGradeProjectClose.png",
      imageDesc: `Success! Graduation rate increased by 20% and grading efficiency rose by 40%.`,
    },
  ],
  conclusion: {
    header: "Summary",
    description: `This project challenged me as a product owner. <span class="white-highlight">I needed strong negotiation skills to gain access to data from the full funnel, was pushed to excel in analytics through shifting thousands of records, and exercised leadership to obtain buy-in from a team resistant to change.</span><br/><br/> In the end, we soared above expectations and helped create a flourishing learning environment that changed the lives of our students.`,
    imageDesc: "",
  },
};

export default content;