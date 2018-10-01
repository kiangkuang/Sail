<template>
  <div style="height:100%">
    <div class="wrapper">
      <header>
        <div class="container" style="padding:0">
          <div class="left"><img src="src/Messenger/img/logo.svg"></div>
          <div class="middle">
            <h3>Theresa Hudson</h3>
            <p>Messenger</p>
          </div>
          <div class="right">
            <div class="username">
              <div class="settings"><img src="src/Messenger/img/settings.svg"></div>
              Patrcia Fields
            </div>
            <div class="avatar"><img src="src/Messenger/img/avatar.png"></div>
          </div>
        </div>
      </header>
      <main>
        <div class="col-left">
          <div class="col-content">
            <div class="messages">
              <li>
                <div class="avatar">
                  <div class="avatar-image">
                    <div class="status online"></div>
                    <img src="src/Messenger/img/avatar-2.png">
                  </div>
                </div>
                <h3>Nancy Scott</h3>
                <p v-if="showMsg == 0">But I can’t find this email!</p>
                <p v-if="showMsg > 0">{{msg[showMsg]}}</p>
              </li>
              <li>
                <div class="avatar">
                  <div class="avatar-image">
                    <div class="status offline"></div>
                    <img src="src/Messenger/img/avatar-3.png">
                  </div>
                </div>
                <h3>Cynthia Castro</h3>
                <p>You: Thank you and sorry for the inconvenience caused.</p>
              </li>
              <li>
                <div class="avatar">
                  <div class="avatar-image">
                    <div class="status offline"></div>
                    <img src="src/Messenger/img/avatar-4.png">
                  </div>
                </div>
                <h3>Philip Nelson</h3>
                <p>You: We will contact you to further discuss this.</p>
              </li>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="col-content">
            <section class="message" style="min-height:0">
              <div class="grid-message">
                <div class="col-message-received">
                  <div class="message-received">
                    <p>How to activate my account?</p>
                  </div>
                </div>
                <div class="col-message-sent">
                  <div class="message-sent">
                    <p>Hi, the instructions to activate your account will be sent to your email once you have submitted the registration form.</p>
                  </div>
                </div>
                <div class="col-message-received">
                  <div class="message-received">
                    <p>But I can’t find this email!</p>
                  </div>
                </div>
                <div class="col-message-sent" v-if="showMsg > 0">
                  <div class="message-sent">
                    <p>{{msg[showMsg]}}</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div class="col-foot">
            <div style="position: relative;margin-left: 15px">
              <v-icon style="position: absolute;left: 5px;top:10px;color: #cccccc">search</v-icon><input placeholder="Search other responses" style="background-color: #eeeeee; padding: 3px 5px 3px 30px; margin-top:8px; border-radius: 100px;">
            </div>
            <div v-if="!showMsg" style="display: inline-flex;">
              <div class="message-sent mr-2" style="width: 40%; float: inherit; border-radius: 0.5em; cursor: pointer;margin-left: 15px" @click="send(1)">
                <p>{{msg[1]}}</p>
              </div>
              <div class="message-sent" style="width: 40%; float: inherit; border-radius: 0.5em; cursor: pointer;" @click="send(2)">
                <p>{{msg[2]}}</p>
              </div>
            </div>
            <div class="compose">
              <input placeholder="Type a message">
              <div class="compose-dock">
                <div class="dock"><img src="src/Messenger/img/picture.svg"><img src="src/Messenger/img/smile.svg"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-right">
          <div class="col-content">
            <div class="user-panel">
              <div class="avatar">
                <div class="avatar-image">
                  <div class="status online"></div>
                  <img src="src/Messenger/img/avatar.png">
                </div>
                <h3>Theresa Hudson</h3>
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import './Messenger/css/normalize.css'

  export default {
    name: 'app',
    data () {
      return {
        showMsg: 0,
        msg: [
        '',
        'If you did not receive this email, your email service provider’s mailing software may be blocking it. You can try checking your junk/spam folder.',
        'We have resent your activation email. Please check again in a few minutes.'
        ]
      }
    },
    methods:{
      send(i){
        this.showMsg = i;
      }
    }
  }
</script>

