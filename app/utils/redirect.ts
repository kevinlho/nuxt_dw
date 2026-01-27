export const redirectToWhatsapp = () => {
  const details = {
    number: '+6598716988',
    template: encodeURIComponent('Hello Designerworks, i need IT Services!')
  }

  const whatsappUrl = `https://wa.me/${details.number}?text=${details.template}`
  window.open(whatsappUrl, '_blank')
}

export const redirectToInstagram = () => {
  const instagramUrl = 'https://www.instagram.com/'
  window.open(instagramUrl, '_blank')
}

export const redirectToTikTok = () => {
  const tiktokUrl = 'https://www.tiktok.com/'
  window.open(tiktokUrl, '_blank')
}

export const redirectToYouTube = () => {
  const youtubeUrl = 'https://www.youtube.com/'
  window.open(youtubeUrl, '_blank')
}
