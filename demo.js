var ap = new APlayer({
    element: document.getElementById('player'),
    narrow: false,
    autoplay: true,
    showlrc: false,
    mutex: true,
    theme: '#e6d0b2',
    mode: 'circulation',
    music: {
        title: 'Preparation',
        author: 'Hans Zimmer/Richard Harvey',
        url: 'http://devtest.qiniudn.com/Preparation.mp3',
        pic: 'http://devtest.qiniudn.com/Preparation.jpg'
    }
});
ap.init();   
