// DEVELOPED BY https://github.com/lytk4dev

window.onload = function() {
    Check();
};

var ads;
window.ads = ads;

async function Check() {
    let response = await fetch('https://checkadblock.ru/banners/pr_advertising_ads_banner.gif'); // If dont work, change the link to the one that is blocked by AdBlock on your page
    window.response = response;
    if (response.ok) {
        var ads = false;
        alert(adblock);
        let json = await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
        ads = true;
        alert(adblock);
    }
}
Check();