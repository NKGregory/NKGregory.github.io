function insertbanner() {
    let today = new Date();
    if(today.getDay() == 5){
        const bannerhide = document.getElementById('bannertext');
        {bannerhide.classList.remove('notfriday')}
    } else {
    const bannershow = document.getElementById('bannertext');
    {bannershow.classList.add('notfriday')}
    }
}