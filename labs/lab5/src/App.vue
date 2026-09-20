<template>
  <div class="container my-4">
    <!-- Header -->
    <header class="mb-4 text-center">
      <h1>Job Explorer &amp; To-Do List</h1>
      <p class="text-muted">COS30043 Lab 5 - Vue 3 &amp; Bootstrap</p>
    </header>

    <!-- Section 1: Job Explorer -->
    <section class="mb-5">
      <h2 class="mb-3">Job Explorer</h2>
      <div class="row">
        <!-- Left column: JobList -->
        <div class="col-12 col-md-4 mb-3">
          <JobList />
        </div>
        <!-- Right column: RouterView for JobOverview or JobDetail -->
        <div class="col-12 col-md-8">
          <RouterView />
        </div>
      </div>
    </section>

    <hr class="my-4" />

    <!-- Section 2: To-Do List -->
    <section class="mb-4">
      <h2 class="mb-3">To-Do List</h2>
      <ToDoList />
    </section>
  </div>
</template>

<script>
import JobList from './components/JobList.vue'
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'App',
  components: {
    JobList,
    ToDoList
  }
}
</script>
