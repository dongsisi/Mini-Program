import fetch from'../../utils/util'

Page({
  data:{
    detail:{},
    id:-1
  },
  onLoad(params){
    // console.log("params")
    this.data.id =params.id
    this.loadData() 
  },
  //图片预览功能
  previewImg(e){
    //获取当前图片及所有图片数组
    let {current ,urls} = e.currentTarget.dataset
    //处理当前图片路径
    current = current.replace('w.h','1000.1000')
    //处理所有图片路径
    urls = urls.map(item=>item.replace('w.h','1000.1000'))
    console.log(current,urls)
    //预览
    wx.previewImage({
      //当前显示图片的http链接
      current,
      //需要预览的图片http链接列表
      urls,
      success(data){
        console.log(data)
      },
      fail(e){
        console.log(e)
      }
    })
  },
  loadData(){
    fetch({
      url:`/shops/${this.data.id}`
    }).then(res=>{
      this.setData({
        detail:res.data
      })
    })
  }

})
