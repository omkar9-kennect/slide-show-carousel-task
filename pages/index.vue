<template>
  <KCarsouel>
    <template v-slot:slidebox>
      <div
        v-for="(slide,slideIndex) in slides"
        :key="slide.seq"
          
      >
      <div v-if="currentIndex===slideIndex">
        <div
       
          v-for="(box) in slide.boxes"
          :key="box.content"
          
          class="box"
         :class="boxAlignmentClass(box)"
          :style="{
            
            backgroundColor: box.backgroundColor,
            fontWeight: box.formatting.Bold ? 'bold' : 'normal',
            fontStyle: box.formatting.fontStyle,
            fontSize: box.formatting.textSize + 'px',
            fontFamily: box.formatting.font,
            color: box.formatting.color,
          }"
         
        >
        
        {{ box.content }}
         
        </div>
       </div>
      </div>
      <div v-if="isPrime(currentIndex)" class="prime-slide">
            Prime slide no:{{ currentIndex }}
      </div>
      
    </template>
  </KCarsouel>
</template>

<script>
import { mapState } from "pinia";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useslideStore, ["slides"]),
    ...mapState(useslideStore, ['currentIndex']),
  },
  methods: {
    isPrime(index){
        if(index %2 != 0){
          return index
        }
    },
 
    boxAlignmentClass(box) {
      return {
        "align-center": box.X === "center" && box.Y === "center",
        "align-top-left": box.X === "top" && box.Y === "left",
        "align-top-right": box.X === "top" && box.Y === "right",
        "align-bottom-left": box.X === "bottom" && box.Y === "left",
        "align-bottom-right": box.X === "bottom" && box.Y === "right",

      };
    },
    
   

  },
};
</script>

<style scoped>
.box {
  cursor: pointer;
 position: absolute;

}
.prime-slide{
  position: absolute;
  left:50%;
  bottom:0;
  transform: translate(-50%, -50%);
  background-color: crimson;
 
}
.align-center {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.align-top-left {
  left: 40%;
  top: 0;
 
}
.align-top-right {
  right: 40%;
  top:0;
  
}
.align-bottom-left {
  left: 40%;
  bottom: 0;
 
}
.align-bottom-right {
  right: 40%;
  bottom: 0;
  
}
</style>
