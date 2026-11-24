const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const accountDialog = document.querySelector('.account-dialog');
const accountTriggers = document.querySelectorAll('.account-trigger');
const dialogClose = document.querySelector('.dialog-close');
const accountPanels = document.querySelectorAll('.account-panel');
const currentYear = document.querySelector('#current-year');

function closeNavigation() {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
}

function resetAccountDialog() {
    accountPanels.forEach((panel) => {
        panel.hidden = panel.dataset.panel !== 'login';
        panel.querySelector('.form-feedback').textContent = '';
    });
}

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navigation.classList.toggle('is-open', !isOpen);
});

navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
        closeNavigation();
    }
});

accountTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        closeNavigation();
        resetAccountDialog();
        accountDialog.showModal();
    });
});

dialogClose.addEventListener('click', () => accountDialog.close());

accountDialog.addEventListener('click', (event) => {
    if (event.target === accountDialog) {
        accountDialog.close();
    }
});

accountDialog.addEventListener('close', resetAccountDialog);

document.querySelectorAll('[data-switch]').forEach((button) => {
    button.addEventListener('click', () => {
        accountPanels.forEach((panel) => {
            panel.hidden = panel.dataset.panel !== button.dataset.switch;
            panel.querySelector('.form-feedback').textContent = '';
        });
        accountDialog.querySelector(`#${button.dataset.switch === 'login' ? 'login-email' : 'register-name'}`).focus();
    });
});

document.querySelectorAll('.account-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.nextElementSibling.textContent = 'Esta demonstração ainda não está conectada a um serviço de autenticação.';
    });
});

currentYear.textContent = new Date().getFullYear();
