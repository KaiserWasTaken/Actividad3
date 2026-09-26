/* Libreria sencilla de componentes visuales reutilizables. */
(function(window, document) {
    'use strict';

    class Modal {
        constructor(options = {}) {
            this.options = {
                title: 'Ventana modal',
                content: '',
                closeText: 'Cerrar',
                onOpen: null,
                onClose: null,
                ...options
            };

            this.createElement();
        }

        createElement() {
            this.element = document.createElement('div');
            this.element.className = 'component-modal';
            this.element.setAttribute('aria-hidden', 'true');
            this.element.innerHTML = `
        <div class="modal-background"></div>
        <section class="modal-box" role="dialog" aria-modal="true">
            <button class="modal-close" type="button" aria-label="Cerrar">&times;</button>
            <h2></h2>
            <p class="modal-content"></p>
            <button class="button modal-action" type="button"></button>
        </section>
    `;

            this.element.querySelector('h2').textContent = this.options.title;
            this.element.querySelector('.modal-content').textContent = this.options.content;
            this.element.querySelector('.modal-action').textContent = this.options.closeText;

            this.element.querySelector('.modal-close').addEventListener('click', () => this.close());
            this.element.querySelector('.modal-action').addEventListener('click', () => this.close());
            this.element.querySelector('.modal-background').addEventListener('click', () => this.close());
            this.element.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') this.close();
            });

            document.body.appendChild(this.element);
        }

        open() {
            this.element.classList.add('is-visible');
            this.element.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
            this.element.querySelector('.modal-close').focus();

            if (typeof this.options.onOpen === 'function') this.options.onOpen();
        }

        close() {
            this.element.classList.remove('is-visible');
            this.element.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');

            if (typeof this.options.onClose === 'function') this.options.onClose();
        }
    }

    class Toast {
        constructor(options = {}) {
            this.options = {
                duration: 3500,
                ...options
            };
            this.container = document.createElement('div');
            this.container.className = 'toast-container';
            this.container.setAttribute('aria-live', 'polite');
            document.body.appendChild(this.container);
        }

        show(options = {}) {
            const message = {
                title: 'Notificacion',
                text: '',
                type: 'success',
                ...options
            };

            const toast = document.createElement('div');
            toast.className = `toast toast-${message.type}`;
            toast.innerHTML = `
        <strong></strong>
        <span></span>
        <button type="button" aria-label="Cerrar notificacion">&times;</button>
        `;
            toast.querySelector('strong').textContent = message.title;
            toast.querySelector('span').textContent = message.text;
            toast.querySelector('button').addEventListener('click', () => toast.remove());

            this.container.appendChild(toast);
            window.setTimeout(() => toast.remove(), message.duration || this.options.duration);
            return toast;
        }
    }

    class Accordion {
        constructor(container, options = {}) {
            this.container = container;
            this.options = {
                items: [],
                ...options
            };
            this.render();
        }

        render() {
            this.container.className = 'accordion';

            this.options.items.forEach((item) => {
                const row = document.createElement('div');
                row.className = 'accordion-item';
                row.innerHTML = `
            <button type="button" aria-expanded="false">
            <span></span><b>+</b>
            </button>
            <p></p>
        `;
                row.querySelector('span').textContent = item.title;
                row.querySelector('p').textContent = item.content;
                row.querySelector('button').addEventListener('click', () => this.toggle(row));
                this.container.appendChild(row);
            });
        }

        toggle(item) {
            const isOpen = item.classList.toggle('is-open');
            item.querySelector('button').setAttribute('aria-expanded', isOpen);
            item.querySelector('b').textContent = isOpen ? '-' : '+';
        }
    }

    window.Componentes = {
        Modal,
        Toast,
        Accordion
    };
})(window, document);