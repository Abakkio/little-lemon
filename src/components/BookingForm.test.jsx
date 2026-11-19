import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";


test('muestra el titulo Tu reserva', () => {
    render(<BookingForm availableTimes={['17:00']} dispatch={() => {}} />);

    const titulo = screen.getByText('Tu reserva');

    expect(titulo).toBeInTheDocument();
});