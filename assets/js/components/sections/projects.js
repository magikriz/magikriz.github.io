(function (App) {
  "use strict";

  App.sections.projectGallery = function () {

    const galleryContent = {
      intro:
        "Showcasing some of the highlights of my development and creative tech career so far.",
      projectData: [
        {
          id: "proj001",
          order: 1,
          coverImage: "cerebro-1.webp",
          name: "CEREBRO",
          team: "Self",
          timeline: "Nov 2013 - Mar 2014",
          link: "unavailable",
          isFeatured: false,
          technologies: ["Python CLI"],
          role: "B.E / B.Tech Main Project - Developed by self",
          tasks: [
            "Designed CLI-based conversation flow and implementing NLP",
            "Implemented chaining logic for multi-step queries",
            "Tested and optimized response accuracy against sample datasets",
          ],
          achievements: [
            "Built a working prototype demonstrating end-to-end NLP chaining",
            "Gained hands-on experience with Python CLI tools and parsing",
          ],
          notes:
            "Also built an Android PhotoStitch mini-project (panorama maker) as part of academic course.",
          icon: "fa-solid fa-user-graduate",
            detailImage: "cerebro-2.webp",
          tabName: "self",
        },
        {
          id: "proj002",
          order: 1,
          coverImage: "devaayanam-1.webp",
          name: "Devaayanam",
          team: "Team Devaayanam",
          timeline: "Jun 2016 - Jan 2017",
          link: "https://devaayanam.in/",
          isFeatured: true,
          technologies: ["Angular JS", "Node JS", "MySQL", "Bootstrap", "JSON", "HTML5/CSS3"],
          role: "Collaborated on core features and UI components",
          tasks: [
            "Assisted in revamping the full website UI",
            "Developed a new features and listing page from provided design",
            "Integrated dynamically loading JSON data from database using MySQL",
          ],
          achievements: [
            "Implemented language switching throughout the website",
            "Gained backend knowledge and experience working on Node JS and MySQL",
          ],
          notes:
            "Part of a 3 person development team as Front End Dev working along with a Database Admin and a Full Stack Dev.",
          icon: "fa-solid fa-hands-praying",
            detailImage: "devaayanam-2.webp",
          tabName: "devaayanam",
        },
        {
          id: "proj003",
          order: 2,
          coverImage: "mykoduvayur-1.webp",
          name: "MyKoduvayur",
          team: "Self",
          timeline: "Feb 2017 - Jan 2018",
          link: "https://mykoduvayurofficial.github.io/",
          isFeatured: true,
          technologies: [
            "AngularJS",
            "CSS3",
            "jQuery",
            "Bootstrap",
            "JSON",
            "GitHub Pages",
          ],
          role: "Built a hometown showcase website from scratch",
          tasks: [
            "UI Design and Development using Photoshop and Angular JS by self.",
            "Fully responsive interactive UI created and styled with CSS3, Bootstrap and jQuery",
            "Implemented Language Switching, Integrated Facebook Commenting and Google Maps and basic SEO",
          ],
          achievements: [
            "From contests to campaigns, PR, photography, data collection, business ads and marketing, did full on branding as part of the project",
            "Developed Business relations and friendships and met with many future as part of this project",
          ],
          notes:
            "A personal passion project highlighting hometown history, details, services, events and landmarks. ",
          icon: "fa-solid fa-location-dot",
            detailImage: "mykoduvayur-2.webp",
          tabName: "self",
        },
        {
          id: "proj004",
          order: 3,
          coverImage: "kumb2019-1.webp",
          name: "Kumb2019",
          team: "Self",
          timeline: "Nov 2018 - Jan 2019",
          link: "https://kumb2019.github.io/",
          isFeatured: false,
          technologies: ["jQuery", "Bootstrap","Popper JS", "HTML5/CSS3", "Github Pages"],
          role: "Developed event website for once in 12 years hometown festival held in May 2019",
          tasks: [
            "Created event schedule and picture gallery pages",
            "Picture viewer/slider using Popper JS and jQuery",
            "Developed a lightweight, fast-loading event site",
          ],
          achievements: [
            "Photo/Videography and Content creation as a key member of event volunteer team",
            "Recreation of old photos using Photoshop as part of project",
          ],
          notes:
            "Graphic Design, Content Creaton, Promotion and Web Design/Development for local festival",
          icon: "fa-solid fa-tree-city",
            detailImage: "kumb2019-2.webp",
          tabName: "self",
        },
        {
          id: "proj005",
          order: 1,
          coverImage: "aquacentric-1.webp",
          name: "Aquacentric",
          team: "Webmaffia",
          timeline: "Oct 2019 - Mar 2020",
          link: "https://aquacentric.com/",
          isFeatured: false,
          technologies: ["PHP", "WordPress", "SCSS", "jQuery", "GIT", "GulpJS"],
          role: "Front End developer for landing & inner pages",
          tasks: [
            "Built and styled the landing page with SCSS",
            "Developed 3 interactive inner pages from provided design",
            "Regular updating using GIT",
          ],
          achievements: [
            "Responsive UI with interactive components",
            "Worked on triggered animations, tab switching and sliders using jQuery and Slick JS",
          ],
          notes:
            "Focused on responsive design and maintainable code structure.",
          icon: "fa-solid fa-droplet",
            detailImage: "aquacentric-2.webp",
          tabName: "webmaffia",
        },
        {
          id: "proj006",
          order: 2,
          coverImage: "tatanutrikorner-1.webp",
          name: "Tata Nutrikorner",
          team: "Webmaffia",
          timeline: "Oct 2019 - Apr 2020",
          link: "https://tatanutrikorner.com/",
          isFeatured: true,
          technologies: ["Shopify", "SCSS", "jQuery", "GIT", "Gulp JS"],
          role: "Supported Front End enhancements and styling from design",
          tasks: [
            "Updated product listing and detail pages for better UX",
            "Created reusable blog templates and components and developed new authors and recipes page from design",
            "Developed e-commerce mailers templates with new design",
          ],
          achievements: [
            "Developed custom festive mailers from design",
            "Reduced loading time by 20% on blogs by implementing lazy loading and optimizations",
          ],
          notes:
            "Part of discussions and scrum calls with client.",
          icon: "fa-solid fa-plate-wheat",
            detailImage: "tatanutrikorner-2.webp",
          tabName: "webmaffia",
        },
        {
          id: "proj007",
          order: 3,
          coverImage: "unitileindia-1.webp",
          name: "Unitile India",
          team: "Webmaffia",
          timeline: "Oct 2019 - May 2020",
          link: "https://untitleindia.com/",
          isFeatured: true,
          technologies: ["PHP", "SCSS", "jQuery", "Laravel", "GIT", "GulpJS"],
          role: "Development of landing page sections and inner pages",
          tasks: [
            "Implemented complex designs and animations on certain data defining inner pages suitable for dynamic data ",
            "Developed few new landing page sections with immersive aesthetic design with SCSS and jQuery",
            "Developed dynamically generating blog templates, picture galleries etc with lazy loading",
          ],
          achievements: [
            "Delivered end-to-end solution under tight deadlines during office and remote work sessions",
            "Styled the UI for its responsiveness from provided desktop design",
          ],
          notes:
            "Comprehensive site build with CMS integration and performance focus of a corporate website.",
          icon: "fa-solid fa-kaaba",
            detailImage: "unitileindia-2.webp",
          tabName: "webmaffia",
        },
        {
          id: "proj008",
          order: 4,
          coverImage: "nayaraenergy-1.webp",
          name: "Nayara Energy",
          team: "Webmaffia",
          timeline: "Jan 2020 - Mar 2020",
          link: "https://www.nayaraenergy.com/",
          isFeatured: false,
          technologies: ["PHP", "SCSS", "jQuery", "Laravel", "GIT", "GulpJS"],
          role: "Contributed to Front End layout and content updates",
          tasks: [
            "Assisted in page layout redesigns",
            "Developed inner page sections, blog layouts and festve mailers",
            "Conducted responsive testing and bugfixes on multiple devices",
          ],
          achievements: [
            "Improved mobile layout flow and readability",
            "Detected and fixed critical respomsive CSS regressions",
          ],
          notes: "Optimized and enhanced UI on existing website.",
          icon: "fa-solid fa-bolt",
          detailImage: "nayaraenergy-2.webp",
          tabName: "webmaffia",
        },
        {
          id: "proj009",
          order: 5,
          coverImage: "ganeshlease-1.webp",
          name: "Ganesh Lease",
          team: "Webmaffia",
          timeline: "Mar 2020 - Apr 2020",
          link: "https://ganeshleasfin.com/",
          isFeatured: false,
          technologies: ["PHP", "SCSS", "jQuery", "Laravel", "GIT", "GulpJS"],
          role: "UI Developer for this Fincorp website",
          tasks: [
            "Converted the landing and inner page designs to an immersive and interactive UI",
            "Along with interactive UI elements, also made Loan/EMI calculators",
            "Ensured accessibility, responsiveness and fast loading time",
          ],
          achievements: [
            "Lightweight fast loading microsite for new product",
            "Coordinated with clients regarding the interactive elements and designs during early days of WFH",
          ],
          notes:
            "Financial Corporate site emphasizing brand consistency and performance.",
          icon: "fa-solid fa-sack-dollar",
            detailImage: "ganeshlease-2.webp",
          tabName: "webmaffia",
        },
        {
          id: "proj010",
          order: 6,
          coverImage: "perfios-1.webp",
          name: "Perfios",
          team: "Webmaffia",
          timeline: "Feb 2020 - Aug 2020",
          link: "https://perfios.ai/",
          isFeatured: true,
          technologies: ["PHP", "SCSS", "jQuery", "Laravel", "GIT", "GulpJS"],
          role: "Front End contributor in a larger team effort",
          tasks: [
            "Built Landing Page and 10+ inner pages in a 20+ page website",
            "Participated in sprint planning and code reviews and scrum calls with client during WFH",
            "Total rework of existing website with new nteractve and immersive design",
          ],
          achievements: [
            "Complex design and animations throughout the website",
            "Used multiple UI component libraries for building particular sections",
          ],
          notes: "Maintained standard quality and optimized readable code with proper commenting and assumed standard team workflow.",
          icon: "fa-solid fa-landmark",
          detailImage: "perfios-2.webp",
          tabName: "webmaffia",
        },
        {
          id: "proj011",
          order: 1,
          coverImage: "epromos-1.webp",
          name: "e Promos",
          team: "Powerweave",
          timeline: "Oct 2020 - Mar 2021",
          link: "https://epromos.com",
          isFeatured: true,
          technologies: [
            "AngularJS",
            "CSS3",
            "jQuery",
            "JSP",
            "MySQL",
            "Webpack",
            "Bitbucket",
          ],
          role: "Front End Maintenance & bug-fix specialist in a team of four",
          tasks: [
            "Diagnosed and fixed critical front-end bugs",
            "Created new front-end sections and optimized existing code for performance",
            "Co-ordinated release cycles with backend team",
          ],
          achievements: [
            "Festive season UI updates and discount computations and implementation in UI",
            "Regular maintenance on debugging and optimization and client communication",
          ],
          notes: "US based E-commerce site requiring frequent maintenance and upgrades.",
          icon: "fa-solid fa-shopping-cart",
          detailImage: "epromos-2.webp",
          tabName: "powerweave",
        },
        {
          id: "proj012",
          order: 2,
          coverImage: "kwiqki-1.webp",
          name: "Kwiqki",
          team: "Powerweave",
          timeline: "Dec 2020 - Mar 2021",
          link: "https://kwiqki.ewizsaas.com",
          isFeatured: false,
          technologies: ["React", "jQuery", "Ajax", "CSS3", "JavaScript", "e-Wiz"],
          role: "Front End Developer on internal SaaS project",
          tasks: [
            "Built React components for core features",
            "Integrated REST API endpoints using Ajax",
            "Styled UI with CSS3 and React components",
          ],
          achievements: [
            "Used the platform to learn React architecture and workflow",
            "Clean readable and standard code collaboration with rest of the team",
          ],
          notes: "Internal audio sticker library project focusing on modular architecture.",
          icon: "fa-solid fa-circle-play",
          detailImage: "kwiqki-2.webp",
          tabName: "powerweave",
        },
        {
          id: "proj013",
          order: 3,
          coverImage: "ultrapenworks-1.webp",
          name: "Ultra Penworks",
          team: "Powerweave",
          timeline: "Feb 2021 - Jun 2021",
          link: "https://ultrapens.com",
          isFeatured: false,
          technologies: ["eWiz-Commerce", "CSS3", "jQuery", "Ajax"],
          role: "Front End development and maintenance",
          tasks: [
            "Developed pitch presentations for client sourcing",
            "Developed the website UI based on design using company UI framework",
            "REST API Integration using Ajax",
          ],
          achievements: [
            "Built several reusable components in company framework for occasional and future use",
            "Improved mobile UI flow leading to longer sessions",
          ],
          notes: "US based E-Commerce website developed and coordinated using company framework.",
          icon: "fa-solid fa-pen-clip",
          detailImage: "ultrapenworks-2.webp",
          tabName: "powerweave",
        },
        {
          id: "proj014",
          order: 4,
          coverImage: "thewinepark-1.webp",
          name: "The Winepark",
          team: "Powerweave",
          timeline: "May 2021 - Oct 2021",
          link: "https://thewinepark.com",
          isFeatured: true,
          technologies: ["eWiz-Commerce", "CSS3", "jQuery", "Ajax"],
          role: "Developer for new site sections and bug fixes",
          tasks: [
            "Built promotional banners and carousels",
            "Resolved front end user flow issues and improved performance",
            "Optimized page load times and mobile responsiveness",
          ],
          achievements: [
            "Built several reusable components in company framework for occasional and future use",
            "Improved performance of landing and inner page sections",
          ],
          notes: "Continuous enhancements for a major US based e-commerce brand.",
          icon: "fa-solid fa-champagne-glasses",
          detailImage: "thewinepark-2.webp",
          tabName: "powerweave",
        },
        {
          id: "proj015",
          order: 5,
          coverImage: "quikey-1.webp",
          name: "Quikey",
          team: "Powerweave",
          timeline: "May 2021 - Sep 2021",
          link: "https://quikey.com/",
          isFeatured: false,
          technologies: ["eWiz-Commerce", "CSS3", "jQuery", "Ajax"],
          role: "Front End developer for site updates, maintenance and fixes",
          tasks: [
            "Implemented updated search, sort and display logic and coordinated with backend team",
            "Patched critical UI bugs and updated section designs",
            "Regular maintenance and optimization",
          ],
          achievements: [
            "Built several reusable components in company framework for occasional and future use",
            "Enhanced user engagement through UI tweaks",
          ],
          notes: "Regular updates, optimization and maintenance on a US based E-Commerce website.",
          icon: "fa-solid fa-key",
          detailImage: "quikey-2.webp",
          tabName: "powerweave",
        },
        {
          id: "proj016",
          order: 6,
          coverImage: "capamerica-1.webp",
          name: "CAP AMERICA",
          team: "Powerweave",
          timeline: "Aug 2021 - Dec 2021",
          link: "https://capamerica.com/",
          isFeatured: false,
          technologies: ["eWiz-Commerce", "CSS3", "jQuery", "Ajax"],
          role: "Maintained site and added new layout sections",
          tasks: [
            "Created dynamic product filters in jQuery",
            "Added several new sort categories and menu items logic and UI",
            "Updated section designs, bug fixes and festive sale updates",
          ],
          achievements: [
            "Built several reusable components in company framework for occasional and future use",
            "Worked on rewriting and optimizing many sorting, listing and filtering logic",
          ],
          notes: "Continual support and improvements for US based e-commerce corporate firm.",
          icon: "fa-solid fa-hat-cowboy",
          detailImage: "capamerica-2.webp",
          tabName: "powerweave",
        },
        {
          id: "proj017",
          order: 1,
          coverImage: "corepoweryoga-1.webp",
          name: "Corepower Yoga",
          team: "This Tech Company",
          timeline: "Jan 2022 - Sep 2022",
          link: "https://www.corepoweryoga.com/",
          isFeatured: true,
          technologies: [
            "React",
            "NextJS",
            "Figma",
            "TypeScript",
            "Webpack",
            "GIT",
            "Context API"
          ],
          role: "Maintained and enhanced Front End of website as part of a two-person team",
          tasks: [
            "Fixed session booking flow bugs and UI glitches on major features",
            "Developed a map-based session booking section UI based on design",
            "Implemented bug fixes and optimized performance of several sections",
          ],
          achievements: [
            "Learned the Component Based architecture of a major complex React JS / Next JS project",
            "Learned the internatonal workflow, coding, communication and deployment standards",
          ],
          notes: "US based Health & wellness brand website with high traffic demands.",
          icon: "fa-solid fa-spa",
          detailImage: "corepoweryoga-2.webp",
          tabName: "ttc",
        },
        {
          id: "proj018",
          order: 2,
          coverImage: "legaltechpro-1.webp",
          name: "LEGAL TECH PRO",
          team: "This Tech Company",
          timeline: "May 2022 - Nov 2022",
          link: "https://krizdev92.github.io/",
          isFeatured: false,
          technologies: ["React", "Firebase", "TypeScript", "MUI", "Azure", "NextJS", "GIT"],
          role: "Contributor on internal project",
          tasks: [
            "Actively participated in Brainstorming sessions",
            "Contributed in building dashboard components using React/MUI template",
            "Implemented basic Google Analytics on the app."
          ],
          achievements: [
            "Worked on testing and improving Azure Speech to Text component logic",
            "Worked on a PDF builder using React with proper dynamic text formatting"
          ],
          notes: "Internal project - An app that has Firebase auth login and captures voice narrations using Azure to draft legal documents that help in workflows and case management.",
          icon: "fa-solid fa-scale-balanced",
          detailImage: "legaltechpro-2.webp",
          tabName: "ttc"
        },
        {
          id: "proj019",
          order: 4,
          coverImage: "mylittlebookshop-1.webp",
          name: "My Little Bookshop",
          team: "Freelance",
          timeline: "Jul 2021 - Mar 2022",
          link: "https://mylittlebookshop.in/",
          isFeatured: true,
          technologies: ["WordPress", "WooCommerce", "Elementor", "GA/GTM"],
          role: "Solo developer for maintenance and bug fixes",
          tasks: [
            "Reworked product listing templates",
            "Fixed user journey bugs and issues throughout website",
            "Optimized site speed, aesthetics and performance and added new sections"
          ],
          achievements: [
            "Optimized the use of Elementor UI Components",
            "Improved page load times and performance"
          ],
          notes: "Freelance engagement focused on maintenance, bugfixes, stability and performance.",
          icon: "fa-solid fa-book",
          detailImage: "mylittlebookshop-2.webp",
          tabName: "self"
        },
        {
          id: "proj020",
          order: 5,
          coverImage: "mokshastories-1.webp",
          name: "Moksha Stories",
          team: "Freelance",
          timeline: "May 2022 - July 2022",
          link: "https://mokshastories.com",
          isFeatured: true,
          technologies: ["HTML5", "JavaScript", "SCSS", "jQuery", "GulpJS", "GitHub Pages", "GA/GTM"],
          role: "Designed and developed travel company website",
          tasks: [
            "Created responsive landing and service pages",
            "Implemented interactive galleries in jQuery",
            "Set up GulpJS build and deployment using GIT CLI"
          ],
          achievements: [
            "UI/UX Design, Development, Content and Deployment by self",
            "Also linked GA/GTM into pages"
          ],
          notes: "Freelance project showcasing a clean, modern aesthetic.",
          icon: "fa-solid fa-map-location",
          detailImage: "mokshastories-2.webp",
          tabName: "self"
        },
        {
          id: "proj021",
          order: 6,
          coverImage: "koduvayurratholsavam-1.webp",
          name: "Koduvayur Ratholsavam",
          team: "Self",
          timeline: "Oct 2024",
          link: "https://koduvayur.in",
          isFeatured: false,
          technologies: ["HTML5", "SCSS", "jQuery", "GulpJS", "GitHub Pages"],
          role: "Built festival e-commerce style website from scratch",
          tasks: [
            "Developed the website and its contents",
            "Built from basic e-commerce UI design",
            "Simple mobile-first responsive minimalistic layout made from scratch"
          ],
          achievements: [
            "Launched ahead of festival kickoff for promotion and sponsorships",
            "Achieved record coverage, events and budget for the event being part of the core committee"
          ],
          notes: "Community-driven project for local cultural festival.",
          icon: "fa-solid fa-burst",
          detailImage: "koduvayurratholsavam-2.webp",
          tabName: "self"
        },
        {
          id: "proj022",
          order: 7,
          coverImage: "hotelcaps-1.webp",
          name: "Hotel Caps",
          team: "Self / Freelance",
          timeline: "June 2025 - Present",
          link: "https://sparklingspur.github.io",
          isFeatured: true,
          technologies: ["Vue 3", "Nuxt Js", "Tailwind CSS", "Gsap", "GitHub Pages"],
          role: "Total Rework of Hotel Website wth 4 Landing Pages, 7 Inner Pages and 20+ Sections.",
          tasks: [
            "Structured Vue 3 components built in Nuxt environment for modular UI",
            "Integrated Tailwind for responsive and modern UI styling using utility classes",
            "Configured Gsap and deployed on GitHub pages with GIT CLI"
          ],
          achievements: [
            "Achieved a modern, responsive SPA prototype with a modular design for easy future scalability",
            "Deepened understanding of Static site builders, implemented detailed SEO"
          ],
          notes: "A full-fledged hotel website rework project for a local hotel, after having taken up full branding and marketing responsibilities from logo, website, graphic and social media.",
          icon: "fa-solid fa-hotel",
          detailImage: "hotelcaps-2.webp",
          tabName: "self"
        },
        {
          id: "proj023",
          order: 8,
          coverImage: "magikriz-1.webp",
          name: "Magikriz",
          team: "Portfolio",
          timeline: "May 2025 - July 2025",
          link: "https://magikriz.github.io/",
          isFeatured: false,
          technologies: ["HTML", "SCSS", "JS", "Gulp JS", "GitHub Pages"],
          role: "My Career Portfolio made without any external libraries using modern features and best practices of vanilla JS and CSS",
          tasks: [
            "Dual themed (fire and ice), fully responsive and interactive portfolio website",
            "Choreographed custom animations and transitons using css keyframes and vanlla JS",
            "Implemented lazy loading, optimized images, minified code using Gulp JS and deployed to GH Pages using GIT CLI"
          ],
          achievements: [
            "Detailed SEO implementation and performance optimizations, form submit to Google Sheets",
            "Fully dynamic generated sections and components based on JSON data"
          ],
          notes: "Every detail of this portfolio is handcrafted with care, showcasing my skills, experience and projects.",
          icon: "fa-solid fa-code",
          detailImage: "magikriz-2.webp",
          tabName: "self"
        },
        {
          id: "proj024",
          order: 9,
          coverImage: "krizzzcode-1.webp",
          name: "KrizzzCode",
          team: "Self / Freelance",
          timeline: "June 2025 - Present",
          link: "https://krizzzcode.github.io",
          isFeatured: false,
          technologies: ["HTML", "CSS", "JS", "Tailwind CSS", "Gsap", "GitHub Pages"],
          role: " A personal project to showcase my GitHub repositories, open source projects, experiments and contributions",
          tasks: [
            "Architected a single-page responsive layout with Tailwind CSS, optimizing for mobile-first performance.",
            "Implemented JSON-driven project loading with search, sort, and filter functionalities.",
            "Integrated GSAP and ScrollTrigger for smooth entrance and scroll-based animations."
          ],
          achievements: [
            "Totally lightweight and fast loading, dynamic and modular design with reusable components",
            "Dual themed with dark and light mode, aesthetic, fully responsive and interactive design",
          ],
          notes: "Ongoing – serves as a sandbox for my web development skills.",
          icon: "fa-brands fa-github",
          detailImage: "krizzzcode-2.webp",
          tabName: "self"
        },
      ],
    };

    function generateGallery(data) {

      const root = document.querySelector('.project-content');
      
      // Create intro
      const introDiv = document.createElement('div');
      introDiv.className = 'gallery-intro section-intro hoverable';
      const introP = document.createElement('p');
      introP.className = 'hoverable';
      introP.textContent = data.intro || '';
      introDiv.appendChild(introP);
      root.appendChild(introDiv);

      // Create Featured Projects Section
      const projectWrap = document.createElement('div');
      projectWrap.className = 'projects-data';
      root.appendChild(projectWrap);

      const featuredCount = galleryContent.projectData.filter((p) => p.isFeatured).length;
      const featuredAnimDuration = featuredCount * 150 + 2000;

      // --- FEATURED ---

      function featuredSlider(sliderData) {

        // ---------- Variables ----------
        let slides = [];

        function getFeaturedProjects(projectsArray) {
          return projectsArray.filter(project => project.isFeatured === true);
        }

        const featuredData = getFeaturedProjects(sliderData);
        featuredData.reverse();
        

        // Create Featured Projects Section
        const featured = document.createElement('div');
        featured.className = 'featured-projects';
        projectWrap.appendChild(featured);

        const featuredSliderWrap = document.createElement('div');
        featuredSliderWrap.className = 'featured-slider-wrapper';
        featured.appendChild(featuredSliderWrap);

        const sliderTrack = document.createElement('div');
        sliderTrack.className = 'featured-slider-track';
        featuredSliderWrap.appendChild(sliderTrack);

        const arrowLeft = document.createElement('div');
        arrowLeft.className = 'featured-slider-left featured-arrow';
        featuredSliderWrap.appendChild(arrowLeft);

        const arrowRight = document.createElement('div');
        arrowRight.className = 'featured-slider-right featured-arrow';
        featuredSliderWrap.appendChild(arrowRight);
        
        // ---------- Render Functions ----------

        function renderSlides() {
          sliderTrack.innerHTML = "";
          
          // console.log(featuredData);
          
          featuredData.forEach((item, index) => {
            const imagePath = `assets/images/gallery/projects/${item.tabName}/${item.name.toLowerCase().replace(/\s+/g, "")}/${item.coverImage}`;
            
            const slide = document.createElement("div");
            slide.className = "featured-slide entrance";
            slide.setAttribute("data-id", item.id);

            // Animate each with stagger
            slide.style.animationDelay = `${index * 150 + 500}ms`; // adjust delay
            
            sliderTrack.appendChild(slide);

            // === COVER IMAGE ===
            const slideCover = document.createElement("div");
            slideCover.className = "featured-slide-cover";
            let bgImage = `url('${imagePath}')`;
            slideCover.style.backgroundImage = bgImage;
            slide.appendChild(slideCover);
            
            // === DETAILS SECTION ===
            const overlay = document.createElement("div");
            overlay.className = "slide-overlay";
            slide.appendChild(overlay);
            
            const cardIcon = document.createElement("div");
            cardIcon.className = "card-icon";
            overlay.appendChild(cardIcon);
            
            const faIcon = document.createElement("i");
            faIcon.className = item.icon;
            cardIcon.appendChild(faIcon);

            const details = document.createElement("div");
            details.className = "card-details";
            overlay.appendChild(details);

            const name = document.createElement("h4");
            name.className = "name";
            name.textContent = item.name;
            details.appendChild(name);

            const credits = document.createElement("p");
            credits.className = "credits";
            details.appendChild(credits);
            
            const teamSpan = document.createElement("span");
            teamSpan.className = "team";
            teamSpan.textContent = item.team;
            credits.appendChild(teamSpan);

            const pipe = document.createTextNode(" | ");
            credits.appendChild(pipe);

            const timelineSpan = document.createElement("span");
            timelineSpan.className = "timeline";
            timelineSpan.textContent = item.timeline;
            credits.appendChild(timelineSpan);
            
            // === CTA BUTTON ===
            const exploreWrap = document.createElement("div");
            exploreWrap.className = "card-explore card-cta circular-button";
            exploreWrap.dataset.id = item.id;
            overlay.appendChild(exploreWrap);

            // Event delegation for project explore buttons
            slide.addEventListener("click", (e) => {
              if (e.target && e.target.matches('.card-cta')) {
                  const projectId = e.target.dataset.id;
                  openPopup(projectId);
              }
            });

          });

          slides = Array.from(sliderTrack.children);

          // Wait for entrance animation to finish before activating first
          const totalAnimDuration = slides.length * 150 + 1500; // last delay + animation time
          const featSlide = document.querySelectorAll(".featured-slide");

          setTimeout(() => {
            sliderTrack.style.setProperty("overflow","hidden");
            featSlide.forEach(item => {item.classList.remove("entrance")});
            setActiveSlide(slides[0]);
          }, totalAnimDuration);

        }
        
        function setActiveSlide(slide) {
          const sliderTrack = slide.parentElement;
          const all = sliderTrack.querySelectorAll('.featured-slide');
          document.querySelectorAll('.featured-slide').forEach(item => {
            item.classList.remove('active');
          });
          slide.classList.add('active');
                  
          const isLast = slide === all[all.length - 1];        

          // Enable snap just before scroll
          sliderTrack.style.scrollSnapType = 'x mandatory';

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (isLast) {
                sliderTrack.scrollTo({
                  left: sliderTrack.scrollWidth,
                  behavior: 'smooth'
                });
              } else {
                slide.scrollIntoView({
                  behavior: 'smooth',
                  inline: 'center',
                  block: 'nearest'
                });
              }

              // After scroll finishes, remove snap again
              setTimeout(() => {
                sliderTrack.style.scrollSnapType = 'none';
              }, 500); // matches scroll duration
            });
          });          
        }

        function attachListeners(sliderTrack) {
          const slides = sliderTrack.querySelectorAll('.featured-slide');

          slides.forEach(slide => {
            slide.addEventListener('click', () => {
              setActiveSlide(slide);
            });
          });
          
        }

        // ---------- Initialization ----------
        function init() {
          renderSlides();
          attachListeners(sliderTrack);
          App.utils.makeScrollableClickable(sliderTrack,arrowLeft,arrowRight);
        }

        // Wait for entrance animation to finish before activating first
        const totalAnimDuration = (featuredData.length - 1) * 150 + 1800; // last delay + animation time

        // ---------- Start Everything ----------
        init();
      }

      // --- ALL ---

      function allProjectTabs(projectData) {

        // ---------- Get Distinct Tabs ----------
        const tabNames = [...new Set(projectData.map(p => p.tabName))];
       
        // Create All Projects Cards Section
        const allProjects = document.createElement('div');
        allProjects.className = 'all-projects';
        projectWrap.appendChild(allProjects);

        // ---------- Create Container ----------
        const tabsContainer = document.createElement("div");
        tabsContainer.className = "tabs-container";
        allProjects.appendChild(tabsContainer);

        const tabsRow = document.createElement("div");
        tabsRow.className = "tabs-row";
        tabsContainer.appendChild(tabsRow);

        const cardsContainer = document.createElement("div");
        cardsContainer.className = "cards-container";
        allProjects.appendChild(cardsContainer);

        const cardsRow = document.createElement("div");
        cardsRow.className = "cards-row";
        cardsContainer.appendChild(cardsRow);

        // --- Render Functions ---

        function renderTabs() {  
          tabsRow.innerHTML = "";

          tabNames.forEach((tab, index) => {
            const tabItem = document.createElement("div");
            tabItem.className = "tab-item";
            tabItem.textContent = tab.toUpperCase();
            tabItem.dataset.index = index;
            // Staggered animation
            tabItem.style.animationDelay = `${index * 100}ms`;
            tabsRow.appendChild(tabItem);
          });

          // Add underline once
          const underline = document.createElement("div");
          underline.className = "tab-underline";
          tabsRow.appendChild(underline);
          
          // Attach click listeners after all tabs are created
          const tabElements = tabsRow.querySelectorAll(".tab-item");
          tabElements.forEach(tabEl => {
            tabEl.addEventListener("click", () => {
              const idx = parseInt(tabEl.dataset.index, 10);
              setActiveTab(idx);
            });
          });
        }

        function renderCards(tabName) {
          cardsRow.innerHTML = "";
          const filtered = projectData.filter(p => p.tabName === tabName);
          filtered.reverse();

          filtered.forEach((item, i) => {
            const imagePath = `assets/images/gallery/projects/${item.tabName}/${item.name.toLowerCase().replace(/\s+/g, "")}/${item.coverImage}`;
            
            const card = document.createElement("div");
            card.className = "project-card";
            card.innerHTML = ``;
            cardsRow.appendChild(card);

            
            // === COVER IMAGE ===
            const cardCover = document.createElement("div");
            cardCover.className = "card-cover";
            let bgImage = `url('${imagePath}')`;
            cardCover.style.backgroundImage = bgImage;
            card.appendChild(cardCover);
            
            // === DETAILS SECTION ===
            const overlay = document.createElement("div");
            overlay.className = "card-overlay";
            card.appendChild(overlay);
            
            const cardIcon = document.createElement("div");
            cardIcon.className = "all-card-icon";
            overlay.appendChild(cardIcon);
            
            const faIcon = document.createElement("i");
            faIcon.className = item.icon;
            cardIcon.appendChild(faIcon);

            const details = document.createElement("div");
            details.className = "all-card-details";
            overlay.appendChild(details);

            const name = document.createElement("h4");
            name.className = "name";
            name.textContent = item.name;
            details.appendChild(name);
            
            // === CTA BUTTON ===
            const exploreWrap = document.createElement("div");
            exploreWrap.className = "all-card-explore card-cta circular-button";
            exploreWrap.dataset.id = item.id;
            overlay.appendChild(exploreWrap);

            // Event delegation for project explore buttons
            card.addEventListener("click", (e) => {
              if (e.target && e.target.matches('.card-cta')) {
                  const projectId = e.target.dataset.id;
                  openPopup(projectId);
              }
            });

            // Staggered entrance
            setTimeout(() => {
              card.classList.add("card-enter");
            }, i * 200); // 100ms stagger between cards
          });
        }

        function setActiveTab(index) {

          // Activate tab
          const tabElements = tabsRow.querySelectorAll(".tab-item");
          tabElements.forEach((el) => el.classList.remove("active"));
          const newActiveTab = tabElements[index];
          newActiveTab.classList.add("active");

          // Move underline
          const underline = tabsRow.querySelector(".tab-underline");
          const left = newActiveTab.offsetLeft;
          const width = newActiveTab.offsetWidth;
          underline.style.left = `${left}px`;
          underline.style.width = `${width}px`;

          // Load relevant cards
          renderCards(tabNames[index]);
          cardsRow.scrollTo({ left: 0, behavior: "instant" });
        }

        // ---------- Init ----------
        App.utils.makeScrollableClickable(tabsRow);
        App.utils.makeScrollableClickable(cardsRow);
        setTimeout(() => {
          renderTabs();
        }, 500); 
        setTimeout(() => {
          setActiveTab(0);
        }, 1500); 
      }

      // --- POPUP ---

      const popup = document.createElement("div");
      popup.id = "project-popup";
      popup.className = "project-popup";
      root.appendChild(popup);

      const popupContent = document.createElement("div");
      popupContent.id = "project-popup-content";
      popupContent.className = "project-popup-content";
      popup.appendChild(popupContent);

      const closeButton = document.createElement("button");
      closeButton.id = "project-popup-close";
      closeButton.className = "project-popup-close";
      closeButton.setAttribute = ("aria-label","close project details");
      closeButton.innerHTML = '<i class="fas fa-times"></i>';
      popup.appendChild(closeButton);

      function createPopupContent(project) {
        const coverImagePath = `assets/images/gallery/projects/${project.tabName}/${project.name.toLowerCase().replace(/\s+/g, "")}/${project.coverImage}`;
        const detailImagePath = `assets/images/gallery/projects/${project.tabName}/${project.name.toLowerCase().replace(/\s+/g, "")}/${project.detailImage}`;

        return `
                <div class="popup-header">
                    <img src="${coverImagePath}" alt="${
          project.name
        } Cover" class="popup-cover-image cover" loading="lazy">
                    <h2 class="popup-title animate-in">${project.name}</h2>
                </div>
                <div class="popup-body">
                    <div class="popup-meta animate-in" style="animation-delay: 0.1s;">
                        <span><i class="fas fa-users"></i> ${
                          project.team
                        }</span>
                        <span><i class="fas fa-calendar-alt"></i> ${
                          project.timeline
                        }</span>
                        <span><a href="${
                          project.link
                        }" target="_blank" rel="noopener noreferrer"><i class="fas fa-link"></i> View Live</a></span>
                    </div>

                    <div class="popup-section animate-in" style="animation-delay: 0.2s;">
                        <h3 class="popup-section-title">Role</h3>
                        <p>${project.role}</p>
                    </div>

                    <div class="popup-section animate-in" style="animation-delay: 0.3s;">
                        <h3 class="popup-section-title">Technologies Used</h3>
                        <div class="tech-list">
                            ${project.technologies
                              .map(
                                (tech) =>
                                  `<span class="tech-item">${tech}</span>`
                              )
                              .join("")}
                        </div>
                    </div>

                    <div class="details-grid">
                        <div class="popup-section animate-in" style="animation-delay: 0.4s;">
                            <h3 class="popup-section-title">Key Tasks</h3>
                            <ul class="popup-list">
                                ${project.tasks
                                  .map((task) => `<li>${task}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                        <div class="popup-section animate-in" style="animation-delay: 0.5s;">
                            <h3 class="popup-section-title">Achievements</h3>
                            <ul class="popup-list">
                                ${project.achievements
                                  .map((ach) => `<li>${ach}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                    </div>
                    
                    <div class="popup-detail-image-container animate-in" style="animation-delay: 0.6s;">
                        <img src="${detailImagePath}" alt="${
          project.name
        } Detail" class="popup-detail-image detail" loading="lazy">
                    </div>

                    <div class="popup-section animate-in" style="animation-delay: 0.7s;">
                        <h3 class="popup-section-title">Notes</h3>
                        <p class="popup-notes">${project.notes}</p>
                    </div>
                </div>
            `;
      }

      function openPopup(projectId) {
        const project = galleryContent.projectData.find((p) => p.id === projectId);
        if (!project) {
          console.error(`Project with ID "${projectId}" not found.`);
          return;
        }

        popupContent.innerHTML = createPopupContent(project);
        popup.classList.add("active");
        document.body.style.overflow = 'hidden';
        popupContent.scrollTop = 0; // Ensure popup opens at the top
        App.slider.disableInputs();
        toggleLocalScrollBlockers(popupContent);
        addPopupEventListeners();
      }

      function closePopup() {
        popup.classList.remove("active");
        document.body.style.overflow = '';

        // Clear content after the closing animation finishes
        popup.addEventListener(
          "transitionend",
          () => {
            popupContent.innerHTML = "";
          },
          { once: true }
        );
        App.slider.enableInputs();
      }

      // --- POPUP EVENT HANDLERS ---

      function handlePopupKeyDown(e) {
        if (e.key === 'ArrowDown' && popup.classList.contains("active")) {
            e.preventDefault();
            popupContent.scrollTop += 40;
        } else if (e.key === 'ArrowUp' && popup.classList.contains("active")) {
            e.preventDefault();
            popupContent.scrollTop -= 40;
        } else if (e.key === "Escape" && popup.classList.contains("active")) {
          closePopup();
        }
      }

      function handlePopupWheel(e) {
          e.preventDefault();
          popupContent.scrollTop += e.deltaY;
      }

      function handlePopupTouchStart(e) {
          if (e.touches.length === 1) {
              lastTouchY = e.touches[0].clientY;
          }
      }

      function handlePopupTouchMove(e) {
          if (e.touches.length !== 1) return;
          
          const currentTouchY = e.touches[0].clientY;
          const deltaY = lastTouchY - currentTouchY;
          popupContent.scrollTop += deltaY;
          lastTouchY = currentTouchY;
      }

      function addPopupEventListeners() {

        document.addEventListener('keydown', handlePopupKeyDown);
        popupContent.addEventListener('wheel', handlePopupWheel, { passive: false });
        popupContent.addEventListener('touchstart', handlePopupTouchStart, { passive: true });
        popupContent.addEventListener('touchmove', handlePopupTouchMove, { passive: false });
        closeButton.addEventListener("click", closePopup);

        // Close when clicking on the background overlay
        popup.addEventListener("click", (e) => {
          if (e.target === popup) {
            closePopup();
          }
        });

      }
      
      function stopGlobalScrollEvents(e) {
        e.stopPropagation();
      }

      function isOverflowing(el) {
        return el.scrollHeight > el.clientHeight;
      }

      function toggleLocalScrollBlockers(popupContent) {
        if (isOverflowing(popupContent)) {
          // prevent global slider actions from triggering
          popupContent.addEventListener('wheel', stopGlobalScrollEvents, { passive: false });
          popupContent.addEventListener('touchmove', stopGlobalScrollEvents, { passive: false });
          popupContent.addEventListener('touchend', stopGlobalScrollEvents, { passive: false });
          document.addEventListener('keydown', stopGlobalScrollEvents, { passive: false });
        } else {
          popupContent.removeEventListener('wheel', stopGlobalScrollEvents);
          popupContent.removeEventListener('touchmove', stopGlobalScrollEvents);
          popupContent.removeEventListener('touchend', stopGlobalScrollEvents);
          document.removeEventListener('keydown', stopGlobalScrollEvents);
        }
      }

      // -- init --
      
      featuredSlider(galleryContent.projectData);
      setTimeout(() => {
        allProjectTabs(galleryContent.projectData);
      }, featuredAnimDuration);
      
    }
    
    // ----- INIT GALLERY ------

    generateGallery(galleryContent);

    setTimeout(() => {
      App.slider.enableInputs();
    }, 10);
  };

  App.sections.projectGalleryUsual = function () {
  };
})(window.App);
