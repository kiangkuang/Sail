<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <h4 style="color:#777777; font-size:18px;">Training Data</h4>
        </v-flex>
        <v-flex v-for="item in items" :key="item.title" xs6 class="mb-2">
          <v-card style="box-shadow: none">
            <v-layout>
              <v-flex xs2>
                <v-img :src="item.avatar" contain height="40" class="mt-1"></v-img>
              </v-flex>
              <v-flex xs8>
                <span>{{item.title}}</span><br>
                <span class="grey--text">{{item.subtitle}}</span>
              </v-flex>
              <v-flex xs2>
                <v-btn icon ripple @click="action(item)">
                  <v-icon color="grey lighten-1">{{item.icon}}</v-icon>
                </v-btn>
                <v-progress-circular
                :rotate="-90"
                :size="25"
                :width="4"
                :value="item.progress"
                color="primary"
                v-if="item.icon == 'stop'"
                ></v-progress-circular>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row wrap class="mt-5">
        <v-flex xs12>
          <h4 style="color:#777777; font-size:18px;">Test Model</h4>
        </v-flex>
        <v-flex xs12>
          <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
          value="Test your model responses here by asking a question!"
          ></v-textarea>
        </v-flex>
        <v-flex xs12>
          <h5 style="color:#777777; font-size:16px;">Model Response</h5>
        </v-flex>
        <v-flex xs6>
          <v-card style="box-shadow: none; border: solid 2px lightgreen">
            <v-card-title primary-title>
              <div>
                <div style="font-size:16px;">Sorry, may I know what you mean by "model responses"?</div>
                <div class="mt-1" style="font-weight: 300;">Score: 98%</div>
              </div>
            </v-card-title>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              Rate this response
              <v-spacer></v-spacer>
              <v-icon class="mr-3" style="cursor: pointer;">thumb_up</v-icon>
              <v-icon style="cursor: pointer;">thumb_down</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card style="box-shadow: none">
            <v-card-title primary-title>
              <div>
                <div style="font-size:16px;">Sorry can you elaborate?</div>
                <div class="mt-1" style="font-weight: 300;">Score: 72%</div>
              </div>
            </v-card-title>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3">
              Rate this response
              <v-spacer></v-spacer>
              <v-icon class="mr-3" style="cursor: pointer;">thumb_up</v-icon>
              <v-icon style="cursor: pointer;">thumb_down</v-icon>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Messenger</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-layout>
            <v-flex x-12>
              <center>
              <div>
                <img src="src/assets/wiOtxI3emiC.png" style="height:100px">
              </div>
              <h1 class="line1">Messenger</h1>
              <h2 class="line2">Instantly connect with people in your life.</h2>
              <div class="line3">Sign in with Facebook to get started.</div>
              <div>
                <div id="loginform">
                  <input style="width:320px;" type="text" class="input1" id="email" name="email" placeholder="Email address or phone number" value="" tabindex="0" aria-label="Email address or phone number" autocomplete="off">
                  <input style="width:320px;" type="password" class="input2" name="pass" id="pass" tabindex="0" placeholder="Password" aria-label="Password">
                  <a class="button1" @click="dialog=false" style="height: 40px;padding-top: 5px;color: #ffffff">Sign In</a>
                </div>
              </div>
            </center>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>

  
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        dialog: false,
        items: [
        {
          avatar: 'src/assets/closed-envelope-circle (1).svg',
          title: 'Email',
          subtitle: 'Last trained at 30 Sep 2018',
          icon: 'refresh',
          progress: 0
        },
        {
          avatar: 'src/assets/messenger.png',
          title: 'Messenger',
          subtitle: 'Link service',
          icon: 'add',
          progress: 0
        },
        ]
      }
    },
    methods:{
      action(item){
        switch(item.icon){
          case 'add':
          this.dialog = true;
          setTimeout(()=>{
            item.icon = 'play_arrow'
            item.subtitle = 'Ready to begin training';
          },1000)
          
          break;
          case 'play_arrow':
          case 'refresh':
          item.icon = 'stop'
          item.subtitle = 'Training in progress';
          this.train(item);
          break;
          case 'stop':
          item.icon = 'refresh'
          item.subtitle = 'Last trained at 30 Sep 2018';
          break;
        }
      },
      train(item){
        setInterval(() => {
          if (item.progress > 100) {
            item.progress = 0;
            item.icon = 'refresh';
            item.subtitle = 'Last trained at 30 Sep 2018';
            return
          }
          item.progress += 20
        }, 400)
      }
    }
  }
</script>