<style>
*{
  outline:0;
  -webkit-box-sizing:inherit;
  box-sizing:inherit
}
*:before,*:after{
  -webkit-box-sizing:inherit;
  box-sizing:inherit
}
html{
  height:100%;
  -webkit-box-sizing:border-box;
  box-sizing:border-box
}
body{
  height:100%;
  color:#3B414D;
}
h3{
  font-size:15px;
  font-weight:600
}

input::-webkit-input-placeholder{
  color:#cccccc
}
input::-moz-placeholder{
  color:#cccccc
}
input:-ms-input-placeholder{
  color:#cccccc
}
input:-moz-placeholder{
  color:#cccccc
}
.wrapper{
  height:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column
}
header{
  -webkit-box-shadow:0 0px 13px rgba(0,0,0,0.06);
  box-shadow:0 0px 13px rgba(0,0,0,0.06);
  -webkit-box-flex:0;
  width:100%;
  overflow:hidden;
  z-index:2;
  position:relative;
  border-bottom:1px solid rgba(0,0,0,0.1);
  -ms-flex:0 0 70px;
  flex:0 0 70px
}
.container{
  position:relative;
  display:block;
  padding-left:20px;
  padding-right:20px
}
header>div{
  z-index:2;
  height:70px;
  margin:0 auto;
  display:block;
  position:relative;
  overflow:hidden
}
header .middle{
  position:absolute;
  text-align:center;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  -webkit-transform:translate(-50%, -50%)
}
header .middle h3{
  margin-bottom:3px
}
header .middle p{
  margin-bottom:0px;
  color:#9197a5
}
header .right{
  height:70px;
  overflow:hidden;
  line-height:70px;
  text-align:right;
  width:auto;
  float:right;
  position:relative
}
header .avatar{
  margin-left:15px;
  display:inline-block;
  float:right
}
header .avatar img{
  vertical-align:middle;
  width:30px;
  border-radius:100%;
  height:30px
}
header .settings{
  display:inline-block;
  float:left;
  position:relative
}
header .settings:after{
  content:"";
  background-color:#000;
  opacity:0.2;
  height:20px;
  width:1px;
  margin-top:25px;
  margin-left:25px;
  display:inline-block;
  margin-right:25px
}
header .username{
  display:inline-block;
  height:70px;
  font-size:14px;
  line-height:72px;
  font-weight:600
}
header .username img{
  width:16px;
  float:left;
  height:70px;
  opacity:0.5
}
header .left{
  width:130px;
  float:left;
  position:relative
}
header .left img{
  display:inline-block;
  height:70px;
  width:100%
}
.user-panel{
  border-bottom:1px solid rgba(0,0,0,0.1);
  padding:20px
}
.online{
  background-color:#0182ff
}
.offline{
  background-color:#d0d0d0
}
.user-panel .avatar{
  text-align:center;
  position:relative
}
.user-panel .avatar .avatar-image{
  position:relative;
  width:60px;
  margin-bottom:20px;
  margin-top:20px;
  overflow:hidden;
  margin-left:auto;
  margin-right:auto
}
.user-panel .avatar img{
  width:60px;
  border-radius:100%;
  height:60px
}
.user-panel .avatar .status{
  height:16px;
  width:16px;
  position:absolute;
  bottom:2px;
  right:2px;
  border-radius:100%;
  border:4px solid #ffffff
}
.user-panel p{
  color:#9197a5
}
.user-panel h3{
  margin-bottom:7px
}
.col-left .messages li{
  padding-top:15px;
  width:100%;
  display:block;
  overflow:hidden;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:15px
}
.col-left .messages li .avatar{
  position:relative
}
.col-left .messages li .avatar .avatar-image{
  position:relative;
  width:40px;
  overflow:hidden;
  float:left;
  margin-right:13px
}
.col-left .messages li .avatar .status{
  height:12px;
  width:12px;
  position:absolute;
  bottom:2px;
  right:2px;
  border-radius:100%;
  border:3px solid #ffffff
}
.col-left .messages li .avatar img{
  width:36px;
  border-radius:100%;
  height:36px
}
.col-left .messages li:first-child{
  padding-top:20px
}
.col-left .messages li:last-child{
  padding-bottom:20px
}
.col-left .messages li p{
  display:-webkit-box;
  -webkit-line-clamp:1;
  -webkit-box-orient:vertical;
  overflow:hidden;
  text-overflow:ellipsis
}
.col-left .messages h3{
  margin-bottom:7px
}
.col-left .messages p{
  margin-bottom:0px;
  color:#9197a5
}
main{
  -webkit-box-flex:1;
  -ms-flex:1;
  flex:1;
  width:100%;
  margin:auto;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
  -ms-flex-pack:justify;
  justify-content:space-between
}
.col-left{
  border-right:1px solid rgba(0,0,0,0.1);
  -webkit-box-flex:0;
  -ms-flex:0 0 300px;
  flex:0 0 300px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column
}
.col-right{
  border-left:1px solid rgba(0,0,0,0.1);
  -webkit-box-flex:0;
  -ms-flex:0 0 300px;
  flex:0 0 300px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column
}
.col{
  -webkit-box-flex:0;
  -ms-flex:0 0 60%;
  flex:auto;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column
}
.col-content{
  -webkit-box-flex:1;
  padding:0px;
  -ms-flex:1;
  flex:1;
  overflow-y:auto
}
.col-foot{
  border-top:1px solid rgba(0,0,0,0.1);
  -webkit-box-flex:0;
  -ms-flex:0 0 50px;
  flex:0 0 50px;
}
.message-sent,.message-received{
  clear:both;
  position:relative
}
.message-sent::before,.message-received::before,.message-sent::after,.message-received::after{
  content:'';
  display:table
}
[class^='grid-']{
  display:-ms-flexbox;
  display:-webkit-box;
  display:flex;
  -ms-flex-wrap:wrap;
  flex-wrap:wrap;
  -ms-flex-direction:row;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
  flex-direction:row
}
.grid-message>[class^='col-']{
  margin-top:1em;
  margin-right:1em
}
.grid-message>[class^='col-']:nth-child(-n+1){
  margin-top:0
}
.grid-message>[class^='col-']:nth-child(1n){
  margin-right:0
}
.col-message-sent{
  margin-left:calc(8.33333333% + 0.08333333em) !important
}
.col-message-received{
  margin-right:calc(8.33333333% + 0.08333333em) !important
}
.col-message-sent,.col-message-received{
  width:calc(91.66666667% - 0.08235677em)
}
.message-sent,.message-received{
  margin-top:0.3em;
  margin-bottom:0.3em;
  padding:0.5em 0.6em
}
.message-sent p,.message-received p{
  margin:0;
  line-height:1.5
}
.message-sent{
  float:right;
  color:white;
  background-color:#0181ff;
  border-radius:0.5em 0.25em 0.25em 0.5em
}
.message-sent:first-child{
  border-radius:0.5em 0.5em 0.25em 0.5em
}
.message-sent:last-child{
  border-radius:0.25em 0.25em 0.5em 0.5em
}
.message-sent:only-child{
  border-radius:0.5em
}
.message-received{
  float:left;
  color:black;
  background-color:#e6e6e6;
  border-radius:0.25em 0.5em 0.5em 0.25em
}
.message-received:first-child{
  border-radius:0.5em 0.5em 0.5em 0.25em;
  margin-top:0px
}
.message-received:last-child{
  border-radius:0.25em 0.5em 0.5em 0.5em
}
.message-received:only-child{
  border-radius:0.5em
}
.col-message-sent,.col-message-received{
  margin-top:0.25em !important
}
.message{
  min-height:53.33203125em;
  display:-ms-flexbox;
  display:-webkit-box;
  display:flex;
  padding:20px
}
.wrapper-mobile{
  height:100vh;
  display:none;
  position:relative;
  color:#9197a5;
  text-align:center;
  line-height:22px
}
.wrapper-mobile .mobile{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  -webkit-transform:translate(-50%, -50%)
}
.wrapper-mobile .mobile img{
  width:54px;
  display:block;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:30px
}
.compose{
  padding:15px;
  position:relative
}
.compose input{
  width:100%;
  border:0px;
  font-size:17px;
  padding-right:80px
}
.compose .compose-dock .dock{
  position:absolute;
  right:25px;
  top:20px
}
.compose .compose-dock img{
  width:20px;
  margin-left:12px;
  opacity:0.2
}
.compose .compose-dock img:hover{
  opacity:0.5
}
</style>
