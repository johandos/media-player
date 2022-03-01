import MediaPlayer from './AutoPlay'

class AutoPause {
  threshold: number
  player = MediaPlayer

  constructor() {
    this.threshold = 0.25
    this.handleIntersection = this.handleIntersection.bind(this)
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
  }

  run = function (player) {
    this.player = player
    const observer = new IntersectionObserver(this.handleIntersection, {
       threshold: this.threshold
    } )

    observer.observe(player.media)

    document.addEventListener("visibilitychange", this.handleVisibilityChange)
  }

  handleIntersection(entries){
    const entry = entries[0]
    const isVisible = entry.intersectionRatio >= this.threshold
    this.pauseOrPlay(isVisible)
  }

  handleVisibilityChange(){
    const isVisible = document.visibilityState === "visible"
    this.pauseOrPlay(isVisible)
  }

  pauseOrPlay(isVisible){
    this.player.pause()

    if (isVisible){
      this.player.play()
    }
  }
}

export default AutoPause