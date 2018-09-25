<template>
  <div class="home">
    <h2>justify-content:flex-start 起始端对齐1</h2>
    <div class="dad dad-1">
      <div class="son"><p>son-1</p></div>
    </div>
    <h2>justify-content:center 居中对齐</h2>
    <div class="dad dad-2">
      <div class="son"><p>son-1</p></div>
    </div>
    <h2>justify-content:flex-end 末尾段对齐</h2>
    <div class="dad dad-3">
      <div class="son"><p>son-1</p></div>
    </div>
    <h2>justify-content:space-around 子容器沿主轴均匀分布</h2>
    <div class="dad dad-4">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-2</p></div>
      <div class="son"><p>son-3</p></div>
    </div>
    <h2>justify-content:space-between 位于首尾两端的子容器与父容器相切</h2>
    <div class="dad dad-5">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-2</p></div>
      <div class="son"><p>son-3</p></div>
    </div>
    <h2>justify-content:space-evenly 每个相邻 flex 项之间的间距是相等</h2>
    <div class="dad dad-6">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-2</p></div>
      <div class="son"><p>son-3</p></div>
    </div>
    <h2>align-items:flex-start 起始端对齐</h2>
    <div class="dad dad-7">
      <div class="son"><p>son-1</p></div>
    </div>
    <h2>align-items:center 居中对齐</h2>
    <div class="dad dad-8">
      <div class="son"><p>son-1</p></div>
    </div>
    <h2>align-items:flex-end 末尾段对齐</h2>
    <div class="dad dad-9">
      <div class="son"><p>son-1</p></div>
    </div>
    <h2>align-items:baseline 文字基线对齐</h2>
    <div class="dad dad-10">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-1son-1son-1son-1</p></div>
      <div class="son"><p>son-1son-1son-1</p></div>
    </div>
    <h2>align-items:stretch 拉伸至与父容器一致</h2>
    <div class="dad dad-11">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-1son-1son-1son-1</p></div>
      <div class="son"><p>son-1son-1son-1</p></div>
    </div>
    <h2>flex-wrap:nowrap 不换行</h2>
    <div class="dad dad-12">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-2</p></div>
      <div class="son"><p>son-3</p></div>
      <div class="son"><p>son-4</p></div>
      <div class="son"><p>son-5</p></div>
      <div class="son"><p>son-6</p></div>
      <div class="son"><p>son-7</p></div>
    </div>
    <h2>flex-wrap:wrap 换行</h2>
    <div class="dad dad-13">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-2</p></div>
      <div class="son"><p>son-3</p></div>
      <div class="son"><p>son-4</p></div>
      <div class="son"><p>son-5</p></div>
      <div class="son"><p>son-6</p></div>
      <div class="son"><p>son-7</p></div>
    </div>
    <h2>flex-wrap:wrap-reverse 逆序换行</h2>
    <div class="dad dad-14">
      <div class="son"><p>son-1</p></div>
      <div class="son"><p>son-2</p></div>
      <div class="son"><p>son-3</p></div>
      <div class="son"><p>son-4</p></div>
      <div class="son"><p>son-5</p></div>
      <div class="son"><p>son-6</p></div>
      <div class="son"><p>son-7</p></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SockJS from 'sockjs-client'; 
import Stomp from 'stompjs'
export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  mounted:function(){
    this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      this.connection();
      let self = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      this.timer = setInterval(() => {
        try {
          self.stompClient.send("test");
        } catch (err) {
          console.log("断线了: " + err);
          self.connection();
        }
      }, 5000);
    },
    connection(){
      this.socket = new SockJS("https://testactapi.at3.com/api/socket");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect({}, () => {
        this.stompClient.debug = () => {
            return null;
        };
        /*
        * 1.用户总算力
        * return {JSON}
        */
        this.stompClient.subscribe('/topic/pool/pool_result_info', (message) => {
          console.log(message.body) 
        });
      });
    },
    disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
      console.log("Disconnected");
      }
    }
  }
}
</script>
