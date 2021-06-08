// export function getAppointmentsForDay(state, day) {
//   const { days, appointments } = state;

//   // Find the object in our state.days array who's name matches the provided day
//   const dayObjectFound = days.find((dayData) => dayData.name === day);

//   // Returns an empty array when: the day is not found/the days data is empty || no appointments for the day
//   if (!dayObjectFound || dayObjectFound.appointments.length === 0) return [];

//   // Iterate over appointmentIds array and for each id, return the corresponding appointment object from state.appointments
//   const appointmentIds = dayObjectFound.appointments;
//   const dailyAppointments = appointmentIds.map(
//     (appointmentId) => appointments[appointmentId]
//   );

//   return dailyAppointments;
// }
