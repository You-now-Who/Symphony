const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    button.style.transform = 'scale(1.3)';

    document.querySelector('div').style.backgroundColor = '#ee2f64';

    document.getElementById('message').innerText = "Come Back Soon,";
});

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '#f5c2e0';
    button.style.color = 'black';
    button.style.transform = 'scale(1)';

    document.querySelector('div').style.backgroundColor = '#fcee54';

    document.getElementById('message').innerText = "Welcome Back,";
});

button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ message: 'logout' },
    function (response) {
        if (response === 'success')
        window.location.replace('./popup-sign-in.html');
    });
});

chrome.runtime.sendMessage({ message: 'userStatus' },
    function (response) {
        if (response.message === 'success') {
            document.getElementById('name').innerText = 
            response.user_info;
        }
    });
