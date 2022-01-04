import { onMounted, ref } from "vue"


const useScreenWidth = () => {
    const screenWidth = ref(window.innerWidth)

    onMounted(() => {
        window.addEventListener('resize', () => {
            screenWidth.value = window.innerWidth
        })
    })

    return screenWidth
}

export default useScreenWidth