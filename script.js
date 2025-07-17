  // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Side navigation active state
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.side-nav-item');

        function updateActiveSection() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                const target = item.getAttribute('data-target');
                if (target === `#${current}`) {
                    item.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveSection);

        // Side navigation click handlers
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const target = document.querySelector(item.getAttribute('data-target'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize
        updateActiveSection();
