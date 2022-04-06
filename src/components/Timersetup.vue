<template>
  <div>
      <form>
		 <label for="min">Minutes<br />
		 <input type="number" v-model="minutes" name="time_m" id="min" min="0" max="59">
		 </label>
		 <label for="sec">Secondes<br />
			  <input type="number" v-model="secondes" name="time_s" id="sec" max="59" min="0">
		 </label>
		 <button type="button" @click="sendTime">Set time</button>
	</form>
  </div>
</template>

<script>
export default {
data () {
		 return {
			  minutes:0,
			  secondes:0
		 }
	},
	methods: {
		 sendTime() {
			  this.$emit('set-time', {minutes:this.minutes, secondes:this.secondes})
		 }
	}
}

let Timer = {
	template: `
		 <div class="timer">{{ time | prettify }}</div>
	`,
	props:['time'],
	filters: {
		 prettify : function(value) {
			  let data = value.split(':')
			  let minutes = data[0]
			  let secondes = data[1]
			  if (minutes < 10) {
					minutes = "0"+minutes
			  }
			  if (secondes < 10) {
					secondes = "0"+secondes
			  }
			  return minutes+":"+secondes
		 }
	},
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
                this.timerEnabled = false;
            }

        }

}

</script>

<style scoped>
input[type=number] {
		padding: 10px;
		font-size: inherit;
		width:100%;
  }

  button {
		padding:10px;
  }

  [v-cloak] {
		opacity:0;
  }

  label {
		width:20%;
		padding:10px 0;
		display:inline-block;
  }

  .timer {
		font-size: 2em;
		margin: 20px;
  }
</style>