import { defineStore } from "pinia";
export const useslideStore = defineStore("slide", {
  id: "slidesData",
  state: () => {
    return {
      currentIndex: 0,
      slides: [
        {
          seq: 1,
          onClick: "https://kennect.io/",
          backgroundImage:
            "https://picsum.photos/id/1032/900/400",
          boxes: [
            {
              content: "India in 2019",
              backgroundColor: "red",
              X: "center",
              Y: "center",
              formatting: {
                Bold:false,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "India in 2029",
              backgroundColor: "red",
              X: "bottom",
              Y: "right",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"normal"
              },
            },
            {
              content: "India in 2039",
              backgroundColor: "red",
              X: "bottom",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "India in 2009",
              backgroundColor: "red",
              X: "top",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"normal"
              },
            },
            {
              content: "India in 2010",
              backgroundColor: "red",
              X: "top",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: 20,
                font: "funny",
                fontItalic: true,
                fontStyle:"italic"
              },
            },
          ],
        },
        {
          Seq: 2,
          onClick: "https://kennect.io/",
          backgroundImage:
            "https://picsum.photos/id/1033/900/400",
          boxes: [
            {
              content: "India in 2001",
              backgroundColor: "orange",
              X: "center",
              Y: "center",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"normal"
              },
            },

            {
              content: "India in 2002",

              backgroundColor: "orange",
              X: "bottom",
              Y: "right",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"normal"
              },
            },
            {
              content: "India in 2003",

              backgroundColor: "orange",
              X: "bottom",
              Y: "left",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "India in 2003",

              backgroundColor: "orange",
              X: "top",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "India in 2004",
              backgroundColor: "orange",
              X: "top",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            
          ],
        },
        {
          Seq: 3,
          onClick: "https://kennect.io/",
          backgroundImage:
            "https://picsum.photos/id/1037/900/400",
          boxes: [
            {
              content: "India in 2060",
              backgroundColor: "yellow",
              X: "center",
              Y: "center",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },

            {
              content: "India in 2070",

              backgroundColor: "yellow",
              X: "bottom",
              Y: "right",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "India in 2080",

              backgroundColor: "yellow",
              X: "bottom",
              Y: "left",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"normal"
              },
            },
            {
              content: "India in 2090",

              backgroundColor: "yellow",
              X: "top",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "India in 2098",
              backgroundColor: "yellow",
              X: "top",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            
          ],
        },
        {
          Seq: 4,
          onClick: "https://kennect.io/",
          backgroundImage:
            "https://picsum.photos/id/1035/900/400",
          boxes: [
            {
              content: "East",
              backgroundColor: "pink",
              X: "center",
              Y: "center",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },

            {
              content: "West",

              backgroundColor: "pink",
              X: "bottom",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "North",

              backgroundColor: "pink",
              X: "bottom",
              Y: "left",
              formatting: {
                Bold: false,
                textSize: "20",
                font: "funny",
                fontStyle:"normal"
              },
            },
            {
              content: "South",

              backgroundColor: "pink",
              X: "top",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "South-North",
              backgroundColor: "pink",
              X: "top",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            
          ],
        },
        {
          Seq: 5,
          onClick: "https://kennect.io/",
          backgroundImage:
            "https://picsum.photos/id/1036/900/400",
          boxes: [
            {
              content: "Mumbai",
              backgroundColor: "green",
              X: "center",
              Y: "center",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },

            {
              content: "Delhi",

              backgroundColor: "green",
              X: "bottom",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "Chennai",

              backgroundColor: "green",
              X: "bottom",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "Kolkata",

              backgroundColor: "green",
              X: "top",
              Y: "left",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            {
              content: "Tiruanantpuram",
              backgroundColor: "green",
              X: "top",
              Y: "right",
              formatting: {
                Bold: true,
                textSize: "20",
                font: "funny",
                fontStyle:"italic"
              },
            },
            
          ],
        },
        
      ],
    };
  },
 
  actions: {
    prevSlide() {
      if (this.currentIndex > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }},
    nextSlide() {
      if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }
  },
   
    slideStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },
});
