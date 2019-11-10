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
                <div class="headline font-weight-light">Terms and conditions</div>
                <p class="body-2">
                    These terms and conditions outline the rules and regulations for the use of {ownerName}'s Website, located at {webUrl}.
                </p>
                <p class="body-2">
                    By accessing this website we assume you accept these terms and conditions. Do not continue to use {ownerName} if you do not agree 
                    to take all of the terms and conditions stated on this page. 
                </p>
                <p class="body-2">
                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: 
                    "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. 
                    "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client 
                    and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of 
                    our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect 
                    of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of 
                    the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable 
                    and therefore as referring to same.
                </p>
                <div class="headline font-weight-light">Cookies</div>
                <p class="body-2">
                    We employ the use of cookies. By accessing {ownerName}, you agreed to use cookies in agreement with the {ownerName}'s Privacy Policy.
                </p>
                <p class="body-2">
                    Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable 
                    the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                </p>
                <div class="headline font-weight-light">License</div>
                <p class="body-2">
                    Unless otherwise stated, {ownerName} and/or its licensors own the intellectual property rights for all material on {ownerName}. All intellectual property 
                    rights are reserved. You may access this from {ownerName} for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <p class="body-2">
                    You must not:
                </p>
                <ul>
                    <li class="caption">Republish material from {ownerName}</li>
                    <li class="caption">Sell, rent or sub-license material from {ownerName}</li>
                    <li class="caption">Reproduce, duplicate or copy material from {ownerName}</li>
                    <li class="caption">Redistribute content from {ownerName}</li>
                </ul>
                <p class="body-2">
                    This Agreement shall begin on the date hereof.
                </p>
                <p class="body-2">
                    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. {ownerName} does not filter, 
                    edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of {ownerName},its agents and/or affiliates. 
                    Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, {ownerName} shall not be 
                    liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </p>
                <p class="body-2">
                    {ownerName} reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                </p>
                <p class="body-2">
                    You warrant and represent that:
                </p>
                <ul>
                    <li class="caption">You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                    <li class="caption">The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                    <li class="caption">The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                    <li class="caption">The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ul>
                <p class="body-2">
                    You hereby grant {ownerName} a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                </p>
                <div class="headline font-weight-light">Hyperlinking to our Content</div>
                <p class="body-2">
                    The following organizations may link to our Website without prior written approval:
                </p>
                <ul>
                    <li class="caption">Government agencies;</li>
                    <li class="caption">Search engines;</li>
                    <li class="caption">News organizations;</li>
                    <li class="caption">Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                    <li class="caption">System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                </ul>
                <p class="body-2">
                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, 
                    endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
                </p>
                <p class="body-2">
                    We may consider and approve other link requests from the following types of organizations:
                </p>
                <ul>
                    <li class="caption">commonly-known consumer and/or business information sources;</li>
                    <li class="caption">dot.com community sites;</li>
                    <li class="caption">associations or other groups representing charities;</li>
                    <li class="caption">online directory distributors;</li>
                    <li class="caption">internet portals;</li>
                    <li class="caption">accounting, law and consulting firms; and</li>
                    <li class="caption">educational institutions and trade associations.</li>
                </ul>
                <p class="body-2">
                    We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; 
                    (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of {ownerName}; and (d) 
                    the link is in the context of general resource information.
                </p>
                <p class="body-2">
                    These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval 
                    of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
                </p>
                <p class="body-2">
                    If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to {ownerName}. 
                    Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, 
                    and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </p>
                <p class="body-2">
                    Approved organizations may hyperlink to our Website as follows:
                </p>
                <ul>
                    <li class="caption">By use of our corporate name; or</li>
                    <li class="caption">By use of the uniform resource locator being linked to; or</li>
                    <li class="caption">By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.</li>
                </ul>
                <p class="body-2">
                    No use of {ownerName}'s logo or other artwork will be allowed for linking absent a trademark license agreement.
                </p>
                <div class="headline font-weight-light">iFrames</div>
                <p class="body-2">
                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                </p>
                <div class="headline font-weight-light">Content Liability</div>
                <p class="body-2">
                    We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. 
                    No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement 
                    or other violation of, any third party rights.
                </p>
                <div class="headline font-weight-light">Your Privacy</div>
                <p class="body-2">
                    Please read Privacy Policy
                </p>
                <div class="headline font-weight-light">Reservation of Rights</div>
                <p class="body-2">
                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. 
                    We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
                <div class="headline font-weight-light">Removal of links from our website</div>
                <p class="body-2">
                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                </p>
                <p class="body-2">
                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </p>
                <div class="headline font-weight-light">Disclaimer</div>
                <p class="body-2">
                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul>
                    <li class="caption">limit or exclude our or your liability for death or personal injury;</li>
                    <li class="caption">limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                    <li class="caption">limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                    <li class="caption">exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>
                <p class="body-2">
                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, 
                    including liabilities arising in contract, in tort and for breach of statutory duty.
                </p>
                <p class="body-2">
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                </p>
                <p class="body-2">
                    Our Terms and Conditions were created with the help of the Terms And Conditions Generator (www.termsandconditionsgenerator.com).
                </p>
                `
            },
            de: {
                title: '',
                langNotice: 'Übersetz mit',
                text: `
                <div class="headline font-weight-light">Allgemeine Geschäftsbedingungen</div>
                <p class="body-2">
                    Diese Allgemeinen Geschäftsbedingungen enthalten die Regeln und Vorschriften für die Nutzung der Website von {ownerName}, die sich unter {webUrl} befindet.
                </p>
                <p class="body-2">
                    Mit dem Zugriff auf diese Website gehen wir davon aus, dass Sie diese Bedingungen akzeptieren. Verwenden Sie {ownerName} nicht weiter, wenn Sie nicht einverstanden sind. 
                    um alle auf dieser Seite genannten Bedingungen zu akzeptieren. 
                </p>
                <p class="body-2">
                    Die folgende Terminologie gilt für diese Allgemeinen Geschäftsbedingungen, Datenschutzerklärung und Haftungsausschluss sowie für alle Vereinbarungen: 
                    "Kunde", "Sie" und "Ihr" beziehen sich auf Sie, die Person, die sich auf dieser Website anmeldet und die Allgemeinen Geschäftsbedingungen des Unternehmens einhält. 
                    "Das Unternehmen", "Wir selbst", "Wir", "Unser" und "Wir", bezieht sich auf unser Unternehmen. "Partei", "Parteien" oder "Wir" bezieht sich sowohl auf den Kunden als auch auf den Kunden. 
                    und uns selbst. Alle Bedingungen beziehen sich auf das Angebot, die Annahme und die Berücksichtigung der Zahlung, die für die Durchführung des Prozesses der 
                    unsere Unterstützung des Kunden in der am besten geeigneten Weise für den ausdrücklichen Zweck, die Bedürfnisse des Kunden in Bezug auf die folgenden Punkte zu erfüllen 
                    der Erbringung der angegebenen Dienstleistungen des Unternehmens in Übereinstimmung mit dem geltenden niederländischen Recht. Jegliche Nutzung von 
                    die obige Terminologie oder andere Wörter in der Singular-, Plural-, Groß- und/oder Kleinschreibung und/oder er/sie oder sie, werden als austauschbar angesehen. 
                    und damit als Bezugnahme auf dasselbe.
                </p>
                <div class="headline font-weight-light">Cookies</div>
                <p class="body-2">
                    Wir verwenden Cookies. Mit dem Zugriff auf {ownerName} haben Sie der Verwendung von Cookies in Übereinstimmung mit der Datenschutzerklärung von {ownerName} zugestimmt.
                </p>
                <p class="body-2">
                    Die meisten interaktiven Websites verwenden Cookies, damit wir die Daten des Benutzers bei jedem Besuch abrufen können. Cookies werden von unserer Website verwendet, um Folgendes zu ermöglichen 
                    die Funktionalität bestimmter Bereiche, um den Besuch unserer Website zu erleichtern. Einige unserer Partner/Werbepartner verwenden möglicherweise auch Cookies.
                </p>
                <div class="headline font-weight-light">Lizenz</div>
                <p class="body-2">
                    Sofern nicht anders angegeben, besitzen {ownerName} und/oder seine Lizenzgeber die geistigen Eigentumsrechte für alle Materialien auf {ownerName}. Alles geistige Eigentum 
                    Rechte sind vorbehalten. Sie können von {ownerName} aus für Ihren eigenen persönlichen Gebrauch zugreifen, wobei die in diesen Allgemeinen Geschäftsbedingungen festgelegten Einschränkungen gelten.
                </p>
                <p class="body-2">
                    Das darfst du nicht:
                </p>
                <ul>
                    <li class="caption">Nachveröffentlichung von {ownerName}</li>
                    <li class="caption">Verkauf, Vermietung oder Unterlizenzierung von {ownerName}</li>
                    <li class="caption">Wiederholen, duplizieren oder kopieren Sie Material von {ownerName}</li>.
                    <li class="caption">Weiterverteilung von Inhalten aus {ownerName}</li>
                </ul>
                <p class="body-2">
                    Diese Vereinbarung beginnt mit dem Datum dieser Vereinbarung.
                </p>
                <p class="body-2">
                    Teile dieser Website bieten den Nutzern die Möglichkeit, Meinungen und Informationen in bestimmten Bereichen der Website zu veröffentlichen und auszutauschen. {ownerName} filtert nicht, 
                    Kommentare vor ihrer Veröffentlichung auf der Website bearbeiten, veröffentlichen oder überprüfen. Die Kommentare spiegeln nicht die Ansichten und Meinungen von {ownerName}, seinen Vertretern und/oder verbundenen Unternehmen wider. 
                    Kommentare spiegeln die Ansichten und Meinungen der Person wider, die ihre Ansichten und Meinungen veröffentlicht. Soweit dies nach geltendem Recht zulässig ist, ist {ownerName} nicht berechtigt. 
                    haftbar für die Kommentare oder für jegliche Haftung, Schäden oder Ausgaben, die durch die Nutzung und/oder Veröffentlichung und/oder das Erscheinen der Kommentare auf dieser Website verursacht und/oder erlitten werden.
                </p>
                <p class="body-2">
                    {ownerName} behält sich das Recht vor, alle Kommentare zu überwachen und alle Kommentare zu entfernen, die als unangemessen, beleidigend oder verstoßend angesehen werden können.
                </p>
                <p class="body-2">
                    Sie garantieren und versichern dies:
                </p>
                <ul>
                    <li class="caption">Sie sind berechtigt, die Kommentare auf unserer Website zu veröffentlichen und verfügen über alle notwendigen Lizenzen und Zustimmungen dazu;</li>
                    <li class="caption">Die Kommentare verletzen kein geistiges Eigentumsrecht, einschließlich, aber nicht beschränkt auf Urheberrechte, Patente oder Marken Dritter;</li>
                    <li class="caption">Die Kommentare enthalten kein diffamierendes, verleumderisches, beleidigendes, anstößiges, unanständiges oder anderweitig rechtswidriges Material, das eine Verletzung der Privatsphäre darstellt</li>.
                    <li class="caption">Die Kommentare werden nicht verwendet, um Unternehmen oder Gewohnheiten zu werben oder zu fördern oder kommerzielle Aktivitäten oder rechtswidrige Aktivitäten zu präsentieren.</li>
                </ul>
                <p class="body-2">
                    Sie gewähren {ownerName} hiermit eine nicht-exklusive Lizenz zur Nutzung, Vervielfältigung, Bearbeitung und Autorisierung anderer zur Nutzung, Vervielfältigung und Bearbeitung Ihrer Kommentare in allen Formen, Formaten oder Medien.
                </p>
                <div class="headline font-weight-light">Hyperlinking zu unseren Inhalten</div>
                <p class="body-2">
                    Die folgenden Unternehmen können ohne vorherige schriftliche Genehmigung auf unsere Website verlinken:
                </p>
                <ul>
                    <li class="caption">Regierungsstellen;</li>
                    <li class="caption">Suchmaschinen;</li>
                    <li class="caption">News Organisationen;</li>
                    <li class="caption">Online-Verzeichnisverteiler können auf unsere Website in der gleichen Weise verlinken wie sie auf die Websites anderer börsennotierter Unternehmen verweisen; und</li>
                    <li class="caption">Systemweit akkreditierte Unternehmen, mit Ausnahme von gemeinnützigen Organisationen, Einkaufszentren für wohltätige Zwecke und Spendengruppen, die möglicherweise nicht über einen Hyperlink auf unsere Website verweisen.</li>
                </ul>
                <p class="body-2">
                    Diese Unternehmen können auf unsere Homepage, auf Publikationen oder auf andere Informationen der Website verweisen, solange der Link besteht: (a) ist in keiner Weise irreführend; (b) bedeutet nicht fälschlicherweise Sponsoring, 
                    Billigung oder Genehmigung der verbindenden Partei und ihrer Produkte und/oder Dienstleistungen; und (c) passt in den Kontext der Website der verbindenden Partei.
                </p>
                <p class="body-2">
                    Wir können andere Linkanfragen von den folgenden Arten von Unternehmen berücksichtigen und genehmigen:
                </p>
                <ul>
                    <li class="caption">allgemein bekannte Verbraucher- und/oder Wirtschaftsinformationsquellen;</li>
                    <li class="caption">dot.com Community-Seiten;</li>
                    <li class="caption">Vereine oder andere Gruppen, die Wohltätigkeitsorganisationen vertreten;</li>
                    <li class="caption">online Verzeichnisverteiler;</li>
                    <li class="caption">Internetportale;</li>
                    <li class="caption">Wirtschaftsprüfungs-, Rechts- und Beratungsunternehmen; und</li>
                    <li class="caption">Bildungseinrichtungen und Fachverbände.</li>
                </ul>
                <p class="body-2">
                    Wir werden Linkanfragen dieser Organisationen genehmigen, wenn wir uns dafür entscheiden: (a) der Link würde uns weder für uns selbst noch für unsere akkreditierten Unternehmen ungünstig erscheinen lassen; 
                    (b) das Unternehmen hat keine negativen Aufzeichnungen bei uns; (c) der Nutzen für uns aus der Sichtbarkeit des Hyperlinks kompensiert das Fehlen von {ownerName}; und (d) 
                    der Link steht im Zusammenhang mit allgemeinen Ressourceninformationen.
                </p>
                <p class="body-2">
                    Diese Organisationen können auf unsere Homepage verlinken, solange der Link besteht: (a) ist in keiner Weise irreführend; (b) bedeutet nicht fälschlicherweise Sponsoring, Billigung oder Genehmigung. 
                    der verbindenden Partei und ihrer Produkte oder Dienstleistungen; und (c) passt in den Kontext der Website der verbindenden Partei.
                </p>
                <p class="body-2">
                    Wenn Sie eine der in Absatz 2 genannten Organisationen sind und an einer Verknüpfung mit unserer Website interessiert sind, müssen Sie uns dies durch eine E-Mail an {ownerName} mitteilen. 
                    Bitte geben Sie Ihren Namen, Ihren Unternehmensnamen, Kontaktinformationen sowie die URL Ihrer Website und eine Liste aller URLs an, von denen aus Sie auf unsere Website verlinken möchten, 
                    und eine Liste der URLs auf unserer Website, auf die Sie verlinken möchten. Warten Sie 2-3 Wochen auf eine Antwort.
                </p>
                <p class="body-2">
                    Genehmigte Unternehmen können wie folgt auf unsere Website verlinken:
                </p>
                <ul>
                    <li class="caption">Durch die Verwendung unseres Firmennamens; oder</li>.
                    <li class="caption">Mit der Verwendung des einheitlichen Ressourcensuchers, mit dem verknüpft ist; oder</li>.
                    <li class="caption">Durch die Verwendung einer anderen Beschreibung unserer Website, auf die verwiesen wird, ist es sinnvoll, den Kontext und das Format des Inhalts auf der Website des Verlinkenden zu berücksichtigen.</li>
                </ul>
                <p class="body-2">
                    Eine Verwendung des Logos oder anderer Grafiken von {ownerName} zur Verlinkung ist ohne Markenlizenzvertrag nicht gestattet.
                </p>
                <div class="headline font-weight-light">iFrames</div>
                <p class="body-2">
                    Ohne vorherige Genehmigung und schriftliche Genehmigung dürfen Sie keine Rahmen um unsere Webseiten herum erstellen, die in irgendeiner Weise die visuelle Darstellung oder das Aussehen unserer Webseite verändern.
                </p>
                <div class="headline font-weight-light">Content Liability</div>
                <p class="body-2">
                    Wir übernehmen keine Verantwortung für Inhalte, die auf Ihrer Website erscheinen. Sie erklären sich damit einverstanden, uns gegen alle Ansprüche zu schützen und zu verteidigen, die auf Ihrer Website erhoben werden. 
                    Keine Links sollten auf einer Website erscheinen, die als verleumderisch, obszön oder kriminell ausgelegt werden können oder die die Verletzung verletzen, anderweitig verletzen oder befürworten. 
                    oder eine andere Verletzung von Rechten Dritter.
                </p>
                <div class="headline font-weight-light">Ihre Privatsphäre</div>
                <p class="body-2">
                    Bitte lesen Sie die Datenschutzerklärung
                </p>
                <div class="headline font-weight-light">Reservierung von Rechten</div>
                <p class="body-2">
                    Wir behalten uns das Recht vor, Sie aufzufordern, alle Links oder einen bestimmten Link zu unserer Website zu entfernen. Sie stimmen zu, auf Anfrage alle Links zu unserer Website unverzüglich zu entfernen. 
                    Wir behalten uns auch das Recht vor, diese Allgemeinen Geschäftsbedingungen und ihre Linkrichtlinie jederzeit zu ändern. Durch die ständige Verlinkung mit unserer Website erklären Sie sich damit einverstanden, an diese Verlinkungsbedingungen gebunden zu sein und sie einzuhalten.
                </p>
                <div class="headline font-weight-light">Entfernung von Links von unserer Website</div>
                <p class="body-2">
                    Wenn Sie auf unserer Website einen Link finden, der aus irgendeinem Grund beleidigend ist, können Sie uns jederzeit kontaktieren und informieren. Wir werden Anfragen zur Entfernung von Links berücksichtigen, sind aber nicht dazu verpflichtet oder verpflichtet, direkt auf Sie zu antworten.
                </p>
                <p class="body-2">
                    Wir garantieren nicht, dass die Informationen auf dieser Website korrekt sind, wir garantieren nicht für ihre Vollständigkeit oder Richtigkeit und wir versprechen auch nicht, dass die Website verfügbar bleibt oder dass das Material auf der Website auf dem neuesten Stand gehalten wird.
                </p>
                <div class="headline font-weight-light">Disclaimer</div>
                <p class="body-2">
                    Soweit dies nach geltendem Recht zulässig ist, schließen wir alle Zusicherungen, Gewährleistungen und Bedingungen im Zusammenhang mit unserer Website und der Nutzung dieser Website aus. Nichts in diesem Haftungsausschluss wird dies tun:
                </p>
                <ul>
                    <li class="caption">beschränken oder schließen Sie unsere oder Ihre Haftung für Tod oder Körperverletzung aus;</li>
                    <li class="caption">beschränken oder schließen Sie unsere oder Ihre Haftung für Betrug oder betrügerische Falschdarstellung aus;</li>
                    <li class="caption">eine unserer oder Ihrer Verbindlichkeiten in einer Weise beschränken, die nach geltendem Recht nicht zulässig ist; oder</li>.
                    <li class="caption">schließen Sie alle unsere oder Ihre Verbindlichkeiten aus, die nach geltendem Recht nicht ausgeschlossen werden können.</li>
                </ul>
                <p class="body-2">
                    Die in diesem Abschnitt und an anderer Stelle in diesem Disclaimer festgelegten Haftungsbeschränkungen und -verbote: (a) unterliegen dem vorstehenden Absatz; und (b) regeln alle Verbindlichkeiten, die sich aus dem Disclaimer ergeben, 
                    einschließlich der Haftung aus Vertrag, unerlaubter Handlung und wegen Verletzung gesetzlicher Verpflichtungen.
                </p>
                <p class="body-2">
                    Solange die Website und die Informationen und Dienstleistungen auf der Website kostenlos zur Verfügung gestellt werden, haften wir nicht für Verluste oder Schäden jeglicher Art.
                </p>
                <p class="body-2">
                    Unsere Allgemeinen Geschäftsbedingungen wurden mit Hilfe des Allgemeinen Geschäftsbedingungen-Generators (www.termsandconditionsgenerator.com) erstellt.
                </p>
                `
            }
        }
    }

}
</script>
