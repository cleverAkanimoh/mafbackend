function init() {
    var newsletterdiv = document.querySelector('.newsletterDiv');

    var newsletter = document.querySelector('.newsletter');

    var close = document.querySelector('.close');


    newsletter.addEventListener(
        'click', function () {
            newsletterdiv.style.display = 'block'
        }
    )

    close.addEventListener(
        'click', function () {
            newsletterdiv.style.display = 'none'
        }
    )
}
init();


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