import {
  SET_FIRST_TIME_LOGIN,
  USER, SET_SPLASH_VISIBLE, SET_TASKS
} from './ActionTypes';

export const firstTimeLogin = (isFirst) => ({
  type: SET_FIRST_TIME_LOGIN,
  isFirst,
})
export const setUser = (user) => ({
  type: USER,
  user,
})
export const setSplashVisible = (splashVisible) => ({
  type: SET_SPLASH_VISIBLE,
  splashVisible,
})
export const setTasks = (tasks) => ({
  type: SET_TASKS,
  tasks,
})
