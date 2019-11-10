<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" md="10" v-html="$t('text')" />
            <v-col cols="12" md="5" class="text-sm-right">
                <p class="caption">{{ $t('langNotice') }} <a class="caption" href="https://www.deepl.com/">Deepl.com</a></p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    i18n: {
        messages: {
            en: {
                langNotice: 'Translated by',
                text: `
                <div class="headline font-weight-light">Privacy-Policy</div>
                <p class="body-2">
                    Responsible authority in the sense of the data protection laws, in particular the EU data protection basic regulation (DSGVO), is:
                </p>
                <p class="body-2">
                    Osis | <a target="_blank" href="mailto:mail@osis.io">mail@osis.io</a><br/>
                    4058 Basel (Switzerland CH)<br/>
                </p>
                <div class="headline font-weight-light">General Note</div> 
                <p class="body-2">
                    Supported by Article 13 of the Swiss Federal Constitution and the data protection provisions of the 
                    Federal (Data Protection Act, DSG<!--DSG-->) every person is entitled to the protection of his or her privacy as well as to 
                    Protection against misuse of your personal data. The operators of these pages take the protection of your personal data very seriously. 
                    personal data very seriously. We will treat your personal data confidentially and accordingly. 
                    the legal data protection regulations as well as this data protection declaration.
                </p>
                <p class="body-2">
                    In collaboration with our hosting providers, we strive to protect the databases as best as possible from unauthorized access, 
                    losses, abuse or counterfeiting.</p><p class="body-2">We would like to point out that the 
                    data transmission on the Internet (e.g. when communicating by e-mail) may have security gaps. 
                    A complete protection of the data against access by third parties is not possible.
                </p>
                <p class="body-2">
                    By using this website, you consent to the collection, processing and use of data in accordance with the provisions of the 
                    the following description. This website can be visited without registration. 
                    Data such as the pages called up or the name of the file called up, date and time will be saved. 
                    The data is stored on the server for statistical purposes without this data being directly related to your person. 
                    Personal data, in particular name, address or e-mail address, are stored as far as possible on a voluntary basis. 
                    Basis raised. The data will not be passed on to third parties without your consent.
                </p>
                <div class="headline font-weight-light">Processing personal data</div> 
                <p class="body-2">
                    Personal data is all information that refers to an identified or identifiable person. A data subject 
                    is a person about whom personal data is processed. Processing includes any handling of personal data, 
                    whatever the means and procedures used, in particular storage, disclosure and procurement, 
                    Delete, save, modify, destroy and use personal data.</p> <p class="body-2">We edit personal data 
                    in accordance with Swiss data protection law. In all other respects we process - insofar and insofar as the EU-DSGVO 
                    is applicable - personal data according to the following legal bases in connection with Art. 6 para. 1 DSGVO<!--DSGVO-->:
                </p> 
                <ul> 
                    <li class="caption">
                        (a) processing of personal data with the consent of the data subject.
                    </li> 
                    <li class="caption">
                        b) Processing of personal data for the fulfilment of a contract with the data subject as well as for the processing of personal data for the purpose of the 
                        Implementation of appropriate pre-contractual measures.
                    </li> 
                    <li class="caption">
                        c) Processing of personal data for the fulfilment of a legal obligation to which we are subject in accordance with the provisions of 
                        applicable law of the EU or in accordance with applicable law of a country in which the 
                        the DSGVO<!--DSGVO--> is applicable in whole or in part.
                    </li> 
                    <li class="caption">
                        (d) processing of personal data for the vital interests of the data subject or of a third party 
                        to protect another natural person.
                    </li>
                    <li class="caption">
                        f) Processing of personal data in order to protect the legitimate interests of us or third parties, 
                        unless the fundamental freedoms, rights and interests of the data subject prevail. 
                        Legitimate interests are in particular our business interests, our website 
                        information security, the enforcement of its own security policies, and the 
                        legal claims and compliance with Swiss law.
                    </li> 
                </ul> <br/> 
                <p class="body-2">
                    We process personal data for the duration required for the respective purpose or the respective 
                    purposes is necessary. In the case of longer-term storage obligations due to statutory and 
                    other obligations to which we are subject, we shall restrict the processing accordingly.
                </p>
                <div class="headline font-weight-light">Privacy Statement for Cookies</div>
                <p class="body-2">
                    This website uses cookies. These are small text files, which make it possible to store the following data on the end device 
                    the user to store specific, user-related information while using the website. 
                    Cookies make it possible in particular to determine the frequency of use and number of users of the pages, 
                    to analyze the behavior of site users, but also to make our services more customer-friendly. 
                    <!--Allg.Cookies-->Cookies are stored at the end of a browser session and can be used by 
                    can be called up again after a new page visit. If you do not wish this to happen, you should 
                    Internet browser in such a way that it refuses the acceptance of Cookies.
                </p> 
                <p class="body-2">
                    A general objection against the use of cookies used for online marketing purposes can be raised in the case of a 
                    variety of services, especially in the case of tracking, via the US side 
                    <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener">http://www.aboutads.info/choices/</a> 
                    or the EU page <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener">http://www.youronlinechoices.com/</a> 
                    be explained. Furthermore, the storage of cookies can be deactivated in the settings of the browser. 
                    can be achieved. Please note that in this case not all functions of this online offer can be used.
                </p>
                <div class="headline font-weight-light">Privacy statement for SSL-/TLS encryption</div>
                <p class="body-2">
                    This website uses for security reasons and to protect the transmission of confidential content, such as the 
                    Inquiries, which you send to us as side operator, an SSL/TLS coding. An encrypted connection 
                    you can recognize this by the fact that the address line of the browser changes from "http://" to "https://" and is marked with the 
                    Lock symbol in your browser line. If the SSL or TLS encryption is activated, the data, 
                    which you transmit to us will not be read by third parties.
                </p>
                <div class="headline font-weight-light">Privacy policy for server log files</div>
                <p class="body-2">
                    The provider of this web site automatically collects and stores information in so-called server log files, which your browser can access and use. 
                    automatically transmitted to us. These are:
                </p> 
                <ul> 
                    <li class="caption">browser type and browser version</li> 
                    <li class="caption">operating system used</li> 
                    <li class="caption">Referrer URL</li> 
                    <li class="caption">host name of the accessing computer</li> 
                    <li class="caption">Time of the server request</li> 
                </ul> <br/> 
                <p class="body-2">
                    These data cannot be assigned to specific persons. This data will not be merged with other data sources. 
                    We reserve the right to subsequently check this data if we become aware of concrete indications of illegal use.
                </p>
                <div class="headline font-weight-light">Third party services</div> 
                <p class="body-2">
                    This website may use Google Maps to embed maps, Google Invisible reCAPTCHA to protect against bots and spam, and 
                    YouTube for embedding videos. These services of the American Google LLC use, among other things, cookies and as a result data is transmitted to 
                    Google in the USA, whereby we assume that no personal tracking takes place in this context solely through the use of our website.
                </p>
                <p class="body-2">
                    Google is committed to ensuring adequate data protection in accordance with the American-European Privacy Shield and the American-Swiss Privacy Shield.
                </p>
                <p class="body-2">
                    Further information can be found in the <a href='https://policies.google.com/privacy?hl=de' target="_blank" rel="noopener" style="color: inherit;">Google Privacy Policy</a>.</p>
                <div class="headline font-weight-light">Privacy policy for contact form</div>
                <p class="body-2">
                    If you send us enquiries via the contact form, your details from the enquiry form, including the contact details you entered there, will be used for the following purposes 
                    We will store your data for the purpose of processing your enquiry and in the event of follow-up questions. We do not pass on this data without your consent.
                </p>
                <div class="headline font-weight-light">Privacy policy for newsletter data</div>
                <p class="body-2">
                    If you would like to receive the newsletter offered on this website, we need an e-mail address from you as well as information which will allow us to check your e-mail address. 
                    allow that you are the owner of the given e-mail address and agree to receive the newsletter. Further data will not be collected. We use this data 
                    exclusively for the purpose of sending the requested information and will not pass it on to third parties.
                </p> 
                <p class="body-2">
                    The given consent for the storage of the data, the 
                    You can revoke your e-mail address and its use to send the newsletter at any time, for example via the "Unsubscribe" link in the newsletter.
                </p>
                <div class="headline font-weight-light">Privacy policy for comments on this website</div>
                <p class="body-2">
                    For the comment function on this WebSite, in addition to your comment, information about the time the comment was created, your e-mail address and, if you do not have an e-mail address, your e-mail address will also be used. 
                    anonymously, the username you have chosen will be saved.
                </p>
                <p class="body-2">
                    <i>Storing the IP address </i>
                </p>
                <p class="body-2">
                    Our comment function stores the IP addresses of the users, 
                    write the comments. Since we do not check comments on our site before activating them, we need this data in order to be able to process them in case of infringements such as 
                    to insult or propagandise against the author.
                </p>
                <p class="body-2">
                    <i>Subscribe to comments</i>
                </p>
                <p class="body-2">
                    As a user of the site, you can subscribe to comments after registering. You will receive a confirmation email to check whether you are the owner of the specified 
                    e-mail address. You can unsubscribe from this function at any time via a link in the Info-Mails.</p><div class="headline font-weight-light">Privacy Policy for 
                    Right to information, deletion, blocking </div><p class="body-2">You have the right at any time to free information about your stored personal data, whose 
                    origin and recipient and the purpose of the data processing as well as a right to correction, blocking or deletion of this data. For this as well as to further 
                    If you have any questions on the subject of personal data, please contact us at any time at the address given in the imprint.
                </p>
                <div class="headline font-weight-light">Privacy statement for objection advertising mails</div>
                <p class="body-2">
                    The use of contact data published within the scope of the imprint obligation for the transmission of unsolicited advertising and promotional material is prohibited. 
                    Information materials are hereby objected to. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited mailing or e-mailing of spam. 
                    sending of advertising information, such as spam e-mails.
                </p>
                <div class="headline font-weight-light">Services subject to a charge </div> 
                <p class="body-2">
                    In order to provide services subject to a charge, we will request additional data, such as payment details, in order to process your order or your order. 
                    to be able to execute. We store this data in our systems until the statutory retention periods have expired.
                </p>
                <div class="headline font-weight-light">Google AdWords</div> 
                <p class="body-2">
                    This website uses Google Conversion Tracking. If you have reached our website via an ad placed by Google, Google Adwords will generate a 
                    Cookie set on your computer. The conversion tracking cookie is set when a user clicks on an ad placed by Google. 
                    These cookies lose their validity after 30 days and are not used for personal identification. If the user visits certain pages of our 
                    website and the cookie has not yet expired, we and Google can recognize that the user clicked on the ad and go to this page 
                    has been forwarded. Each Google AdWords customer receives a different cookie. Cookies cannot therefore be accessed via the websites of AdWords customers. 
                    can be tracked. The information collected using the conversion cookie is used to generate conversion statistics for AdWords customers, 
                    who have opted for conversion tracking. The customers learn the total number of users who clicked on their advertisement and went to an 
                    were forwarded to a page tagged with a conversion tracking tag. However, you will not receive any personally identifiable information.
                </p> 
                <p class="body-2">
                    If you do not wish to participate in tracking, you can refuse to set a cookie as required for this - for example by setting your browser, 
                    which generally deactivates the automatic setting of cookies or sets your browser so that cookies from the domain "googleleadservices.com" are blocked.
                </p> 
                <p class="body-2">
                    Please note that you may not delete the opt-out cookies as long as you do not wish to record measurement data. Do you have all your cookies? 
                    in the browser, you must set the respective opt-out cookie again.
                </p>
                <div class="headline font-weight-light">Use of Google reCAPTCHA</div> 
                <p class="body-2">
                    This website uses the service reCAPTCHA of Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; "Google"). The query serves the purpose of differentiation, 
                    whether the input is made by a human being or by automated, mechanical processing. The query closes the dispatch of the IP address and if necessary further of Google. 
                    for the service reCAPTCHA required data to Google. For this purpose your input will be transmitted to Google and used there. Your IP address 
                    Google shall, however, within member states of the European Union or in other signatory states to the Agreement on the European Economic Area 
                    has been shortened before. Only in exceptional cases is the full IP address transmitted to a Google server in the USA and shortened there. On behalf of the operator 
                    of this website, Google will use this information to evaluate your use of this service. The IP address transmitted by your browser as part of reCaptcha 
                    will not be merged with any other data held by Google. Your data may also be transferred to the USA. For data transfers to the 
                    USA, there is an adequacy decision of the European Commission, the "Privacy Shield". Google participates in the Privacy Shield and has submitted to the requirements. 
                    By activating the query, you consent to the processing of your data. The processing takes place on the basis of Art. 6 (1) lit. a DSGVO with your consent. 
                    You can revoke your consent at any time without affecting the lawfulness of the processing carried out on the basis of the consent up to the revocation.
                </p> 
                <p class="body-2">
                    For more information about Google reCAPTCHA and the related privacy statement, please visit our privacy policy: 
                    <a class="caption" href="https://www.google.com/privacy/ads/" target="_blank" rel="noopener">https://www.google.com/privacy/ads/</a>
                </p>
                <div class="headline font-weight-light">Privacy Statement for Google Analytics</div>
                <p class="body-2">
                    This website uses Google Analytics, a web analytics service provided by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. To disable Google Analytiscs, we provide 
                    Google at <a class="caption" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" style="color: inherit;">https://tools.google.com/dlpage/gaoptout?hl=de</a> a browser plug-in for 
                    order. Google Analytics uses cookies. These are small text files that make it possible to store specific, user-related information on the user's terminal device. 
                    to store information. This allows an analysis of the use of our website by Google. The information collected by the cookie about the use of our website by Google 
                    of our pages (including your IP address) are usually transmitted to a Google server in the USA and stored there. We would like to point out that on this server 
                    Website Google Analytics was extended by the code "gat._anonymizeIp();" in order to guarantee an anonymised recording of IP addresses (so-called IP masking<!--SwissAnwalt-->). 
                    If anonymization is active, Google shortens IP addresses within member states of the European Union or in other signatory states to the Agreement on privacy and data protection. 
                    European Economic Area, which is why no conclusions can be drawn about your identity. Only in exceptional cases will the full IP address be transferred to a server. 
                    from Google in the USA and shortened there. Google complies with the Privacy Shield provisions of the Privacy Shield Agreement and is not a party to the Privacy Shield program of the 
                    The U.S. Department of Commerce registers and uses the information collected to evaluate the use of our Web sites, to prepare reports for us about our use of them, and to provide other services to you. 
                    to provide services to us in this respect. You can find out more at 
                    <a class="caption" href="https://support.google.com/analytics/answer/6004245" target="_blank" style="color: inherit;">support.google.com/analytics/answer/6004245</a>.
                </p>
                <div class="headline font-weight-light">Privacy statement for Google AdSense</div>
                <p class="body-2">
                    This web site uses Google AdSense, an ad serving service provided by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. GoogleAdSense uses 
                    so-called "cookies", text files which are stored on your computer and which enable an analysis of the use of the website. Google AdSense also uses so-called Web 
                    Beacons (invisible graphics). Through these web beacons, information such as visitor traffic on these pages can be evaluated. The cookies and web beacons generated by 
                    Information about the use of this website (including your IP address) and the delivery of advertising formats is transmitted to a Google server in the USA. 
                    and stored there. This information can be passed on by Google to Google's contractual partners. However, Google will not share your IP address with others of yours. 
                    to merge the stored data. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. 
                    that in this case you may not be able to use all functions of this website to their full extent. Through the use of this website 
                    you consent to the processing of data about you by Google in the manner and for the purposes set out above.
                </p>
                <div class="headline font-weight-light">Privacy policy for the use of Google Web Fonts</div>
                <p class="body-2">
                    This website uses so-called web fonts provided by Google for the uniform display of fonts. When you call up a page, your browser loads the 
                    required web fonts in their browser cache to display text and fonts correctly. If your browser does not support web fonts, a standard font will be used by your computer.
                </p>
                <p class="body-2">
                    More information about Google Web Fonts can be found at <a class="caption" href="https://developers.google.com/fonts/faq" target="_blank" style="color: inherit;">https://developers.google.com/fonts/faq</a> 
                    and in Google's privacy policy: <a class="caption" href="https://www.google.com/policies/privacy/" target="_blank" style="color: inherit;">https://www.google.com/policies/privacy/</a>
                </p>
                <div class="headline font-weight-light">Google Tag Manager</div> 
                <p class="body-2">
                    Google Tag Manager is a solution with which we can manage so-called website tags via a single interface, e.g. Google Analytics and other Google marketing services. 
                    to be able to integrate them into our online offer. The Tag Manager itself, which implements the tags, does not process any personal user data. With regard to the processing of the 
                    personal data of the users is referred to the following information about the Google services. 
                    Terms of use: <a class="caption" href="https://www.google.com/intl/de/tagmanager/use-policy.html" target="_blank" rel="noopener">google.com/intl/de/tagmanager/use-policy</a>.
                </p>
                <div class="headline font-weight-light">Privacy policy for the use of Hotjar</div> 
                <p class="body-2">
                    This website uses Hotjar's services to improve its user-friendliness. Hotjar Ltd. is a European company based in Malta. 
                    (Hotjar Ltd, Level 2, St Julians Business Centre, 3, Elia Zammit Street, St Julians STJ 1000, Malta, Europe). Mouse clicks and mouse and scroll movements can be recorded. 
                    will be. Keystrokes made on this website can also be recorded. Personalized information is not recorded. 
                    Hotjar uses a tracking code to collect and transfer your data. As soon as you visit our website, the Hotjar tracking code automatically collects the data stored on your computer. 
                    activity based data and stores it on the Hotjar servers (located in Ireland). In addition, the data collected by the website on your computer or terminal device 
                    cookies also contain data. For more information on how Hotjar works, please visit this page. 
                    <a class="caption" href="https://www.hotjar.com/privacy" target="_blank" rel="noopener">https://www.hotjar.com/privacy</a>.
                </p> 
                <p class="body-2">
                    If you would like to object to the collection of data by Hotjar (opt-out), please click here: <a class="caption" href="https://www.hotjar.com/opt-out" target="_blank" rel="noopener">https://www.hotjar.com/opt-out</a>.
                </p>
                <div class="headline font-weight-light">Privacy Statement for Facebook</div>
                <p class="body-2">
                    This WebSite uses features of Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA . When you access our pages using Facebook plug-ins, a connection is established between your 
                    browser and the Facebook servers. Data is already transferred to Facebook. If you have a Facebook account, this data can be linked to it. 
                    If you do not want this data to be associated with your Facebook account, please log out of Facebook before visiting our page. Interactions, in particular the use of a 
                    Comments or clicking a "Like" or "Share" button will also be forwarded to Facebook. Learn more at 
                    <a class="caption" href="https://de-de.facebook.com/about/privacy" target="_blank" style="color: inherit;">https://de-de.facebook.com/about/privacy</a>.
                </p>
                <div class="headline font-weight-light">Privacy statement for Twitter</div>
                <p class="body-2">
                    This WebSite uses features from Twitter, Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA. When you access our pages with Twitter plug-ins, a connection is established between 
                    your browser and the Twitter servers. Data is already transferred to Twitter. If you have a Twitter account, these data can be linked to it. 
                    will be. If you do not want this data to be associated with your Twitter account, please log out of Twitter before visiting our site. Interactions, in particular clicking on them 
                    of a "Re-Tweet" button are also forwarded to Twitter. You can learn more at <a class="caption" href="https://twitter.com/privacy" target="_blank" style="color: inherit;">https://twitter.com/privacy</a>.
                </p>
                <div class="headline font-weight-light">Privacy Statement for Instagram</div>
                <p class="body-2">
                    On our pages functions of the service Instagram are integrated. These functions are offered by Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA. 
                    If you are logged into your Instagram account, you can link the contents of our pages to your Instagram profile by clicking the Instagram button. This allows Instagram 
                    assign the visit of our pages to your user account. We would like to point out that, as the provider of these pages, we do not have any knowledge of the content of the transmitted data or its use by Instagram.
                </p>
                <p class="body-2">
                    For more information, see Instagram's privacy statement: <a class="caption" href="https://instagram.com/about/legal/privacy/" target="_blank" style="color: inherit;">http://instagram.com/about/legal/privacy/</a>
                </p>
                <div class="headline font-weight-light">External payment service provider</div> 
                <p class="body-2">
                    This WebSite uses external payment service providers whose platforms enable users and us to make payment transactions. For example
                </p>
                <ul>
                    <li class="caption"> PostFinance <a class="caption" href="https://www.postfinance.ch/de/detail/rechtliches-barrierefreiheit.html" target="_blank"> Link </a> </li>
                    <li class="caption"> Visa <a class="caption" href="https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html" target="_blank"> Link </a> </li>
                    <li class="caption"> Mastercard <a class="caption" href="https://www.mastercard.ch/de-ch/datenschutz.html" target="_blank"> Link </a> </li>
                    <li class="caption"> American Express <a class="caption" href="https://www.americanexpress.com/de/content/privacy-policy-statement.html" target="_blank"> Link </a> </li>
                    <li class="caption"> Paypal <a class="caption" href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank"> Link </a> </li>
                    <li class="caption"> Bexio AG <a class="caption" href="https://www.bexio.com/de-CH/datenschutz" target="_blank"> Link </a> </li>
                    <li class="caption"> Payrexx AG <a class="caption" href="https://www.payrexx.ch/site/assets/files/2592/datenschutzerklaerung.pdf" target="_blank"> Link </a> </li>
                    <li class="caption"> Apple Pay <a href="support.apple.com/de-ch/ht203027" target="_blank"> Link </a> </li>
                    <li class="caption"> Stripe <a href="stripe.com/ch/privacy" target="_blank"> Link </a> </li>
                    <li class="caption"> Klarna <a class="caption" href="https://www.klarna.com/de/datenschutz/" target="_blank"> Link </a> </li>
                    <li class="caption"> Skrill <a class="caption" href="https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/" target="_blank"> Link </a> </li>
                    <li class="caption"> Giropay <a class="caption" href="https://www.giropay.de/rechtliches/datenschutz-agb/" target="_blank"> Link </a> </li>
                </ul> <br/> 
                <p class="body-2">
                    Within the scope of fulfilling contracts, we use payment service providers on the basis of the Swiss Data Protection Ordinance as well as and to the extent necessary, 
                    of Art. 6 para. 1 lit. b. EU-DSGVO. Otherwise, we use external payment service providers on the basis of our legitimate interests pursuant to Swiss law. 
                    Data Protection Ordinance and, if necessary, pursuant to Art. 6 para. 1 lit. f. EU-DSGVO in order to offer our users effective and secure payment options.
                </p> 
                <p class="body-2">
                    The data processed by the payment service providers includes inventory data, such as name and address, bank data, such as account numbers or credit card numbers, 
                    Passwords, TANs and checksums, as well as contract, total and recipient details. The information is required to complete the transactions. 
                    However, the data entered will only be processed and stored by the payment service providers. We as the operator do not receive any information about (bank) 
                    Account or credit card, but only information confirming (accepting) or refusing payment. Under certain circumstances, the data may be used by the payment service providers to 
                    to credit agencies. The purpose of this transmission is to check identity and creditworthiness. Please refer to the general terms and conditions and data protection information of the payment service providers.
                </p> 
                <p class="body-2">
                    Payment transactions are subject to the terms and conditions and data protection notices of the respective payment service providers, which are published within the respective website or transaction applications. 
                    are available. We also refer to these for further information and assertion of revocation, information and other rights affected.
                </p>
                <div class="headline font-weight-light">Privacy Statement for YouTube</div>
                <p class="body-2">
                    This website uses plugins from the YouTube site operated by Google. The site is operated by YouTube, LLC, 901 Cherry Ave, San Bruno, CA 94066, USA. If you are using one of our YouTube plugin-equipped 
                    pages, a connection will be established to the servers of YouTube. The Youtube server will be informed which of our pages you have visited.
                </p> 
                <p class="body-2">
                    When you are logged into your YouTube account 
                    are you enable YouTube to assign your surfing behavior directly to your personal profile. You can prevent this by logging out of your YouTube account.
                </p>
                <p class="body-2">
                    You can find more information about the handling of user data in YouTube's Privacy Policy: 
                    <a class="caption" href="https://www.google.de/intl/de/policies/privacy" target="_blank" style="color: inherit;">https://www.google.de/intl/de/policies/privacy</a>
                </p>
                <div class="headline font-weight-light">Order processing in the online shop with customer account </div> 
                <p class="body-2">
                    We process the data of our customers in accordance with the data protection regulations of the Federal Government (Data Protection Act, DSG) and the EU DSGVO, in the context of the ordering processes in our online shop, 
                    to enable them to select and order the selected products and services, as well as to pay for and deliver them, or to execute them.
                </p> 
                <p class="body-2">
                    The processed data includes master data (inventory data), communication data, contract data, payment data and the persons affected by the processing include our customers, prospective customers and other interested parties. 
                    Business partner. Processing is carried out for the purpose of providing contractual services within the framework of operating an online shop, billing, delivery and customer services. Here 
                    we use session cookies, e.g. to store the contents of the shopping cart, and permanent cookies, e.g. to store the login status.
                </p> 
                <p class="body-2">
                    Processing takes place on the basis of Art. 6 para. 1 lit. b (execution of order processes) and c (legally required archiving) DSGVO. The data marked as required for the 
                    Justification and fulfilment of the contract required. We only disclose the data to third parties within the scope of delivery, payment or within the scope of the legal permissions. 
                    and duties. The data will only be processed in third countries if this is necessary for the fulfilment of the contract (e.g. at the customer's request for delivery or payment).
                </p> 
                <p class="body-2">
                    Users can optionally create a user account by viewing their orders in particular. During the registration process, the necessary mandatory information will be provided to the users. 
                    The user accounts are not public and cannot be indexed by search engines such as Google. If users have terminated their user account, their data will be deleted with regard to the 
                    User account deleted, subject to their retention is necessary for commercial or tax reasons pursuant to Art. 6 para. 1 lit. c DSGVO. Data in the customer account shall remain valid until their 
                    Deletion with subsequent archiving in the event of a legal obligation. It is the responsibility of the users to secure their data before the end of the contract in the event of termination.
                </p> 
                <p class="body-2">
                    Within the scope of registration and renewed registrations as well as use of our online services, we store the IP address and the time of the respective user action. The storage takes place on 
                    Basis of our legitimate interests, as well as the user's protection from misuse and other unauthorized use. A passing on of these data to third parties does not take place in principle, except 
                    it is necessary to pursue our claims or there is a legal obligation to do so pursuant to Art. 6 para. 1 lit. c DSGVO.
                </p> 
                <p class="body-2">
                    The deletion takes place after expiration of legal warranty and comparable obligations, the necessity of the storage of the data in irregular 
                    I checked the intervals. In the case of legal archiving obligations, deletion takes place after their expiration.
                </p>
                <div class="headline font-weight-light">Agency services</div> 
                <p class="body-2">
                    We process the data of our customers in accordance with the data protection regulations of the Federal Government (Data Protection Act, DSG) and the EU-DSGVO within the scope of our contractual services.
                </p> 
                <p class="body-2">
                    We process inventory data (e.g. customer master data, such as names or addresses), contact data (e.g. e-mail, telephone numbers), content data (e.g. text input, etc.), contract data (e.g. subject of contract, term), 
                    Payment data (e.g. bank details, payment history), usage and metadata (e.g. in the context of evaluating and measuring the success of marketing measures). Among those affected are our customers, interested parties 
                    as well as their customers, users, website visitors or employees and third parties. The purpose of the processing consists in the provision of contractual services, billing and our customer service. The legal basis of the 
                    Processing results from Art. 6 para. 1 lit. b DSGVO (contractual services), Art. 6 para. 1 lit. f DSGVO (analysis, statistics, optimisation, security measures). We process data that is used to substantiate 
                    and performance of the contractual services and point to the necessity of their disclosure. Disclosure to external parties is only made if it is required within the framework of a contract. 
                    When processing the data provided to us within the framework of an order, we shall act in accordance with the instructions of the customer and the legal requirements for order processing pursuant to Art. 28 DSGVO. 
                    and process the data for no purposes other than those specified in the order.
                </p>
                <p class="body-2">
                    We delete the data after the expiry of statutory warranty and comparable obligations. The necessity 
                    the storage of the data is checked at irregular intervals. In the case of legal archiving obligations, deletion takes place after their expiration. In the case of data which has been 
                    have been disclosed to us by the client within the framework of an order, we delete the data in accordance with the specifications of the order, in principle after the end of the order.
                <div class="headline font-weight-light">Broker services</div> 
                <p class="body-2">
                    We process the data of our customers, clients and interested parties (uniformly referred to as "customers") in accordance with the data protection provisions of the Federal Government (Data Protection Act, DSG) and the EU-DSGVO 
                    in accordance with Art. 6 para. 1 lit. b. DSGVO in order to provide them with our contractual or pre-contractual services. The data processed, the type, scope and purpose of the data processed, and the 
                    The necessity of their processing is determined by the underlying order. This basically includes the inventory and master data of the customers (name, address, etc.), as well as the contact data. 
                    (e-mail address, telephone, etc.), the contract data (content of the order, fees, terms, details of the brokered company/insurer/services) and payment data (commissions, payment history, etc.). 
                    We can also process information on the characteristics and circumstances of persons or items belonging to them if this is part of our order. This may include, but is not limited to 
                    personal circumstances, mobile or immobile material goods.
                </p> 
                <p class="body-2">
                    Within the scope of our assignment it may also be necessary for us to collect special categories of data according to Art. 9 Para. 1 
                    DSGVO, here in particular information on the health of a person process. In accordance with Art. 6 Para. 1 lit. a., Art. 7, Art. 9 Para. 2 lit. a DSGVO, we obtain the express consent of the customer, if necessary.
                </p> 
                <p class="body-2">
                    Insofar as necessary for the fulfilment of the contract or required by law, we disclose or transmit the customer's data within the scope of cover requests, conclusion and execution of contracts, data to 
                    Providers of brokered services/properties, insurers, reinsurers, broker pools, technical service providers, other service providers, such as cooperating associations, as well as financial service providers, credit institutions, etc. 
                    and investment companies as well as social insurance institutions, tax authorities, tax advisors, legal advisors, auditors, insurance ombudsmen and the Swiss Financial Market Supervisory Authority (FINMA) 
                    or Federal Financial Supervisory Authority (BaFin). We can also commission sub-contractors, such as sub-brokers. We obtain the consent of the customer, provided that this consent is used for disclosure purposes. 
                    transmission (which may be the case, for example, in the case of special categories of data pursuant to Art. 9 DSGVO).
                </p> 
                <p class="body-2">
                    The deletion of the data takes place after the expiry of statutory warranty and comparable obligations, whereby the necessity of storing the data is checked at irregular intervals. 
                    In all other respects, the statutory storage obligations shall apply. In the case of statutory archiving obligations, deletion shall take place after their expiration.
                </p> 
                <div class="headline font-weight-light">Contractual benefits</div> 
                <p class="body-2">
                    We process the data of our contractual partners and interested parties as well as other clients, customers, clients, clients or contractual partners (uniformly referred to as "contractual partners") in accordance with the data protection law. 
                    Provisions of the Federal Government (Data Protection Act, DSG) and the EU DSGVO pursuant to Art. 6 para. 1 lit. b. DSGVO in order to provide them with our contractual or pre-contractual services. The data processed here, 
                    the nature, scope and purpose and necessity of their processing shall be determined by the underlying contractual relationship.
                </p> 
                <p class="body-2">
                    The processed data includes the master data of our contractual partners (e.g. names and addresses), contact data (e.g. e-mail addresses and telephone numbers) and contract data (e.g. services used, contract contents), 
                    contractual communication, names of contact persons) and payment data (e.g. bank details, payment history).
                </p> 
                <p class="body-2">
                    We do not process any special categories of personal data, unless they are part of a commissioned or contractual processing.
                </p> 
                <p class="body-2">
                    We process data which are necessary for the justification and fulfilment of the contractual services and point out the necessity of their indication, if this is not evident for the contracting parties. 
                    Disclosure to external persons or companies will only take place if it is necessary within the framework of a contract. When processing the data provided to us within the framework of an order, we act in accordance with the following 
                    instructions of the client as well as the legal requirements.
                </p> 
                <p class="body-2">
                    Within the scope of using our online services, we can store the IP address and the time of the respective user action. The storage takes place 
                    on the basis of our legitimate interests, as well as the interests of users in protection against misuse and other unauthorized use. A passing on of these data to third parties does not take place in principle, except it 
                    is required to pursue our claims pursuant to Art. 6 para. 1 lit. f. DSGVO is necessary or there is a legal obligation to do so pursuant to Art. 6 para. 1 lit. c. DSGVO.
                </p> 
                <p class="body-2">
                    The data will be deleted if 
                    the data is no longer required for the fulfilment of contractual or statutory duties of care and for the handling of any warranty and comparable obligations, whereby the necessity of the data is no longer limited to the following 
                    the storage of the data is checked at irregular intervals. In all other respects, the statutory storage obligations apply.
                </p>
                <div class="headline font-weight-light">copyright</div> 
                <p class="body-2">
                    The copyright and all other rights to contents, pictures, photos or other files on the website belong exclusively to the operator of this website or the specially named copyright holders. For the reproduction of 
                    all files, the written consent of the copyright holder is to be obtained in advance.</p><p class="body-2">Whoever commits a copyright infringement without the consent of the respective copyright holder may be liable to prosecution and, if necessary, be liable to prosecution. 
                    and make you liable for damages.
                </p>
                <div class="headline font-weight-light">General disclaimer</div> 
                <p class="body-2">
                    All information on our website has been carefully checked. We make every effort to ensure that the material contained in its web site is current, complete and correct. Nevertheless, the occurrence of errors cannot be ruled out. 
                    We therefore cannot guarantee the completeness, correctness and up-to-dateness of information of a journalistic or editorial nature. Liability claims 
                    The author reserves the right not to be responsible for the topicality, correctness, completeness or quality of the information provided.
                </p>
                <p class="body-2">
                    The publisher may change or delete texts at his own discretion and without prior notice and is not obliged to update the contents of this website. The use of or access to this website is 
                    at the visitor's own risk. The publisher, his clients or partners are not responsible for damages, such as direct, indirect, accidental, in advance to be determined or consequential damages, which are allegedly 
                    and therefore do not assume any liability for them.
                </p>
                <p class="body-2">
                    The publisher also assumes no responsibility and liability for the content and availability of 
                    Websites of third parties that can be reached via external links on this website. The operators of the linked sites are solely responsible for their content. The publisher expressly dissociates himself from the contents of all linked websites. 
                    any third party content that may be relevant to criminal or liability law or that is immoral.
                </p>
                <div class="headline font-weight-light">changes</div>
                <p class="body-2">
                    We can delete this privacy statement at any time without notice. 
                    Customize Advance Notice. The current version published on our website applies. As far as the data protection declaration is part of an agreement with you, we will inform you in case of an update via 
                    notify the change by e-mail or other appropriate means.
                </p>
                <div class="headline font-weight-light">Questions to the Data Protection Officer</div> 
                <p class="body-2">
                    If you have any questions regarding data protection, please send us an e-mail or contact the data protection officer listed at the beginning of this privacy statement, 
                    responsible person in our organization.
                </p>
                <p class="caption">
                    Basel, 09.09.2019<br/>
                    Source: <a class="caption" href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
                </p>
                `
            },
            de: {
                langNotice: 'Übersetz mit',
                text: `
                <div class="headline font-weight-light">Datenschutzerklärung</div>
                <p class="body-2">
                    Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
                </p>
                <p class="body-2">
                    Osis | <a target="_blank" href="mailto:mail@osis.io">mail@osis.io</a><br/>
                    4058 Basel (Switzerland CH)<br/>
                </p>
                <div class="headline font-weight-light">Allgemeiner Hinweis</div> 
                <p class="body-2">
                    Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen Bestimmungen des 
                    Bundes (Datenschutzgesetz, DSG<!--DSG-->) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf 
                    Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer 
                    persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend 
                    der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                <p class="body-2">
                    In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor fremden Zugriffen, 
                    Verlusten, Missbrauch oder vor Fälschung zu schützen.</p><p class="body-2">Wir weisen darauf hin, dass die 
                    Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. 
                    Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
                <p class="body-2">
                    Durch die Nutzung dieser WebSite erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von Daten gemäss der 
                    nachfolgenden Beschreibung einverstanden. Diese WebSite kann grundsätzlich ohne Registrierung besucht werden. 
                    Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit zu 
                    statistischen Zwecken auf dem Server gespeichert, ohne dass diese Daten unmittelbar auf Ihre Person bezogen werden. 
                    Personenbezogene Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger 
                    Basis erhoben. Ohne Ihre Einwilligung erfolgt keine Weitergabe der Daten an Dritte.
                </p>
                <div class="headline font-weight-light">Bearbeitung von Personendaten</div> 
                <p class="body-2">
                    Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare Person beziehen. Eine betroffene Person 
                    ist eine Person, über die Personendaten bearbeitet werden. Bearbeiten umfasst jeden Umgang mit Personendaten, 
                    unabhängig von den angewandten Mitteln und Verfahren, insbesondere das Aufbewahren, Bekanntgeben, Beschaffen, 
                    Löschen, Speichern, Verändern, Vernichten und Verwenden von Personendaten.</p> <p class="body-2">Wir bearbeiten Personendaten 
                    im Einklang mit dem schweizerischen Datenschutzrecht. Im übrigen bearbeiten wir – soweit und sofern die EU-DSGVO 
                    anwendbar ist – Personendaten gemäss folgenden Rechtsgrundlagen im Zusammenhang mit Art. 6 Abs. 1 DSGVO<!--DSGVO-->:
                </p> 
                <ul> 
                    <li class="caption">
                        lit. a) Bearbeitung von Personendaten mit Einwilligung der betroffenen Person.
                    </li> 
                    <li class="caption">
                        lit. b) Bearbeitung von Personendaten zur Erfüllung eines Vertrages mit der betroffenen Person sowie zur 
                        Durchführung entsprechender vorvertraglicher Massnahmen.
                    </li> 
                    <li class="caption">
                        lit. c) Bearbeitung von Personendaten zur Erfüllung einer rechtlichen Verpflichtung, der wir gemäss 
                        allenfalls anwendbarem Recht der EU oder gemäss allenfalls anwendbarem Recht eines Landes, in dem 
                        die DSGVO<!--DSGVO--> ganz oder teilweise anwendbar ist, unterliegen.
                    </li> 
                    <li class="caption">
                        lit. d) Bearbeitung von Personendaten um lebenswichtige Interessen der betroffenen Person oder einer 
                        anderen natürlichen Person zu schützen.
                    </li>
                    <li class="caption">
                        lit. f) Bearbeitung von Personendaten um die berechtigten Interessen von uns oder von Dritten zu wahren, 
                        sofern nicht die Grundfreiheiten und Grundrechte sowie Interessen der betroffenen Person überwiegen. 
                        Berechtigte Interessen sind insbesondere unser betriebswirtschaftliches Interesse, unsere Website 
                        bereitstellen zu können, die Informationssicherheit, die Durchsetzung von eigenen 
                        rechtlichen Ansprüchen und die Einhaltung von schweizerischem Recht.
                    </li> 
                </ul> <br/> 
                <p class="body-2">
                    Wir bearbeiten Personendaten für jene Dauer, die für den jeweiligen Zweck oder die jeweiligen 
                    Zwecke erforderlich ist. Bei länger dauernden Aufbewahrungspflichten aufgrund von gesetzlichen und 
                    sonstigen Pflichten, denen wir unterliegen, schränken wir die Bearbeitung entsprechend ein.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Cookies</div>
                <p class="body-2">
                    Diese WebSite verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät 
                    des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er die Website nutzt. 
                    Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der Seiten zu ermitteln, 
                    Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot kundenfreundlicher zu gestalten. 
                    <!--Allg.Cookies-->Cookies bleiben über das Ende einer Browser-Sitzung gespeichert und können bei 
                    einem erneuten Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht wünschen, sollten Sie Ihren 
                    Internetbrowser so einstellen, dass er die Annahme von Cookies verweigert.
                </p> 
                <p class="body-2">
                    Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer 
                    Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite 
                    <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener">http://www.aboutads.info/choices/</a> 
                    oder die EU-Seite <a href="http://www.youronlinechoices.com/" target="_blank" rel="noopener">http://www.youronlinechoices.com/</a> 
                    erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers 
                    erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für SSL-/TLS-Verschlüsselung</div>
                <p class="body-2">
                    Diese WebSite nutzt aus Gründen der Sicherheit und zum Schutz der übertragung vertraulicher Inhalte, wie zum Beispiel der 
                    Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung 
                    erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem 
                    Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die Daten, 
                    die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Server-Log-Files</div>
                <p class="body-2">
                    Der Provider dieser WebSite erhebt und speichert automatisch Informationen in so genannten Server-Log Files, die Ihr Browser 
                    automatisch an uns übermittelt. Dies sind:
                </p> 
                <ul> 
                    <li class="caption">Browsertyp und Browserversion</li> 
                    <li class="caption">verwendetes Betriebssystem</li> 
                    <li class="caption">Referrer URL</li> 
                    <li class="caption">Hostname des zugreifenden Rechners</li> 
                    <li class="caption">Uhrzeit der Serveranfrage</li> 
                </ul> <br/> 
                <p class="body-2">
                    Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                    Wir behalten uns vor, diese Daten nachträglich zuprüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
                </p>
                <div class="headline font-weight-light">Dienste von Dritten</div> 
                <p class="body-2">
                    Diese WebSite verwenden allenfalls Google Maps für das Einbetten von Karten, Google Invisible reCAPTCHA für den Schutz gegen Bots und Spam sowie 
                    YouTube für das Einbetten von Videos. Diese Dienste der amerikanischen Google LLC verwenden unter anderem Cookies und infolgedessen werden Daten an 
                    Google in den USA übertragen, wobei wir davon ausgehen, dass in diesem Rahmen kein personenbezogenes Tracking allein durch die Nutzung unserer Website stattfindet.
                </p>
                <p class="body-2">
                    Google hat sich verpflichtet, einen angemessenen Datenschutz gemäss dem amerikanisch-europäischen und dem amerikanisch-schweizerischen Privacy Shield zu gewährleisten.
                </p>
                <p class="body-2">
                    Weitere Informationen finden sich in der <a href='https://policies.google.com/privacy?hl=de' target="_blank" rel="noopener" style="color: inherit;">Datenschutzerklärung von Google</a>.</p>
                <div class="headline font-weight-light">Datenschutzerklärung für Kontaktformular</div>
                <p class="body-2">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Newsletterdaten</div>
                <p class="body-2">
                    Wenn Sie den auf dieser WebSite angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die überprüfung 
                    gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht erhoben. Diese Daten verwenden wir 
                    ausschliesslich für den Versand der angeforderten Informationen und geben sie nicht an Dritte weiter.
                </p> 
                <p class="body-2">
                    Die erteilte Einwilligung zur Speicherung der Daten, der 
                    E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den "Austragen"-Link im Newsletter.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Kommentarfunktion auf dieser Webseite</div>
                <p class="body-2">
                    Für die Kommentarfunktion auf dieser WebSite werden neben Ihrem Kommentar auch Angaben zum Zeitpunkt der Erstellung des Kommentars, Ihre E-Mail-Adresse und, wenn Sie nicht 
                    anonym posten, der von Ihnen gewählte Nutzername gespeichert.
                </p>
                <p class="body-2">
                    <i>Speicherung der IP Adresse</i>
                </p>
                <p class="body-2">
                    Unsere Kommentarfunktion speichert die IP-Adressen der Nutzer, 
                    die Kommentare verfassen. Da wir Kommentare auf unserer Seite nicht vor der Freischaltung prüfen, benötigen wir diese Daten, um im Falle von Rechtsverletzungen wie 
                    Beleidigungen oder Propaganda gegen den Verfasser vorgehen zu können.
                </p>
                <p class="body-2">
                    <i>Abonnieren von Kommentaren</i>
                </p>
                <p class="body-2">
                    Als Nutzer der Seite können Sie nach einer Anmeldung Kommentare abonnieren. Sie erhalten eine Bestätigungsemail, um zu prüfen, ob Sie der Inhaber der angegebenen 
                    E-Mail-Adresse sind. Sie können diese Funktion jederzeit über einen Link in den Info-Mails abbestellen.</p><div class="headline font-weight-light">Datenschutzerklärung für 
                    Recht auf Auskunft, Löschung, Sperrung</div><p class="body-2">Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren 
                    Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren 
                    Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Widerspruch Werbe-Mails</div>
                <p class="body-2">
                    Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur übersendung von nicht ausdrücklich angeforderter Werbung und 
                    Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten 
                    Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
                <div class="headline font-weight-light">Kostenpflichtige Leistungen</div> 
                <p class="body-2">
                    Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung resp. Ihren Auftrag 
                    ausführen zu können. Wir speichern diese Daten in unseren Systemen, bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind.
                </p>
                <div class="headline font-weight-light">Google AdWords</div> 
                <p class="body-2">
                    Diese WebSite nutzt das Google Conversion-Tracking. Sind Sie über eine von Google geschaltete Anzeige auf unsere WebSite gelangt, wird von Google Adwords ein 
                    Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt. 
                    Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten unserer 
                    Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite 
                    weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden 
                    nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, 
                    die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer 
                    mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.
                </p> 
                <p class="body-2">
                    Möchten Sie nicht am Tracking teilnehmen, können Sie das hierfür erforderliche Setzen eines Cookies ablehnen – etwa per Browser-Einstellung, 
                    die das automatische Setzen von Cookies generell deaktiviert oder Ihren Browser so einstellen, dass Cookies von der Domain „googleleadservices.com“ blockiert werden.
                </p> 
                <p class="body-2">
                    Bitte beachten Sie, dass Sie die Opt-out-Cookies nicht löschen dürfen, solange Sie keine Aufzeichnung von Messdaten wünschen. Haben Sie alle Ihre Cookies 
                    im Browser gelöscht, müssen Sie das jeweilige Opt-out Cookie erneut setzen.
                </p>
                <div class="headline font-weight-light">Verwendung von Google reCAPTCHA</div> 
                <p class="body-2">
                    Diese WebSite verwendet den Dienst reCAPTCHA der Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; „Google“). Die Abfrage dient dem Zweck der Unterscheidung, 
                    ob die Eingabe durch einen Menschen oder durch automatisierte, maschinelle Verarbeitung erfolgt. Die Abfrage schliesst den Versand der IP-Adresse und ggf. weiterer von Google 
                    für den Dienst reCAPTCHA benötigter Daten an Google ein. Zu diesem Zweck wird Ihre Eingabe an Google übermittelt und dort weiter verwendet. Ihre IP-Adresse 
                    wird von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum 
                    zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers 
                    dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung dieses Dienstes auszuwerten. Die im Rahmen von reCaptcha von Ihrem Browser übermittelte IP-Adresse 
                    wird nicht mit anderen Daten von Google zusammengeführt. Ihre Daten werden dabei gegebenenfalls auch in die USA übermittelt. Für Datenübermittlungen in die 
                    USA ist ein Angemessenheitsbeschluss der Europäischen Kommission, das "Privacy Shield", vorhanden. Google nimmt am "Privacy Shield" teil und hat sich den Vorgaben unterworfen. 
                    Mit Betätigen der Abfrage willigen Sie in die Verarbeitung Ihrer Daten ein. Die Verarbeitung erfolgt auf Grundlage des Art. 6 (1) lit. a DSGVO mit Ihrer Einwilligung. 
                    Sie können Ihre Einwilligung jederzeit widerrufen, ohne dass die Rechtmässigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt wird.
                </p> 
                <p class="body-2">
                    Nähere Informationen zu Google reCAPTCHA sowie die dazugehörige Datenschutzerklärung finden Sie unter: 
                    <a class="caption" href="https://www.google.com/privacy/ads/" target="_blank" rel="noopener">https://www.google.com/privacy/ads/</a>
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Google Analytics</div>
                <p class="body-2">
                    Diese WebSite verwendet Google Analytics, einen Webanalysedienst von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Zur Deaktivierung von Google Analytiscs stellt 
                    Google unter <a class="caption" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" style="color: inherit;">https://tools.google.com/dlpage/gaoptout?hl=de</a> ein Browser-Plug-In zur 
                    Verfügung. Google Analytics verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem Endgerät des Nutzers spezifische, auf den Nutzer bezogene 
                    Informationen zu speichern. Diese ermöglichen eine Analyse der Nutzung unseres Websiteangebotes durch Google. Die durch den Cookie erfassten Informationen über die Nutzung 
                    unserer Seiten (einschliesslich Ihrer IP-Adresse) werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir weisen darauf hin, dass auf dieser 
                    Website Google Analytics um den Code „gat._anonymizeIp();“ erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking<!--SwissAnwalt-->) zu gewährleisten. 
                    Ist die Anonymisierung aktiv, kürzt Google IP-Adressen innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den 
                    Europäischen Wirtschaftsraum, weswegen keine Rückschlüsse auf Ihre Identität möglich sind. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server 
                    von Google in den USA übertragen und dort gekürzt. Google beachtet die Datenschutzbestimmungen des „Privacy Shield“-Abkommens und ist beim „Privacy Shield“-Programm des 
                    US-Handelsministeriums registriert und nutzt die gesammelten Informationen, um die Nutzung unserer Websites auszuwerten, Berichte für uns diesbezüglich zu verfassen und andere 
                    diesbezügliche Dienstleistungen an uns zu erbringen. Mehr erfahren Sie unter 
                    <a class="caption" href="https://support.google.com/analytics/answer/6004245" target="_blank" style="color: inherit;">support.google.com/analytics/answer/6004245</a>.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Google AdSense</div>
                <p class="body-2">
                    Diese WebSite benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen von Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. GoogleAdSense verwendet 
                    sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglicht. Google AdSense verwendet auch so genannte Web 
                    Beacons (unsichtbare Grafiken). Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden. Die durch Cookies und Web Beacons erzeugten 
                    Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google in den USA übertragen 
                    und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weiter gegeben werden. Google wird Ihre IP-Adresse jedoch nicht mit anderen von Ihnen 
                    gespeicherten Daten zusammenführen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch 
                    darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website 
                    erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für die Nutzung von Google Web Fonts</div>
                <p class="body-2">
                    Diese WebSite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die 
                    benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
                </p>
                <p class="body-2">
                    Weitere Informationen zu Google Web Fonts finden Sie unter <a class="caption" href="https://developers.google.com/fonts/faq" target="_blank" style="color: inherit;">https://developers.google.com/fonts/faq</a> 
                    und in der Datenschutzerklärung von Google: <a class="caption" href="https://www.google.com/policies/privacy/" target="_blank" style="color: inherit;">https://www.google.com/policies/privacy/</a>
                </p>
                <div class="headline font-weight-light">Google Tag Manager</div> 
                <p class="body-2">
                    Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über eine Oberfläche verwalten können und so z.B. Google Analytics sowie andere Google-Marketing-Dienste 
                    in unser Onlineangebot einbinden können. Der Tag Manager selbst, welcher die Tags implementiert, verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung der 
                    personenbezogenen Daten der Nutzer wird auf die folgenden Angaben zu den Google-Diensten verwiesen. 
                    Nutzungsrichtlinien: <a class="caption" href="https://www.google.com/intl/de/tagmanager/use-policy.html" target="_blank" rel="noopener">google.com/intl/de/tagmanager/use-policy</a>.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für die Nutzung von Hotjar</div> 
                <p class="body-2">
                    Diese WebSite benutzt den Service von Hotjar zur Verbesserung der Benutzerfreundlichkeit. Die Hotjar Ltd. Hotjar Ltd. ist ein europäisches Unternehmen mit Sitz in Malta 
                    (Hotjar Ltd, Level 2, St Julians Business Centre, 3, Elia Zammit Street, St Julians STJ 1000, Malta, Europe). Es können Mausklicks sowie Maus- und Scroll-Bewegungen aufgezeichnet 
                    werden. Ebenso können auf dieser Internetseite durchgeführte Tastatureingaben aufgezeichnet werden. Personifizierte Informationen werden dabei nicht aufgenommen. 
                    Hotjar verwendet zur Erhebung und übertragung Ihrer Daten einen Tracking-Code. Sobald Sie unsere Website besuchen, erhebt der Hotjar Tracking-Code automatisch die auf Ihrer 
                    Aktivität beruhenden Daten und speichert Sie auf den Hotjar Servern (Standort Irland) ab. Zudem erheben die durch die Website auf Ihrem Computer oder Ihrem Endendgerät 
                    platzierten Cookies ebenfalls Daten. Für weitere Informationen, wie Hotjar arbeitet, besuchen Sie diese Seite 
                    <a class="caption" href="https://www.hotjar.com/privacy" target="_blank" rel="noopener">https://www.hotjar.com/privacy</a>.
                </p> 
                <p class="body-2">
                    Möchten Sie der Erhebung der Daten durch Hotjar widersprechen (Opt-Out), klicken Sie bitte hier: <a class="caption" href="https://www.hotjar.com/opt-out" target="_blank" rel="noopener">https://www.hotjar.com/opt-out</a>.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Facebook</div>
                <p class="body-2">
                    Diese WebSite verwendet Funktionen von Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA . Bei Aufruf unserer Seiten mit Facebook-Plug-Ins wird eine Verbindung zwischen Ihrem 
                    Browser und den Servern von Facebook aufgebaut. Dabei werden bereits Daten an Facebook übertragen. Besitzen Sie einen Facebook-Account, können diese Daten damit verknüpft werden. 
                    Wenn Sie keine Zuordnung dieser Daten zu Ihrem Facebook-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Facebook aus. Interaktionen, insbesondere das Nutzen einer 
                    Kommentarfunktion oder das Anklicken eines „Like“- oder „Teilen“-Buttons werden ebenfalls an Facebook weitergegeben. Mehr erfahren Sie unter 
                    <a class="caption" href="https://de-de.facebook.com/about/privacy" target="_blank" style="color: inherit;">https://de-de.facebook.com/about/privacy</a>.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Twitter</div>
                <p class="body-2">
                    Diese WebSite verwendet Funktionen von Twitter, Inc., 1355 Market St, Suite 900, San Francisco, CA 94103, USA. Bei Aufruf unserer Seiten mit Twitter-Plug-Ins wird eine Verbindung zwischen 
                    Ihrem Browser und den Servern von Twitter aufgebaut. Dabei werden bereits Daten an Twitter übertragen. Besitzen Sie einen Twitter-Account, können diese Daten damit verknüpft 
                    werden. Wenn Sie keine Zuordnung dieser Daten zu Ihrem Twitter-Account wünschen, loggen Sie sich bitte vor dem Besuch unserer Seite bei Twitter aus. Interaktionen, insbesondere das Anklicken 
                    eines „Re-Tweet“-Buttons werden ebenfalls an Twitter weitergegeben. Mehr erfahren Sie unter <a class="caption" href="https://twitter.com/privacy" target="_blank" style="color: inherit;">https://twitter.com/privacy</a>.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für Instagram</div>
                <p class="body-2">
                    Auf unseren Seiten sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA integriert. 
                    Wenn Sie in Ihrem Instagram-Account eingeloggt sind können Sie durch Anklicken des Instagram-Buttons die Inhalte unserer Seiten mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram 
                    den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
                </p>
                <p class="body-2">
                    Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram: <a class="caption" href="https://instagram.com/about/legal/privacy/" target="_blank" style="color: inherit;">http://instagram.com/about/legal/privacy/</a>
                </p>
                <div class="headline font-weight-light">Externe Zahlungsdienstleister</div> 
                <p class="body-2">
                    Diese WebSite setzt externe Zahlungsdienstleister ein, über deren Plattformen die Nutzer und wir Zahlungstransaktionen vornehmen können. Zum Beispiel über
                </p>
                <ul>
                    <li class="caption"> PostFinance <a class="caption" href="https://www.postfinance.ch/de/detail/rechtliches-barrierefreiheit.html" target="_blank"> Link </a> </li>
                    <li class="caption"> Visa <a class="caption" href="https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html" target="_blank"> Link </a> </li>
                    <li class="caption"> Mastercard <a class="caption" href="https://www.mastercard.ch/de-ch/datenschutz.html" target="_blank"> Link </a> </li>
                    <li class="caption"> American Express <a class="caption" href="https://www.americanexpress.com/de/content/privacy-policy-statement.html" target="_blank"> Link </a> </li>
                    <li class="caption"> Paypal <a class="caption" href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full" target="_blank"> Link </a> </li>
                    <li class="caption"> Bexio AG <a class="caption" href="https://www.bexio.com/de-CH/datenschutz" target="_blank"> Link </a> </li>
                    <li class="caption"> Payrexx AG <a class="caption" href="https://www.payrexx.ch/site/assets/files/2592/datenschutzerklaerung.pdf" target="_blank"> Link </a> </li>
                    <li class="caption"> Apple Pay <a href="support.apple.com/de-ch/ht203027" target="_blank"> Link </a> </li>
                    <li class="caption"> Stripe <a href="stripe.com/ch/privacy" target="_blank"> Link </a> </li>
                    <li class="caption"> Klarna <a class="caption" href="https://www.klarna.com/de/datenschutz/" target="_blank"> Link </a> </li>
                    <li class="caption"> Skrill <a class="caption" href="https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/" target="_blank"> Link </a> </li>
                    <li class="caption"> Giropay <a class="caption" href="https://www.giropay.de/rechtliches/datenschutz-agb/" target="_blank"> Link </a> </li>
                </ul> <br/> 
                <p class="body-2">
                    Im Rahmen der Erfüllung von Verträgen setzen wir die Zahlungsdienstleister auf Grundlage der schweizerischen Datenschutzverordnung sowie und soweit nötig, 
                    des Art. 6 Abs. 1 lit. b. EU-DSGVO ein. Im übrigen setzen wir externe Zahlungsdienstleister auf Grundlage unserer berechtigten Interessen gem. schweizerischer 
                    Datenschutzverordnung sowie und soweit nötig, gem. Art. 6 Abs. 1 lit. f. EU-DSGVO ein, um unseren Nutzern effektive und sichere Zahlungsmöglichkeit zu bieten.
                </p> 
                <p class="body-2">
                    Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie u.a. Kontonummern oder Kreditkartennummern, 
                    Passwörter, TANs und Prüfsummen sowie die Vertrags-, Summen und empfängerbezogenen Angaben. Die Angaben sind erforderlich, um die Transaktionen durchzuführen. 
                    Die eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister verarbeitet und bei diesen gespeichert. Wir als Betreiber erhalten keinerlei Informationen zu (Bank-) 
                    Konto oder Kreditkarte, sondern lediglich Informationen zur Bestätigung (Annahme) oder Ablehnung der Zahlung. Unter Umständen werden die Daten seitens der Zahlungsdienstleister 
                    an Wirtschaftsauskunfteien übermittelt. Diese übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu verweisen wir auf die AGB und Datenschutzhinweise der Zahlungsdienstleister.
                </p> 
                <p class="body-2">
                    Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche innerhalb der jeweiligen Website, bzw. Transaktionsapplikationen 
                    abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer Informationen und Geltendmachung von Widerrufs-, Auskunfts- und anderen Betroffenenrechten.
                </p>
                <div class="headline font-weight-light">Datenschutzerklärung für YouTube</div>
                <p class="body-2">
                    Diese WebSite nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA. Wenn Sie eine unserer mit einem YouTube-Plugin ausgestatteten 
                    Seiten besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem Youtube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
                </p> 
                <p class="body-2">
                    Wenn Sie in Ihrem YouTube-Account eingeloggt 
                    sind ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
                </p>
                <p class="body-2">
                    Weitere Informationen zum Umgang von Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: 
                    <a class="caption" href="https://www.google.de/intl/de/policies/privacy" target="_blank" style="color: inherit;">https://www.google.de/intl/de/policies/privacy</a>
                </p>
                <div class="headline font-weight-light">Bestellabwicklung im Online-Shop mit Kundenkonto</div> 
                <p class="body-2">
                    Wir verarbeiten die Daten unserer Kunden gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO, im Rahmen der Bestellvorgänge in unserem Onlineshop, 
                    um ihnen die Auswahl und die Bestellung der gewählten Produkte und Leistungen, sowie deren Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen.
                </p> 
                <p class="body-2">
                    Zu den verarbeiteten Daten gehören Stammdaten (Bestandsdaten), Kommunikationsdaten, Vertragsdaten, Zahlungsdaten und zu den von der Verarbeitung betroffenen Personen gehören unsere Kunden, Interessenten und sonstige 
                    Geschäftspartner. Die Verarbeitung erfolgt zum Zweck der Erbringung von Vertragsleistungen im Rahmen des Betriebs eines Onlineshops, Abrechnung, Auslieferung und der Kundenservices. Hierbei 
                    setzen wir Session Cookies, z.B. für die Speicherung des Warenkorb-Inhalts und permanente Cookies, z.B. für die Speicherung des Login-Status ein.
                </p> 
                <p class="body-2">
                    Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b (Durchführung Bestellvorgänge) und c (Gesetzlich erforderliche Archivierung) DSGVO. Dabei sind die als erforderlich gekennzeichneten Angaben zur 
                    Begründung und Erfüllung des Vertrages erforderlich. Die Daten offenbaren wir gegenüber Dritten nur im Rahmen der Auslieferung, Zahlung oder im Rahmen der gesetzlichen Erlaubnisse 
                    und Pflichten. Die Daten werden in Drittländern nur dann verarbeitet, wenn dies zur Vertragserfüllung erforderlich ist (z.B. auf Kundenwunsch bei Auslieferung oder Zahlung).
                </p> 
                <p class="body-2">
                    Nutzer können optional ein Nutzerkonto anlegen, indem sie insbesondere ihre Bestellungen einsehen können. Im Rahmen der Registrierung, werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt. 
                    Die Nutzerkonten sind nicht öffentlich und können von Suchmaschinen, z.B. Google, nicht indexiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das 
                    Nutzerkonto gelöscht, vorbehaltlich deren Aufbewahrung ist aus handels- oder steuerrechtlichen Gründen entspr. Art. 6 Abs. 1 lit. c DSGVO notwendig. Angaben im Kundenkonto verbleiben bis zu deren 
                    Löschung mit anschliessender Archivierung im Fall einer rechtlichen Verpflichtung. Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern.
                </p> 
                <p class="body-2">
                    Im Rahmen der Registrierung und erneuter Anmeldungen sowie Inanspruchnahme unserer Onlinedienste, speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf 
                    Grundlage unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, ausser 
                    sie ist zur Verfolgung unserer Ansprüche erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c DSGVO.
                </p> 
                <p class="body-2">
                    Die Löschung erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, die Erforderlichkeit der Aufbewahrung der Daten wird in unregelmässigen 
                    Abständen überprüft. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf.
                </p>
                <div class="headline font-weight-light">Agenturdienstleistungen</div> 
                <p class="body-2">
                    Wir verarbeiten die Daten unserer Kunden gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO im Rahmen unserer vertraglichen Leistungen.
                </p> 
                <p class="body-2">
                    Hierbei verarbeiten wir Bestandsdaten (z.B., Kundenstammdaten, wie Namen oder Adressen), Kontaktdaten (z.B. E-Mail, Telefonnummern), Inhaltsdaten (z.B. Texteingaben etc.), Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit), 
                    Zahlungsdaten (z.B. Bankverbindung, Zahlungshistorie), Nutzungs- und Metadaten (z.B. im Rahmen der Auswertung und Erfolgsmessung von Marketingmassnahmen). Zu den Betroffenen gehören unsere Kunden, Interessenten 
                    sowie deren Kunden, Nutzer, Websitebesucher oder Mitarbeiter sowie Dritte. Der Zweck der Verarbeitung besteht in der Erbringung von Vertragsleistungen, Abrechnung und unserem Kundenservice. Die Rechtsgrundlagen der 
                    Verarbeitung ergeben sich aus Art. 6 Abs. 1 lit. b DSGVO (vertragliche Leistungen), Art. 6 Abs. 1 lit. f DSGVO (Analyse, Statistik, Optimierung, Sicherheitsmassnahmen). Wir verarbeiten Daten, die zur Begründung 
                    und Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe hin. Eine Offenlegung an Externe erfolgt nur, wenn sie im Rahmen eines Auftrags erforderlich ist. 
                    Bei der Verarbeitung der uns im Rahmen eines Auftrags überlassenen Daten handeln wir entsprechend den Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben einer Auftragsverarbeitung gem. Art. 28 DSGVO 
                    und verarbeiten die Daten zu keinen anderen, als den auftragsgemässen Zwecken.
                </p>
                <p class="body-2">
                    Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten. Die Erforderlichkeit 
                    der Aufbewahrung der Daten wird in unregelmässigen Abständen überprüft. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf. Im Fall von Daten, die uns 
                    gegenüber im Rahmen eines Auftrags durch den Auftraggeber offengelegt wurden, löschen wir die Daten entsprechend den Vorgaben des Auftrags, grundsätzlich nach Ende des Auftrags.
                <div class="headline font-weight-light">Maklerleistungen</div> 
                <p class="body-2">
                    Wir verarbeiten die Daten unserer Kunden, Klienten und Interessenten (einheitlich bezeichnet als «Kunden») gem. den datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO 
                    entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und die 
                    Erforderlichkeit ihrer Verarbeitung bestimmen sich nach dem zugrundeliegenden Auftrag. Dazu gehören grundsätzlich Bestands- und Stammdaten der Kunden (Name, Adresse, etc.), als auch die Kontaktdaten 
                    (E-Mailadresse, Telefon, etc.), die Vertragsdaten (Inhalt der Beauftragung, Entgelte, Laufzeiten, Angaben zu den vermittelten Unternehmen/ Versicherern/ Leistungen) und Zahlungsdaten (Provisionen, Zahlungshistorie, etc.). 
                    Wir können ferner die Angaben zu den Eigenschaften und Umständen von Personen oder ihnen gehörenden Sachen verarbeiten, wenn dies zum Gegenstand unseres Auftrags gehört. Dies können z.B. Angaben 
                    zu persönlichen Lebensumständen, mobilen oder immobilen Sachgütern sein.
                </p> 
                <p class="body-2">
                    Im Rahmen unserer Beauftragung kann es auch erforderlich sein, dass wir besondere Kategorien von Daten gem. Art. 9 Abs. 1 
                    DSGVO, hier insbesondere Angaben zur Gesundheit einer Person verarbeiten. Hierzu holen wir, sofern erforderlich, gem. Art. 6 Abs. 1 lit a., Art. 7, Art. 9 Abs. 2 lit. a DSGVO eine ausdrückliche Einwilligung der Kunden ein.
                </p> 
                <p class="body-2">
                    Sofern für die Vertragserfüllung oder gesetzlich erforderlich, offenbaren oder übermitteln wir die Daten der Kunden im Rahmen von Deckungsanfragen, Abschlüssen und Abwicklungen von Verträgen, Daten an 
                    Anbieter der vermittelten Leistungen/ Objekte, Versicherer, Rückversicherer, Maklerpools, technische Dienstleister, sonstige Dienstleister, wie z.B. kooperierende Verbände, sowie Finanzdienstleister, Kreditinstitute 
                    und Kapitalanlagegesellschaften sowie Sozialversicherungsträger, Steuerbehörden, Steuerberater, Rechtsberater, Wirtschaftsprüfer, Versicherungs-Ombudsmänner und die Schweizerische Finanzmarkt-Aufsicht (FINMA) 
                    oder Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin). Ferner können wir Unterauftragnehmer beauftragen, wie z.B. Untervermittler. Wir holen eine Einwilligung der Kunden ein, sofern diese zur Offenbarung/ 
                    Übermittlung eine Einwilligung der Kunden erforderlich ist (was z.B. im Fall von besonderen Kategorien von Daten gem. Art. 9 DSGVO der Fall sein kann).
                </p> 
                <p class="body-2">
                    Die Löschung der Daten erfolgt nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, wobei die Erforderlichkeit der Aufbewahrung der Daten in unregelmässigen Abständen überprüft wird. 
                    Im übrigen gelten die gesetzlichen Aufbewahrungspflichten. Im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren Ablauf.
                </p> 
                <div class="headline font-weight-light">Vertragliche Leistungen</div> 
                <p class="body-2">
                    Wir verarbeiten die Daten unserer Vertragspartner und Interessenten sowie anderer Auftraggeber, Kunden, Mandanten, Klienten oder Vertragspartner (einheitlich bezeichnet als «Vertragspartner») gem. den datenschutzrechtlichen 
                    Bestimmungen des Bundes (Datenschutzgesetz, DSG) und der EU-DSGVO entsprechend Art. 6 Abs. 1 lit. b. DSGVO, um ihnen gegenüber unsere vertraglichen oder vorvertraglichen Leistungen zu erbringen. Die hierbei verarbeiteten Daten, 
                    die Art, der Umfang und der Zweck und die Erforderlichkeit ihrer Verarbeitung, bestimmen sich nach dem zugrundeliegenden Vertragsverhältnis.
                </p> 
                <p class="body-2">
                    Zu den verarbeiteten Daten gehören die Stammdaten unserer Vertragspartner (z.B. Namen und Adressen), Kontaktdaten (z.B. E-Mailadressen und Telefonnummern) sowie Vertragsdaten (z.B. in Anspruch genommene Leistungen, Vertragsinhalte, 
                    vertragliche Kommunikation, Namen von Kontaktpersonen) und Zahlungsdaten (z.B. Bankverbindungen, Zahlungshistorie).
                </p> 
                <p class="body-2">
                    Besondere Kategorien personenbezogener Daten verarbeiten wir grundsätzlich nicht, ausser wenn diese Bestandteile einer beauftragten oder vertragsgemässen Verarbeitung sind.
                </p> 
                <p class="body-2">
                    Wir verarbeiten Daten, die zur Begründung und Erfüllung der vertraglichen Leistungen erforderlich sind und weisen auf die Erforderlichkeit ihrer Angabe, sofern diese für die Vertragspartner nicht evident ist, hin. 
                    Eine Offenlegung an externe Personen oder Unternehmen erfolgt nur, wenn sie im Rahmen eines Vertrags erforderlich ist. Bei der Verarbeitung der uns im Rahmen eines Auftrags überlassenen Daten, handeln wir entsprechend den 
                    Weisungen der Auftraggeber sowie der gesetzlichen Vorgaben.
                </p> 
                <p class="body-2">
                    Im Rahmen der Inanspruchnahme unserer Onlinedienste, können wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung speichern. Die Speicherung erfolgt 
                    auf Grundlage unserer berechtigten Interessen, als auch der Interessen der Nutzer am Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, ausser sie 
                    ist zur Verfolgung unserer Ansprüche gem. Art. 6 Abs. 1 lit. f. DSGVO erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung gem. Art. 6 Abs. 1 lit. c. DSGVO.
                </p> 
                <p class="body-2">
                    Die Löschung der Daten erfolgt, wenn 
                    die Daten zur Erfüllung vertraglicher oder gesetzlicher Fürsorgepflichten sowie für den Umgang mit etwaigen Gewährleistungs- und vergleichbaren Pflichten nicht mehr erforderlich sind, wobei die Erforderlichkeit 
                    der Aufbewahrung der Daten in unregelmässigen Abständen überprüft wird. Im übrigen gelten die gesetzlichen Aufbewahrungspflichten.
                </p>
                <div class="headline font-weight-light">Urheberrechte</div> 
                <p class="body-2">
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website, gehören ausschliesslich dem Betreiber dieser Website oder den speziell genannten Rechteinhabern. Für die Reproduktion von 
                    sämtlichen Dateien, ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.</p><p class="body-2">Wer ohne Einwilligung des jeweiligen Rechteinhabers eine Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls 
                    schadenersatzpflichtig machen.
                </p>
                <div class="headline font-weight-light">Allgemeiner Haftungsausschluss</div> 
                <p class="body-2">
                    Alle Angaben unseres Internetangebotes wurden sorgfältig geprüft. Wir bemühen uns, unser Informationsangebot aktuell, inhaltlich richtig und vollständig anzubieten. Trotzdem kann das Auftreten von Fehlern nicht 
                    völlig ausgeschlossen werden, womit wir keine Garantie für Vollständigkeit, Richtigkeit und Aktualität von Informationen auch journalistisch-redaktioneller Art übernehmen können. Haftungsansprüche 
                    aus Schäden materieller oder ideeller Art, die durch die Nutzung der angebotenen Informationen verursacht wurden, sind ausgeschlossen, sofern kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
                </p>
                <p class="body-2">
                    Der Herausgeber kann nach eigenem Ermessen und ohne Ankündigung Texte verändern oder löschen und ist nicht verpflichtet, Inhalte dieser Website zu aktualisieren. Die Benutzung bzw. der Zugang zu dieser Website geschieht 
                    auf eigene Gefahr des Besuchers. Der Herausgeber, seine Auftraggeber oder Partner sind nicht verantwortlich für Schäden, wie direkte, indirekte, zufällige, vorab konkret zu bestimmende oder Folgeschäden, die angeblich 
                    durch den Besuch dieser Website entstanden sind und übernehmen hierfür folglich keine Haftung.
                </p>
                <p class="body-2">
                    Der Herausgeber übernimmt ebenfalls keine Verantwortung und Haftung für die Inhalte und die Verfügbarkeit von 
                    Webseiten Dritter, die über externe Links dieser Webseite erreichbar sind. Für den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich. Der Herausgeber distanziert sich damit ausdrücklich von 
                    allen Inhalten Dritter, die möglicherweise straf- oder haftungsrechtlich relevant sind oder gegen die guten Sitten verstossen.
                </p>
                <div class="headline font-weight-light">änderungen</div>
                <p class="body-2">
                    Wir können diese Datenschutzerklärung jederzeit ohne 
                    Vorankündigung anpassen. Es gilt die jeweils aktuelle, auf unserer Website publizierte Fassung. Soweit die Datenschutzerklärung Teil einer Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer Aktualisierung über 
                    die änderung per E-Mail oder auf andere geeignete Weise informieren.
                </p>
                <div class="headline font-weight-light">Fragen an den Datenschutzbeauftragten</div> 
                <p class="body-2">
                    Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu Beginn der Datenschutzerklärung aufgeführten, 
                    verantwortlichen Person in unserer Organisation.
                </p>
                <p class="caption">
                    Basel, 09.09.2019<br/>
                    Quelle: <a class="caption" href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
                </p>
                `
            }
        }
    }

}
</script>
