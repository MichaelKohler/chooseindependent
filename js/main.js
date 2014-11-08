(function() {
	document.webL10n.ready(function() {
        // TODO: change URLs to real videos
        var topVideoUrlConfig = {
            en: 'https://www.youtube-nocookie.com/watch?v=LtOGa5M8AuU',
            de: 'https://www.youtube-nocookie.com/watch?v=n7lPdJ0QN-Y',
            pt: 'https://www.youtube-nocookie.com/watch?v=GClwSA1vTS4'
        },
        topVideoUrlConfigEmbed = {
            en: 'https://www.youtube-nocookie.com/embed/LtOGa5M8AuU?controls=0&showinfo=0',
            de: 'https://www.youtube-nocookie.com/embed/n7lPdJ0QN-Y?controls=0&showinfo=0',
            pt: 'https://www.youtube-nocookie.com/embed/GClwSA1vTS4?controls=0&showinfo=0'
        },
        topVideoUrl = topVideoUrlConfig.en,
        topVideoUrlSrc = topVideoUrlConfigEmbed.en,
        videoUrl = 'https://www.youtube-nocookie.com/watch?v=j6pwTk4D8WI',
        shareDescr = document.webL10n.get('share-description'),
        encodedDescr = shareDescr.replace(/#/g, '%23'),
        lang = document.webL10n.getLanguage().substring(0, 2),
        langDropdown = document.getElementById('language'),
        topvideo = document.getElementById('topvideo'),
        usingThisLink = document.getElementById('usingThisLink'),
        embedcodeElem = document.getElementById('embedcode'),
        embedcodePrefix = '<iframe height="315" src="',
        embedcodeSuffix = '" frameborder="0" allowfullscreen></iframe>';

        usingThisLink.addEventListener('click', function() {
            var isHidden = embedcodeElem.hasAttribute('hidden');
            console.log(isHidden);
            if (isHidden) {
                embedcodeElem.removeAttribute('hidden');
            }
            else {
                embedcodeElem.setAttribute('hidden', 'hidden');
            }
            return false;
        });

        function changeTopVideoLanguage(normal, embed) {
            topVideoUrl = normal,
            topVideoUrlSrc = embed,
            topvideo.src = topVideoUrlSrc;
            embedcodeElem.textContent = embedcodePrefix + embed + embedcodeSuffix;
        }

        if(lang=="en") {
            changeTopVideoLanguage(topVideoUrlConfig.en, topVideoUrlConfigEmbed.en);
        }
        if(lang=="es") {
            langDropdown.value="es";
            changeTopVideoLanguage(topVideoUrlConfig.en, topVideoUrlConfigEmbed.en);
        }
        if(lang=="de") {
            langDropdown.value="de";
            changeTopVideoLanguage(topVideoUrlConfig.de, topVideoUrlConfigEmbed.de);
        }
        if(lang=="pt") {
            langDropdown.value="pt-BR";
            changeTopVideoLanguage(topVideoUrlConfig.pt, topVideoUrlConfigEmbed.pt);
        }
        if(lang=="bn") {
            langDropdown.value="bn-BD";
            changeTopVideoLanguage(topVideoUrlConfig.en, topVideoUrlConfigEmbed.en);
        }
        if(lang=="ur") {
            langDropdown.value="ur";
            changeTopVideoLanguage(topVideoUrlConfig.en, topVideoUrlConfigEmbed.en);
        }

        function getShareOptions(url) {
            var options = {
                width: '110px',
                title: document.webL10n.get('share-title'),
                url: url,
                description: shareDescr,
                ui: {
                    button_text: document.webL10n.get('share'),
                },
                networks: {
                    twitter: {
                        description: encodedDescr
                    },
                    facebook: {
                        description: encodedDescr
                    },
                    email: {
                        description: shareDescr + url
                    },
                    pinterest: {
                        enabled: false
                    },
                    google_plus: {
                        enabled: false
                    }
                }
            }
            return options;
        }

        var topVideoSharer = new Share('.share-button-top', getShareOptions(topVideoUrl)),
            bottomVideoSharer = new Share('.share-button-bottom', getShareOptions(videoUrl));

        smoothScroll.init({
            speed: 700,
            easing: 'easeInOutCubic'
        });
      }, false);
}());