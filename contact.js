/**
 * URBAN CLOSET - Contact Page Logic
 * Form Submission, Accordion FAQ
 */

document.addEventListener('DOMContentLoaded', () => {
  // Render FAQs from FAQS_DATA
  const faqList = document.querySelector('#faq-list');
  if (faqList && typeof FAQS_DATA !== 'undefined') {
    faqList.innerHTML = FAQS_DATA.map((item, index) => `
      <div class="faq-item">
        <button type="button" class="faq-question-btn" aria-expanded="false">
          <span>${item.q}</span>
          <div class="faq-icon"></div>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-inner">${item.a}</div>
        </div>
      </div>
    `).join('');

    const faqItems = faqList.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question-btn');
      const answer = item.querySelector('.faq-answer');

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-active');

        // Close all others
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('is-active');
            other.querySelector('.faq-question-btn').setAttribute('aria-expanded', 'false');
            other.querySelector('.faq-answer').style.maxHeight = null;
          }
        });

        // Toggle current
        if (isOpen) {
          item.classList.remove('is-active');
          btn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('is-active');
          btn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });
  }

  // Contact Form Submission
  const contactForm = document.querySelector('#contact-form');
  const formSuccessMsg = document.querySelector('#contact-form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simple validity check
      const name = contactForm.querySelector('#contact-name').value;
      const email = contactForm.querySelector('#contact-email').value;
      const type = contactForm.querySelector('#contact-type').value;
      const message = contactForm.querySelector('#contact-message').value;

      if (!name || !email || !message) {
        alert('必須項目をご入力ください。');
        return;
      }

      // Hide form, show confirmation
      contactForm.style.display = 'none';
      if (formSuccessMsg) {
        formSuccessMsg.style.display = 'block';
      }

      if (typeof showToast === 'function') {
        showToast('お問い合わせを受け付けました。順次ご返信いたします。');
      }
    });
  }
});
