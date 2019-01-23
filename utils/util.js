// 使用promise封装wx.request()
// import fetch from './utils/index.js'
// fetch({
//   method:'GET',
//   url:'https://adlafd.com'
// }).then(res=>{

// }).catch(res=>{})
export default (options ={}) =>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: 'https://locally.uieee.com'+options.url,
      method:options.method || 'GET',
      data:options.data|| {},
      success:resolve,
      fail:reject
    })
  })
}