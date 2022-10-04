function init() {
    let newsletterdiv = document.querySelector('.newsletterDiv');

    let newsletter = document.querySelector('.newsletter');

    let close = document.querySelector('.close');


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
};
init();

function validateForm() {
    const jform = document.getElementById('jform');
    const jfname = document.getElementById('jfname');
    const jlname = document.getElementById('jlname');
    const jemail = document.getElementById('jemail');
    const phone = document.getElementById('phone');
    const member = document.getElementById('memberr');
    const partner = document.getElementById('partnerr');
    const errorLabel = document.getElementById('errorLabel');
    const jsubmit = document.getElementById('jsubmit');

    const validFname = jfname.value.trim();
    const validLname = jlname.value.trim();
    const validEmail = jemail.value.trim();
    const validphone = phone.value.trim();

    jform.addEventListener(
        'submit',
        preventDefault(),
        validateInputs
    );

    function validateInputs() {
        if (validphone == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jsubmit.setAttribute = 'disabled'
            phone.focus();
            phone.select();
            return false;
        }
        else if (validEmail == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jsubmit.setAttribute = 'disabled'
            jemail.focus();
            jemail.select();
            return false;
        }
        else if (validLname == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jsubmit.setAttribute = 'disabled'
            jlname.focus();
            jlname.select();
            return false;
        }

        else if (validFname == '') {
            errorLabel.style.display = 'block';
            errorLabel.innerHTML = 'Input field cannot be empty';
            jsubmit.setAttribute = 'disabled'
            jfname.focus();
            jfname.select();
            return false;
        } else {
            errorLabel.style.display = 'none';
            return true;
        }

    }
}
validateForm();

function disappear() {
    errorLabel.style.display = 'none';
    setTimeout('disappear()', 15000)
}
disappear();

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