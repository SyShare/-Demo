const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}


const copyToClipBoard = function (link) {
  wx.showModal({
    title: '复制该链接',
    content: '完成后请手动打开浏览器，是否继续？' + link,
    success: function (res) {
      if (res.confirm) {
        wx.setClipboardData({
          data: link,
          success: function () {
            wx.showToast({
              title: '复制成功',
              duration: 1500,
            })

          },
          fail: function () {
            wx.showToast({
              title: '复制失败',
              icon: 'none',
              duration: 500,
            })
          }
        })
      } else if (res.cancel) {
        wx.showToast({
          title: '取消复制',
          icon: 'none',
          duration: 500,
        })
      }
    }
  })
}


module.exports = {
  copyToClipBoard: copyToClipBoard
}
