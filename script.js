// Blog Functionality

document.addEventListener('DOMContentLoaded', function () {
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
});