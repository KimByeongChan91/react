type HolidayColor = "blue" | "red"
type WeekdayColor = "black"

export const changeColorbyDay = (day:number): HolidayColor | WeekdayColor => {
    const dayColorMap: {[key: number]: HolidayColor} = {
        0: "red",
        6: "blue",
    }
    return dayColorMap[day] || "black"
  }