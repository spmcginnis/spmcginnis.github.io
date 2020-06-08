class Entries {
    constructor(title, text, img, caption){
        this.title = title;
        this.text = text;
        this.img = img;
        this.caption = caption
    }
}

let bbb = new Entries('Blood Blockade Battlefront', 'Searching for a miracle, Leonardo Watch moves to Hellsalem\'s Lot. On the site of New York after a great cataclysm, this regrettably named metropolis now teems with monsters, aliens, and supernatural creatures of all sorts. Blood Blockade Battlefront suffers from having a meaningless tongue-twister for an English title, but don\'t let that deter you. This is solid <em class=\'foreign\'>sh&#333;nen</em>.', 'BBB_leonardo_diner.png', 'Leonardo Watch sits at a diner in HL.');

let rinne = new Entries('Rin-ne', 'This is a series about the friendship between Mamiya Sakura, a high-school student who can see spirits, and Rokud&#333; Rinne, a cash-strapped minor god. One immediately thinks of Noragami, and Rin-ne falls flat by comparison, but it still entertains.', 'rinne_10yen.png', 'Rinne asks Sakura for change to operate a spirit phone.');

let dagashiKashi = new Entries('Dagashi Kashi', 'This slice-of-life show about a small-town candy store is just plain charming. Sadly, the second season was made as a series of twelve-minute shorts&mdash;not even full episodes. Boooo! Still, you should watch Dagashi Kashi.', 'hotaru_extols.png', 'Hotaru extols the virtues of Umaib&#333;, a classic Japanese snack.');

// let chaosDragon = new Entries('Chaos Dragon', 'Chaos Dragon, a fantasy series based on a D&amp;D campaign involving several famous anime writers, has just two out of five stars on the streaming site Crunchyroll. Reviewers hated it. But tabletop games are messy, full of cliche, plot holes, and non-sequitur.  If you watch Chaos Dragon with this in mind, it can be quite enjoyable.', '', '');

let punchLine =  new Entries('Punch Line', 'If Iridatsu Y&#363;ta catches a glimpse of a girl\'s panties, he gets superpowers. If it happens a second time, the world is destroyed. Such a ridiculous (and slimy) premise seems that it might quickly turn into the worst kind of <em class="foreign">ecchi</em> trash.  But Punch Line takes a surprising turn.  It is smart and funny, a clever parody which manages its complex plot in a way that feels smooth and natural.', 'punchLine_spirit-cat.png', 'Y&#363;ta\'s spirit-guide explains his powers.');

let madoka = new Entries('Puella Magi Madoka Magica', 'There is an adage about anime that you have to watch at least three episodes of a show before you can pass judgment&mdash;this rule of thumb may as well have been invented for Madoka Magica. At first glance, it appears to rest firmly in the tradition of magical girl anime, with frequent references to Cardcaptor Sakura, Magical Girl Lyrical Nanoha, and everything else. But Madoka Magica takes a turn in the third episode, and by the end, it has managed both to treasure and to subvert the genre to which it belongs. This is quite possibly the best anime ever made.', 'madoka-hidoi.png', 'Madoka comments on the destruction she sees in a dream.')

let entriesArr = [madoka, bbb, dagashiKashi, punchLine, rinne];


window.addEventListener('load', function(){
    for (let i=0; i<entriesArr.length; i++) {
        let n = entriesArr[i];
        // maybe this should be a function?
        let newDiv = document.createElement("div");
        newDiv.setAttribute('id', `div${i+1}`);
        document.querySelector('main').appendChild(newDiv);
        document.querySelector(`#div${i+1}`).innerHTML = 
        `
        <h2>${i+1}. ${n.title}</h2>
        <p>${n.text}</p>
        <div class="imgWrap">
            <img src="images/${n.img}">
        <p class="caption">${n.caption}</p>
        </div>
        `
        ;
        
        console.log(newDiv);

    }


})