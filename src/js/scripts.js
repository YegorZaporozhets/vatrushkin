
const header = document.querySelector('header');
const contactsKey = document.querySelector('#openContacts');
const contactsDiv = document.querySelector('#contactsBlock');

contactsKey.addEventListener('click', () => {
    const styles = getComputedStyle(contactsDiv);

    if (parseInt(styles.marginTop, 10)) {
        contactsDiv.style.marginTop = 0;
    } else {
        contactsDiv.style.marginTop = '-100px';
    }
});

contactsDiv.addEventListener('click', event => {
    const target = event.target.closest('div');

    if (!target.dataset.closePanel) return;

    contactsDiv.style.marginTop = '-100px';
});

header.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.dataset.goTo) {
        return;
    }

    const goTo = target.dataset.goTo;
    const elementToScroll = document.querySelector(`.${goTo}`);
    const top = elementToScroll.getBoundingClientRect().top;

    window.scrollBy({top, behavior: 'smooth'});
});
