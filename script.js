// Blog Functionality

document.addEventListener('DOMContentLoaded', function () {
    // Fallback image when external image URL fails to load
    const fallbackSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">' +
        '<rect width="640" height="360" fill="#f1f1f1"/>' +
        '<rect x="190" y="90" width="260" height="180" rx="10" fill="#e4e4e4" stroke="#cccccc"/>' +
        '<circle cx="265" cy="150" r="16" fill="#c8c8c8"/>' +
        '<path d="M230 235l65-60 45 40 35-28 35 48z" fill="#cfcfcf"/>' +
        '<text x="320" y="305" text-anchor="middle" font-family="Segoe UI, Arial" font-size="22" fill="#8a8a8a">noimage.jpg</text>' +
        '</svg>'
    );

    document.querySelectorAll('img').forEach(function (img) {
        img.addEventListener('error', function () {
            if (!img.dataset.fallbackApplied) {
                img.dataset.fallbackApplied = 'true';
                img.src = fallbackSrc;
                img.alt = 'noimage.jpg';
            }
        });
    });

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