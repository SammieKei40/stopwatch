<template>
  <div>
    <div class="flex flex-col justify-center items-center mb-6">
      <span class="-hours">
        23:34 hours
        </span>
        <span class="Mid-night text-center">
            Mid-night
        </span>
    </div>

    <div class="flex flex-col justify-center items-center">
        <div class="relative Rectangle-5">
                            <span class="AM pl-5 text-[#53967a]">
                                03:30 AM
                            </span>

                            <span class="Everday-noon-prayer pl-5">
                                Everday 
                            </span>
                            <i class="fa-solid fa-bell absolute inset-y-0 left-0 flex items-center justify-center px-2 text-[#53967a] text-3xl cursor-pointer"></i>
                            <i  class="absolute inset-y-0 right-0 flex items-center justify-center px-2 fa-solid fa-toggle-on  text-[#53967a] text-3xl cursor-pointer"></i>
                                      
        </div>

        <div class="relative Rectangle-5">
                            <span class="AM pl-5 text-[#53967a]">
                                03:30 AM
                            </span>

                            <span class="Everday-noon-prayer pl-5">
                                Everday 
                            </span>
                            <i class="fa-solid fa-bell-slash absolute inset-y-0 left-0 flex items-center justify-center px-2 text-[#999] text-3xl cursor-pointer"></i>
                            <i  class="absolute inset-y-0 right-0 flex items-center justify-center px-2 fa-solid fa-toggle-off  text-[#53967a] text-3xl cursor-pointer"></i>
                                      
        </div>

        <div class="relative Rectangle-5">
                            <span class="AM pl-5 text-[#53967a]">
                                03:30 AM
                            </span>

                            <span class="Everday-noon-prayer pl-5">
                                Everday 
                            </span>
                            <i class="fa-solid fa-bell-slash absolute inset-y-0 left-0 flex items-center justify-center px-2 text-[#999] text-3xl cursor-pointer"></i>
                            <i  class="absolute inset-y-0 right-0 flex items-center justify-center px-2 fa-solid fa-toggle-off  text-[#53967a] text-3xl cursor-pointer"></i>
                                      
        </div>
    </div>
    <div class="flex flex-col justify-center items-center pb-8">
        <div class="iconplus mt-[30%] "></div>
    </div>
  </div>
</template>

<script>


export default {
}
</script>

<style >

.-hours {
  width: 122px;
  height: 27px;
  flex-grow: 0;
  font-family: QuattrocentoSans;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #53967a;
}

.Mid-night {
  flex-grow: 0;
  font-family: QuattrocentoSans;
  font-size: 19px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #808080;
}
.Rectangle-5 {
  width: 25em;
  height: 58px;
  margin: 32px 0 24px 1px;
  padding: 8px 14px;
  opacity: 0.15;
  border-radius: 7px;
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.3), -4px -4px 15px 0 rgba(0, 0, 0, 0.3);
  background-color: #ebebeb;
}

.AM {
  width: 61px;
  height: 16px;
  margin: 2px 141px 0 24px;
  font-family: QuattrocentoSans;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
}

.Everday-noon-prayer {
  width: 108px;
  height: 13px;
  margin: 18px 94px 1px 24px;
  font-family: QuattrocentoSans;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
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