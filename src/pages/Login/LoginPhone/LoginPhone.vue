<template>
  <div class="profile">
    <div class="profile-title">
      <i class="iconfont icon-shouye" @click="$router.replace('/home')"></i>
      <h1>网易严选</h1>
      <div class="search-shopCar">
        <i class="iconfont icon-fangdajing" @click="$router.replace('/searchGoods')"></i>
        <i class="iconfont icon-gouwuche" @click="$router.replace('/shopCart')"></i>
      </div>
    </div>
    <div class="profile-content">
      <div class="login-img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="netease">
      </div>
      <div class="login-way">
        <div class="phone-way">
          <div class="input_phone">
            <input type="text" maxlength="11" placeholder="请输入手机号" v-model="phone"
                    name="phone" v-validate="'required|mobile'">
          </div>
          <div class="input_code">
            <input type="text" maxlength="6" placeholder="请输入短信验证码" v-model="code"
                      name="code" v-validate="{required: true, regex: /^\d{6}$/}">
            <div class="get_password" :disabled="!isRightPhone || computeTime > 0"
              @click.prevent="sendCode">
              {{computeTime > 0 ? `验证码已发送(${computeTime}s)` : '获取验证码'}}
              </div>
          </div>
          <div class="login_help">
            <span>遇到问题?</span> 
            <span class="span-pwd">使用密码验证登录</span>
          </div>
          <button class="login_btn" @click="login">登录</button>
          <div class="help-clause">
            <i class="iconfont icon-duihao" @click="isred = !isred" :class="{active: isred}"></i>
            <span>我同意<a href="javascript:;">《服务条款》</a>和<a href="javascript:;">《网易隐私政策》</a></span>
          </div>
          <div class="back_btn" @click="$router.replace('/profile')">其他登录方式
            <i class="iconfont icon-a3right"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {Toast,MessageBox} from 'mint-ui'
  import {reqSendCode,reqSmsLogin} from '../../../api/index'
  export default {
    data() {
      return {
        isred:false,
        phone: '',
        code: '',
        computeTime: 0,    //短信倒计时   显示==> computeTime>0 隐藏==> computeTime===0
      }
    },

    computed: {
      //验证是否是一个正确的手机号
      isRightPhone () {
        return /^1[3456789]\d{9}$/.test(this.phone)   //test-----正则的测试方法
        // return true
      }
    },

    methods: {
      /* 
        点击发送验证码
      */
      async sendCode () {
        //先定义computeTime的最大延迟时间
        this.computeTime = 10
        //定义一个循环定时器，短信发送时间倒计时
        const intervalId = setInterval(() => {
          //当到达0时，停止定时器
          if (this.computeTime === 0) {
            clearInterval(intervalId)
          } else {
            this.computeTime--
          }
        }, 1000);

        /* 
        发ajax请求 ==> 发送验证码短信
        */
        const result = await reqSendCode(this.phone)
        // console.log(result)
        if (result.code === 0) {  //成功
          Toast('短信已发送')
        } else {  //失败
          //停止计时
          this.computeTime = 0
          MessageBox.alert(result.msg)
        }
      },

      //点击登录
      async login () {
        let result
        const {phone,code} = this
        const names = [phone,code]
        result = await reqSmsLogin(phone,code)
        const success = await this.$validator.validateAll(names)
        if (success) {
          Toast({
            message: '操作成功',
          });
        }

        if (result.code === 0) {
          const user = result.data
          //将user保存到state中
          this.$store.dispatch('saveUser',user)
          // console.log(user)
          // console.log('111')
          //跳转到home界面
          this.$router.replace('/home')
        } else {
          MessageBox.alert(result.msg)
        }
      }
    },

    /* watch: {
      user: {
        deep: true,
        handler (newUser,oldUser) {
          if (/^1[3456789]\d{9}$/.test(newUser.phone)) {
            
            Toast('验证通过')
          }else {
            Toast('请输入正确手机号')
          }

          if (/^[0-9]{6}$/.test(newUser.code)) {
            this.user.code = ''
            Toast('密码验证通过')
          }else {
            Toast('请输入正确密码')
          }
        }
      }
    }, */

    /* methods: {
      login (path) {
        if (this.user.phone === '' && this.user.code === '') {
          Toast('登录成功')
          this.$router.replace(path)
        }
      }
    }, */
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profile
    width 100%
    height 100%
    .profile-title
      position fixed
      display flex
      box-sizing border-box
      width 100%
      height 44px
      padding 13px
      background #fafafa
      position relative
      h1
        position absolute
        top 50%
        left 50%
        transform translate(-50%,-50%)
        font-size 18px
        color #333
        font-weight bold
        font-family '新宋体'
      .iconfont
        font-size 24px
      .search-shopCar
        position absolute
        top 50%
        right 20px
        transform translateY(-50%)
        display flex
        .iconfont
          font-size 32px
          vertical-align middle
          color #666
          &.icon-fangdajing
            margin 0 10px 4px 0
    .profile-content
      position relative
      padding-top 44px
      background-color #fff
      width 100%
      height 86.8%
      .login-img
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        margin 28px auto 0
        width 96px
        height 32px
        img 
          width 100%
          height 100%
      .login-way
        height 260px
        position absolute
        top 90px
        left 0
        .phone-way
          width 90%
          margin 0 auto
          // position relative
          .input_phone
            height 46px
            width 100%
            border-bottom 1px solid #ccc
            box-sizing border-box
            padding 8px 0
            input
              font-size 14px
              color #ccc
          .input_code
            margin-top 18px
            height 46px
            width 100%
            border-bottom 1px solid #ccc
            box-sizing border-box
            padding 8px 0
            position relative
            input
              font-size 14px
              color #ccc
            .get_password
              width 82px
              height 26px
              line-height 26px
              color #333
              font-size 14px
              border 1px solid #ccc
              border-radius 2px
              position absolute
              top 10px
              right 5px
              text-align center
          .login_help
            margin-top 14px
            height 46px
            width 100%
            box-sizing border-box
            padding 8px 0
            display flex
            justify-content space-between
            span
              font-size 14px
              color #666
          .login_btn
            width 100%
            height 45px
            line-height 45px
            background #DD1A21
            font-size 14px
            color #fff
            border-radius 3px
            text-align center
            border 0 solid #DD1A21
          .help-clause
            width 375px
            height 20px
            color #666
            margin-top 10px
            font-size 12px
            .iconfont 
              margin-right 5px
              font-size 18px
              &.active
                color red
          .back_btn
            width 375px
            height 20px
            color #333
            margin-top 28px
            font-size 14px
            transform translateX(30%)
</style>
