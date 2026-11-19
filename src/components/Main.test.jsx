import { expect } from "vitest";
import { initializeTimes, updateTimes } from "./Main";


test('initializeTimes devuelve las 6 horas', () => {
    expect(initializeTimes()).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes devuelve el mismo estado', () => {
    const estado = ['17:00', '18:00'];
    const pedido = {type: 'update_times', date: '2026-11-20'};
    expect(updateTimes(estado, pedido)).toEqual(estado);
});

