function insertbanner() {
    let today = new Date();
    console.log(today.getDay())
    if(today.getDay() == 5){
        const bannerhide = document.getElementById('bannertext');
        {bannerhide.classList.remove('notfriday')}
    } else {
    const bannershow = document.getElementById('bannertext');
    {bannershow.classList.add('notfriday')}
    }
}