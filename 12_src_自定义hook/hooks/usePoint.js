import {reactive, onMounted, onBeforeUnmount} from 'vue'
export default function usePoint(){
    //实现鼠标打点
    let point = reactive({
        x: 0,
        y: 0
    })
    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(point.x, point.y)
    }

    onMounted(() => {
        window.addEventListener('click', savePoint)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('click', savePoint)
    })

    return point;
}