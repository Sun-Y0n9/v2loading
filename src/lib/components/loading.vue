<template>
    <div class="loading_">
        <div class="loadingImg" :style="{height: loadingGif.size + 'px', background:'url(/static/img/'+loadingGif.name+') top center no-repeat'}" v-if="type === -1">
            <div class="text" :style="{marginTop: loadingGif.size + 15 + 'px'}">{{text}}</div>
        </div>
        <div class="loadingCss" v-if="type === 1">
            <div class="text">{{text}}</div>
            <div class="vloading1 vloading">
                <div class="vloading-container container1">
                    <div class="circle1" :style="{backgroundColor:color}"></div>
                    <div class="circle2" :style="{backgroundColor:color}"></div>
                    <div class="circle3" :style="{backgroundColor:color}"></div>
                    <div class="circle4" :style="{backgroundColor:color}"></div>
                </div>
                <div class="vloading-container container2">
                    <div class="circle1" :style="{backgroundColor:color}"></div>
                    <div class="circle2" :style="{backgroundColor:color}"></div>
                    <div class="circle3" :style="{backgroundColor:color}"></div>
                    <div class="circle4" :style="{backgroundColor:color}"></div>
                </div>
                <div class="vloading-container container3">
                    <div class="circle1" :style="{backgroundColor:color}"></div>
                    <div class="circle2" :style="{backgroundColor:color}"></div>
                    <div class="circle3" :style="{backgroundColor:color}"></div>
                    <div class="circle4" :style="{backgroundColor:color}"></div>
                </div>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 2">
            <div class="text">{{text}}</div>
            <div class="vloading2 vloading">
                <div class="double-bounce1" :style="{backgroundColor:color}"></div>
                <div class="double-bounce2" :style="{backgroundColor:color}"></div>
            </div>            
        </div>
        <div class="loadingCss" v-if="type === 3">
            <div class="text">{{text}}</div>
            <div class="vloading vloading3">
                <div class="rect1" :style="{backgroundColor:color}"></div>
                <div class="rect2" :style="{backgroundColor:color}"></div>
                <div class="rect3" :style="{backgroundColor:color}"></div>
                <div class="rect4" :style="{backgroundColor:color}"></div>
                <div class="rect5" :style="{backgroundColor:color}"></div>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 4">
            <div class="text">{{text}}</div>
            <div class="vloading vloading4">
                <div :style="{backgroundColor:color}"></div>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 5">
            <div class="text">{{text}}</div>
            <div class="vloading vloading5">
                <div class="cube1" :style="{backgroundColor:color}"></div>
                <div class="cube2" :style="{backgroundColor:color}"></div>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 6">
            <div class="text">{{text}}</div>
            <div class="vloading vloading6">
                <div class="dot1" :style="{backgroundColor:color}"></div>
                <div class="dot2" :style="{backgroundColor:color}"></div>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 7">
            <div class="text">{{text}}</div>
           <div class="vloading vloading7">
                <div class="bounce1" :style="{backgroundColor:color}"></div>
                <div class="bounce2" :style="{backgroundColor:color}"></div>
                <div class="bounce3" :style="{backgroundColor:color}"></div>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 9">
            <div class="text loadingReactText">{{text}}</div>
            <div class="vloading loadingReact">
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 8">
            <div class="text loadingCollideText">{{text}}</div>
            <div class="vloading loadingCollide">
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
                <span :style="{backgroundColor:color}"></span>
            </div>
        </div>
        <div class="loadingCss" v-if="type === 10">
            <div class="text">{{text}}</div>
            <div class="vloading vloading8" :style="{backgroundColor:color}"></div>
        </div>
        <div class="loadingCss" v-if="type === 12">
            <div class="text">{{text}}</div>
            <div class="vloading circleLoading"></div>
        </div>
        <div class="loadingCss" v-if="type === 11">
            <div class="text">{{text}}</div>
            <div class="vloading goBackLoading">
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
import "./loading.css"
export default {
    props: {
        text: {
          type: String,
          default: ''
        },
        type:{
            type: Number,
            default: -1
        },
        loadingGif:{
            type:Object,
            default: function(){
                return {
                    name: "loading.gif",
                    size:48
                }
            }
        },
        color: {
            type: String,
            default: "#20b1aa"
        }
    }
}
</script>

<style>
 
</style>
