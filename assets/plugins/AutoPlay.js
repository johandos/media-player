class AutoPlay {
  run = function (player) {
    if (!player.muted){
      player.muted = true
    }
    player.play()
  }
}

export default AutoPlay