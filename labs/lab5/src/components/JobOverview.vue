<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">Job Explorer Overview</h3>
      <p class="card-text">
        Welcome to the Job Explorer section! Click on any job ID on the left to see full details about each position.
      </p>
      <p>
        <strong>Total Jobs:</strong> {{ jobs.length }}
      </p>
    </div>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js'

export default {
  name: 'JobOverview',
  data() {
    return {
      jobs: jobs
    }
  }
}
</script>
