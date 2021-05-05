<template>
  <ListStudents :students="students" />
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({ $config }) {
    return await axios
      .get($config.apiUrl + '/students', {
        headers: { 'x-api-key': $config.apiKey },
      })
      .then((res) => {
        return {
          students: res.data.Items,
        }
      })
      .catch(() => {
        return {
          students: Array(23).fill({
            id: 0,
            j_last_name: 'Not',
            j_first_name: 'Found',
            avatar: '@/assets/images/defaultAvatar.jpg',
            is_stay: false,
          }),
        }
      })
  },
}
</script>
