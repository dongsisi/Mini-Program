
Page({
  data:{
    slides:[],
    grids:[]
  },
 onLoad(){
  //  console.log("onLoad")
  wx.request({
    url: 'https://locally.uieee.com/slides',
    method:"GET",
    success:res=>{
      // console.log(this)
      this.setData({
        slides:res.data
      })
    },
    fail(err){
      console.log("失败",err)
    },
    complete(){
      console.log('完成')
    }
  }),
  // 获取九宫格数据
  wx.request({
    url: 'https://locally.uieee.com/categories',
    method:'GET',
    success: res=>{
      // console.log(res)
      this.setData({
        grids:res.data
      })
    },
    fail(err){
      console.log('失败',err)
    }
  })
 }
  
})