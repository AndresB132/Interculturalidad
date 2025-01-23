document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");
    const eventDetails = document.getElementById("event-info");
  
    // Ejemplo de eventos culturales
    const events = {
      "2025-01-01": "Año Nuevo - Celebrado en todo el mundo.",
      "2025-02-12": "Año Nuevo Chino - Fiesta tradicional en China.",
      "2025-03-17": "Día de San Patricio - Celebración en Irlanda.",
    };
  
    // Generar el calendario (30 días para el ejemplo)
    for (let day = 1; day <= 30; day++) {
      const date = `2025-01-${String(day).padStart(2, "0")}`;
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;
  
      if (events[date]) {
        dayDiv.style.backgroundColor = "#ffe0b2";
        dayDiv.addEventListener("click", () => {
          eventDetails.textContent = events[date];
        });
      }
  
      calendar.appendChild(dayDiv);
    }
  });
  