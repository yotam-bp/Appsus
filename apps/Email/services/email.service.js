import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

export const emailService = {
    query,
    deleteEmail,
    getEmaiById,
    updateIsRead,
    sendEmail,
    updateIsStarred
}

const KEY = 'Emails'

var gEmails = [{
        id: utilService.makeId(),
        senderName: 'Slack',
        senderEmail: 'no-reply-0D9GdbJ1m7FcauOUl0b3WU5F@slack.com',
        subject: 'Slack confirmation code: O7E-6GZ',
        body: 'Confirm your email address.',
        isRead: false,
        isStarred: false,
        sentAt: 160002220318714
    },
    {
        id: utilService.makeId(),
        senderName: 'ביטוח לאומי',
        senderEmail: 'bituachleumi@letzidcha.gov.il',
        subject: 'תשלומי החזרים',
        body: 'שלום נעמה, בתאריך 12.05.2021 יופקדו לחשבונך 7053.2 ש"ח. עם זאת, עקב אי תשלומי ביטוח לאומי חודשיים במשך חודשיים בשנת 2017 וכן צבירת ריביות, הצמדות וקנסות שגם צברו ריביות והצמדות, עלייך לשלם 31,792.64 ש"ח. נא הסדירי את חובך בהקדם. בברכה, מירי פלולה, פקידת שומה בכירה',
        isRead: false,
        isStarred: false,
        sentAt: 16001020318714
    },
    {
        id: utilService.makeId(),
        senderName: 'Abualiexpress',
        senderEmail: 'abuali@scam.com',
        subject: 'Your order no. 6672F',
        body: 'Hello custumer, your order no. 6672F has been sent to you and will never get to its destenation. Furthermore, we switched your order with sombody else who lives in Nairobi, Kenya. Contact the customer in order to get your delivery. Please be noted we were out of color and size so we sent you a random peice. Ha ha, Abuali',
        isRead: false,
        isStarred: false,
        sentAt: 1600020318714
    },
    {
        id: utilService.makeId(),
        senderName: 'Puki Ben David',
        senderEmail: 'Pukiputz@walla.co.il',
        subject: 'Job Interview - Results',
        body: 'You got the job!',
        isRead: false,
        isStarred: false,
        sentAt: 1620398546
    },
    {
        id: utilService.makeId(),
        senderName: 'Muki Harush',
        senderEmail: 'muki_the_king@hotmail.co.il',
        subject: 'Flat rent',
        body: 'Please pay ASAP!',
        isRead: false,
        isStarred: false,
        sentAt: 1551133930594
    },
    {
        id: utilService.makeId(),
        senderName: 'barhafaza',
        senderEmail: 'do_not_replay@bar-ltd.co.il',
        subject: 'משלוח מספר DSLAA2100230091YQ‎',
        body: 'שלום נעמה ובר, בחרת לאסוף את החבילה שמספרה DSLAA2100230091YQ מאין סטופ מרקט בכתובת דיזנגוף 100 תל אביב-יפו שעות פתיחה א-ה : 10:00-20:00 שישי : 08:30-12:00. אנא המתן לאסמס נוסף שיודיע על הגעת החבילה לנקודת המסירה.לשירותך, ניתן לעקוב אחר החבילה, בכל שלב, על ידי כניסה לקישור המצורף https://bar2go.co.il/ps/b883d7b341dc48dbb29bf143793e418',
        isRead: false,
        isStarred: false,
        sentAt: 1620398274
    },
    {
        id: utilService.makeId(),
        senderName: 'Netflix',
        senderEmail: 'info@mailer.netflix.com',
        subject: 'הסיסמה שלך שונתה',
        body: 'הסיסמה עודכנה, היי נעמה,לבקשתך, שינינו את הסיסמה שלך. כדי להציג או לשנות את פרטי החשבון, יש לבקר בדף החשבון שלך.        אם לא ביקשת לשנות את סיסמה, אנחנו כאן כדי לעזור לך לאבטח את החשבון. מומלץ ליצור אתנו קשר.– החברים שלך ב‑Netflix',
        isRead: false,
        isStarred: false,
        sentAt: 1620398274
    },
    {
        id: utilService.makeId(),
        senderName: 'מוריה מקודינג אקדמי',
        senderEmail: 'info@coding-academy.org via bnc3.mailjet.com',
        subject: 'בהמשך להתעניינותך: קורס תכנות - קודינג אקדמי‎',
        body: 'היי, נעים להכיר :) תודה על התעניינותך בקורס התכנות של קודינג-אקדמי, נציג שלנו יצור איתך קשר טלפוני בקרוב. הקורס הקרוב יתחיל ב-7 למרץ 2021. לנרשמים לקורס עד ה-.2122.02 יוענקו מפגשי מכינה לקורס בשווי אלפי שקלים - בחינם! בינתיים, קצת מידע על הקורס: קודינג-אקדמי הינו קורס תכנות המכשיר מתכנתים מצויינים בתוך 12 שבועות. מוביל הקורס, ירון ביטון, היה מוביל קורס התכנות הצבאי (ממר"מ) והכשיר עד היום אלפי מתכנתים. לקורס ולבוגריו יש מוניטין גבוה מאוד בתעשיה. המעוניינים להתקבל לקורס יוזמנו לאחד ממפגשי ההיכרות שלנו בו מוביל הקורס יעביר שיעור התנסות קצר ומעניין וייתן פרטים על הקורס. המפגש יועבר באמצעות אפליקציית ZOOM. בסיום המפגש נשלח לך שיעור מצולם, מצגת ואתגר כניסה אותו יש לפתור כחלק מתהליך ההרשמה לקורס. הקורס הקרוב יועבר מרחוק דרך תוכנת ZOOM, פתיחת כיתת הלימוד תתאפשר בהתאם למגבלות והנחיות משרד הבריאות. השיעורים יועברו בבוקר ע"י המרצים שלנו. לאחר מכן, משעות הצהריים ועד הערב - ייערך תרגול, בקבוצות למידה קטנות עם מדריך אישי לכל קבוצה. המדריכים יהיו זמינים גם לתרגולים אחד-על-אחד. מה לומדים בקורס? בקורס לומדים את טכנולוגיות החוד של עולם התכנות - טכנולוגיות ווב - צד לקוח וצד שרת (Fullstack). בקורס נלמד JavaScript, HTML, CSS, SASS, Vue.js, Angular, React, Node.js, ועוד - לסילבוס המלא',
        isRead: false,
        isStarred: false,
        sentAt: 160002220318714
    },

]





