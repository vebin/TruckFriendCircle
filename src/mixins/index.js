var navigator = weex.requireModule('navigator')
export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
        console.log(to)
      }
    },
    back () {
        if (this.$router) {
            this.$router.back()
        }
    },
    skip (url) {
        navigator.push({
          url: "http://192.168.1.30:1776/dist/"+url,
          animated: 'true'
        }, event => {
          console.log(1)
        })
    }
  }
}
