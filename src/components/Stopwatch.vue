<template>
  <div class="flex flex-col justify-center items-center">
       <div class="Ellipse-7">
            <div class="base-timer ">
                <svg
                class="base-timer__svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g class="base-timer__circle">
                    <circle
                    class="base-timer__path-elapsed"
                    cx="50"
                    cy="50"
                    r="46.5"
                    />
                </g>
                </svg>
                  <span class=" base-timer__label">
                    {{format}}
                  </span>
              </div>
      </div>
   

        <div class="flex justify-center items-center">
            <div @click="reset" class="btn hover:bg-[#53967a] flex justify-center items-center cursor-pointer text-[#53967a] hover:text-white ">
              Reset
            </div>

            <div @click="start" class="btn hover:bg-[#53967a] flex justify-center items-center cursor-pointer text-[#53967a] hover:text-white">
                Start
            </div>

            <div @click="stop" class="btn hover:bg-[#53967a] flex justify-center items-center cursor-pointer text-[#53967a] hover:text-white">
                Pause
            </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      elapsedTime: 0,
      timer: undefined
    }
  },
  computed: {
    format(){
      const date = new Date(null)
      date.setSeconds(this.elapsedTime / 1000)
      const utc = date.toUTCString()
      return utc.substr(utc.indexOf(":") -2, 8)
    }
  },
  methods: {
    start(){
      this.timer =setInterval(() => {
        this.elapsedTime += 1000
      }, 1000)
    },
    reset(){
      this.elapsedTime = 0
    },
    stop(){
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped>
.Ellipse-7 {
   width: 350px;
  height: 350px;
  position: relative;
  flex-grow: 0;
  margin: 80px;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.06), -4px -4px 15px 0 rgba(255, 255, 255, 0.5);
  border: solid 24px #ebebeb;
  background-color: #ebebeb;
}

.base-timer {
width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 50%;
  margin: -150px;

}




/* Removes SVG styling that would hide the time label */
.base-timer__circle {
    fill: none;
    stroke: none;
  }
/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
    stroke-width: 1px;
    stroke:#53967a;
    stroke-dasharray: 2px 2px;
  }

span {
  font-family: QuattrocentoSans;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #53967a;
  position: absolute;    
    /* Size should match the parent container */    
    width: 300px;
    height: 300px;
    /* Keep the label aligned to the top */    
    top: 0;
    /* Create a flexible box that centers content vertically and horizontally */    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 48px;
}

.btn {
  width: 90px;
  height: 50px;
  margin: 220px 13px ;
  padding: 16px 52px 17px;
  border-radius: 7px;
  background-color: #d1e6dd;
   font-family: QuattrocentoSans;
     font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.02px;
}



</style>