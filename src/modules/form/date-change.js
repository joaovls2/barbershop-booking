import { schedulesDay } from "../schedules/load"

const selectedDate = document.getElementById("date")

// Recarrega a lista de horários quando o input da data mudar
selectedDate.onchange = () => schedulesDay()