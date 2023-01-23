<template>
    <v-container fill-height>
        <v-row justify="center">
            <v-col cols="12" md="10" v-html="$t('text')" />
            <v-col cols="12" md="5" class="text-sm-right">
                <p class="caption">{{ $t('langNotice') }} <a href="https://www.deepl.com/">Deepl.com</a></p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

  i18n: {
    messages: {
      en: {
        title: 'Imprint',
        contact: 'Contact',
        langNotice: 'Translated by',
        text: `
                <div class="headline font-weight-light">Contact address</div>
                <p class="body-2">
                    Osis | <a target="_blank" href="mailto:mail@osis.io">mail@osis.io</a><br/>
                    4058 Basel (Switzerland CH)<br/>
                </p>
                <div class="headline font-weight-light">Disclaimer</div>
                <p class="body-2">
                    The author does not assume any liability with regard to the content of this website. 
                    Accuracy, accuracy, timeliness, reliability and completeness 
                    of the information.
                </p>
                <p class="body-2">
                    Liability claims against the author due to material or immaterial damage caused by 
                    of an immaterial nature, which results from the access, use or non-use of the information provided. 
                    of the published information, through misuse of the connection, or 
                    or caused by technical malfunctions are excluded.
                </p>
                <p class="body-2">
                    All offers are non-binding. The author expressly reserves the right to 
                    parts of the pages or the complete offer without special announcement. 
                    to change, add to, delete or publish the content of this website. 
                    temporarily or permanently.
                </p>
                <div class="headline font-weight-light">Disclaimer for Links</div>
                <p class="body-2">
                    References and links to third party websites are outside our control. 
                    area of responsibility. There will be no responsibility for such 
                    Websites rejected. The access and the use of such web pages 
                    are at the user's own risk.
                </p>
                <div class="headline font-weight-light">Copyright</div>
                <p class="body-2">
                    The copyright and all other rights in contents, pictures, photos or graphics 
                    other files on this website, belong exclusively to the author. 
                    <strong>Osis.io</strong> or the specifically designated rights owners. 
                    For the reproduction of any elements the written consent is required. 
                    of the copyright holder in advance.
                </p>
                <p class="caption">
                    Basel, 09.09.2019<br/>
                    Source: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
                </p>
                `
      },
      de: {
        title: 'Impressum',
        contact: 'Kontakt',
        langNotice: 'Übersetz mit',
        text: `
                <div class="headline font-weight-light">Kontakt-Adresse</div>
                <p class="body-2">
                    Osis | <a target="_blank" href="mailto:mail@osis.io">mail@osis.io</a><br/>
                    4058 Basel (Switzerland CH)<br/>
                </p>
                <div class="headline font-weight-light">Haftungsausschluss</div>
                <p class="body-2">
                    Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen 
                    Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit 
                    der Informationen.
                </p>
                <p class="body-2">
                    Haftungsansprüche gegen den Autor wegen Schäden materieller oder 
                    immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung 
                    der veröffentlichten Informationen, durch Missbrauch der Verbindung 
                    oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                </p>
                <p class="body-2">
                    Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich 
                    vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ankündigung 
                    zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung 
                    zeitweise oder endgültig einzustellen.
                </p>
                <div class="headline font-weight-light">Haftungsausschluss für Links</div>
                <p class="body-2">
                    Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres 
                    Verantwortungsbereichs. Es wird jegliche Verantwortung für solche 
                    Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten 
                    erfolgen auf eigene Gefahr des jeweiligen Nutzers.
                </p>
                <div class="headline font-weight-light">Urheberrechte</div>
                <p class="body-2">
                    Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder 
                    anderen Dateien auf dieser Website, gehören ausschliesslich 
                    <strong>Osis.io</strong> oder den speziell genannten Rechteinhabern. 
                    Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung 
                    des Urheberrechtsträgers im Voraus einzuholen.
                </p>
                <p class="caption">
                    Basel, 09.09.2019<br/>
                    Quelle: <a href="https://www.swissanwalt.ch" target="_blank" rel="noopener">SwissAnwalt</a>
                </p>
                `
      }
    }
  }

}
</script>
