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
        lang = document.webL10n.getLanguage().substring(0, 2);
        topvideo = document.getElementById('topvideo');

        if(lang=="en") {
            topVideoUrl = topVideoUrlConfig.en,
            topVideoUrlSrc = topVideoUrlConfigEmbed.en,
            topvideo.src = topVideoUrlSrc;
        }
        if(lang=="es") {
            document.getElementById('language').value="es";
            topVideoUrl = topVideoUrlConfig.en,
            topVideoUrlSrc = topVideoUrlConfigEmbed.en,
            topvideo.src = topVideoUrlSrc;
        }
        if(lang=="de") {
            document.getElementById('language').value="de";
            topVideoUrl = topVideoUrlConfig.de;
            topVideoUrlSrc = topVideoUrlConfigEmbed.de;
            topvideo.src = topVideoUrlSrc;
        }
        if(lang=="pt") {
            document.getElementById('language').value="pt-BR";
            topVideoUrl = topVideoUrlConfig.pt;
            topVideoUrlSrc = topVideoUrlConfigEmbed.pt;
            topvideo.src = topVideoUrlSrc;
        }
        if(lang=="bn") {
            document.getElementById('language').value="bn-BD";
            topVideoUrl = topVideoUrlConfig.en,
            topVideoUrlSrc = topVideoUrlConfigEmbed.en,
            topvideo.src = topVideoUrlSrc;
        }
        if(lang=="ur") {
            document.getElementById('language').value="ur";
            topVideoUrl = topVideoUrlConfig.en,
            topVideoUrlSrc = topVideoUrlConfigEmbed.en,
            topvideo.src = topVideoUrlSrc;
        }

        var topVideoSharer = new Share('.share-button-top',{
            width: '110px',
            title: document.webL10n.get('share-title'),
            url: topVideoUrl,
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
                    description: shareDescr + topVideoUrl
                },
                pinterest: {
                    enabled: false
                },
                google_plus: {
                    enabled: false
                }
            }
        });
        var bottomVideoSharer = new Share('.share-button-bottom',{
            width: '110px',
            title: document.webL10n.get('share-title'),
            url: videoUrl,
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
                    description: shareDescr + videoUrl
                },
                pinterest: {
                    enabled: false
                },
                google_plus: {
                    enabled: false
                }
            }
        });
      }, false);
}());