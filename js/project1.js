let a;
let currTime;
let dayDate;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    currTime = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    dayDate = a.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML = currTime + " on<br>" + dayDate;

    document.getElementById('usa').innerHTML = "<b>America : </b>" + a.toLocaleString('en-US', { timeZone: 'America/New_York' });
    document.getElementById('australia').innerHTML = "<b>Australia : </b>" + a.toLocaleString('en-US', { timeZone: 'Australia/Sydney' });
    document.getElementById('africa').innerHTML = "<b>Africa : </b>" + a.toLocaleString('en-US', { timeZone: 'Africa/Nairobi' });
    document.getElementById('asia').innerHTML = "<b>Asia : </b>" + a.toLocaleString('en-US', { timeZone: 'Asia/Dubai' });
    document.getElementById('antarctica').innerHTML = "<b>Antarctica : </b>" + a.toLocaleString('en-US', { timeZone: 'Antarctica/Palmer' });
    document.getElementById('europe').innerHTML = "<b>Europe : </b>" + a.toLocaleString('en-US', { timeZone: 'Europe/Monaco' });
}, 1000);
