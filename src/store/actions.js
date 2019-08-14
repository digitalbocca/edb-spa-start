'use strict'

import axios from 'axios'

export default {
  async syncUsers (context) {
    try {
      const response = (await axios.get('https://jsonplaceholder.typicode.com/users')).data
      context.commit('USERS', response)
    } catch (e) {
      console.log(e.message)
    }
  }
}
