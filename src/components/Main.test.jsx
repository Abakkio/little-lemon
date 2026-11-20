import { initializeTimes, updateTimes } from "./Main";


test('ver los 6 valores que tiene horario', () => {
    expect(initializeTimes().length).toBeGreaterThan(0);
});

test('updateTimes devuelve las mismas horas', () => {

    const horas = ['17:00', '18:00'];
    const pedido = {type: 'update_times', date: '2026-11-20'}

    expect(updateTimes(horas, pedido).length).toBeGreaterThan(0);
});