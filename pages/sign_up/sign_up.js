// pages/sign_up/sign_up.js
function Person(name, sex, birthPlace, birthDay, height, activity) {
    this.name = name;
    this.sex = sex;
    this.birthPlace = birthPlace;
    this.birthDay = birthDay;
    this.height = height;
    this.activity = activity;
}

Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag:true,
        gender:["男", "女"],
        acts:["冬至（包饺子）", "每天背单词", "今早相约饮早茶", "智能装备学院羽毛球赛", "智能装备学院篮球赛", "疫苗接种", "大学生心理主题课程"]
    },
    nameInput:function(e) {
        this.name = e.detail.value
    },
    pickerSex:function(e) {
        this.sex = this.data.gender[e.detail.value]
        this.setData({
            sex:this.sex
        })
    },
    pickerRegion:function(e) {
        this.birthPlace = e.detail.value
        this.setData({
            birthPlace:this.birthPlace
        })
    },
    pickerDate:function(e) {
        this.birthDay = e.detail.value
        this.setData({
            birthDay:this.birthDay
        })
    },
    heightInput:function(e) {
        this.height = e.detail.value
    },
    pickerAct:function(e) {
        this.activity = this.data.acts[e.detail.value]
        this.setData({
            activity:this.activity
        })
    },
    showMessage:function(e) {
        var p = new Person(this.name, this.sex, this.birthPlace, this.birthDay, this.height, this.activity)
        this.setData({
            flag:false,
            person:p
        })
    }
})