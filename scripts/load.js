window.onload = function () {
    var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    let podval = document.getElementById('time')
    podval.style.width = '100vw'
    podval.style.textAlign = 'center'
    podval.style.backgroundColor = '#eeee6e'
    podval.textContent = 'Page loaded in: ' + loadTime;
}

window.addEventListener('DOMContentLoaded', function () {
    var _url = document.location.pathname
    console.log(_url)
    switch (_url){
        case '/RitRit/review_page.html':
            let reviewButton = document.getElementById('reviews_button');
            console.log(reviewButton)
            reviewButton.className += 'fq'
            break
        case '/RitRit/index.html':
            let main_page_button = document.getElementById('main_page');
            main_page_button.className += 'fq'
            break
        case '/RitRit/contacts.html':
            let contact_page = document.getElementById('contacts_page');
            contact_page.className += 'fq'
            break
        default: break;
    }

})