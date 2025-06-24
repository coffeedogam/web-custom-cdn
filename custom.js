const COFFEEDOGAM = {
  showPartnershipDescription: ({ type }) => {
    if (type === 'mobile') {
      const productDetailPage = document.getElementById(
        'w2020092907b45777f5e63',
      )
      if (!productDetailPage) return
      const goodsWrapper = productDetailPage.querySelector(
        'div.row.goods_wrapper',
      )
      if (!goodsWrapper) return
      const prodGoodsForm = goodsWrapper.querySelector('#prod_goods_form')
      if (!prodGoodsForm) return
      const itemDetail = prodGoodsForm.querySelector('div.item_detail')
      if (!itemDetail) return
      const div = document.createElement('div')
      div.style.marginTop = '32px'
      div.style.marginBottom = '32px'
      const p = document.createElement('p')
      p.innerText = '*파트너사는 더욱 할인된 가격으로 구매 가능합니다'
      p.style.textAlign = 'right'
      p.style.marginBottom = '0px'
      p.style.color = '#999'
      p.style.opacity = '0.8'
      p.style.lineHeight = '0.8'
      div.appendChild(p)
      const a = document.createElement('a')
      a.innerText = '파트너사 조건/혜택 보기'
      a.href = 'https://blackroad.oopy.io'
      a.target = '_blank'
      a.style.display = 'block'
      a.style.textAlign = 'right'
      a.style.fontSize = '16px'
      a.style.textDecoration = 'underline'
      a.style.color = '#999'
      div.appendChild(a)
      itemDetail.appendChild(div)
    } else if (type === 'desktop') {
      const productDetailPage = document.getElementById(
        'w2020092907b45777f5e63',
      )
      if (!productDetailPage) return
      const goodsWrapper = productDetailPage.querySelector(
        'div.row.goods_wrapper',
      )
      if (!goodsWrapper) return
      const prodGoodsForm = goodsWrapper.querySelector('#prod_goods_form')
      if (!prodGoodsForm) return
      const div = document.createElement('div')
      div.style.marginTop = '24px'
      const p = document.createElement('p')
      p.innerText = '*파트너사는 더욱 할인된 가격으로 구매 가능합니다'
      p.style.textAlign = 'right'
      p.style.marginBottom = '0px'
      p.style.color = '#999'
      p.style.opacity = '0.8'
      p.style.lineHeight = '0.8'
      div.appendChild(p)
      const a = document.createElement('a')
      a.innerText = '파트너사 조건/혜택 보기'
      a.href = 'https://blackroad.oopy.io'
      a.target = '_blank'
      a.style.display = 'block'
      a.style.textAlign = 'right'
      a.style.fontSize = '16px'
      a.style.textDecoration = 'underline'
      a.style.color = '#999'
      div.appendChild(a)
      prodGoodsForm.appendChild(div)
    }
  },

  showFooterExtraContents: ({ type }) => {
    if (type === 'mobile') {
      const footer = document.getElementById('doz_footer')
      if (!footer) return
      const footerSection = footer.querySelector('div.footer-section')
      if (!footerSection) return
      const blockWrap = footerSection.querySelector(
        'div.inside > div.doz_row > div.col-dz',
      )
      if (!blockWrap) return
      const extraWrapper = document.createElement('div')
      extraWrapper.classList.add('foot-extra')
      blockWrap.insertAdjacentElement('afterbegin', extraWrapper)
      const leftDiv = document.createElement('div')
      extraWrapper.appendChild(leftDiv)
      const leftTitle = document.createElement('p')
      leftTitle.innerText = '블랙로드커피'
      leftDiv.appendChild(leftTitle)
      const leftContent = document.createElement('p')
      leftContent.innerHTML = '대구점<br>더현대대구 B1<br>달구벌대로 2077<br>10:30 - 20:30'
      leftDiv.appendChild(leftContent)
      const leftTime = document.createElement('p')
      leftTime.innerHTML = '성수점<br>서울숲2길 19-18 2층<br>11:00 - 18:30'
      leftDiv.appendChild(leftTime)
      const rightDiv = document.createElement('div')
      extraWrapper.appendChild(rightDiv)
      const rightTitle = document.createElement('p')
      rightTitle.innerText = 'Connect'
      rightDiv.appendChild(rightTitle)
      const rightContent = document.createElement('p')
      rightContent.innerHTML = 'cuppingpost@naver.com<br>01041508627'
      rightDiv.appendChild(rightContent)
      const rightTime = document.createElement('p')
      rightTime.innerHTML =
        '고객센터 10:00 - 17:00<br>Lunch 13:00 - 14:00<br>주말 및 공휴일 휴무'
      rightDiv.appendChild(rightTime)
      const socialLinkWrapper = blockWrap.querySelector('div.foot-sociallink')
      if (!socialLinkWrapper) return
      const socialLinks = socialLinkWrapper.querySelectorAll('a.btn')
      for (const link of socialLinks) {
        link.querySelector('i').remove()
        link.style.width = '40px'
        link.style.height = '40px'
        if (link.href.includes('instagram')) {
          link.style.marginRight = '10px'
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-instagram.svg)'
        } else if (link.href.includes('youtube')) {
          link.style.marginRight = '10px'
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-youtube.svg)'
        } else if (link.href.includes('apps.apple')) {
          link.style.marginRight = '10px'
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-appstore.svg)'
        } else if (link.href.includes('play.google')) {
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-playstore.svg)'
        }
      }
    } else if (type === 'desktop') {
      const footer = document.getElementById('doz_footer')
      if (!footer) return
      const footerSection = footer.querySelector('div.footer-section')
      if (!footerSection) return
      const flexWrap = footerSection.querySelector(
        'div.inside > div.doz_row > div.col-dz',
      )
      if (!flexWrap) return
      flexWrap.style.display = 'flex'
      const extraWrapper = document.createElement('div')
      extraWrapper.classList.add('foot-extra')
      flexWrap.appendChild(extraWrapper)
      const leftDiv = document.createElement('div')
      extraWrapper.appendChild(leftDiv)
      const leftTitle = document.createElement('p')
      leftTitle.innerText = '블랙로드커피'
      leftDiv.appendChild(leftTitle)
      const leftContent = document.createElement('p')
      leftContent.innerHTML = '대구광역시 중구 봉산동<br>135-14, 1-2층'
      leftDiv.appendChild(leftContent)
      const leftTime = document.createElement('p')
      leftTime.innerHTML = '쇼룸 오픈시간<br>화-토요일<br>1PM - 6PM'
      leftDiv.appendChild(leftTime)
      const rightDiv = document.createElement('div')
      extraWrapper.appendChild(rightDiv)
      const rightTitle = document.createElement('p')
      rightTitle.innerText = 'Connect'
      rightDiv.appendChild(rightTitle)
      const rightContent = document.createElement('p')
      rightContent.innerHTML = 'cuppingpost@naver.com<br>01041508627'
      rightDiv.appendChild(rightContent)
      const rightTime = document.createElement('p')
      rightTime.innerHTML =
        '고객센터 10AM - 5PM<br>Lunch 1PM - 2PM<br>주말 및 공휴일 휴무'
      rightDiv.appendChild(rightTime)
      const socialLinkWrapper = flexWrap.querySelector('div.foot-sociallink')
      if (!socialLinkWrapper) return
      const socialLinks = socialLinkWrapper.querySelectorAll('a.btn')
      for (const link of socialLinks) {
        link.querySelector('i').remove()
        link.style.width = '40px'
        link.style.height = '40px'
        if (link.href.includes('instagram')) {
          link.style.marginRight = '10px'
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-instagram.svg)'
        } else if (link.href.includes('youtube')) {
          link.style.marginRight = '10px'
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-youtube.svg)'
        } else if (link.href.includes('apps.apple')) {
          link.style.marginRight = '10px'
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-appstore.svg)'
        } else if (link.href.includes('play.google')) {
          link.style.backgroundImage =
            'url(https://cdn.jsdelivr.net/gh/coffeedogam/web-custom-cdn/images/ic-custom-playstore.svg)'
        }
      }
    }
  },
}

if (IS_MOBILE) {
  // 파트너사 관련 설명
  COFFEEDOGAM.showPartnershipDescription({ type: 'mobile' })
  // 푸터 추가 컨텐츠
  COFFEEDOGAM.showFooterExtraContents({ type: 'mobile' })
} else {
  // 파트너사 관련 설명
  COFFEEDOGAM.showPartnershipDescription({ type: 'desktop' })
  // 푸터 추가 컨텐츠
  COFFEEDOGAM.showFooterExtraContents({ type: 'desktop' })
}
