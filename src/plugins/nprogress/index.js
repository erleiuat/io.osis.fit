import NProgress from 'nprogress'
import('@/assets/css/nprogress.css')

NProgress.doStart = NProgress.start
NProgress.doDone = NProgress.done

NProgress.clearDelay = function () {
    if (this.startDelay) {
        clearTimeout(this.startDelay)
        this.startDelay = null
    }
}

NProgress.start = function () {
    this.clearDelay()
    this.startDelay = setTimeout(function () {
        NProgress.doStart()
    }, this.settings.delay || 0)
}

NProgress.done = function () {
    this.clearDelay()
    this.doDone()
}

NProgress.configure({
    trickleSpeed: 50,
    showSpinner: false,
    delay: 250
})

export default NProgress
