import { initializeTimes, updateTimes } from "./Main";


test('ver los 6 valores que tiene horario', () => {
    expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
});

test('updateTimes devuelve las mismas horas', () => {

    const horas = ['17:00', '18:00'];
    const pedido = {type: 'update_times', date: '2026-11-20'}

    expect(updateTimes(horas, pedido)).toEqual(horas);
});