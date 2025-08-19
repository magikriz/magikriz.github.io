(function (App) {
  "use strict";

  App.sections.careerTimeline = function () {

    const timelineContent = {
      intro:
        "Traversing through my professional career... in Alps, or Grand Canyon?",
      timelineData: [
        {
          institution: "A New Beginning...",
          institutionDescription: "August 2025 - "
        },
        {
          year: "Jan 2022 – Dec 2022",
          logo: "ttc.webp",
          institution: "This Tech Company",
          institutionDescription:
            "A Tech Consultant Agency based in Ontario, Canada",
          website: "https://ttc.dev/",
          jobRole: "Frontend Developer",
          jobDescription:
            "Handled React projects, assisted across other projects, contributed to internal project, brainstorming, and daily scrum calls within a close-knit team of six.",
          achievement:
            "Worked with 10+ years experienced devs and international clientele on projects with global work culture and high-standard delivery practices. Gained valuable experience, improved development, learning and communication skills, and adapted to international workflows.",
        },
        {
          year: "Oct 2020 – Dec 2021",
          logo: "powerweave.webp",
          institution: "Powerweave",
          institutionDescription: "A Global Digital Agency based in Mumbai",
          website: "https://powerweave.com/",
          jobRole: "Web Developer",
          jobDescription:
            "Worked on client projects, collaborated with backend teams, joined international scrum calls, and built reusable UI components using in-house frameworks.",
          achievement:
            "Chosen for multi-framework versatility. Contributed to major US e-commerce projects and delivered consistent output across distributed teams, showcasing adaptability in a fast-paced agency setting.",
        },
        {
          year: "Sep 2019 – Sep 2020",
          logo: "webmaffia.webp",
          institution: "Webmaffia",
          institutionDescription: "A Mumbai-based Creative Digital Agency",
          website: "https://webmaffia.com/",
          jobRole: "Junior UI Developer",
          jobDescription:
            "Active involvement in numerous projects, campaigns, pitch presentations, brainstorming sessions as part of a UI Development team of four.",
          achievement:
            "Played a major role in the complete rework of the Perfios website, coordinated during the early remote work phase of COVID-19. Also built multiple new pages, features and microsites, while handling 4–5 projects concurrently across diverse clients.",
        },
        {
          year: "Mar 2018 – Dec 2018",
          logo: "sivasree.webp",
          institution: "Sivasree Silks",
          institutionDescription:
            "A reputed B2B/B2C textile firm based in Koduvayur",
          website: "https://goo.gl/maps/your-maps-link-here",
          jobRole: "COO / Head Office Admin",
          jobDescription:
            "Oversaw administration, accounting, HR, operations, negotiations, client relations & crisis transition for a 200+ employee B2B/B2C firm with 1500+ clients.",
          achievement:
            "Instrumental in firm’s successful crisis recovery and transition; tenure marked by record peak-season sales and restored organizational integrity.",
        },
        {
          year: "Mar 2017 - Feb 2018",
          logo: "mykoduvayur.webp",
          institution: "MyKoduvayur",
          institutionDescription:
            "A self-initiated Hometown project and start-up venture",
          website: "https://mykoduvayurofficial.github.io",
          jobRole: "Founder & Creative Lead",
          jobDescription:
            "Led concept, design, development, creative content, videos, negotiations, campaigns and PR — for MYKODUVAYUR, an all-domain digital platform for my hometown ",
          achievement:
            "Planned the foundation for an entrepreneurial venture through a passion project, for a full-scale creative branding agency, and have worked with a few clients since then.",
        },
        {
          year: "Jun 2016 – Feb 2017",
          logo: "devaayanam.webp",
          institution: "Devaayanam",
          institutionDescription:
            "An Online Platform for Hindu temples, Kerala.",
          website: "https://devaayanam.com/",
          jobRole: "Frontend Developer",
          jobDescription:
            "Worked from their Palakkad-based office. Reworked the entire front-end design and integrated a new 'Local Services' section for the temple platform.",
          achievement:
            "Handled full front-end rework design to UI conversion and used AngularJS, Node.js, and MySQL for feature integration by self under senior oversight.",
        },
        {
          year: "Jun 2015 – Nov 2015",
          logo: "adhoc.webp",
          institution: "AdHoc Technologies",
          institutionDescription: "An IT Solutions Firm in Trivandrum, Kerala",
          website: "https://adhoctechnologies.org/",
          jobRole: "Java Developer (Intern)",
          jobDescription:
            "Worked on Java fundamentals, OOPS, interfaces, and multi-threading. Studied two major projects: Live Traffic System and Hospital Management System.",
          achievement:
            "Self-learned web development by collaborating with web interns, shifting career focus from Java to frontend development.",
        },
      ],
    };

    function generateTimeline(content) {
      // Create root container
      const root = document.querySelector(".timeline-content");

      // Create intro
      const introDiv = document.createElement("div");
      introDiv.className = "timeline-intro section-intro hoverable";
      root.appendChild(introDiv);

      const introP = document.createElement("p");
      introP.className = "hoverable";
      introP.textContent = content.intro || "";
      introDiv.appendChild(introP);

      
      // Create timeline scene
      const scene = document.createElement("div");
      scene.className = "timeline-scene-container";
      root.appendChild(scene);

      // Create timeline track
      const track = document.createElement("div");
      track.className = "timeline-track";
      scene.appendChild(track);

      // Create timeline track
      const ropeRail = document.createElement("div");
      ropeRail.className = "rope-rail";
      scene.appendChild(ropeRail);


      content.timelineData.forEach(data => {
        const cartWrap = document.createElement("div");
        cartWrap.className = "coach-cart-wrapper";

        const cart = document.createElement("div");
        cart.className = "coach-cart";
        cartWrap.appendChild(cart);

        // Coach/Cart Window Section
        const coachWindow = document.createElement("div");
        coachWindow.className = "coach-cart-window";
        cart.appendChild(coachWindow);

        const leftBorder = document.createElement("div");
        leftBorder.className = "cc-left-border";
        const rightBorder = document.createElement("div");
        rightBorder.className = "cc-right-border";
        const topBorder = document.createElement("div");
        topBorder.className = "cc-top-border";
        const bottomBorder = document.createElement("div");
        bottomBorder.className = "cc-bottom-border";

        const windowInner = document.createElement("div");
        windowInner.className = "cc-window-inner";

        if(data.logo) {
          const logoWrap = document.createElement("div");
          logoWrap.className = "cc-logo-wrapper";
          
          const logo = document.createElement("img");
          logo.className = "cc-institution-logo";
          logo.src = "assets/images/timeline/career/"+data.logo || "";
  
          logoWrap.appendChild(logo);
          windowInner.appendChild(logoWrap);
        }
          
          const nameWrap = document.createElement("div");
          nameWrap.className = "cc-institution-name-wrapper";

        const name = document.createElement("h5");
        name.className = "cc-institution-name";
        name.textContent = data.institution || "";
        nameWrap.appendChild(name);
        windowInner.appendChild(nameWrap);

        coachWindow.appendChild(leftBorder);
        coachWindow.appendChild(rightBorder);
        coachWindow.appendChild(topBorder);
        coachWindow.appendChild(bottomBorder);
        coachWindow.appendChild(windowInner);

        // Box Section
        const cartBox = document.createElement("div");
        cartBox.className = "coach-cart-box";
        cart.appendChild(cartBox);
        
        // Box One
        const boxContentOne = document.createElement("div");
        boxContentOne.className = "cc-box-content-one";
        cartBox.appendChild(boxContentOne);

        
        // Special Divider
        const divider = document.createElement("div");
        divider.className = "cc-special-divider";
        boxContentOne.appendChild(divider);

        const instDesc = document.createElement("p");
        instDesc.className = "cc-institution-desc";
        instDesc.textContent = data.institutionDescription || "";
        boxContentOne.appendChild(instDesc);

        if(data.website) {
          const instLink = document.createElement("div");
          instLink.className = "cc-institution-inst-link hoverable clickable";
          if (data.website) {
            instLink.dataset.href = data.website;
            instLink.addEventListener("click", () => {
              window.open(data.website, "_blank");
            });
          }
          
          const instLinkIcon = document.createElement("i");
          instLinkIcon.className = "fa-solid fa-up-right-from-square hoverable clickable";
          
          instLink.appendChild(instLinkIcon);    
          boxContentOne.appendChild(instLink);
        }
        
        // Box Two
        const boxContentTwo = document.createElement("div");
        boxContentTwo.className = "cc-box-content-two";
        cartBox.appendChild(boxContentTwo);      

        // Divider one
        const dividerOne = document.createElement("hr");
        dividerOne.className = "cc-usual-divider";
        boxContentTwo.appendChild(dividerOne);

        const jobRole = document.createElement("h6");
        jobRole.className = "cc-jobrole";
        jobRole.textContent = data.jobRole || "";
        boxContentTwo.appendChild(jobRole);

        const jobYear = document.createElement("p");
        jobYear.className = "cc-job-year-range";
        jobYear.textContent = data.year || "";
        boxContentTwo.appendChild(jobYear);

        // Box Three
        const boxContentThree = document.createElement("div");
        boxContentThree.className = "cc-box-content-three";
        cartBox.appendChild(boxContentThree); 

        const jobDesc = document.createElement("p");
        jobDesc.className = "cc-job-description";
        jobDesc.textContent = data.jobDescription || "";
        boxContentThree.appendChild(jobDesc);

        // Divider Two
        const dividerTwo = document.createElement("hr");
        dividerTwo.className = "cc-usual-divider";
        boxContentThree.appendChild(dividerTwo);
        
        const jobAch = document.createElement("p");
        jobAch.className = "cc-job-achievement";
        jobAch.textContent = data.achievement || "";
        boxContentThree.appendChild(jobAch);

        // Divider Three
        const dividerThree = document.createElement("hr");
        dividerThree.className = "cc-usual-divider";
        boxContentThree.appendChild(dividerThree);

        // Decorations (Wheel/Pulley)
        const leftDeco = document.createElement("div");
        leftDeco.className = "coach-cart-wheel-pulley-left";

        const rightDeco = document.createElement("div");
        rightDeco.className = "coach-cart-wheel-pulley-right";

        const centerDeco = document.createElement("div");
        centerDeco.className = "coach-cart-wheel-pulley-center";

        // Decoration assembly
        cart.appendChild(leftDeco);
        cart.appendChild(rightDeco);
        cart.appendChild(centerDeco);

        track.appendChild(cartWrap);
      });


      App.utils.makeScrollableClickable(track);

    }

    generateTimeline(timelineContent);


    App.slider.enableInputs();
  };

  App.sections.careerTimelineUsual = function () {
  };
})(window.App);
