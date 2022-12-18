let user_signed_in = false;
let return_session = false;

function is_user_signed_in() {
    return new Promise(resolve => {
        chrome.storage.local.get(['userStatus', 'user_info'], function (response) {
            if (chrome.runtime.lastError) resolve({ userStatus: false, user_info: {} })

            resolve(response.userStatus === undefined ?
                { userStatus: false, user_info: {} } :
                { userStatus: response.userStatus, user_info: response.user_info }
            )
        });
    });
}

chrome.browserAction.onClicked.addListener(function () {
    is_user_signed_in()
        .then(res => {
            if (res.userStatus) {
                if (return_session) {
                    chrome.windows.create({ 
                        url: './popup-welcome-back.html',
                        width: 300,
                        height: 600,
                        focused: true
                    }, function () { return_session = false });
                } else {
                    chrome.windows.create({
                        url: './popup-sign-out.html',
                        width: 300,
                        height: 600,
                        focused: true
                    });
                }
            } else {
                chrome.windows.create({
                    url: './popup-sign-in.html',
                    width: 300,
                    height: 600,
                    focused: true
                });
            }
        })
        .catch(err => console.log(err));
});

function flip_user_status(signIn, user_info) {
    if (signIn) {
        return fetch('http://localhost:3000/login', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(`${user_info.email}:${user_info.pass}`)
            }
        })
            .then(res => {
                return new Promise(resolve => {
                    if (res.status !== 200) resolve('fail')

                    chrome.storage.local.set({ userStatus: signIn, user_info }, function (response) {
                        if (chrome.runtime.lastError) resolve('fail');

                        user_signed_in = signIn;
                        resolve('success');
                    });
                })
            })
            .catch(err => console.log(err));
    }  else if (!signIn) {
        // fetch the localhost:3000/logout route
        return new Promise(resolve => {
            chrome.storage.local.get(['userStatus', 'user_info'], function (response) {
                console.log(response);
                if (chrome.runtime.lastError) resolve('fail');
    
                if (response.userStatus === undefined) resolve('fail');
    
                fetch('http://localhost:3000/logout', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Basic ' + btoa(`${response.user_info.email}:${response.user_info.pass}`)
                    }
                })
                    .then(res => {
                        console.log(res);
                        if (res.status !== 200) resolve('fail');
    
                        chrome.storage.local.set({ userStatus: signIn, user_info: {} }, function (response) {
                            if (chrome.runtime.lastError) resolve('fail');
    
                            user_signed_in = signIn;
                            resolve('success');
                        });
                    })
            
                    .catch(err => console.log(err));
            });
        });
    }
};





chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'login') {
        flip_user_status(true, request.payload)
            .then(res => sendResponse(res))
            .catch(err => console.log(err));

        return true;
    } else if (request.message === 'logout') {
        flip_user_status(false, null)
            .then(res => sendResponse(res))
            .catch(err => console.log(err));

        return true;
    } else if (request.message === 'userStatus') {
        is_user_signed_in()
            .then(res => {
                sendResponse({ message: 'success', userStatus: res.userStatus,user_info:res.user_info.email });
            })
            .catch(err => console.log(err));
                return true;
    }
});

