<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" md="10" v-html="$t('text', {ownerName: ownerName, webUrl: webUrl})" />
            <v-col cols="12" md="5" class="text-sm-right">
                <p class="caption">{{ $t('langNotice') }} <a href="https://www.deepl.com/">Deepl.com</a></p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    data () {
        return {
            ownerName: 'Osis',
            webUrl: 'https://osis.io'
        }
    },

    i18n: {
        messages: {
            en: {
                langNotice: 'Translated by',
                text: `
                <div class="headline font-weight-light">Cookie Policy</div>
                <p class="body-2">
                    This is the Cookie Policy for {ownerName}, accessible from {webUrl}
                </p>
                <div class="headline font-weight-light">What Are Cookies</div>
                <p class="body-2">
                    As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded 
                    to your computer, to improve your experience. This page describes what information they gather, how we use it and why we 
                    sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this 
                    may downgrade or 'break' certain elements of the sites functionality.
                </p>
                <p class="body-2">
                    For more general information on cookies see the Wikipedia article on HTTP Cookies.
                </p>
                <div class="headline font-weight-light">How We Use Cookies</div>
                <p class="body-2">
                    We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for 
                    disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you 
                    leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
                </p>
                <div class="headline font-weight-light">Disabling Cookies</div>
                <p class="body-2">
                    You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). 
                    Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies 
                    will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.
                </p>
                <div class="headline font-weight-light">The Cookies We Set</div>
                <ul>
                    <li>
                        <p class="body-2">Account related cookies</p>
                        <p class="body-2">
                            If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies 
                            will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Login related cookies</p>
                        <p class="body-2">
                            We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit 
                            a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Email newsletters related cookies</p>
                        <p class="body-2">
                            This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to 
                            show certain notifications which might only be valid to subscribed/unsubscribed users.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Orders processing related cookies</p>
                        <p class="body-2">
                            This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Surveys related cookies</p>
                        <p class="body-2">
                            From time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. 
                            These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Forms related cookies</p>
                        <p class="body-2">
                            When you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Site preferences cookies</p>
                        <p class="body-2">
                            In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order 
                            to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.
                        </p>
                    </li>
                </ul>
                <div class="headline font-weight-light">Third Party Cookies</div>
                <p class="body-2">
                    In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                </p>
                <ul>
                    <li>
                        <p class="body-2">
                            This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and 
                            ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                        </p>
                        <p class="body-2">For more information on Google Analytics cookies, see the official Google Analytics page.</p>
                    </li>
                    <li>
                        <p class="body-2">
                            Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long 
                            you spend on the site or pages you visit which helps us to understand how we can improve the site for you.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used 
                            to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data 
                            that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more relevant ads across the web and limit the number of times that a given ad is shown to you.
                        </p>
                        <p class="body-2">For more information on Google AdSense see the official Google AdSense privacy FAQ.</p>
                    </li>
                    <li>
                        <p class="body-2">
                            We use adverts to offset the costs of running this site and provide funding for further development. The behavioural advertising cookies used by this site are designed to 
                            ensure that we provide you with the most relevant adverts where possible by anonymously tracking your interests and presenting similar things that may be of interest.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites 
                            so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social 
                            media sites including; {List the social networks whose features you have integrated with your site?:12}, will set cookies through our site which may be used to enhance 
                            your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies.
                        </p>
                    </li>
                </ul>
                <div class="headline font-weight-light">More Information</div>
                <p class="body-2">
                    Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave 
                    cookies enabled in case it does interact with one of the features you use on our site.
                </p>
                <p class="body-2">
                    However if you are still looking for more information then you can contact us through one of our preferred contact methods:
                </p>
                `
            },
            de: {
                langNotice: 'Übersetz mit',
                text: `
                <div class="headline font-weight-light">Cookie Richtlinie</div>
                <p class="body-2">
                    Dies ist die Cookie-Richtlinie für {ownerName}, zugänglich von {webUrl}
                </p>
                <div class="headline font-weight-light">Was sind Cookies</div>
                <p class="body-2">
                    Wie bei fast allen professionellen Websites üblich, verwendet diese Website Cookies, d.h. kleine Dateien, die auf Ihren Computer heruntergeladen werden, um Ihr Erlebnis zu verbessern. Diese Seite beschreibt, 
                    welche Informationen sie sammeln, wie wir sie verwenden und warum wir manchmal diese Cookies speichern müssen. Wir werden auch mitteilen, wie Sie verhindern können, dass diese Cookies gespeichert werden, 
                    was jedoch dazu führen kann, dass bestimmte Elemente der Funktionalität der Website heruntergestuft oder unterbrochen werden.
                </p>
                <p class="body-2">
                    Allgemeine Informationen zu Cookies finden Sie im Wikipedia-Artikel über HTTP-Cookies.
                </p>
                <div class="headline font-weight-light">Wie wir Cookies verwenden</div>
                <p class="body-2">
                    Wir verwenden Cookies für eine Vielzahl von Gründen, die im Folgenden beschrieben werden. Leider gibt es in den meisten Fällen keine branchenüblichen Möglichkeiten, Cookies zu deaktivieren, ohne die Funktionen 
                    und Merkmale, die sie dieser Website hinzufügen, vollständig zu deaktivieren. Es wird empfohlen, dass Sie alle Cookies verwenden, wenn Sie sich nicht sicher sind, ob Sie sie benötigen oder nicht, falls sie zur 
                    Erbringung eines von Ihnen genutzten Dienstes verwendet werden.
                </p>
                <div class="headline font-weight-light">Das Deaktivieren von Cookies</div>
                <p class="body-2">
                    Sie können das Setzen von Cookies verhindern, indem Sie die Einstellungen Ihres Browsers anpassen (siehe Hilfe Ihres Browsers, wie Sie dies tun können). Beachten Sie, dass das Deaktivieren von Cookies die Funktionalität 
                    dieser und vieler anderer Websites, die Sie besuchen, beeinträchtigt. Das Deaktivieren von Cookies führt in der Regel auch dazu, dass bestimmte Funktionen und Merkmale dieser Website deaktiviert werden. Daher wird empfohlen, 
                    Cookies nicht zu deaktivieren.
                </p>
                <div class="headline font-weight-light">Die von uns gesetzten Cookies</div>
                <ul>
                    <li>
                        <p class="body-2">Kontobezogene Cookies</p>
                        <p class="body-2">
                            Wenn Sie ein Konto bei uns eröffnen, verwenden wir Cookies für die Verwaltung des Anmeldevorgangs und der allgemeinen Verwaltung. Diese Cookies werden in der Regel beim Abmelden gelöscht, bleiben aber 
                            in einigen Fällen auch nachträglich erhalten, um die Einstellungen Ihrer Website zu speichern, wenn Sie sich ausloggen.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Login-bezogene Cookies</p>
                        <p class="body-2">
                            Wir verwenden Cookies, wenn Sie eingeloggt sind, damit wir uns an diese Tatsache erinnern können. Dadurch müssen Sie sich nicht jedes Mal anmelden, wenn Sie eine neue Seite besuchen. Diese Cookies werden in der 
                            Regel beim Abmelden entfernt oder gelöscht, um sicherzustellen, dass Sie nur auf eingeschränkte Funktionen und Bereiche zugreifen können, wenn Sie angemeldet sind.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">E-Mail-Newsletter verwandte Cookies</p>
                        <p class="body-2">
                            Diese Seite bietet Newsletter- oder E-Mail-Abonnement-Services und Cookies können verwendet werden, um sich zu erinnern, ob Sie bereits registriert sind und ob bestimmte Benachrichtigungen angezeigt 
                            werden sollen, die möglicherweise nur für abonnierte/abgemeldete Benutzer gültig sind.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Bestellungen, die verwandte Cookies verarbeiten</p>
                        <p class="body-2">
                            Diese Website bietet E-Commerce- oder Zahlungsmöglichkeiten und einige Cookies sind unerlässlich, um sicherzustellen, dass Ihre Bestellung zwischen den Seiten gespeichert wird, damit wir sie ordnungsgemäß bearbeiten können.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Befragungen verwandte Cookies</p>
                        <p class="body-2">
                            Von Zeit zu Zeit bieten wir Benutzerbefragungen und Fragebögen an, um Ihnen interessante Einblicke, hilfreiche Tools oder ein besseres Verständnis unserer Nutzerschaft zu ermöglichen. 
                            Diese Umfragen können Cookies verwenden, um sich zu merken, wer bereits an einer Umfrage teilgenommen hat, oder um Ihnen genaue Ergebnisse zu liefern, nachdem Sie die Seiten gewechselt haben.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Formulare verwandte Cookies</p>
                        <p class="body-2">
                            Wenn Sie Daten über ein Formular übermitteln, wie z.B. auf Kontaktseiten oder Kommentarformularen, 
                            können Cookies gesetzt werden, um Ihre Benutzerdaten für zukünftige Korrespondenz zu speichern.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">Seiteneinstellungen Cookies</p>
                        <p class="body-2">
                            Um Ihnen ein großartiges Erlebnis auf dieser Website zu bieten, bieten wir Ihnen die Möglichkeit, Ihre Präferenzen für den Betrieb dieser Website festzulegen, wenn Sie sie nutzen. Um Ihre Einstellungen zu 
                            speichern, müssen wir Cookies setzen, damit diese Informationen aufgerufen werden können, wenn Sie mit einer Seite interagieren, die von Ihren Einstellungen betroffen ist.
                        </p>
                    </li>
                </ul>
                <div class="headline font-weight-light">Third Party Cookies</div>
                <p>
                    In einigen Sonderfällen verwenden wir auch Cookies, die von vertrauenswürdigen Dritten bereitgestellt werden. Der folgende Abschnitt beschreibt, 
                    auf welche Cookies von Drittanbietern Sie über diese Website stoßen können.
                </p>
                <ul>
                    <li>
                        <p class="body-2">
                            Diese Website verwendet Google Analytics, eine der am weitesten verbreiteten und vertrauenswürdigsten Analyselösungen im Internet, um uns zu helfen zu verstehen, 
                            wie Sie die Website nutzen und wie wir Ihr Erlebnis verbessern können. Diese Cookies können Dinge verfolgen, wie z.B. wie lange Sie auf der Website sind und 
                            welche Seiten Sie besuchen, damit wir weiterhin ansprechende Inhalte produzieren können.
                        </p>
                        <p class="body-2">
                            Weitere Informationen zu Google Analytics-Cookies finden Sie auf der offiziellen Google Analytics-Seite.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Analysen von Drittanbietern werden verwendet, um die Nutzung dieser Website zu verfolgen und zu messen, so dass wir weiterhin ansprechende Inhalte produzieren können. 
                            Diese Cookies können Dinge verfolgen, wie z.B. wie lange Sie sich auf der Website oder den Seiten, die Sie besuchen, aufhalten, was uns hilft zu verstehen, wie wir die 
                            Website für Sie verbessern können.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Von Zeit zu Zeit testen wir neue Funktionen und nehmen subtile Änderungen an der Art und Weise vor, wie die Website bereitgestellt wird. Wenn wir noch immer neue Funktionen 
                            testen, können diese Cookies verwendet werden, um sicherzustellen, dass Sie während des Besuchs auf der Website ein einheitliches Erlebnis erhalten, während wir gleichzeitig 
                            verstehen, welche Optimierungen unsere Benutzer am meisten schätzen.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Da wir Produkte verkaufen, ist es für uns wichtig, Statistiken darüber zu verstehen, wie viele Besucher unserer Website tatsächlich einen Kauf tätigen, und als solche ist dies 
                            die Art von Daten, die diese Cookies verfolgen. Dies ist für Sie wichtig, da es bedeutet, dass wir genaue Geschäftsprognosen treffen können, die es uns ermöglichen, 
                            unsere Werbe- und Produktkosten zu überwachen, um den bestmöglichen Preis zu erzielen.
                        </p>
                    </li>
                    <li>
                        <p>
                            Der Google AdSense-Service, den wir für die Schaltung von Werbung verwenden, verwendet ein DoubleClick-Cookie, um relevantere Anzeigen im gesamten Web zu schalten und die Anzahl der 
                            Anzeigen zu begrenzen, die Ihnen eine bestimmte Anzeige angezeigt wird. Weitere Informationen zu Google AdSense finden Sie in der offiziellen Google AdSense Datenschutz-FAQ.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Wir nutzen Anzeigen, um die Kosten für den Betrieb dieser Website auszugleichen und Mittel für die weitere Entwicklung bereitzustellen. Die von dieser Website verwendeten 
                            verhaltensbezogenen Werbe-Cookies sollen sicherstellen, dass wir Ihnen nach Möglichkeit die relevantesten Anzeigen zur Verfügung stellen, indem wir Ihre Interessen anonym 
                            verfolgen und ähnliche Dinge präsentieren, die von Interesse sein könnten.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Mehrere Partner werben in unserem Namen und Affiliate-Tracking-Cookies erlauben es uns einfach zu sehen, ob unsere Kunden über eine unserer Partnerseiten auf die Seite 
                            gekommen sind, so dass wir sie angemessen gutschreiben können und unseren Affiliate-Partnern gegebenenfalls erlauben, jeden Bonus zu gewähren, den sie Ihnen für einen Kauf anbieten können.
                        </p>
                    </li>
                    <li>
                        <p class="body-2">
                            Wir verwenden auch Social Media Buttons und/oder Plugins auf dieser Seite, die es Ihnen ermöglichen, sich auf verschiedene Weise mit Ihrem sozialen Netzwerk zu verbinden. 
                            Damit diese auf den folgenden Social-Media-Sites funktionieren, setzt Cookies über unsere Website, die verwendet werden können, um Ihr Profil auf ihrer Website zu verbessern 
                            oder zu den Daten beizutragen, die sie für verschiedene in ihren jeweiligen Datenschutzrichtlinien beschriebene Zwecke speichern.
                        </p>
                    </li>
                </ul>
                <div class="headline font-weight-light">Mehr Informationen</div>
                <p class="body-2">
                    Hoffnungsvoll, das die Dinge für Sie geklärt hat und wie bereits erwähnt wurde, wenn es etwas gibt, bei dem Sie sich nicht sicher sind, ob Sie es brauchen oder nicht, ist es normalerweise sicherer, 
                    Cookies aktiviert zu lassen, falls sie mit einer der Funktionen interagieren, die Sie auf unserer Website verwenden.
                </p>
                <p class="body-2">
                    Wie auch immer, wenn Sie noch auf der Suche nach mehr Informationen sind, dann können Sie uns über eine unserer bevorzugten Kontaktmöglichkeiten kontaktieren:
                </p>
                `
            }
        }
    }

}
</script>
