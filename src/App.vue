<template>
  <div class="container">
        <div class="Stopwatch-screen ">
           <div class=" flex justify-between p-7">
              <h1 class="Stopwatch text-2xl text-[#53967a]">Stopwatch</h1>
            <div class="Ellipse-7 ">
                <i class="text-3xl  text-[#53967a]  cursor-pointer fa-solid fa-gear"></i>
            </div>
          </div>



          <div class=" flex justify-around">
            
             <router-link to="/Alarm" class="grid hover:animate-bounce text-3xl text-center text-[#999] hover:text-[#53967a] focus:text-[#53967a]  cursor-pointer">   
             <i class="fa-solid fa-bell "></i> 
                <span class="Alarm "> Alarm</span>
            </router-link>

            <router-link to="/Clock" class="grid hover:animate-bounce text-3xl text-center text-[#999] hover:text-[#53967a] focus:text-[#53967a]  cursor-pointer">
                <i class="fa-solid fa-clock "></i>
                <span class="Clock ">Clock</span>
            </router-link>

          
              <router-link to="/" class="grid text-3xl hover:animate-bounce text-center text-[#999] hover:text-[#53967a] focus:text-[#53967a] cursor-pointer"> 
               <i class="fa-solid fa-stopwatch "></i>
                <span class="Stopwatch ">Stopwatch</span>
                </router-link>
           

     
              <router-link to="/Timer" class="grid hover:animate-bounce text-[#999] hover:text-[#53967a] text-3xl focus:text-[#53967a] text-center cursor-pointer">
                <i class="fa-solid fa-stopwatch-20 bounce"></i>
                <span class="Timer"> Timer</span>
            </router-link>
          </div> 
          
          <router-view />
        </div>
  </div>
</template>

<script>

export default {
  
  computed: {
    formattedTimeLeft() {
      const timeLeft = this.timeLeft
			
      // The largest round integer less than or equal  to the result of time divided being by 60.
      const minutes = Math.floor(timeLeft / 60)
			
      // Seconds are the remainder of the time divided   by 60 (modulus operator)
      let seconds = timeLeft % 60
			
      // If the value of seconds is less than 10,then display seconds with a leading zero
      if (seconds < 10) {
        seconds = `0${seconds}`
      }
			
      // The output in MM:SS format
      return `${minutes}:${seconds}`
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.Stopwatch-screen {
  width: 100%;
  height: auto;
  border-radius: 20px;
  background-color: #ebebeb;
  overflow-x: hidden;
}

.Ellipse-7 {
  width: 50px;
  height: 50px;
  
  margin: 0px 0px 50px 50px;
  padding: 5px;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.06), -4px -4px 15px 0 rgba(255, 255, 255, 0.5);
  border: solid 4px #ebebeb;
  border-radius: 50%;
  background-color: #ebebeb;
}

.Alarm {
  width: 37px;
  height: 16px;
  
  margin: 1px 0 0;
  font-family: QuattrocentoSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  text-align: left;
 
}

.Clock {
  width: 34px;
  height: 16px;
  margin: 1px 0 0;
  font-family: QuattrocentoSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  text-align: left;
 
}

.Stopwatch {
  width: 66px;
  height: 16px;
  flex-grow: 0;
  margin: 1px 0 0;
  font-family: QuattrocentoSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  text-align: left;
 
}

.Timer {
  width: 36px;
  height: 16px;
  flex-grow: 0;
  margin: 1px 0 0;
  font-family: QuattrocentoSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.01px;
  text-align: left;
 
}

</style>