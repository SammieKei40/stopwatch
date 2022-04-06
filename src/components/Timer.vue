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
                <path
                
          class="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "></path>
            </g>
            </svg>
                <span class="base-timer__label text-black">
                {{ timerCount }}
                </span>
          </div>
      </div>

      <div class="flex justify-around">
            <div class="icon cursor-pointer" @click="play()">
               <i class=" fa-solid fa-play text-2xl  text-[#53967a]"></i>
            </div>

            <div  class="icon cursor-pointer" @click="pause()">
                <i class=" fa-solid fa-arrow-rotate-left   text-2xl bg-[#ebebeb] text-[#999]"></i>
            </div>
      </div>


      <div class="flex   pb-8">
          <div class=" iconplus mt-[30%] "></div>
    </div>
  </div>
</template>

<script>

export default {
   data() {
            return {
                timerEnabled: false,
                timerCount: 30
            }
        },

        watch: {

            timerEnabled(value) {
                if (value) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000);
                }
            },

            timerCount: {
                handler(value) {

                    if (value > 0 && this.timerEnabled) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }

                },
                immediate: true // This ensures the watcher is triggered upon creation
            }

        },

        methods: {

            play() {
              
                this.timerEnabled = true;
            },

            pause() {
                this.timerCount = 30;
            }

        },
        
}
</script>

<style scoped>
.Ellipse-7 {
   width: 400px;
  height: 400px;
  position: relative;
  flex-grow: 0;
  margin: 50px 17px 63px 43px;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.06), -4px -4px 15px 0 rgba(255, 255, 255, 0.5);
  border: solid 24px #ebebeb;
  background-color: #ebebeb;
}

.base-timer {
width: 300px;
  height: 300px;
  flex-grow: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  bottom: 50%;
  margin: -150px 0px 0px -150px;
}
/* Removes SVG styling that would hide the time label */
.base-timer__circle {
    fill: none;
    stroke: none;
  }
/* The SVG path that displays the timer's progress */
.base-timer__path-elapsed {
    stroke-width: 7px;
    stroke:grey;
  }

span {
  flex-grow: 0;
  font-family: QuattrocentoSans;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
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
    /* Sort of an arbitrary number; adjust to your liking */
    font-size: 48px;
}

.icon {

  flex-grow: 0;
  margin: 63px 20px 200px 80px;
  padding: 2px 2px 3px 3px;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.06), -4px -4px 15px 0 rgba(255, 255, 255, 0.5);
  border: solid 14px;
  border-radius: 50%;
   border: solid 24px #ebebeb;
  

}


.base-timer__path-remaining {
    /* Just as thick as the original ring */
    stroke-width: 10px;
    /* Rounds the line endings to create a seamless circle */
    stroke-linecap: round;
    /* Makes sure the animation starts at the top of the circle */
    transform: rotate(90deg);
    transform-origin: center;
    /* One second aligns with the speed of the countdown timer */
    transition: 1s linear all;
    /* Allows the ring to change color when the color value updates */
    stroke: rgb(65, 184, 131);
}
.base-timer__svg{
    /* Flips the svg and makes the animation to move left-to-right*/
    transform: scaleX(-1);
  }

  .iconplus{
    --b: 4px;
    width: 40px;
    aspect-ratio: 1/1;
    border: 10px solid #53967a;
    background: 
    conic-gradient(from 90deg at var(--b) var(--b), #53967a 90deg, #fff 0)
    calc(100% + var(--b)/2) calc(100% + var(--b)/2)/
    calc(50% + var(--b)) calc(50% + var(--b));
    border-radius: 50%;
    cursor: pointer;
}

</style>