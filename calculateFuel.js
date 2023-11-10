document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('fuelCalculator');
    const resultMessage = document.getElementById('resultMessage');
    const resultContainer = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del formulario (envío y recarga de página)
        event.preventDefault();

        // Obtiene los valores ingresados por el usuario
        const distance = parseFloat(document.getElementById('distance').value);
        const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
        const pricePerLiter = parseFloat(document.getElementById('pricePerLiter').value);

        // Realiza el cálculo del consumo de combustible
        const fuelNeeded = (distance / 100) * fuelConsumption;
        // Calcula el costo total
        const totalCost = fuelNeeded * pricePerLiter;

        // Muestra el resultado
        resultContainer.innerHTML = `Para un viaje de ${distance} km y un consumo de ${fuelConsumption} l/100 km, necesitarás aproximadamente ${fuelNeeded.toFixed(2)} litros de combustible. El costo total será de ${totalCost.toFixed(2)} €.`;
        resultMessage.style.display = 'block';
    });

});