(function(App) {

    'use strict';
    
    App.sections.letsConnect = function() {

        const connectData = {
            intro: "If you felt a spark in this journey - reach out, and let’s create something extraordinary together."
        }
        
        const root = document.querySelector('.connect-content');
            
        // Create intro
        const introDiv = document.createElement('div');
        introDiv.className = 'connect-intro section-intro hoverable';
        const introP = document.createElement('p');
        introP.className = 'hoverable';
        introP.textContent = connectData.intro || '';
        introDiv.appendChild(introP);
        root.appendChild(introDiv);

        const connectFormWrap = document.createElement('div');
        connectFormWrap.className = 'connect-form-wrapper';
        root.appendChild(connectFormWrap);

        // Footer 
        
        const footer = document.createElement('footer');
        footer.className = 'kd-footer';
        root.appendChild(footer);

        const socialBox = document.createElement('div');
        socialBox.className = 'social-box';

        const socials = [
            { href: 'https://github.com/krizzzcode', label: 'GitHub', icon: 'fab fa-github' },
            { href: 'https://www.linkedin.com/in/kriz-live/', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
            { href: 'https://www.instagram.com/krizzzlife/', label: 'Instagram', icon: 'fab fa-instagram' },
        ];

        socials.forEach(({ href, label, icon }) => {
            const a = document.createElement('a');
            a.href = href;
            a.target = '_blank';
            a.setAttribute('aria-label', label);
            const i = document.createElement('i');
            i.className = icon;
            a.appendChild(i);
            socialBox.appendChild(a);
        });

        const copyright = document.createElement('div');
        copyright.className = 'copyright';
        copyright.textContent = '© Magikriz™ 2025. All Rights Reserved.';

        footer.appendChild(socialBox);
        footer.appendChild(copyright);

        // Contact Form

        function createContactForm() {
            const form = document.createElement('form');
            form.className = 'form-container';
            form.id = 'contactForm';

            const groupName = document.createElement('div');
            groupName.className = 'form-group';

            const inputName = document.createElement('input');
            inputName.name = 'name';
            inputName.id = 'name';
            inputName.type = 'text';
            inputName.placeholder = 'Name';

            const errorName = document.createElement('div');
            errorName.id = 'nameError';
            errorName.className = 'error';

            groupName.appendChild(inputName);
            groupName.appendChild(errorName);
            form.appendChild(groupName);

            const groupEmail = document.createElement('div');
            groupEmail.className = 'form-group';

            const inputEmail = document.createElement('input');
            inputEmail.name = 'email';
            inputEmail.id = 'email';
            inputEmail.type = 'email';
            inputEmail.placeholder = 'Email ID';

            const errorEmail = document.createElement('div');
            errorEmail.id = 'emailError';
            errorEmail.className = 'error';

            groupEmail.appendChild(inputEmail);
            groupEmail.appendChild(errorEmail);
            form.appendChild(groupEmail);

            // PHONE GROUP

            const phoneGroup = document.createElement('div');
            phoneGroup.className = 'form-group phone-group';

            const phoneRow = document.createElement('div');
            phoneRow.className = 'phone-row'; // You can style this to align horizontally

            const countrySelect = document.createElement('select');
            countrySelect.id = 'countryCode';
            countrySelect.name = 'countryCode';

            App.utils.countries.forEach(c => {
            const option = document.createElement('option');
            option.value = c.dial_code;
            option.textContent = `${c.code} (${c.dial_code})`;
            countrySelect.appendChild(option);
            });

            const phoneInput = document.createElement('input');
            phoneInput.id = 'phone';
            phoneInput.name = 'phone';
            phoneInput.type = 'tel';
            phoneInput.placeholder = 'Phone Number (optional)';

            const phoneError = document.createElement('div');
            phoneError.id = 'phoneError';
            phoneError.className = 'error';

            phoneRow.appendChild(countrySelect);
            phoneRow.appendChild(phoneInput);
            phoneGroup.appendChild(phoneRow);
            phoneGroup.appendChild(phoneError);
            form.appendChild(phoneGroup);

            // LINK GROUP
            const groupLink = document.createElement('div');
            groupLink.className = 'form-group';

            const inputLink = document.createElement('input');
            inputLink.name = 'link';
            inputLink.id = 'link';
            inputLink.type = 'url';
            inputLink.placeholder = 'Website or Social Link (optional)';

            const errorLink = document.createElement('div');
            errorLink.id = 'linkError';
            errorLink.className = 'error';

            groupLink.appendChild(inputLink);
            groupLink.appendChild(errorLink);
            form.appendChild(groupLink);

            // MESSAGE GROUP
            const messageGroup = document.createElement('div');
            messageGroup.className = 'form-group';

            const textarea = document.createElement('textarea');
            textarea.name = 'message';
            textarea.id = 'message';
            textarea.placeholder = 'Your Message...';
            textarea.rows = 4;
            textarea.style.resize = 'none';

            const messageError = document.createElement('div');
            messageError.id = 'messageError';
            messageError.className = 'error';

            messageGroup.appendChild(textarea);
            messageGroup.appendChild(messageError);
            form.appendChild(messageGroup);

            const formSubmit = document.createElement('div');
            formSubmit.className = 'submit-btn';
            formSubmit.textContent = 'Submit';

            form.appendChild(formSubmit);
            connectFormWrap.appendChild(form);

            form.addEventListener('keydown', function(e) {
            if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
                e.stopPropagation();
            }
            });

            formSubmit.addEventListener("click", async (e) => {
                ['name', 'email', 'message', 'phone'].forEach(id => {
                    document.getElementById(id + 'Error').textContent = '';
                });

                const name = document.getElementById('name').value.trim();
                const email = document.getElementById('email').value.trim();
                const phoneCode = document.getElementById('countryCode').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const link = document.getElementById('link').value.trim();
                const message = document.getElementById('message').value.trim();

                let valid = true;

                if (!name) {
                    document.getElementById('nameError').textContent = 'Name is required';
                    valid = false;
                }

                if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                    document.getElementById('emailError').textContent = 'Valid email is required';
                    valid = false;
                }

                if (phone && !/^[0-9]{6,15}$/.test(phone)) {
                    document.getElementById('phoneError').textContent = 'Enter valid phone number';
                    valid = false;
                }

                if (!message) {
                    document.getElementById('messageError').textContent = 'Message cannot be empty';
                    valid = false;
                }

                if (!valid) return;

                const webAppUrl = 'https://script.google.com/macros/s/AKfycbwmrJ78tbJ0PQoZ08_OsLi8pzLBaRNOSejdrFvf4aOgXCsX8lIWDdNmj2MPkRyYsNQX/exec';

                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('phone', phone ? `${phoneCode} ${phone}` : '');
                formData.append('link', link || '');
                formData.append('message', message);

                formSubmit.textContent = 'Sending...';
                formSubmit.disabled = true;

                try {
                    const response = await fetch(webAppUrl, {
                        method: 'POST',
                        body: formData,
                    });

                    const resJson = await response.json();
                    if (resJson.result === 'success') {
                        form.innerHTML = `
                            <div class="form-success">
                                <h2>Thank You, <strong>${name}!</strong></h2>
                                <p>Your message has been sent successfully. We will get back to you shortly.</p>
                            </div>
                        `;
                        setTimeout(() => {
                            connectFormWrap.innerHTML = '';
                            createContactForm();
                        }, 5000);
                    } else {
                        throw new Error(resJson.error || 'Unknown error');
                    }

                } catch (err) {
                    console.log('Error submitting form.');
                    console.error('Error:', err);
                    formSubmit.textContent = 'Send Message';
                    formSubmit.disabled = false;
                    alert('Sorry, there was an error sending your message. Please try again.');
                }
            });
        }

          
        createContactForm();

        // setTimeout(() => {       
        //     // Sprite Animation
        //     const sprite = document.createElement('div');
        //     sprite.className = 'sprite-animation';
        //     root.appendChild(sprite);
        // }, 2500);
        
        App.slider.enableInputs();

    }
    
    App.sections.letsConnectUsual = function() {
    }

})(window.App);

