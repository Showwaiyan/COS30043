<template>
  <div v-if="job" class="card">
    <div class="card-body">
      <h3 class="card-title">{{ job.job_title }} ({{ job.job_id }})</h3>
      <h6 class="card-subtitle mb-3 text-muted">{{ job.company }} - {{ job.location }}</h6>

      <p><strong>Category:</strong> {{ job.category }}</p>
      <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>
      <p><strong>Job Level:</strong> {{ job.job_level }}</p>
      <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>
      <p><strong>Positions Available:</strong> {{ job.positions_available }}</p>
      <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>
      <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>
      <p><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
      <p><strong>Start Date:</strong> {{ job.start_date }}</p>

      <p><strong>Job Description:</strong></p>
      <p>{{ job.job_description }}</p>

      <p><strong>Required Skills:</strong></p>
      <ul>
        <li v-for="skill in job.required_skills" :key="skill">{{ skill }}</li>
      </ul>

      <p><strong>Preferred Qualifications:</strong></p>
      <ul>
        <li v-for="qual in job.preferred_qualifications" :key="qual">{{ qual }}</li>
      </ul>

      <p><strong>Tags:</strong> {{ job.tags.join(', ') }}</p>
    </div>
  </div>

  <div v-else class="alert alert-warning">
    <p>Job not found.</p>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js'

export default {
  name: 'JobDetail',
  computed: {
    job() {
      const id = this.$route.params.id
      return jobs.find(item => item.job_id === id)
    }
  }
}
</script>
