<template>
  <div class="list-group">
    <!-- Overview link at the top -->
    <router-link
      to="/overview"
      class="list-group-item list-group-item-action"
      :class="{ active: $route.path === '/overview' || $route.path === '/' }"
    >
      Overview
    </router-link>

    <!-- List of job IDs -->
    <router-link
      v-for="job in jobs"
      :key="job.job_id"
      :to="'/job/' + job.job_id"
      class="list-group-item list-group-item-action"
      :class="{ active: $route.params.id === job.job_id }"
    >
      {{ job.job_id }} - {{ job.job_title }}
    </router-link>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js'

export default {
  name: 'JobList',
  data() {
    return {
      jobs: jobs
    }
  }
}
</script>
