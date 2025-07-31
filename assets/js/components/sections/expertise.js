(function(App) {

    'use strict';

    App.sections.techExpertise = function() {
        const introTime = 3000;

        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');

        const expertiseData = {
          intro: "Categorically listing my core, tech, creative and other skills that build my foundation and extend into excellence.",
          hexagons: [
            {
              order: 1,
              title: "Core skills",
              icon: "fa-bullseye",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Essential interpersonal and analytical abilities that drive effective teamwork, leadership, adaptability, and precise problem-solving in fast-paced environments.",
              advanced: [
                "Problem-Solving Acumen",
                "Leadership / Management Expertise",
              ],
              intermediate: [
                "Situational Adaptability",
                "Mathematical / Analytical Prowess",
              ],
              basics: [
                "Listening / Attention to Detail",
                "Collaborative / Committing Attitude",
              ],
              extra:
                "Use SWOT analyses, empathy mapping, active-listening apps, and regular retrospectives to refine communication and collaboration.",
            },
            {
              order: 2,
              title: "Coding Basics",
              icon: "fa-code",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Fundamental markup and scripting languages forming the backbone of web pages and interactive user experiences across platforms.",
              advanced: ["JavaScript"],
              intermediate: ["Java","PHP"],
              basics: ["C/C++", "Python"],
              extra:
                "Follow semantic HTML best practices and use linter integrations to ensure maintainable, accessible codebases.",
            },
            {
              order: 3,
              title: "Frontend",
              icon: "fa-display",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Client-side frameworks and libraries used to build dynamic, responsive interfaces with efficient rendering and state management patterns.",
              advanced: ["jQuery", "REST API", "AJAX", "Async", "Angular JS", "GSAP"],
              intermediate: [
                "Next JS",
                "React JS",
                "Nuxt JS",
                "Vue 3",
                "ES6/Typescript",
                "Fetch API",
              ],
              basics: [
                "WooCommerce",
                "Shopify"
              ],
              extra:
                "Incorporate component-driven design and isolated UI development and consistent documentation.",
            },
            {
              order: 4,
              title: "Design",
              icon: "fa-palette",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Structured design systems and principles that ensure cohesive, accessible, and visually compelling user experiences across devices.",
              advanced: ["SCSS", "Bootstrap", "Tailwind"],
              intermediate: [
                "MUI",
                "Photoshop",
                "Figma",
                "Canva",
                "Inkscape",
                "GIMP",
              ],
              basics: ["Coreldraw"],
              extra:
                "Use grid layouts, accessibility audits, and design-tool plugins to maintain polish, consistency, and inclusive standards.",
            },
            {
              order: 5,
              title: "Serverside",
              icon: "fa-network-wired",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Backend platforms and APIs powering data processing, business logic, storage, and integrations for scalable, secure applications.",
              advanced: [],
              intermediate: ["WordPress", "Firebase"],
              basics: [
                "Node JS",
                "JSP",
                "MySQL",
              ],
              extra:
                "Active Collaborator in Projects with the Backend Teams.",
            },
            {
              order: 6,
              title: "Utilities",
              icon: "fa-wrench",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Productivity and development tools that streamline workflows, version control, asset creation, and collaborative project management.",
              advanced: ["Gulp JS", 'GIT'],
              intermediate: ["Generative AI LLM Apps", "Webpack", "GitHub Actions", "SEO", "GA/GTM"],
              basics: [
                "Google Workspace",
                "MS Office 365",
                "Libre Office",
              ],
              extra:
                "Automate repetitive tasks with GitHub Actions and use many different Team communication apps for seamless team collaboration.",
            },
            {
              order: 7,
              title: "Beyond Code",
              icon: "fa-feather",
              backgroundImage:
                "https://fastly.picsum.photos/id/115/536/354.jpg?hmac=3-7F5qr1PJG8LlfljGDJ_j8BYikIZbAbTkLltLdU1pY",
              description:
                "Creative and leadership pursuits that enrich personal growth, communication skills, branding, and multimedia storytelling outside development.",
              advanced: [
                "Branding/Management",
                "Events Organization/Delegation",
              ],
              intermediate: [
                "Creative (Design/Writing)",
                "Photo/Videography & Editing",
              ],
              basics: ["Presentations/Elocution", "Public Speaking"],
              extra:
                "Host workshops, use portfolio platforms, employ event-planning apps, and publish multimedia stories to engage communities.",
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