function query(filterBy) {
    if (filterBy) {
        var { text } = filterBy
        const filteredEmails = gEmails.filter(email => {
            return (email.subject.toLowerCase().includes(text) || email.body.toLowerCase().includes(text))
        })
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(gEmails)
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails);
}

function deleteEmail(emailId) {
    var emailIdx = gEmails.findIndex(function(email) {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1)
    _saveEmailsToStorage();
    return Promise.resolve(gEmails)
}

function updateIsRead(emailToUpdate) {
    var emailIdx = gEmails.findIndex(function(email) {
            return emailToUpdate.id === email.id
        })
        // console.log('before change ', emailToUpdate.isRead);
    if (!emailToUpdate.isRead) {
        (emailToUpdate.isRead = true)
    };
    // console.log('after change', emailToUpdate.isRead);
    gEmails.splice(emailIdx, 1, emailToUpdate)
    _saveEmailsToStorage();
    return Promise.resolve(gEmails)
}

function updateIsStarred(emailToUpdate) {
    // console.log(emailToUpdate);
    var emailIdx = gEmails.findIndex(email => {
        // console.log(email);
        return emailToUpdate.id === email.id
    });
    console.log(emailIdx);
    (!emailToUpdate.isStarred) ? emailToUpdate.isStarred = true: emailToUpdate.isStarred = false;
    gEmails.splice(emailIdx, 1, emailToUpdate);
    _saveEmailsToStorage();
    return Promise.resolve(gEmails)
}

function getEmaiById(emailId) {
    var email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email)
}

// function _updateIsRead(emailToUpdate) {
//     var emailIdx = gEmails.findIndex(function(email) {
//         return email.id === emailToUpdate.id;
//     })
//     const { isRead } = emailToUpdate;
//     (isRead) ? !isRead: isRead;
//     gEmails.splice(emailIdx, 1, emailToUpdate)
//     _saveEmailsToStorage();
//     return Promise.resolve(emailToUpdate)
// }

function sendEmail(email) {
    console.log('to ', email.to);

}

// 
// function saveCar(car) {
//     return car.id ? _updateCar(car) : _addCar(car)
// }
// function _addCar(carToAdd) {
//     var car = _createCar(carToAdd.vendor, carToAdd.speed)
//     gCars.unshift(car)
//     _saveCarsToStorage();
//     return Promise.resolve(car)
// }



// function _createCar(vendor, speed) {
//     if (!speed) speed = utilService.getRandomIntInclusive(1, 200)
//     return {
//         id: utilService.makeId(),
//         vendor,
//         speed,
//         desc: utilService.makeLorem(),
//         isBestSeller : Math.random() > 0.5
//     }
// }