function validateForm() {
    let form = document.forms['contactForm'];
    let validNameMsg = document.getElementsByClassName('form_hint-name');
    let validEmailMsg = document.getElementsByClassName('form_hint-email');
    let validCodeMsg = document.getElementsByClassName('form_hint-code');
    let validPhoneMsg = document.getElementsByClassName('form_hint-phone');

    let name = form['name'].value;
    let validName;
    if (name.length < 2 || name.length > 20) {
        validNameMsg[0].innerText = 'Имя должно содержать от 2х до 20 символов';
        validName = false;
    } else {
        validName = true;
        validNameMsg[0].innerText = '';
    }

    if (!/[a-zA-Z]{2,20}/.test(name)) {
        validNameMsg[0].innerText = 'Имя должно содержать только английские буквы';
        validName = false;
    } else {
        validName = true;
        validNameMsg[0].innerText = '';
    }

    let email = form['email'].value;
    let validEmail;
    if (!email.includes('@')) {
        validEmailMsg[0].innerText = 'Email должен содержать @';
        validEmail = false;
    } else {
        validCodeMsg[0].innerText = '';
        let emailFirst = email.split('@')[0];
        let emailPost = email.split('@')[1];
        if (!/([a-zA-Z]{6,12}|.{6,12})/.test(emailFirst)) {
            validEmailMsg[0].innerText = 'Email должен содержать латинские буквы от 6 до 12 символов';
            validEmail = false;
        } else {
            validEmail = true;
            validEmailMsg[0].innerText = '';
        }

        if (emailPost !== 'gmail.com' && emailPost !== 'ukr.net') {
            validEmailMsg[0].innerText = 'Email должен содержать gmail.com или ukr.net';
            validEmail = false;
        } else {
            validEmail = true;
            validEmailMsg[0].innerText = '';
        }
    }


    let codeValidation = [50, 63, 66, 67, 68, 91, 92, 93, 96, 97];
    let code = form['code'].value;
    let validCode;
    if (!codeValidation.includes(+code)) {
        validCodeMsg[0].innerText = 'Код должен быть - 50, 63, 66, 67, 68, 91, 92, 93, 96, 97';
        validCode = false;
    } else {
        validCode = true;
        validCodeMsg[0].innerText = '';
    }

    let phone = form['phone'].value;
    let validPhone;
    if (!/\d{7}/.test(phone)) {
        validPhoneMsg[0].innerText = 'Номер телефона должен содержать 7 цифр';
        validPhone = false;
    } else {
        validPhone = true;
        validPhoneMsg[0].innerText = '';
    }

    console.log(validName, validEmail, validCode, validPhone);

    if (name && validName && email && validEmail && code && validCode && phone && validPhone) {
        alert('Мы услышим Вас!!!');
        return true;
    }

    if (name && email && code && phone) {
        alert('Мы Вас не слышим!!!');
        return false;
    }
}
