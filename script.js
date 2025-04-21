document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const content = otherItem.querySelector('p');
                if (content) {
                    content.style.maxHeight = null;
                }
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                const content = item.querySelector('p');
                if (content) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    });

    // Before/After image slider
    const comparison = document.querySelector('.comparison');
    if (comparison) {
        let isDown = false;
        let startX;
        let scrollLeft;

        comparison.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - comparison.offsetLeft;
            scrollLeft = comparison.scrollLeft;
        });

        comparison.addEventListener('mouseleave', () => {
            isDown = false;
        });

        comparison.addEventListener('mouseup', () => {
            isDown = false;
        });

        comparison.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - comparison.offsetLeft;
            const walk = (x - startX) * 2;
            comparison.scrollLeft = scrollLeft - walk;
        });
    }

    // Stats counter animation
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = document.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const target = parseInt(stat.textContent);
                        let count = 0;
                        const duration = 2000; // 2 seconds
                        const increment = target / (duration / 16); // 60fps

                        const updateCount = () => {
                            count += increment;
                            if (count < target) {
                                stat.textContent = Math.floor(count).toLocaleString();
                                requestAnimationFrame(updateCount);
                            } else {
                                stat.textContent = target.toLocaleString();
                            }
                        };

                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(statsSection);
    }

    // Testimonials carousel
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    if (testimonialsGrid) {
        let currentIndex = 0;
        const items = testimonialsGrid.children;
        const itemWidth = items[0].offsetWidth;
        const gap = parseInt(window.getComputedStyle(testimonialsGrid).gap);

        const moveToIndex = (index) => {
            const offset = (itemWidth + gap) * index;
            testimonialsGrid.style.transform = `translateX(-${offset}px)`;
            currentIndex = index;
        };

        // Auto-advance every 5 seconds
        setInterval(() => {
            const nextIndex = (currentIndex + 1) % items.length;
            moveToIndex(nextIndex);
        }, 5000);
    }

    // Sample gallery items (you can replace these with real data)
    const galleryItems = [
        {
            title: 'VR Art Gallery',
            image: 'images/gallery-1.jpg',
            creator: 'Artist Name'
        },
        {
            title: 'AR Experience',
            image: 'images/gallery-2.jpg',
            creator: 'Creator Name'
        },
        {
            title: '3D World',
            image: 'images/gallery-3.jpg',
            creator: 'Designer Name'
        }
    ];

    // Populate gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
        galleryItems.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="gallery-item-info">
                    <h3>${item.title}</h3>
                    <p>by ${item.creator}</p>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
});

// Language change handler
function changeLanguage(lang) {
    // Store the selected language preference
    localStorage.setItem('preferred-language', lang);
    
    // In a real implementation, this would:
    // 1. Load the appropriate language strings
    // 2. Update the UI with new translations
    // 3. Update the HTML lang attribute
    
    // For now, we'll just reload the page
    // In production, this would redirect to the localized version
    document.documentElement.lang = lang;
    
    // You would typically redirect to the localized version
    // window.location.href = `/${lang}${window.location.pathname}`;
}

// Initialize language selector with stored preference
document.addEventListener('DOMContentLoaded', function() {
    const storedLang = localStorage.getItem('preferred-language');
    if (storedLang) {
        document.querySelector('.language-selector select').value = storedLang;
        document.documentElement.lang = storedLang;
    }
}); 