<style>
:focus{
  outline: none !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) .v-input__slot{
  box-shadow: none !important
}
.line1{
  color:
  rgba(0, 0, 0, 0.88)
  ;
  direction:
  ltr
  ;
  display:
  block
  ;
  font-family:
  HelveticaNeue-Thin, "Helvetica Neue Light", "Helvetica Neue", "Segoe UI", Helvetica, Arial, "Lucida Grande", sans-serif
  ;
  font-size:
  36px
  ;
  font-style:
  normal
  ;
  font-weight:
  400
  ;
  height:
  44px
  ;
  line-height:
  44px
  ;
  margin-block-end:
  0px
  ;
  margin-block-start:
  0px
  ;
  margin-bottom:
  0px
  ;
  margin-inline-end:
  0px
  ;
  margin-inline-start:
  0px
  ;
  margin-left:
  0px
  ;
  margin-right:
  0px
  ;
  margin-top:
  0px
  ;
  padding-bottom:
  0px
  ;
  padding-left:
  0px
  ;
  padding-right:
  0px
  ;
  padding-top:
  0px
  ;
  text-align:
  center
  ;
  user-select:
  text
  ;
  width:
  320px
  ;
  -webkit-font-smoothing:
  antialiased
  ;
}
.line2{
  color:
  rgba(0, 0, 0, 0.75)
  ;
  direction:
  ltr
  ;
  display:
  block
  ;
  font-family:
  "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif
  ;
  font-size:
  17px
  ;
  font-style:
  normal
  ;
  font-weight:
  400
  ;
  height:
  20px
  ;
  line-height:
  20.4px
  ;
  margin-block-end:
  24px
  ;
  margin-block-start:
  12px
  ;
  margin-bottom:
  24px
  ;
  margin-inline-end:
  0px
  ;
  margin-inline-start:
  0px
  ;
  margin-left:
  0px
  ;
  margin-right:
  0px
  ;
  margin-top:
  12px
  ;
  padding-bottom:
  0px
  ;
  padding-left:
  0px
  ;
  padding-right:
  0px
  ;
  padding-top:
  0px
  ;
  text-align:
  center
  ;
  user-select:
  text
  ;
  width:
  320px
  ;
  -webkit-font-smoothing:
  antialiased
  ;
}
.line3{
  color:
  rgba(0, 0, 0, 0.75)
  ;
  direction:
  ltr
  ;
  display:
  block
  ;
  font-family:
  "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif
  ;
  font-size:
  17px
  ;
  font-style:
  normal
  ;
  font-weight:
  400
  ;
  height:
  20px
  ;
  line-height:
  20.4px
  ;
  margin-bottom:
  24px
  ;
  margin-top:
  12px
  ;
  text-align:
  center
  ;
  user-select:
  text
  ;
  width:
  320px
  ;
  -webkit-font-smoothing:
  antialiased
  ;
}
.input1{
background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgb(255, 255, 255)
;
background-image:
url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/O7nelmd9XSI.png)
;
background-origin:
padding-box
;
background-position-x:
0%
;
background-position-y:
0%
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
border-bottom-color:
rgba(0, 0, 0, 0.2)
;
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-bottom-style:
solid
;
border-bottom-width:
1px
;
border-image-outset:
0px
;
border-image-repeat:
stretch
;
border-image-slice:
100%
;
border-image-source:
none
;
border-image-width:
1
;
border-left-color:
rgba(0, 0, 0, 0.2)
;
border-left-style:
solid
;
border-left-width:
1px
;
border-right-color:
rgba(0, 0, 0, 0.2)
;
border-right-style:
solid
;
border-right-width:
1px
;
border-top-color:
rgba(0, 0, 0, 0.2)
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
border-top-style:
solid
;
border-top-width:
1px
;
color:
rgb(0, 0, 0)
;
cursor:
text
;
direction:
ltr
;
display:
block
;
font-family:
"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif
;
font-size:
17px
;
font-stretch:
100%
;
font-style:
normal
;
font-variant-caps:
normal
;
font-variant-east-asian:
normal
;
font-variant-ligatures:
normal
;
font-variant-numeric:
normal
;
font-weight:
400
;
height:
42px
;
letter-spacing:
normal
;
line-height:
16px
;
margin-bottom:
10px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
padding-bottom:
0px
;
padding-left:
16px
;
padding-right:
16px
;
padding-top:
0px
;
text-align:
start
;
text-indent:
0px
;
text-rendering:
auto
;
text-shadow:
none
;
text-transform:
none
;
user-select:
text
;
vertical-align:
middle
;
width:
286px
;
word-spacing:
0px
;
writing-mode:
horizontal-tb
;
-webkit-appearance:
none
;
-webkit-font-smoothing:
antialiased
;
-webkit-rtl-ordering:
logical
;
-webkit-border-image:
none
;
}
.input2{
 background-attachment:
scroll
;
initialhtml ._55r1
background-clip:
border-box
;
background-color:
rgb(255, 255, 255)
;
background-image:
url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/O7nelmd9XSI.png)
;
background-origin:
padding-box
;
background-position-x:
0%
;
background-position-y:
0%
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
border-bottom-color:
rgba(0, 0, 0, 0.2)
;
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-bottom-style:
solid
;
border-bottom-width:
1px
;
border-image-outset:
0px
;
border-image-repeat:
stretch
;
border-image-slice:
100%
;
border-image-source:
none
;
border-image-width:
1
;
border-left-color:
rgba(0, 0, 0, 0.2)
;
border-left-style:
solid
;
border-left-width:
1px
;
border-right-color:
rgba(0, 0, 0, 0.2)
;
border-right-style:
solid
;
border-right-width:
1px
;
border-top-color:
rgba(0, 0, 0, 0.2)
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
border-top-style:
solid
;
border-top-width:
1px
;
color:
rgb(0, 0, 0)
;
cursor:
text
;
direction:
ltr
;
display:
block
;
font-family:
"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif
;
font-size:
17px
;
font-stretch:
100%
;
font-style:
normal
;
font-variant-caps:
normal
;
font-variant-east-asian:
normal
;
font-variant-ligatures:
normal
;
font-variant-numeric:
normal
;
font-weight:
400
;
height:
42px
;
letter-spacing:
normal
;
line-height:
16px
;
margin-bottom:
10px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
padding-bottom:
0px
;
padding-left:
16px
;
padding-right:
16px
;
padding-top:
0px
;
text-align:
start
;
text-indent:
0px
;
text-rendering:
auto
;
text-shadow:
none
;
text-transform:
none
;
user-select:
text
;
vertical-align:
middle
;
width:
286px
;
word-spacing:
0px
;
writing-mode:
horizontal-tb
;
-webkit-appearance:
none
;
-webkit-font-smoothing:
antialiased
;
-webkit-rtl-ordering:
logical
;
-webkit-text-security:
disc
;
-webkit-border-image:
none
; 
}
.button1{
  align-items:
center
;
background-color:
rgb(0, 132, 255)
;
background-image:
none
;
border-bottom-color:
rgb(0, 132, 255)
;
border-bottom-left-radius:
4px
;
border-bottom-right-radius:
4px
;
border-bottom-style:
solid
;
border-bottom-width:
1px
;
border-image-outset:
0px
;
border-image-repeat:
stretch
;
border-image-slice:
100%
;
border-image-source:
none
;
border-image-width:
1
;
border-left-color:
rgb(0, 132, 255)
;
border-left-style:
solid
;
border-left-width:
1px
;
border-right-color:
rgb(0, 132, 255)
;
border-right-style:
solid
;
border-right-width:
1px
;
border-top-color:
rgb(0, 132, 255)
;
border-top-left-radius:
4px
;
border-top-right-radius:
4px
;
border-top-style:
solid
;
border-top-width:
1px
;
box-shadow:
none
;
box-sizing:
content-box
;
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
direction:
ltr
;
display:
block
;
font-family:
"Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif
;
font-size:
17px
;
font-stretch:
100%
;
font-style:
normal
;
font-variant-caps:
normal
;
font-variant-east-asian:
normal
;
font-variant-ligatures:
normal
;
font-variant-numeric:
normal
;
font-weight:
500
;
height:
44px
;
justify-content:
center
;
letter-spacing:
normal
;
line-height:
26px
;
margin-bottom:
24px
;
margin-left:
0px
;
margin-right:
0px
;
margin-top:
0px
;
overflow-x:
hidden
;
overflow-y:
hidden
;
padding-bottom:
0px
;
padding-left:
0px
;
padding-right:
0px
;
padding-top:
0px
;
position:
relative
;
text-align:
center
;
text-decoration-color:
rgb(255, 255, 255)
;
text-decoration-line:
none
;
text-decoration-style:
solid
;
text-indent:
0px
;
text-overflow:
ellipsis
;
text-rendering:
auto
;
text-shadow:
none
;
text-transform:
none
;
transition-delay:
0s, 0s, 0s
;
transition-duration:
0.2s, 0.2s, 0.2s
;
transition-property:
background-color, box-shadow, transform
;
transition-timing-function:
cubic-bezier(0.08, 0.52, 0.52, 1), cubic-bezier(0.08, 0.52, 0.52, 1), cubic-bezier(0.08, 0.52, 0.52, 1)
;
user-select:
text
;
vertical-align:
middle
;
white-space:
nowrap
;
width:
318px
;
word-spacing:
0px
;
writing-mode:
horizontal-tb
;
-webkit-appearance:
none
;
-webkit-font-smoothing:
antialiased
;
-webkit-border-image:
none
;
}
</style>
