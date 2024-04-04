var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
        window.alert("<p>Usuários do Safari: clique com o botão direito no link e selecione 'Download Linked File' para baixar o PDF.</p>");
    }