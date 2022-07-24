<template>
  <section>
    <h1>List of Employees</h1>
    <ul>
      <employee-item>
      </employee-item>
    </ul>
  </section>
</template>

<script>
import EmployeeItem from '../components/employees/EmployeeItem.vue'

export default {
  components: { EmployeeItem },

}

</script>

<style scoped>

section {
  margin: 2rem auto;
  max-width: 40rem;
  text-align: center;
  border: 1px solid black;
}
</style>