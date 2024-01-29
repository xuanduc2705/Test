import { clientApi } from "./clientApi";

export const getListTeam = () => clientApi.get('/vote/listTeam')
export const checkIn = (param) => clientApi.post('/vote/checkIn',param)
export const getInfo = () => clientApi.get('/vote/getInfo')
export const voteTeam = (param) => clientApi.post('/vote/voteTeam',param)
