(function(App) {

    'use strict';

    App.sections.techExpertise = function() {
        const introTime = 3000;

        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');

        const expertiseData = {
          intro: "Categorically listing the core, tech, creative and other skills that build my foundation and extend into excellence.",
          hexagons: [
            {
              order: 1,
              title: "Core skills",
              icon: "fa-bullseye",
              backgroundImage:
                "",
              description:
                "Soft skills that drive peak performance, results and productive efficiency in fast-paced professional work environments.",
              advanced: [
                "Business Communication",
                "Attention to Detail",
                "Listening & Collaboration",
                "Organizational Ability",
                "Problem-Solving Acumen",
                "Resilient & Passionate",
                "Streamlined Vision",
                "Presence of Mind",
                "Situational Adaptability",
                "Management Expertise",
                "Committing Attitude",
              ],
             
              extra:
                "My professional journey and life has thrown many different challenges before me, and facing them has tested me and helped me learn more about myself and my strengths and weaknesses.",
            },
            {
              order: 2,
              title: "Coding Basics",
              icon: "fa-code",
              backgroundImage:
                "",
              description:
                "Fundamental markup and scripting languages forming the backbone of web pages and other applications.",
              advanced: [ "JavaScript, HTML, CSS, JSON" ],
              intermediate: [ "Java","PHP", "SQL", ],
              basics: [ "C/C++", "Python", "Bash/Shell Scripting", "XML", "YAML", ],
              extra:
                "These languages are the foundation of my coding journey, and I have used them to build and maintain many different projects, from simple scripts to corporate client works.",
            },
            {
              order: 3,
              title: "Frontend",
              icon: "fa-display",
              backgroundImage:
                "",
              description:
                "Client-side technologies that I have learned, practiced and worked with on projects.",
              advanced: ["HTML | CSS | JS", "SCSS", "jQuery", "Bootstrap", "Tailwind" , "GSAP", "AJAX", "Fetch API", "JSON"],
              intermediate: [
                "ES6/Typescript",
                "React JS",
                "Vue 3",
                "Next JS",
                "Nuxt JS",
                "Angular JS",
                "MUI"
              ],
              basics: [
                "WooCommerce",
                "Shopify Liquid",
                "React Native",
                "Android App Development"
              ],
              extra:
                "I have worked on many different projects, from simple static pages to complex web applications, and I have used these technologies to build responsive, interactive and user-friendly interfaces following best practices and ensuring well documented and readable code. Apart from the above, I have also worked with many different libraries, such as Slick, Fullpage, Wow, Swiper etc sliders and many others, and I have used them to to build web components, for animations and enhance the user experience and performance of my projects.",
            },
            {
              order: 4,
              title: "Design",
              icon: "fa-palette",
              backgroundImage:
                "",
              description:
                "Structured design systems and applications that are used to design assets and UI to build visually compelling user experiences across devices and platforms.",
              advanced: [
                "Photoshop",
                "Figma",
                "Canva",
                "Inkscape",
                "Numerous Designing / Editing Tools",
              ],
              intermediate: [
                "Coreldraw",
                "GIMP",
              ],
              basics: [],
              extra:
                "I have used these tools to create and edit images, graphics, logos, and other visual elements for my projects. I have also used them to design user interfaces, wireframes, and prototypes for web applications. I have a keen eye for detail and aesthetics, and I strive to create visually appealing designs and assets for all my projects.",
            },
            {
              order: 5,
              title: "Serverside",
              icon: "fa-network-wired",
              backgroundImage:
                "",
              description:
                "Backend platforms and APIs that power data processing, business logic, storage, and integrations for scalable, secure applications.",
              advanced: ["REST API", "GraphQL"],
              intermediate: [
                "Node JS",
                "JSP",
                "MySQL",
                "Laravel",
                "WordPress",
              ],
              basics: [
               "Firebase"  
              ],
              extra:
                "Have been an Active Collaborator in Projects with the Backend Teams on a variety of tech stacks.",
            },
            {
              order: 6,
              title: "Utilities",
              icon: "fa-wrench",
              backgroundImage:
                "",
              description:
                "Productivity and Development tools, Task Runners, Version Control Systems, Generative AI and more that streamline workflows, asset creation, and collaborative project management from end to end.",
              advanced: ["Gulp JS", 'GIT'],
              intermediate: ["Generative AI LLM Apps", "CI/CD", "GitHub Actions", "Jira", "Webpack", "Slack | Discord", "Zoom | Teams | Meet"],
              basics: [
                "Google Workspace",
                "MS Office 365",
                "Libre Office",
              ],
              extra:
                "These utilities collectively have helped me automate repetitive tasks and improve the quality and speed of my performance and completion on all stages of various projects.",
            },
            {
              order: 7,
              title: "Beyond Code",
              icon: "fa-feather",
              backgroundImage:
                "",
              description:
                "Listing a few things apart from tech that I have skills and passion for, practice, follow or participate and enjoy doing.",
              advanced: [
                "Digital Branding",
                "Events Organization and Management",
                "Creative Content Creation (Designs/Scripts/Videos)",
                "Photography | Videography",
                "Presentations | Public Speaking", 
                "Everything about Sports",
                "Engaging with Nature",
                "Environmental Awareness",
                "Travelling | Exploring",
                "Vegetarian Cuisine",
                "Festivals and Live Events",
                "Community Engagement",
                "Music, Books, Anime, Movies, TV Shows, Documentaries and more",
              ],
              intermediate: [],
              basics: [],
              extra:
                "I'm passionate about life and I love exploring and learning new things. Engaging in my diverse range of interests, honing my skills or just being part of these activities bring me joy and help me be an energetic well-rounded individual and that contributes to my personal and professional growth.",
            }
          ]
        };
        
        
        const expertiseContent = document.querySelector('.expertise-content');
        
        // Expertise Intro
        const intro = document.createElement('div');
        const introPara = document.createElement('p');
        intro.className = 'expertise-intro section-intro hoverable';
        introPara.className = 'hoverable';
        introPara.textContent = expertiseData.intro;
        intro.appendChild(introPara);
        expertiseContent.appendChild(intro);
        // 💥 Animate it immediately!
        requestAnimationFrame(() => {
          introPara.classList.add("animates-in");
        });

        // Expertise Container
        const container = document.createElement('div');
        container.className = 'expertise-container';

        // SkillHive Wrapper
        const skillWrapper = document.createElement('div');
        skillWrapper.className = 'skillhive-wrapper';
        
        // Hive Expansion Wrapper
        const expansionWrapper = document.createElement('div');
        expansionWrapper.className = 'hive-expansion-wrapper';
        
        // SkillHive Wrapper
        const skillHive = document.createElement('div');
        skillHive.className = 'skillhive';

        // Create hexagons
        expertiseData.hexagons.forEach((item, index) => {
            const hex = document.createElement('div');
            hex.className = 'skillhive-leaf hoverable clickable';
            hex.dataset.index = index;

            const inner = document.createElement('div');
            inner.className = 'skillhive-leaf-inner hoverable clickable';

            const iconWrap = document.createElement('div');
            iconWrap.className = 'skillhive-leaf-inner-icon hoverable clickable';
            
            const icon = document.createElement('i');
            icon.className = `fa-solid ${item.icon}`;

            iconWrap.appendChild(icon);
            inner.appendChild(iconWrap);
            // titleWrap.appendChild(title);
            // inner.appendChild(titleWrap);
            hex.appendChild(inner);
            skillHive.appendChild(hex);
        });
        skillWrapper.appendChild(skillHive);


        //  Expansion Panel Creation
        const expansionPanel = document.createElement('div');
        expansionPanel.className = 'hive-expansion';

        expansionWrapper.appendChild(expansionPanel);
        
        // Append all
        container.appendChild(skillWrapper);
        container.appendChild(expansionWrapper);
        expertiseContent.appendChild(container);

        //  Content generator with fade-stagger animation
        function populateExpansionContent(item) {
          expansionPanel.innerHTML = ''; // clear content

          const title = document.createElement('h3');
          title.className = 'expansion-title fade-staggered';
          title.textContent = item.title;
          title.style.setProperty('--delay', `0ms`);
          expansionPanel.appendChild(title);

          const desc = document.createElement('p');
          desc.className = 'expansion-desc fade-staggered';
          desc.textContent = item.description;
          desc.style.setProperty('--delay', `100ms`);
          expansionPanel.appendChild(desc);

          const categories = ['advanced', 'intermediate', 'basics'];
          categories.forEach((cat, i) => {
            if (!item[cat] || item[cat].length === 0) return;

            const category = document.createElement('div');
            category.className = 'expansion-category fade-staggered';
            category.style.setProperty('--delay', `${200 + i * 100}ms`);

            if((item.order !== 1) && (item.order !== 7)) {
              const title = document.createElement('h5');
              title.textContent = cat;
              category.appendChild(title);
            }

            const points = document.createElement('div');
            points.className = 'expansion-points';

            item[cat].forEach((point, j) => {
              const span = document.createElement('span');
              span.textContent = point;
              points.appendChild(span);
            });

            category.appendChild(points);
            expansionPanel.appendChild(category);
          });

          const extra = document.createElement('p');
          extra.className = 'expansion-extra fade-staggered';
          extra.textContent = item.extra;
          extra.style.setProperty('--delay', `600ms`);
          expansionPanel.appendChild(extra);

          toggleLocalScrollBlockers(expansionPanel);
        }

        function stopGlobalScrollEvents(e) {
          e.stopPropagation();
        }

        function isOverflowing(el) {
          return el.scrollHeight > el.clientHeight;
        }

        function toggleLocalScrollBlockers(expansion) {
          if (isOverflowing(expansion)) {
            // prevent global slider actions from triggering
            expansion.addEventListener('wheel', stopGlobalScrollEvents, { passive: false });
            expansion.addEventListener('touchmove', stopGlobalScrollEvents, { passive: false });
            expansion.addEventListener('touchend', stopGlobalScrollEvents, { passive: false });
            expansion.addEventListener('keydown', stopGlobalScrollEvents, { passive: false });
          } else {
            expansion.removeEventListener('wheel', stopGlobalScrollEvents);
            expansion.removeEventListener('touchmove', stopGlobalScrollEvents);
            expansion.removeEventListener('touchend', stopGlobalScrollEvents);
            expansion.removeEventListener('keydown', stopGlobalScrollEvents);
          }
        }


        // 💥 Handles the full update with animations
        function updateExpansionWithAnimation(item) {
          expansionPanel.classList.remove('fade-slide-in');
          expansionPanel.classList.add('fade-slide-out');


          // Wait for fade-out to finish, then update
          expansionPanel.addEventListener('animationend', function handleFadeOut() {
            expansionPanel.removeEventListener('animationend', handleFadeOut);
            expansionPanel.classList.remove('fade-slide-out');

            // Inject new content
            populateExpansionContent(item);
            expansionPanel.scrollTo({ top: 0, behavior: "instant" });
            

            // Trigger fade-in
            requestAnimationFrame(() => {
              expansionPanel.classList.add('fade-slide-in');
            });
          });
        }

        //  Bind listeners to skillhive elements
        document.querySelectorAll('.skillhive-leaf').forEach((hex, index) => {
          hex.addEventListener('mouseover', () => {
            // Prevent unnecessary re-update
            if (hex.classList.contains('active')) return;

            // Update active class
            document.querySelectorAll('.skillhive-leaf').forEach(h => h.classList.remove('active'));
            hex.classList.add('active');

            // Animate and update expansion
            updateExpansionWithAnimation(expertiseData.hexagons[index]);
          });
        });

        // Explicitly activate first hexagon and trigger expansion on init
        const firstHex = document.querySelector('.skillhive-leaf');
        if (firstHex) {
          firstHex.classList.add('active');
          updateExpansionWithAnimation(expertiseData.hexagons[0]);
        }



        setTimeout(() => {
            App.slider.enableInputs();
        }, 0);
    }

    App.sections.techExpertiseUsual = function () {
    }
})(window.App);