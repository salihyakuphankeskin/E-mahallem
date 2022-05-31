window.onload = () => {
    updateTime()
    setInterval(updateTime, 60000);
}
function updateTime() {
    var date = new Date;
    date.setTime(Date.now());
    document.querySelector(".date").innerText = date.getHours() + " : " + (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes());
}
