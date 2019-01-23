// pages/list/list.js
//导入fetch 注意：index不能省略
import fetch from '../../utils/util'
Page({
  data:{
    list:[],
    id:-1,
    //当前页
    curPage:0,
    //总条数
    total:0,
    //每页大小
    pageSize:10,
    //是否还有更多数据
    hasMoreData:true,
    //搜索相关
    inputShowed: false,
    inputVal: ""
  },
  //搜索相关方法
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onLoad(params){
    // console.log(params)
    // wx.request({
    //   url: `https://locally.uieee.com/categories/${
    //     params.id
    //     }/shops?_page=1&_limit=10`,
    //   success: res => {
    //     this.setData({
    //       list: res.data
    //     })
    //   }
    // })
  this.data.id = params.id
  this.loadList()
  },
  //分页加载list数据
  loadList(){
    wx.showLoading({
      title: '数据加载中',
    })
    let{id,curPage,list,pageSize,hasMoreData} = this.data
    curPage += 1
    fetch({
      url: `/categories/${id}/shops?_page=${curPage}&_limit=${pageSize}`
    }).then(res=>{
      wx.hideLoading()
      //总页数
      const totalPage = Math.ceil(res.header['X-Total-Count'] / pageSize)
      this.setData({
        list:[...list,...res.data],
        curPage,
        hasMoreData:curPage < totalPage
      })
    })
  },
  //触底事件
  onReachBottom(){
    // console.log('onReachBottom')
    //加载下一页
    if(this.data.hasMoreData){
      this.loadList()
    }
  }

})