function init() {
    let newsletterdiv = document.querySelector('.newsletterDiv');

    let newsletter = document.querySelector('.newsletter');

    let close = document.querySelector('.close');

    let logo = document.querySelector('.logo');

    let navul = document.querySelector('.navul');


    newsletter.addEventListener(
        'click', function () {
            newsletterdiv.style.display = 'block';
        }
    )

    close.addEventListener(
        'click', function () {
            newsletterdiv.style.display = 'none';
        }
    )

    window.addEventListener(
        'scroll', function () {
            scrolled = window.scrollY;
            scrollable = document.documentElement.scrollHeight - window.innerHeight;
            console.log(scrollable);
            console.log(scrolled);
            if (Math.ceil(scrolled) == scrollable) {
                logo.style.display = 'inline';
                navul.style.backgroundColor = 'white';
            }
        }
    )
};
init();

const message = document.getElementById('formp');

function validateForm() {

    const inputDisplay = document.querySelector('.submit');

    const form = document.forms['form'];

    const fname = document.getElementById('fname').value;

    const message = document.getElementById('formp');

    form.addEventListener(
        'submit',
        function (evt) {
            evt.preventDefault();

            validateInputs();
        }
    );

    function validateInputs() {

        if (fname === '') {
            message.style.display = 'block';
            message.innerHTML = 'Input field cannot be empty';
            return false;
        }
        else {
           alert('trueeeeeee')
           return true;
        }
    }
}
validateForm();

function navDropdown() {
    const hammDiv = document.querySelector('.hammDiv');

    const hammContent = document.querySelector('.hamm-content');

    const hammtop = document.querySelector('.top');

    const hammcen = document.querySelector('.center');

    const hammlast = document.querySelector('.bottom');

    hammDiv.addEventListener(
        'click', function (e) {
            let pressed = e.target.getAttribute('aria-pressed');

            if (pressed === 'false') {
                e.target.setAttribute('aria-pressed', 'true');
                hammContent.style.display = 'none';

                hammtop.style.cssText = 'transform: rotate(0deg); background-color: black; height: 7px; width: 40px;margin - bottom: 7px; border - radius: 17px;'

                hammcen.style.cssText = 'display:block; width: 50px';

                hammlast.style.cssText = 'transform: rotate(0deg);'
            } else {
                e.target.setAttribute('aria-pressed', 'false');

                hammContent.style.display = 'flex';

                hammtop.style.cssText = 'transform: rotate(45deg); margin: 18px 0 0 0px; width: 50px;'

                hammcen.style.display = 'none';

                hammlast.style.cssText = 'transform: rotate(-45deg); margin: -5px 0 15px 0px;width: 50px; '
            }
        }
    );
}

navDropdown();

function disappear() {
    message.style.display = 'none';
    setTimeout('disappear()', 8000);
}
disappear();