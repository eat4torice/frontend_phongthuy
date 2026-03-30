// Blog Functionality

document.addEventListener('DOMContentLoaded', function () {
    // Fallback image when external image URL fails to load
    const fallbackSrc = 'https://picsum.photos/seed/phongthuy-fallback/1200/800';

    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('error', function () {
            if (!img.dataset.fallbackApplied) {
                img.dataset.fallbackApplied = 'true';
                img.src = fallbackSrc;
                img.alt = 'noimage.jpg';
            }
        });
    });

    // Mobile navbar toggle (hamburger)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const navContainer = navbar.querySelector('.nav-container');
        const navMenu = navbar.querySelector('.nav-menu');

        if (navContainer && navMenu) {
            let toggleBtn = navContainer.querySelector('.navbar-toggle');
            if (!toggleBtn) {
                toggleBtn = document.createElement('button');
                toggleBtn.type = 'button';
                toggleBtn.className = 'navbar-toggle';
                toggleBtn.setAttribute('aria-label', 'Mở menu điều hướng');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.innerHTML = '<i class="fas fa-bars"></i> Menu';
                navContainer.insertBefore(toggleBtn, navMenu);
            }

            const closeMobileMenu = function () {
                navbar.classList.remove('nav-open');
                toggleBtn.setAttribute('aria-expanded', 'false');
                navbar.querySelectorAll('.nav-item.dropdown.open').forEach(function (item) {
                    item.classList.remove('open');
                });
            };

            toggleBtn.addEventListener('click', function () {
                const isOpen = navbar.classList.toggle('nav-open');
                toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });

            navbar.querySelectorAll('.nav-item.dropdown > a').forEach(function (link) {
                link.addEventListener('click', function (e) {
                    if (window.innerWidth > 1100) {
                        return;
                    }
                    e.preventDefault();
                    const item = link.closest('.nav-item.dropdown');
                    if (!item) {
                        return;
                    }
                    const willOpen = !item.classList.contains('open');
                    navbar.querySelectorAll('.nav-item.dropdown.open').forEach(function (opened) {
                        opened.classList.remove('open');
                    });
                    if (willOpen) {
                        item.classList.add('open');
                    }
                });
            });

            window.addEventListener('resize', function () {
                if (window.innerWidth > 1100) {
                    closeMobileMenu();
                }
            });

            document.addEventListener('click', function (e) {
                if (window.innerWidth > 1100) {
                    return;
                }
                if (!navbar.contains(e.target)) {
                    closeMobileMenu();
                }
            });
        }
    }

    // Handle comment form submissions
    const commentForms = document.querySelectorAll('.comment-form');
    commentForms.forEach(form => {
        const submitBtn = form.querySelector('.comment-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const nameInput = form.querySelector('.comment-input');
                const textInput = form.querySelector('.comment-textarea');

                if (nameInput.value && textInput.value) {
                    alert('Cảm ơn bằng lòng của bạn! Bình luận sẽ được duyệt trước khi đăng.');
                    nameInput.value = '';
                    textInput.value = '';
                } else {
                    alert('Vui lòng điền đầy đủ thông tin!');
                }
            });
        }
    });

    // Handle contact form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        const submitBtn = contactForm.querySelector('.submit-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', function (e) {
                e.preventDefault();
                const nameInput = contactForm.querySelector('#name');
                const emailInput = contactForm.querySelector('#email');
                const messageInput = contactForm.querySelector('#message');

                if (nameInput.value && emailInput.value && messageInput.value) {
                    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
                    contactForm.reset();
                } else {
                    alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
                }
            });
        }
    }

    // Handle newsletter form
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const emailInput = document.querySelector('.newsletter-input');
            if (emailInput && emailInput.value) {
                alert('Cảm ơn bạn đã đăng ký nhận tin!');
                emailInput.value = '';
            } else {
                alert('Vui lòng nhập email của bạn!');
            }
        });
    }

    // TOC expand/collapse for article pages
    const tocBlocks = document.querySelectorAll('.table-of-contents');
    tocBlocks.forEach((toc, index) => {
        const heading = toc.querySelector('h3');
        const list = toc.querySelector('ul');
        if (!heading || !list) {
            return;
        }

        const listId = list.id || `toc-list-${index + 1}`;
        list.id = listId;

        let titleWrap = heading.querySelector('.toc-heading');
        if (!titleWrap) {
            titleWrap = document.createElement('span');
            titleWrap.className = 'toc-heading';
            titleWrap.innerHTML = heading.innerHTML;
            heading.innerHTML = '';
            heading.appendChild(titleWrap);
        }

        let toggleBtn = heading.querySelector('.toc-toggle-btn');
        if (!toggleBtn) {
            toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'toc-toggle-btn';
            toggleBtn.setAttribute('aria-controls', listId);
            toggleBtn.setAttribute('aria-expanded', 'true');
            toggleBtn.textContent = 'Thu gọn';
            heading.appendChild(toggleBtn);
        }

        toggleBtn.addEventListener('click', function () {
            const collapsed = list.classList.toggle('is-collapsed');
            toggleBtn.textContent = collapsed ? 'Mở rộng' : 'Thu gọn';
            toggleBtn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
        });
    });

    // Global scroll-to-top button
    let scrollTopBtn = document.querySelector('.scroll-to-top');
    if (!scrollTopBtn) {
        scrollTopBtn = document.createElement('button');
        scrollTopBtn.type = 'button';
        scrollTopBtn.className = 'scroll-to-top';
        scrollTopBtn.setAttribute('aria-label', 'Lên đầu trang');
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollTopBtn);
    }

    const toggleScrollButton = function () {
        if (window.scrollY > 260) {
            scrollTopBtn.classList.add('is-visible');
        } else {
            scrollTopBtn.classList.remove('is-visible');
        }
    };

    window.addEventListener('scroll', toggleScrollButton, { passive: true });
    toggleScrollButton();

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});