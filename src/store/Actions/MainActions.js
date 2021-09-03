import {
  SET_FIRST_TIME_LOGIN,
  USER, SET_SPLASH_VISIBLE, SET_TASKS, SET_CHALLENGES, SET_SORTED_USER_LIST, SET_BADGES
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
export const setChallenges = (challenges) => ({
  type: SET_CHALLENGES,
  challenges,
})
export const setSortedUserList = (sortedUserList) => ({
  type: SET_SORTED_USER_LIST,
  sortedUserList,
})
export const setBadges = (badges) => ({
  type: SET_BADGES,
  badges,
})
