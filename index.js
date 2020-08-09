const imgMaker = url => {

    const img = document.createElement('img');
    img.setAttribute('src', url);
    img.className = 'img';

    return img;
};


const fetchAvatar = async () => {

    const text = document.getElementById('searchTxt').value;
    const orgUrl = 'https://api.github.com/users/' + text;

    try {
        const fetchResult = await fetch(orgUrl);
        const orgData = await fetchResult.json();
        let avatar_url = orgData.avatar_url

        document.body.appendChild(imgMaker(avatar_url));
    }
    catch (e) {
        document.write('<h1 style="color: gray;">Error</h1>');
    }

}

