<template>
  <div>
    <!-- Input for adding task -->
    <div class="row mb-3">
      <div class="col-8 col-sm-9">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a new task"
          v-model="newTask"
          @keyup.enter="addTask"
        />
      </div>
      <div class="col-4 col-sm-3">
        <button type="button" class="btn btn-primary w-100" @click="addTask">
          Add
        </button>
      </div>
    </div>

    <!-- Task list -->
    <ul class="list-group">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center flex-wrap gap-2"
      >
        <!-- Task text with appended priority label -->
        <span>{{ task.text }} ({{ task.priority }} Priority)</span>

        <!-- Action buttons -->
        <div>
          <button
            type="button"
            class="btn btn-sm btn-secondary me-2"
            @click="togglePriority(index)"
          >
            {{ task.priority === 'High' ? 'Mark as Low Priority' : 'Mark as High Priority' }}
          </button>
          <button
            type="button"
            class="btn btn-sm btn-danger"
            @click="deleteTask(index)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      newTask: '',
      tasks: [
        { text: 'Prepare resume', priority: 'High' },
        { text: 'Apply for ML Intern', priority: 'Low' }
      ]
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        // Insert new task at the beginning of the array
        this.tasks.unshift({
          text: this.newTask.trim(),
          priority: 'Low'
        })
        this.newTask = ''
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    },
    togglePriority(index) {
      if (this.tasks[index].priority === 'High') {
        this.tasks[index].priority = 'Low'
      } else {
        this.tasks[index].priority = 'High'
      }
    }
  }
}
</script>
