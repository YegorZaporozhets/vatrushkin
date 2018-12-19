
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

header.addEventListener('click', event => {
    event.preventDefault();

    const target = event.target;

    if (!target.dataset.goTo) {
        return;
    }

    // if (target.tagName !== 'A') {
    //     return;
    // }

    const goTo = target.dataset.goTo;
    console.log('.' + goTo);
    const elementToScroll = document.querySelector(`.${goTo}`);
    const top = elementToScroll.getBoundingClientRect().top;

    window.scrollTo({top, behavior: 'smooth'});
});