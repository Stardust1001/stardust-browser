<script setup>
import { reactive } from 'vue'

const table = reactive({
  list: [
    { name: '卡卡', gender: '男', age: 27 },
    { name: '娜娜', gender: '女', age: 25 },
  ],
  columns: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'gender' },
    { label: '年龄', prop: 'age' },
  ]
})

const form = reactive({
  form: {},
  formItems: [
    { label: '姓名', prop: 'name' },
    { label: '性别', prop: 'gender', comp: 'XSelect', options: ['男', '女'] },
    { label: '年龄', prop: 'age', comp: 'ElInputNumber' },
  ].map(e => ({ span: 8, ...e }))
})

const controller = {
  handleSearch () {

  },
  handleAdd () {

  },
  handleEdit () {

  }
}
</script>

<template>
  <div style="padding: 10px;">
    <el-button type="warning">haha</el-button>
    <br>
    <br>
    <pc-x-table
      :table="table"
      :controller="controller"
      listen="search,add,edit,export,search-export"
    ></pc-x-table>
    <br>
    <pc-x-form label-width="40px" :form="form"></pc-x-form>
  </div>
</template>
