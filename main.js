/**
 * SUMIT KOHLI - PORTFOLIO SCRIPT
 * Lightweight, fast, and native-feeling interactions.
 * Zero scroll-jacking, zero lag, smooth native scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // 1. Simple Fade-in on Scroll (Native IntersectionObserver)
    const fadeElements = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        fadeElements.forEach(el => el.classList.add('visible'));
    }

    // 2. Smooth Navigation Links (Native smooth scrolling)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 3. Copy Email to Clipboard
    const copyBtn = document.getElementById('copy-email-btn');
    const emailText = 'sumitkingkohlisk@gmail.com';
    const toast = document.getElementById('toast');

    function showToast(msg) {
        if (!toast) return;
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText).then(() => {
                showToast('Email copied to clipboard!');
            }).catch(() => {
                showToast('Email: sumitkingkohlisk@gmail.com');
            });
        });
    }

    // 4. Contact Form Handler (Direct Gmail Compose)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('form-name')?.value.trim() || '';
            const email = document.getElementById('form-email')?.value.trim() || '';
            const message = document.getElementById('form-message')?.value.trim() || '';

            if (!name || !email || !message) {
                showToast('Please fill in all fields.');
                return;
            }

            const subject = `Portfolio Message from ${name}`;
            const body = `Hi Sumit,\n\n${message}\n\nFrom: ${name} (${email})`;

            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sumitkingkohlisk@gmail.com&su=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`;

            showToast('Opening Gmail...');
            setTimeout(() => {
                window.open(gmailUrl, '_blank', 'noopener,noreferrer');
                contactForm.reset();
            }, 400);
        });
    }
});
