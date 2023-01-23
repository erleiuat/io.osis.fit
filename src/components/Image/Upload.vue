<template>
    <v-card :flat="!uploading">
        <v-btn v-if="value" @click="deleteImage()" text block :loading="uploading || loading">
            <v-icon left>mdi-delete-forever-outline</v-icon>
            {{ $t('deleteCurrent') }}
        </v-btn>
        <v-btn v-else-if="!uploading" @click="openUpload()" color="primary" block :loading="uploading || loading">
            <v-icon left>mdi-upload</v-icon>
            {{ $t('uploadNew') }}
        </v-btn>
        <v-progress-linear v-else :value="progress" :indeterminate="progress >= 100" :dark="progress < 50" rounded active height="36">
            <strong v-if="progress < 100">{{ progress }}%</strong>
            <strong v-else>{{ $t('processing') }}</strong>
        </v-progress-linear>
        <input @change="doUpload()" type="file" id="uplImgField" class="img-field" accept="image/png, image/jpeg">
    </v-card>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

  props: ['value', 'loading'],

  data () {
    return {
      dialog: false,
      uploading: false,
      progress: 0
    }
  },

  methods: {

    deleteImage () {
      this.$emit('delete')
      this.dialog = false
    },

    openUpload () {
      document.getElementById('uplImgField').click()
    },

    doUpload () {
      let photo = document.getElementById('uplImgField').files[0]
      if (photo.size > 25 * 1000000) {
        this.$notify({ type: 'error', title: this.$t('fileTooBig') })
        return
      }

      var vm = this
      let config = {
        onUploadProgress: function (progressEvent) {
          vm.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        }
      }

      let formData = new FormData()
      formData.append('file', photo)
      this.uploading = true
      Apios.post('files', formData, config).then(res => {
        document.getElementById('uplImgField').value = null
        this.$emit('input', res.data)
        this.dialog = false
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.uploading = false
      })
    }

  },

  i18n: {
    messages: {
      en: {
        editImage: 'Edit Avatar',
        uploadNew: 'Upload image',
        deleteCurrent: 'Remove image',
        processing: 'Processing',
        fileTooBig: 'The file is too large (Max. 25 MB)'
      },
      de: {
        editImage: 'Avatar bearbeiten',
        uploadNew: 'Bild hochladen',
        deleteCurrent: 'Bild entfernen',
        processing: 'Wird gespeichert',
        fileTooBig: 'Die Datei ist zu gross (Max. 25 MB)'
      }
    }
  }

}
</script>

<style scoped>
.img-field {
    display: none;
    visibility: hidden;
}
</style>
